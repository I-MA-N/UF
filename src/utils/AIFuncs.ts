import JSZip from "jszip";
import { DrawingUtils, NormalizedLandmark, PoseLandmarker } from "@mediapipe/tasks-vision";
import usePhotoStore from "../pages/dashboard/tests/store/photoStore";
import ExtractedZipType from "../types/ExtractedZipType";
import useModelStore from "../pages/dashboard/tests/store/modelStore";
import { staticEvaluationType } from "../pages/dashboard/tests/data/testsData/staticEvaluation";
import { dynamicEvaluationType } from "../pages/dashboard/tests/data/testsData/dynamicEvaluation";

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
   mediaRecorderRef.current.start(1);
}

export const drawOnCanvas = (
   canvasRef: React.MutableRefObject<HTMLCanvasElement | null>,
   width: number,
   height: number,
   image?: CanvasImageSource,
   landmarks?: NormalizedLandmark[]
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
   
      if (landmarks) {
         let drawingUtils = new DrawingUtils(ctx);
         drawingUtils.drawLandmarks(landmarks, { color: '#FFFFFF', radius: 2 });
         drawingUtils.drawConnectors(landmarks, PoseLandmarker.POSE_CONNECTIONS, { color: '#FFFFFF', lineWidth: 1 });
      }
   
      ctx.restore();
   }
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
         drawingUtils.drawLandmarks(landmarks, { color: status ? '#4CB648' : '#FF0000', radius: 2 });
         drawingUtils.drawConnectors(landmarks, PoseLandmarker.POSE_CONNECTIONS, { color: status ? '#4CB648' : '#FF0000', lineWidth: 1 });

         landmarksStatus.push(status);
      })
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
      for (let i = 0; i < landmarks.length; i++) {
         const landmark = landmarks[i];
         const pixelX = Math.floor(landmark.x * canvas.clientWidth);
         const pixelY = Math.floor(landmark.y * canvas.clientHeight);

         const isBetweenX = offsetX > pixelX - 4 && offsetX < pixelX + 4;
         const isBetweenY = offsetY > pixelY - 4 && offsetY < pixelY + 4;
         if (isBetweenX && isBetweenY) setSelectedLandmark(i);
      }
   }
}

export const canvasMove = (
   landmarks: NormalizedLandmark[],
   selectedLandmark: number | null,
   canvas: HTMLCanvasElement | null,
   offsetX: number,
   offsetY: number
) => {
   const setLandmarks = usePhotoStore.getState().setLandmarks;
   const circleElem = document.getElementById("circle");

   if (typeof selectedLandmark === "number" && canvas && circleElem) {
      circleElem.style.left = `${offsetX - circleElem.clientWidth / 2}px`;
      circleElem.style.top = `${offsetY - circleElem.clientWidth / 2}px`;
      circleElem.style.display = "flex";

      landmarks[selectedLandmark].x = offsetX / canvas.clientWidth;
      landmarks[selectedLandmark].y = offsetY / canvas.clientHeight;
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