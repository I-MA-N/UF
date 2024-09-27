import JSZip from "jszip";
import { DrawingUtils, NormalizedLandmark, PoseLandmarker } from "@mediapipe/tasks-vision";
import ExtractedZipType from "../types/ExtractedZipType";
import useModelStore from "../pages/dashboard/tests/store/modelStore";
import { staticEvaluationType } from "../pages/dashboard/tests/data/testsData/staticEvaluation";
import { dynamicEvaluationType } from "../pages/dashboard/tests/data/testsData/dynamicEvaluation";
import useAIStore from "../pages/dashboard/tests/store/AIStore";
import usePhotoStore from "../pages/dashboard/tests/store/photoStore";

export const initMediaRecorder = (
   mediaRecorderRef: React.MutableRefObject<MediaRecorder | null>,
   stream: MediaStream,
   handleDataAvailable: () => void
) => {
   const model = useModelStore.getState().model;
   mediaRecorderRef.current = new MediaRecorder(stream, {
      mimeType: "video/webm"
   });
   model!.setOptions({
      runningMode: "VIDEO"
   });
   mediaRecorderRef.current.addEventListener("dataavailable", handleDataAvailable);
   mediaRecorderRef.current.start(5);
}

export const addExtraLandmarks = (
   landmarks: NormalizedLandmark[],
) => {
   landmarks[33] = {
      x: (landmarks[11].x + landmarks[12].x) / 2,
      y: landmarks[11].y - (30 * (landmarks[11].y - landmarks[7].y)) / 100,
      z: landmarks[29].z,
      visibility: landmarks[29].visibility,
   }
   
   // Direction of coordinates on side images have differences, so 'x' coordinate should be changed
   const currentSection = useAIStore.getState().currentSection;
   const isFromSide = currentSection?.name.toLowerCase().includes("side");

   let isEven = true;
   if (landmarks[11].z < landmarks[12].z) isEven = false;

   if (isFromSide) {
      landmarks[34] = {
         x: (isEven ? landmarks[12].x : landmarks[11].x) - (isEven ? 0.05 : -0.05),
         y: (landmarks[11].y + landmarks[23].y) / 2,
         z: isEven ? landmarks[28].z : landmarks[29].z,
         visibility: isEven ? landmarks[12].visibility : landmarks[11].visibility,
      }
   } else {
      landmarks[34] = {
         x: (landmarks[11].x + landmarks[12].x) / 2,
         y: (landmarks[11].y + landmarks[23].y) / 2,
         z: landmarks[29].z,
         visibility: landmarks[11].visibility,
      }
   }

   const isSide = currentSection?.name === "side";
   if (isSide) {
      landmarks[35] = {
         x: isEven ? landmarks[28].x : landmarks[27].x,
         y: (landmarks[3].y + landmarks[6].y) / 2,
         z: isEven ? landmarks[28].z : landmarks[27].z,
         visibility: isEven ? landmarks[28].visibility : landmarks[27].visibility,
      }

      landmarks[36] = {
         x: isEven ? landmarks[28].x : landmarks[27].x,
         y: isEven ? landmarks[30].y : landmarks[29].y,
         z: isEven ? landmarks[28].z : landmarks[27].z,
         visibility: isEven ? landmarks[28].visibility : landmarks[27].visibility,
      }
      // if (isSide) {
      // } else {
      //    landmarks[35] = {
      //       x: (landmarks[29].x + landmarks[30].x) / 2,
      //       y: (landmarks[3].y + landmarks[6].y) / 2,
      //       z: landmarks[29].z,
      //       visibility: landmarks[29].visibility,
      //    }

      //    landmarks[36] = {
      //       x: (landmarks[29].x + landmarks[30].x) / 2,
      //       y: (landmarks[29].y + landmarks[30].y) / 2,
      //       z: landmarks[29].z,
      //       visibility: landmarks[29].visibility,
      //    }
      // }
   }
}

