import { DrawingUtils, FilesetResolver, NormalizedLandmark, PoseLandmarker } from "@mediapipe/tasks-vision";
import { drawConnectors, drawLandmarks } from "@mediapipe/drawing_utils";
import { GpuBuffer, NormalizedLandmarkList, POSE_CONNECTIONS } from "@mediapipe/holistic";
import { Results } from "@mediapipe/holistic";
import CoordinatesType from "../types/CoordinatesType";
import VideoFnType from "../types/VideoFnType";
import JSZip from "jszip";
import usePhotoStore from "../pages/dashboard/tests/store/photoStore";

export const initPoseLandmarker = async () => {
   if (!window.model.poseLandmarker) {
      const vision = await FilesetResolver.forVisionTasks(
         "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@0.10.0/wasm"
      );

      window.model.runningMode = "VIDEO";
      window.model.poseLandmarker = await PoseLandmarker.createFromOptions(vision, {
         baseOptions: {
            modelAssetPath: `/pose_landmarker_lite.task`,
            delegate: "GPU"
         },
         runningMode: window.model.runningMode,
         numPoses: 2
      });
   }
}

export const cameraFuncs = (
   videoRef: React.MutableRefObject<HTMLVideoElement | null>,
   facingMode: string,
   setIsCameraLoaded?: React.Dispatch<React.SetStateAction<boolean>>,
   setIsSupported?: React.Dispatch<React.SetStateAction<boolean>>,
   setCoordinates?: React.Dispatch<React.SetStateAction<CoordinatesType>>,
) => {
   let stream: MediaStream | null = null;

   const startCamera = async (frameRate?: number) => {
      try {
         stream = await navigator.mediaDevices.getUserMedia({
            video: {
               facingMode: facingMode,
               aspectRatio: 1600 / 1000,
               frameRate: {
                  max: frameRate
               }
            },
            audio: false,
         })

         if (videoRef.current) videoRef.current.srcObject = stream;

         if (setIsSupported && setCoordinates) {
            if (window.DeviceOrientationEvent) {
               window.addEventListener("deviceorientation", (e) => {
                  const alpha = e.alpha;
                  const gamma = e.gamma;
                  const beta = e.beta;
                  if (typeof alpha === "number" && typeof gamma === "number" && typeof beta === "number") {
                     setCoordinates({
                        alpha,
                        beta,
                        gamma
                     })
                  } else {
                     setIsSupported(false);
                  }
               })
            } else {
               setIsSupported(false);
            }
         }

         if (setIsCameraLoaded) setIsCameraLoaded(true);
      } catch (error) {
         console.log(error);
      }
   }

   const stopCamera = async () => {
      if (stream) {
         stream.getTracks().forEach(track => {
            track.stop();
         });
         stream = null;
         if (setIsCameraLoaded) setIsCameraLoaded(false);
      }
   }

   return { startCamera, stopCamera };
}

export const drawOnVide = (
   video: HTMLVideoElement | null,
   canvas: HTMLCanvasElement | null,
   results: Results,
   videoFn: VideoFnType,
   landmarksStatus: boolean[],
) => {
   const ctx = canvas?.getContext("2d");
   if (video && canvas && ctx && results) {
      canvas.width = video.clientWidth;
      canvas.height = video.clientHeight;
      ctx.drawImage(results.image, 0, 0, video.clientWidth, video.clientHeight);

      if (results.poseLandmarks?.length) {
         drawConnectors(ctx, results.poseLandmarks, POSE_CONNECTIONS, { color: '#FCC72C', lineWidth: 1 });
         drawLandmarks(ctx, results.poseLandmarks, { color: '#FF0000', radius: 2 });

         landmarksStatus = [];
         const videoStates = videoFn(results.poseLandmarks);
         videoStates?.forEach(({ landmarks, status }) => {
            drawConnectors(ctx, landmarks, POSE_CONNECTIONS, { color: status ? '#4CB648' : '#FF8225', lineWidth: 1.5 });
            drawLandmarks(ctx, landmarks, { color: status ? '#4CB648' : '#FF8225', radius: 2.5 });
            landmarksStatus.push(status);
         })
      }
   }
   return landmarksStatus;
}

let lastVideoTime = -1;
export const drawOnVideo = (
   video: HTMLVideoElement,
   canvas: HTMLCanvasElement,
   ctx: CanvasRenderingContext2D,
   drawingUtils: DrawingUtils,
   model: PoseLandmarker,
   videoFn: VideoFnType,
   landmarksStatus: boolean[],
) => {
   let startTimeMs = performance.now();
   if (lastVideoTime !== video.currentTime){
      lastVideoTime = video.currentTime;
      const result = model.detectForVideo(video, startTimeMs);
      const landmarks = result.landmarks[0];
   
      canvas.width = video.clientWidth;
      canvas.height = video.clientHeight;
      ctx.save();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
   
      drawingUtils.drawLandmarks(landmarks, { color: '#FF0000', radius: 2 });
      drawingUtils.drawConnectors(landmarks, PoseLandmarker.POSE_CONNECTIONS, { color: '#FCC72C', lineWidth: 1 });
   
      if (landmarks?.length) {
         const videoStates = videoFn(landmarks);
         videoStates.forEach(({ landmarks, status }) => {
            drawingUtils.drawLandmarks(landmarks, { color: status ? '#4CB648' : '#FF8225', radius: 2.5 });
            drawingUtils.drawConnectors(landmarks, PoseLandmarker.POSE_CONNECTIONS, { color: status ? '#4CB648' : '#FF8225', lineWidth: 1.5 });
   
            landmarksStatus.push(status);
         })
      }
   
      ctx.restore();
   }
}

