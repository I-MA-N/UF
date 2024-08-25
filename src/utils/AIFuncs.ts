import { drawConnectors, drawLandmarks } from "@mediapipe/drawing_utils";
import { GpuBuffer, NormalizedLandmarkList, POSE_CONNECTIONS } from "@mediapipe/holistic";
import AIContextType from "../types/AIContextType";
import { Holistic, Results } from "@mediapipe/holistic";
import CoordinatesType from "../types/CoordinatesType";

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
      console.log("in results, landmarks:", results.poseLandmarks);
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

export const startCamera = async (
      videoRef: React.MutableRefObject<HTMLVideoElement | null>, 
      facingMode: string,
      setIsSupported: React.Dispatch<React.SetStateAction<boolean>>,
      setCoordinates: React.Dispatch<React.SetStateAction<CoordinatesType>>,
   ) => {
   try {
      const stream = await navigator.mediaDevices.getUserMedia({
         video: {
            facingMode: facingMode,
         },
         audio: false,
      })

      if (videoRef.current) videoRef.current.srcObject = stream;

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
   } catch (error) {
      console.log(error);
   }
}

export const canvasClick = (
   event: React.MouseEvent<HTMLCanvasElement, MouseEvent>,
   canvas: HTMLCanvasElement | null,
   selectedLandmark: number | null,
   setSelectedLandmark: React.Dispatch<React.SetStateAction<number | null>>,
   landmarks: NormalizedLandmarkList,
   setPhotoData: React.Dispatch<React.SetStateAction<Results | null>>
) => {
   if (canvas) {
      const offsetX = event.nativeEvent.offsetX;
      const offsetY = event.nativeEvent.offsetY;

      if (typeof selectedLandmark === "number") {
         setPhotoData(prevValue => {
            prevValue!.poseLandmarks[selectedLandmark].x = offsetX / canvas.clientWidth;
            prevValue!.poseLandmarks[selectedLandmark].y = offsetY / canvas.clientHeight;
            return prevValue;
         })
         setSelectedLandmark(null);
      } else {
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

}

export const canvasMouseMove = (selectedLandmark: number | null) => {
   if (typeof selectedLandmark === "number") {
      // try this one instead: document.body.style.cursor = "all-scroll";
      document.getElementsByTagName("body")[0].style.cursor = "all-scroll";
   } else {
      document.getElementsByTagName("body")[0].style.cursor = "auto";
   }
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
         drawConnectors(ctx, landmarks, POSE_CONNECTIONS, { color: '#FFFFFF', lineWidth: 1 });
         drawLandmarks(ctx, landmarks, { color: '#FFFFFF', radius: 3 });
      }
   }
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
         drawConnectors(ctx, landmarks, POSE_CONNECTIONS, { color: '#FFFFFF', lineWidth: 1 });
         drawLandmarks(ctx, filteredLandmarks, { color: '#FFFFFF', radius: 3 });
         drawLandmarks(ctx, [landmark], { color: '#000', radius: 5 });
         
         setLandmarkDetails({
            top: landmark.y * canvas.clientHeight - 14,
            left: landmark.x * canvas.clientWidth - 14,
         })
      }
   }
}