export const drawOnCanvas = (
   canvasRef: React.MutableRefObject<HTMLCanvasElement | null>,
   width: number,
   height: number,
   radius: number,
   palette: string[],
   image?: CanvasImageSource,
   landmarks?: NormalizedLandmark[],
   isSide?: boolean,
) => {
   const canvas = canvasRef.current;
   const ctx = canvas?.getContext("2d");

   if (canvas && ctx) {
      ctx.save();

      canvas.width = width;
      canvas.height = height;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      if (image) {
         ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
      }

      if (landmarks?.length) {
         let drawingUtils = new DrawingUtils(ctx);

         let newLandmarks: NormalizedLandmark[] = [];
         let newConnectors: { start: number, end: number }[] = [];

         if (isSide) {
            const deletedLandmarks = getDeletedLandmarks(landmarks, isSide);

            newLandmarks = landmarks.filter((_landmark, index) => (
               !deletedLandmarks.includes(index)
            )).concat([landmarks[33], landmarks[34]]);
            newConnectors = [{ start: 0, end: 1 }, { start: 1, end: 10 }, { start: 10, end: 2 }, { start: 2, end: 3 }, { start: 3, end: 4 }, { start: 2, end: 11 }, { start: 11, end: 5 }, { start: 5, end: 6 }, { start: 6, end: 7 }, { start: 7, end: 8 }, { start: 8, end: 9 }];
         } else {
            newLandmarks = landmarks;
            const extraConnectors = [{ start: 33, end: 11 }, { start: 33, end: 12 }, { start: 34, end: 11 }, { start: 34, end: 12 }, { start: 34, end: 23 }, { start: 34, end: 24 }];
            newConnectors = PoseLandmarker.POSE_CONNECTIONS.concat(extraConnectors);
         }

         drawingUtils.drawLandmarks(newLandmarks, { color: palette[0], radius });
         drawingUtils.drawConnectors(newLandmarks, newConnectors, { color: palette[1], lineWidth: radius / 2 });

         if (landmarks[35] && landmarks[36]) {
            const plumbLineLandmarks = [landmarks[35], landmarks[36]];
            const plumbLineConnectors = [{ start: 0, end: 1 }];
            drawingUtils.drawLandmarks(plumbLineLandmarks, { color: palette[0], radius });
            drawingUtils.drawConnectors(plumbLineLandmarks, plumbLineConnectors, { color: palette[1], lineWidth: radius / 2 });
         }
      }

      ctx.restore();
   }
}

export const writeLandmarkIndexes = (
   landmarks: NormalizedLandmark[],
   deletedLandmarks: number[],
   ctx: CanvasRenderingContext2D | null | undefined,
   width: number,
   height: number,
   textColor: string
) => {
   if (ctx) {
      ctx.save();

      ctx.font = "12px 'Estedad-Regular'";
      if (width > 400) ctx.font = "14px 'Estedad-Regular'";
      ctx.fillStyle = textColor;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      
      landmarks.forEach((landmark, index) => {
         if (!deletedLandmarks.includes(index)) {
            const pixelX = landmark.x * width;
            const pixelY = landmark.y * height;
            ctx.fillText(index.toString(), pixelX, pixelY);
         }
      })

      ctx.restore();
   }
}

export const drawOnVideo = (
   canvasRef: React.MutableRefObject<HTMLCanvasElement | null>,
   video: HTMLVideoElement,
   landmarks: NormalizedLandmark[]
) => {
   const canvas = canvasRef.current;
   const ctx = canvas?.getContext("2d");

   if (canvas && ctx) {
      ctx.save();

      canvas.width = video.clientWidth;
      canvas.height = video.clientHeight;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

      if (landmarks?.length) {
         let drawingUtils = new DrawingUtils(ctx);

         drawingUtils.drawLandmarks(landmarks, { color: '#fff', radius: 1.5 });
         drawingUtils.drawConnectors(landmarks, PoseLandmarker.POSE_CONNECTIONS, { color: '#fff', lineWidth: 0.8 });
      }

      ctx.restore();
   }
}

let deltaX = 0;
let deltaY = 0;
export const circleDown = (
   pageX: number,
   pageY: number,
   circle: HTMLDivElement | null
) => {
   const setIsMovingLandmark = usePhotoStore.getState().setIsMovingLandmark;

   if (circle) {
      setIsMovingLandmark(true);
      const rect = circle.getBoundingClientRect();
      const offsetX = pageX - rect.left;
      const offsetY = pageY - rect.top;
      deltaX = offsetX - (rect.width / 2);
      deltaY = offsetY - (rect.height / 2);
   }
}

export const circleMove = (
   circle: HTMLDivElement | null,
   pageX: number,
   pageY: number,
   canvas: HTMLCanvasElement,
   landmarks: NormalizedLandmark[],
   setLandmarks: (landmarks: NormalizedLandmark[]) => void,
   selectedLandmark: number,
) => {
   const isMovingLandmark = usePhotoStore.getState().isMovingLandmark;

   if (isMovingLandmark && circle) {
      const rect = canvas.getBoundingClientRect();
      pageX = pageX - rect.left;
      pageY = pageY - rect.top;
      
      const isOutOfCanvasX = pageX - deltaX >= canvas.clientWidth || pageX - deltaX <= 0;
      const isOutOfCanvasY = pageY - deltaY >= canvas.clientHeight || pageY - deltaY <= 0;
      
      if (!isOutOfCanvasX && !isOutOfCanvasY) {
         const circleRect = circle.getBoundingClientRect();
         circle.style.left = `${pageX - deltaX - (circleRect.width / 2)}px`;
         circle.style.top = `${pageY - deltaY - (circleRect.height / 2)}px`;
   
         landmarks[selectedLandmark].x = (pageX - deltaX) / canvas.clientWidth;
         landmarks[selectedLandmark].y = (pageY - deltaY) / canvas.clientHeight;
   
         setLandmarks(landmarks);
      }

   }
}

