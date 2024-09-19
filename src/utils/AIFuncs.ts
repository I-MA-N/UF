import JSZip from "jszip";
import { DrawingUtils, NormalizedLandmark, PoseLandmarker } from "@mediapipe/tasks-vision";
import ExtractedZipType from "../types/ExtractedZipType";
import useModelStore from "../pages/dashboard/tests/store/modelStore";
import { staticEvaluationType } from "../pages/dashboard/tests/data/testsData/staticEvaluation";
import { dynamicEvaluationType } from "../pages/dashboard/tests/data/testsData/dynamicEvaluation";
import useAIStore from "../pages/dashboard/tests/store/AIStore";

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

export const drawLandmarks = (
   ctx: CanvasRenderingContext2D,
   width: number,
   height: number,
   landmarks: NormalizedLandmark[],
   connectors: { start: number, end: number }[]
) => {
   ctx.lineWidth = 1;
   ctx.strokeStyle = 'white';
   ctx.fillStyle = 'black';
   landmarks.forEach(landmark => {
      const x = landmark.x * width;
      const y = landmark.y * height;

      ctx.beginPath();
      ctx.arc(x, y, 20, 0, 2 * Math.PI);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(x, y, 2, 0, 2 * Math.PI);
      ctx.fill();
   });

   ctx.strokeStyle = 'black';
   connectors.forEach(connector => {
      const start = landmarks[connector.start];
      const end = landmarks[connector.end];

      const startX = start.x * width;
      const startY = start.y * height;
      const endX = end.x * width;
      const endY = end.y * height;

      ctx.beginPath();
      ctx.moveTo(startX, startY);
      ctx.lineTo(endX, endY);
      ctx.stroke();
   });
}

export const addExtraLandmarks = (
   landmarks: NormalizedLandmark[],
   drawPlubmLine: boolean
) => {
   landmarks[33] = {
      x: (landmarks[11].x + landmarks[12].x) / 2,
      y: landmarks[11].y - (30 * (landmarks[11].y - landmarks[7].y)) / 100,
      z: landmarks[29].z,
      visibility: landmarks[29].visibility,
   }

   if (drawPlubmLine) {
      const currentSection = useAIStore.getState().currentSection;

      // Direction of coordinates on side images have differences, so 'x' coordinate should be changed
      if (currentSection?.name.toLowerCase().includes("side")) {
         landmarks[34] = {
            x: landmarks[29].x,
            y: (landmarks[3].y + landmarks[6].y) / 2,
            z: landmarks[29].z,
            visibility: landmarks[29].visibility,
         }

         landmarks[35] = {
            x: landmarks[29].x,
            y: (landmarks[29].y + landmarks[30].y) / 2,
            z: landmarks[29].z,
            visibility: landmarks[29].visibility,
         }
      } else {
         landmarks[34] = {
            x: (landmarks[29].x + landmarks[30].x) / 2,
            y: (landmarks[3].y + landmarks[6].y) / 2,
            z: landmarks[29].z,
            visibility: landmarks[29].visibility,
         }

         landmarks[35] = {
            x: (landmarks[29].x + landmarks[30].x) / 2,
            y: (landmarks[29].y + landmarks[30].y) / 2,
            z: landmarks[29].z,
            visibility: landmarks[29].visibility,
         }
      }

   }
}

