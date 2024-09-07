import { useEffect, useMemo, useRef, useState } from "react";
import { cameraFuncs, drawOnVideo } from "../../../../../../../utils/AIFuncs";
import CameraModeBtn from "./camera/buttons/CameraModeBtn";
import CapturePhotoBtn from "./camera/buttons/CapturePhotoBtn";
import CloseBtn from "./camera/buttons/CloseBtn";
import useAIStore from "../../../../store/AIStore";
import { DrawingUtils, PoseLandmarker } from "@mediapipe/tasks-vision";

type CameraLandmarksProps = {
   model: PoseLandmarker,
}

let landmarksStatus: boolean[] = [];

function CameraLandmarks({ model }: CameraLandmarksProps) {
   const currentSection = useAIStore(state => state.currentSection);

   const [isCameraLoaded, setIsCameraLoaded] = useState(false);

   const videoRef = useRef<HTMLVideoElement | null>(null);
   const canvasRef = useRef<HTMLCanvasElement | null>(null);

   const { startCamera, stopCamera } = useMemo(() => (
      cameraFuncs(videoRef, "environment", setIsCameraLoaded)
   ), [videoRef, setIsCameraLoaded])

   useEffect(() => {
      startCamera(20);

      return () => {
         console.log("stop camera");
         stopCamera();
      }
   }, [startCamera, stopCamera])

   const proccessFrames = async (
      video: HTMLVideoElement,
      canvas: HTMLCanvasElement,
      ctx: CanvasRenderingContext2D,
      drawingUtils: DrawingUtils
   ) => {
      if (videoRef.current && currentSection && "videoFn" in currentSection.AI) {
         drawOnVideo(video, canvas, ctx, drawingUtils, model, currentSection.AI.videoFn, landmarksStatus)
      }

      if (videoRef.current) {
         requestAnimationFrame(() => {
            console.log("request frame");
            proccessFrames(video, canvas, ctx, drawingUtils)
         });
      }
   }

   return (
      <div className="flex flex-col items-center justify-center gap-7 min-h-dvh">
         <p className="text-center">{currentSection?.nameFA}</p>

         <div className="w-full min-h-80 flex items-center justify-center">
            <div className="relative">
               <video
                  ref={videoRef}
                  autoPlay
                  onLoadedData={() => {
                     const video = videoRef.current as HTMLVideoElement;
                     const canvas = canvasRef.current as HTMLCanvasElement;
                     const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
                     let drawingUtils = new DrawingUtils(ctx);
                     model.setOptions({
                        runningMode: "VIDEO"
                     })
                     proccessFrames(video, canvas, ctx, drawingUtils);
                  }}
               />
               {(videoRef.current && isCameraLoaded) &&
                  <canvas
                     ref={canvasRef}
                     className="absolute top-0 left-0"
                  />
               }
            </div>

         </div>

         <div className="w-full flex justify-center items-center gap-8">
            <CameraModeBtn
               isDisabled={true}
            />

            <CapturePhotoBtn
               isLoading={!isCameraLoaded}
               isDisabled={landmarksStatus.includes(false)}
               video={videoRef.current}
            />

            <CloseBtn
               stopCamera={stopCamera}
            />
         </div>
      </div>
   );
};

export default CameraLandmarks;