export const drawOnCanva = (
   canvas: HTMLCanvasElement | null,
   image: GpuBuffer | null,
   landmarks: NormalizedLandmarkList,
) => {
   const ctx = canvas?.getContext("2d");

   if (canvas && ctx) {
      if (image) {
         ctx.clearRect(0, 0, canvas.width, canvas.height);
         ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
      }
      if (landmarks?.length) {
         drawConnectors(ctx, landmarks, POSE_CONNECTIONS, { color: '#FCC72C', lineWidth: 1 });
         drawLandmarks(ctx, landmarks, { color: '#FF0000', radius: 2 });
      }
   }
}

export const drawOnCanvas = (
   canvas: HTMLCanvasElement | null,
   image: HTMLCanvasElement | HTMLImageElement,
   width: number,
   height: number,
   landmarks: NormalizedLandmark[],
) => {
   const ctx = canvas?.getContext("2d");
   
   if (canvas && ctx) {
      ctx.save();
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      canvas.width = width;
      canvas.height = height;
      ctx.drawImage(image, 0, 0, width, height);

      let drawingUtils = new DrawingUtils(ctx);
      drawingUtils.drawLandmarks(landmarks, { color: '#FF0000', radius: 2 });
      drawingUtils.drawConnectors(landmarks, PoseLandmarker.POSE_CONNECTIONS, { color: '#FCC72C', lineWidth: 1 });

      ctx.restore();
   }

}

export const canvasDown = (
   landmarks: NormalizedLandmarkList,
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
   const setPhoto = usePhotoStore.getState().setPhoto;
   const image = usePhotoStore.getState().photo?.image;
   const circleElem = document.getElementById("circle");

   if (typeof selectedLandmark === "number" && canvas && circleElem && image) {
      circleElem.style.left = `${offsetX - circleElem.clientWidth / 2}px`;
      circleElem.style.top = `${offsetY - circleElem.clientWidth / 2}px`;
      circleElem.style.display = "flex";

      landmarks[selectedLandmark].x = offsetX / canvas.clientWidth;
      landmarks[selectedLandmark].y = offsetY / canvas.clientHeight;
      setPhoto(image, landmarks);
      // setPhotoData(prevValue => {
      //    if (prevValue?.poseLandmarks && canvas) {
      //       prevValue.poseLandmarks[selectedLandmark].x = offsetX / canvas.clientWidth;
      //       prevValue.poseLandmarks[selectedLandmark].y = offsetY / canvas.clientHeight;
      //       drawOnCanvas(canvas, prevValue.image, prevValue.poseLandmarks);
      //    }
      //    return prevValue;
      // })
   }
}

export const canvasUp = (
   setSelectedLandmark: React.Dispatch<React.SetStateAction<number | null>>,
) => {
   setSelectedLandmark(null);
   const circleElem = document.getElementById("circle");
   if (circleElem) circleElem.style.display = "none";
}

export const highlightLandmark = (
   canvas: HTMLCanvasElement | null,
   selectedLandmark: number,
   landmarks: NormalizedLandmarkList,
   setLandmarkDetails: React.Dispatch<React.SetStateAction<{ top: number, left: number } | null>>
) => {
   const ctx = canvas?.getContext("2d");
   const landmark = landmarks[selectedLandmark];
   const filteredLandmarks = landmarks.filter((_value, index) => index !== selectedLandmark);

   if (canvas && ctx) {
      if (landmarks.length && filteredLandmarks.length && landmark) {
         drawConnectors(ctx, filteredLandmarks, POSE_CONNECTIONS, { color: '#FFFFFF', lineWidth: 0 });
         drawLandmarks(ctx, filteredLandmarks, { color: '#FF0000', radius: 0 });

         setLandmarkDetails({
            top: landmark.y * canvas.clientHeight - 12,
            left: landmark.x * canvas.clientWidth - 12,
         })
      }
   }
}

export const extractZip = async (
   fileContent: string,
   canvas: HTMLCanvasElement
) => {
   const zip = new JSZip();
   await zip.loadAsync(fileContent, { base64: true });
   const blob = await zip.file("image.jpeg")?.async("blob");
   const json = await zip.file("landmarks.json")?.async("string");

   if (blob && canvas) {
      const imageBitmap = await createImageBitmap(blob);
      if (json) {
         const landmarks: NormalizedLandmarkList = JSON.parse(json);
         drawOnCanvas(canvas, imageBitmap, landmarks);
      } else {
         drawOnCanvas(canvas, imageBitmap, []);
      }
   }
}