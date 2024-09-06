import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { cameraFuncs, drawOnVideo } from "../../../../../../../utils/AIFuncs";
import EditCameraFirstLoad from "./EditElemFirstLoad";
import CameraModeBtn from "./camera/buttons/CameraModeBtn";
import CapturePhotoBtn from "./camera/buttons/CapturePhotoBtn";
import CloseBtn from "./camera/buttons/CloseBtn";
import useAIStore from "../../../../store/AIStore";
import { Holistic } from "@mediapipe/holistic";

type CameraElemLandmarksProps = {
   model: Holistic
}

let lastVideoTime = -1;

function CameraElemLandmarks({ model }: CameraElemLandmarksProps) {
   const currentSection = useAIStore(state => state.currentSection);

   const [showCanvas, setShowCanvas] = useState(false);
   const [isCameraLoaded, setIsCameraLoaded] = useState(false);
   const [landmarksStatus, setLandmarksStatus] = useState<boolean[]>([]);

   const videoRef = useRef<HTMLVideoElement | null>(null);
   const canvasRef = useRef<HTMLCanvasElement | null>(null);

   const { startCamera, stopCamera } = useMemo(() => (
      cameraFuncs(videoRef, "environment", setIsCameraLoaded)
   ), [videoRef, setIsCameraLoaded])

   useEffect(() => {
      if (!showCanvas) startCamera(20);

      return () => {
         stopCamera();
      }
   }, [startCamera, stopCamera, showCanvas])

   useEffect(() => {
      if (currentSection && "videoFn" in currentSection.AI) {
         model.onResults(results => {
            // @ts-ignore
            const status = drawOnVideo(videoRef.current, canvasRef.current, results, currentSection.AI.videoFn, landmarksStatus);
            setLandmarksStatus(status);
         })
      }
   }, [currentSection])

   const proccessFrames = useCallback(async () => {
      const video = videoRef.current;
      if (video && lastVideoTime !== video.currentTime) {
         model.send({ image: video });
      }
      if (videoRef.current) requestAnimationFrame(proccessFrames);
   }, [videoRef.current])

   return (
      <div className="w-full fixed top-0 left-0 z-30 bg-primary/60 px-4">
         {
            showCanvas ?
               <EditCameraFirstLoad model={model} setShowCanvas={setShowCanvas} />
               :
               <div className="flex flex-col items-center justify-center gap-7 min-h-screen">
                  <p className="text-center">{currentSection?.nameFA}</p>

                  <div className="w-full min-h-80 flex items-center justify-center">
                     <div className="relative">
                        <video
                           ref={videoRef}
                           autoPlay
                           onLoadedData={proccessFrames}
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
                        model={model}
                        setShowCanvas={setShowCanvas}
                     />

                     <CloseBtn
                        stopCamera={stopCamera}
                     />
                  </div>
               </div>
         }
      </div>
   );
};

export default CameraElemLandmarks;