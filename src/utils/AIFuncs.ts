import { FilesetResolver, PoseLandmarker } from "@mediapipe/tasks-vision";
import { drawConnectors, drawLandmarks } from "@mediapipe/drawing_utils";
import { GpuBuffer, NormalizedLandmarkList, POSE_CONNECTIONS } from "@mediapipe/holistic";
import AIContextType from "../types/AIContextType";
import { Holistic, Results } from "@mediapipe/holistic";
import CoordinatesType from "../types/CoordinatesType";
import VideoFnType from "../types/VideoFnType";
import JSZip from "jszip";

export const initHolistic = async (setAIData: React.Dispatch<React.SetStateAction<AIContextType | null>>) => {
   const holistic = new Holistic({
      locateFile: (file: string) => `https://cdn.jsdelivr.net/npm/@mediapipe/holistic/${file}`
   });

   holistic.setOptions({
      modelComplexity: 1,
      smoothLandmarks: true,
      enableSegmentation: true,
      smoothSegmentation: true,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5,
   });

   holistic.onResults((results) => {
      setAIData(prevValue => ({
         ...prevValue,
         results
      }))
   })

   setAIData(prevValue => ({
      ...prevValue,
      model: holistic
   }))

   // Just to download assets needed for landmarks sooner
   const imgElem = document.getElementById("front") as HTMLImageElement | null;
   if (imgElem) {
      await holistic.send({ image: imgElem });
      setAIData(prevValue => ({
         ...prevValue,
         results: undefined,
         modelDownlaoded: true
      }))
   }
}

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

export const drawOnVideo = (
   video: HTMLVideoElement | null,
   canvas: HTMLCanvasElement | null,
   results: Results,
   videoFn: VideoFnType,
   landmarksStatus: boolean[],
) => {
   const ctx = canvas?.getContext("2d");
   if (video && canvas && ctx && results) {
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

export const drawOnCanvas = (
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
   selectedLandmark: number | null,
   setPhotoData: React.Dispatch<React.SetStateAction<Results | null | undefined>>,
   canvas: HTMLCanvasElement | null,
   offsetX: number,
   offsetY: number
) => {
   const circleElem = document.getElementById("circle");

   if (typeof selectedLandmark === "number" && canvas && circleElem) {
      circleElem.style.left = `${offsetX - circleElem.clientWidth / 2}px`;
      circleElem.style.top = `${offsetY - circleElem.clientWidth / 2}px`;
      circleElem.style.display = "flex";

      setPhotoData(prevValue => {
         if (prevValue?.poseLandmarks && canvas) {
            prevValue.poseLandmarks[selectedLandmark].x = offsetX / canvas.clientWidth;
            prevValue.poseLandmarks[selectedLandmark].y = offsetY / canvas.clientHeight;
            drawOnCanvas(canvas, prevValue.image, prevValue.poseLandmarks);
         }
         return prevValue;
      })
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