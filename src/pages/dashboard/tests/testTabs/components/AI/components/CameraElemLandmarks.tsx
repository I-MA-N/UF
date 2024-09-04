import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useAIContext } from "../../../../context/AIContextProvider";
import { cameraFuncs, drawOnVideo } from "../../../../../../../utils/AIFuncs";
import EditCameraFirstLoad from "./EditElemFirstLoad";
import Loading from "../../../../../../common/Loading";
import CameraModeBtn from "./camera/buttons/CameraModeBtn";
import CapturePhotoBtn from "./camera/buttons/CapturePhotoBtn";
import CloseBtn from "./camera/buttons/CloseBtn";

let lastVideoTime = -1;
let landmarksStatus = [false];

function CameraElemLandmarks() {
   const [AIData, setAIData] = useAIContext();
   const [showCanvas, setShowCanvas] = useState(false);

   const videoRef = useRef<HTMLVideoElement | null>(null);
   const canvasRef = useRef<HTMLCanvasElement | null>(null);

   const { startCamera, stopCamera } = useMemo(() => (
      cameraFuncs(videoRef, "environment")
   ), [videoRef])

   useEffect(() => {
      if (!showCanvas && AIData?.modelDownlaoded) startCamera(20);

      return () => {
         stopCamera();
      }
   }, [startCamera, stopCamera, showCanvas, AIData?.modelDownlaoded])

   useEffect(() => {
      if (AIData?.results && AIData.currentSection?.AI && "videoFn" in AIData.currentSection?.AI) {
         landmarksStatus = drawOnVideo(videoRef.current, canvasRef.current, AIData.results, AIData.currentSection.AI.videoFn, landmarksStatus);
      }
   }, [AIData?.results])

   const proccessFrames = useCallback(async () => {
      const video = videoRef.current;
      if (video) {
         if (lastVideoTime !== video.currentTime) {
            AIData?.model?.send({ image: video });
         }
      }
      if (videoRef.current) requestAnimationFrame(proccessFrames);
   }, [videoRef.current])

   return (
      <div className="w-full fixed top-0 left-0 z-30 bg-primary/60 px-4">
         {
            showCanvas ?
               <EditCameraFirstLoad setShowCanvas={setShowCanvas} />
               :
               <div className="flex flex-col items-center justify-center gap-7 min-h-screen">
                  <p className="text-center">{AIData?.currentSection?.nameFA}</p>

                  <div className="w-full min-h-80 flex items-center justify-center">
                     <div className="relative">
                        {
                           AIData?.modelDownlaoded ?
                              <>
                                 <video
                                    ref={videoRef}
                                    autoPlay
                                    onLoadedData={proccessFrames}
                                 />
                                 {videoRef.current &&
                                    <canvas
                                       ref={canvasRef}
                                       className="absolute top-0 left-0"
                                       width={videoRef.current.clientWidth}
                                       height={videoRef.current.clientHeight}
                                    />
                                 }
                              </>
                              : <Loading fullHeight={false} />
                        }
                     </div>

                  </div>

                  <div className="w-full flex justify-center items-center gap-8">
                     <CameraModeBtn
                        isDisabled={true}
                     />

                     <CapturePhotoBtn
                        isLoading={!AIData?.modelDownlaoded}
                        isDisabled={landmarksStatus.includes(false)}
                        clickHandler={async () => {
                           const video = videoRef.current;
                           if (video) {
                              await AIData?.model?.send({ image: video });
                              setShowCanvas(true);
                              const width = video.clientWidth;
                              const height = video.clientHeight;
                              setAIData(prevValue => ({
                                 ...prevValue,
                                 videoSize: {
                                    width,
                                    height,
                                 }
                              }))
                           }
                        }}
                     />

                     <CloseBtn
                        stopCamera={stopCamera}
                        setAIData={setAIData}
                     />
                  </div>
               </div>
         }
      </div>
   );
};

export default CameraElemLandmarks;