export const canvasDown = (
   landmarks: NormalizedLandmark[],
   setSelectedLandmark: React.Dispatch<React.SetStateAction<number | null>>,
   canvas: HTMLCanvasElement | null,
   offsetX: number,
   offsetY: number
) => {
   if (canvas) {
      const currentSection = useAIStore.getState().currentSection;
      const isSide = currentSection?.name.toLowerCase().includes("side");

      let isEven = true;
      if (landmarks[11].z < landmarks[12].z) isEven = false;

      let deletedLandmarks = [1, 2, 3, 4, 5, 6, 9, 10];
      if (isSide) {
         const filteredLandmarks: number[] = [];
         landmarks.forEach((_value, index) => {
            if (isEven && index % 2 !== 0) {
               filteredLandmarks.push(index);
            }

            if (!isEven && index % 2 === 0) {
               filteredLandmarks.push(index);
            }
         });
         deletedLandmarks = deletedLandmarks.concat(filteredLandmarks).filter(value => value !== 0 && value !== 33 && value !== 34 && value !== 35);
      }

      for (let i = 0; i < landmarks.length; i++) {
         const landmark = landmarks[i];
         const pixelX = Math.floor(landmark.x * canvas.clientWidth);
         const pixelY = Math.floor(landmark.y * canvas.clientHeight);

         const isBetweenX = offsetX > pixelX - 8 && offsetX < pixelX + 8;
         const isBetweenY = offsetY > pixelY - 8 && offsetY < pixelY + 8;

         if (isBetweenX && isBetweenY && !deletedLandmarks.includes(i)) {
            deltaX = offsetX - pixelX;
            deltaY = offsetY - pixelY;
            setSelectedLandmark(i);
            break;
         };
      }
   }
}

export const canvasMove = (
   landmarks: NormalizedLandmark[],
   setLandmarks: (landmarks: NormalizedLandmark[]) => void,
   selectedLandmark: number | null,
   canvas: HTMLCanvasElement | null,
   offsetX: number,
   offsetY: number
) => {
   const circleElem = document.getElementById("circle");

   if (typeof selectedLandmark === "number" && canvas && circleElem) {
      circleElem.style.left = `${offsetX - circleElem.clientWidth / 2}px`;
      circleElem.style.top = `${offsetY - circleElem.clientWidth / 2}px`;
      circleElem.style.display = "flex";

      landmarks[selectedLandmark].x = (offsetX - deltaX) / canvas.clientWidth;
      landmarks[selectedLandmark].y = (offsetY - deltaY) / canvas.clientHeight;

      setLandmarks(landmarks);
   }
}

export const canvasUp = (
   setSelectedLandmark: React.Dispatch<React.SetStateAction<number | null>>,
) => {
   setSelectedLandmark(null);
   const circleElem = document.getElementById("circle");
   if (circleElem) circleElem.style.display = "none";
}

export const executeVideoFn = (
   canvasRef: React.MutableRefObject<HTMLCanvasElement | null>,
   currentSection: staticEvaluationType[0] | dynamicEvaluationType[0] | undefined,
   landmarks: NormalizedLandmark[],
   landmarksStatus: boolean[]
) => {
   const ctx = canvasRef.current?.getContext("2d");
   if (ctx && currentSection && "videoFn" in currentSection && landmarks?.length) {
      const videoStates = currentSection.videoFn(landmarks);
      videoStates.forEach(({ landmarks, status }) => {
         let drawingUtils = new DrawingUtils(ctx);
         drawingUtils.drawLandmarks(landmarks, { color: status ? '#4CB648' : '#FF0000', radius: 1.5 });
         drawingUtils.drawConnectors(landmarks, PoseLandmarker.POSE_CONNECTIONS, { color: status ? '#4CB648' : '#FF0000', lineWidth: 1 });

         landmarksStatus.push(status);
      })
   }
}

export const getDeletedLandmarks = (
   landmarks: NormalizedLandmark[],
   isSide: boolean
) => {
   if (landmarks?.length) {
      let isEven = true;
      if (landmarks[11].z < landmarks[12].z) isEven = false;

      let deletedLandmarks = [1, 2, 3, 4, 5, 6, 9, 10, 17, 18, 19, 20, 21, 22];
      if (isSide) {
         const filteredLandmarks: number[] = [];
         landmarks.forEach((_value, index) => {
            if (isEven && index % 2 !== 0) {
               filteredLandmarks.push(index);
            }

            if (!isEven && index % 2 === 0) {
               filteredLandmarks.push(index);
            }
         });
         deletedLandmarks = deletedLandmarks.concat(filteredLandmarks).filter(value => value !== 0 && value !== 33 && value !== 34 && value !== 35 && value !== 36);
      }

      return deletedLandmarks;
   }

   return [];
}

export const extractZip = async (fileContent: string) => {
   const zip = new JSZip();
   await zip.loadAsync(fileContent, { base64: true });

   const image = zip.file("image.jpeg");
   const landmarksJson = zip.file("landmarks.json");
   const imageSizeJson = zip.file("imageSize.json");

   if (image && landmarksJson && imageSizeJson) {
      const base64 = await image.async("string");

      const imageSizeString = await imageSizeJson.async("string");
      const imageSize: { width: number, height: number } = JSON.parse(imageSizeString);

      const landmarksString = await landmarksJson.async("string");
      const landmarks: NormalizedLandmark[] = JSON.parse(landmarksString);

      return {
         image: base64,
         imageSize,
         landmarks
      } as ExtractedZipType
   }

   return null;
}