export const drawOnCanvas = (
   canvasRef: React.MutableRefObject<HTMLCanvasElement | null>,
   width: number,
   height: number,
   radius: number,
   image?: CanvasImageSource,
   landmarks?: NormalizedLandmark[],
   isSide?: boolean
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

         let isEven = true;
         if (landmarks[11].z < landmarks[12].z) isEven = false;

         let headLandmarks = [landmarks[7], landmarks[8]].filter((_landmark, index) => {
            if (isSide) {
               if (isEven) return index % 2 !== 0;
               return index % 2 === 0;
            }
            return true;
         });
         headLandmarks = headLandmarks.concat(landmarks[0]);
         const headConnectors = [{ start: 0, end: 1 }, { start: 0, end: 2 }, { start: 1, end: 2 }];

         drawingUtils.drawLandmarks(headLandmarks, { color: '#000000', radius });
         drawingUtils.drawConnectors(headLandmarks, headConnectors, { color: '#000000', lineWidth: radius / 2 });

         let bodyLandmarks = landmarks.slice(11, 17).filter((_landmark, index) => {
            if (isSide) {
               if (isEven) return index % 2 !== 0;
               return index % 2 === 0;
            }
            return true;
         });
         bodyLandmarks = [...bodyLandmarks, landmarks[33]];
         let bodyConnectors = [{ start: 0, end: 1 }, { start: 0, end: 2 }, { start: 2, end: 4 }, { start: 1, end: 3 }, { start: 3, end: 5 }, { start: 6, end: 0 }, { start: 6, end: 1 }]
         if (isSide) bodyConnectors = [{ start: 0, end: 1 }, { start: 1, end: 2 }, { start: 0, end: 3 }];
         
         drawingUtils.drawLandmarks(bodyLandmarks, { color: '#000000', radius });
         drawingUtils.drawConnectors(bodyLandmarks, bodyConnectors, { color: '#000000', lineWidth: radius / 2 });

         const footLandmarks = landmarks.slice(23, 33).filter((_landmark, index) => {
            if (isSide) {
               if (isEven) return index % 2 !== 0;
               return index % 2 === 0;
            }
            return true;
         });
         let footConnectors = [{ start: 0, end: 1 }, { start: 0, end: 2 }, { start: 2, end: 4 }, { start: 4, end: 6 }, { start: 6, end: 8 }, { start: 1, end: 3 }, { start: 3, end: 5 }, { start: 5, end: 7 }, { start: 7, end: 9 }]
         if (isSide) footConnectors = [{ start: 0, end: 1 }, { start: 1, end: 2 }, { start: 2, end: 3 }, { start: 3, end: 4 }];
         
         drawingUtils.drawLandmarks(footLandmarks, { color: '#000000', radius });
         drawingUtils.drawConnectors(footLandmarks, footConnectors, { color: '#000000', lineWidth: radius / 2 });

         if (landmarks[34] && landmarks[35]) {
            const plumbLineLandmarks = [landmarks[34], landmarks[35]];
            const plumbLineConnectors = [{ start: 0, end: 1 }];
            drawingUtils.drawLandmarks(plumbLineLandmarks, { color: '#000000', radius });
            drawingUtils.drawConnectors(plumbLineLandmarks, plumbLineConnectors, { color: '#000000', lineWidth: radius / 2 });
         }
      }

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
   
         const headLandmarks = [landmarks[0], landmarks[7], landmarks[8]]
         const headConnectors = [{ start: 0, end: 1 }, { start: 0, end: 2 }, { start: 1, end: 2 }];
   
         drawingUtils.drawLandmarks(headLandmarks, { color: '#000000', radius: 1.5 });
         drawingUtils.drawConnectors(headLandmarks, headConnectors, { color: '#000000', lineWidth: 0.8 });
   
         const bodyLandmarks = landmarks.slice(11, 17);
         const bodyConnectors = [{ start: 0, end: 1 }, { start: 0, end: 2 }, { start: 2, end: 4 }, { start: 1, end: 3 }, { start: 3, end: 5 }, { start: 6, end: 0 }, { start: 6, end: 1 }]
         
         drawingUtils.drawLandmarks(bodyLandmarks, { color: '#000000', radius: 1.5 });
         drawingUtils.drawConnectors(bodyLandmarks, bodyConnectors, { color: '#000000', lineWidth: 0.8 });
   
         const footLandmarks = landmarks.slice(23, 33);
         const footConnectors = [{ start: 0, end: 1 }, { start: 0, end: 2 }, { start: 2, end: 4 }, { start: 4, end: 6 }, { start: 6, end: 8 }, { start: 1, end: 3 }, { start: 3, end: 5 }, { start: 5, end: 7 }, { start: 7, end: 9 }]
         
         drawingUtils.drawLandmarks(footLandmarks, { color: '#000000', radius: 1.5 });
         drawingUtils.drawConnectors(footLandmarks, footConnectors, { color: '#000000', lineWidth: 0.8 });
      }

      ctx.restore();
   }
}

let deltaX = 0;
let deltaY = 0;
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
   if (ctx && currentSection && "videoFn" in currentSection.AI && landmarks?.length) {
      const videoStates = currentSection.AI.videoFn(landmarks);
      videoStates.forEach(({ landmarks, status }) => {
         let drawingUtils = new DrawingUtils(ctx);
         drawingUtils.drawLandmarks(landmarks, { color: status ? '#4CB648' : '#FF0000', radius: 1.5 });
         drawingUtils.drawConnectors(landmarks, PoseLandmarker.POSE_CONNECTIONS, { color: status ? '#4CB648' : '#FF0000', lineWidth: 1 });

         landmarksStatus.push(status);
      })
   }
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