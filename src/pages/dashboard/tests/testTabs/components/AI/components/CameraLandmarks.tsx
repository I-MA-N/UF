import { useCallback, useRef, useState } from "react";
import CapturePhotoBtn from "./camera/buttons/CapturePhotoBtn";
import CloseBtn from "./camera/buttons/CloseBtn";
import useAIStore from "../../../../store/AIStore";
import { PoseLandmarker } from "@mediapipe/tasks-vision";
import Webcam from "react-webcam";
import usePhotoStore from "../../../../store/photoStore";
import { addExtraLandmarks, drawOnVideo, executeVideoFn } from "../../../../../../../utils/AIFuncs";
import HeightInputModal from "./camera/HeightInputModal";

type CameraLandmarksProps = {
   model: PoseLandmarker,
}

let landmarksStatus: boolean[] = [];

function CameraLandmarks({ model }: CameraLandmarksProps) {
   const { currentSection, showUserHeight } = useAIStore(state => ({ currentSection: state.currentSection, showUserHeight: state.showUserHeight }));
   const { setImage, setLandmarks, setVideoSize } = usePhotoStore(state => ({ setImage: state.setImage, setLandmarks: state.setLandmarks, setVideoSize: state.setVideoSize }));

   const [isWebcamLoaded, setIsWebcamLoaded] = useState(false);
   const [isMediaError, setIsMediaError] = useState(false);

   const webcamRef = useRef<Webcam | null>(null);
   const canvasRef = useRef<HTMLCanvasElement | null>(null);
   const isClickedRef = useRef(false);

   const proccessFrames = useCallback(() => {
      const video = webcamRef.current?.video;

      if (video) {
         let startTimeMs = performance.now();
         const result = model.detectForVideo(video, startTimeMs);
         const landmarks = result.landmarks[0];

         drawOnVideo(canvasRef, video, landmarks);

         executeVideoFn(canvasRef, currentSection, landmarks, landmarksStatus);

         if (isClickedRef.current) {
            const base64 = webcamRef.current?.getScreenshot();
            if (base64) {
               setImage(base64);
               if (landmarks?.length) addExtraLandmarks(landmarks);
               setLandmarks(landmarks);
               setVideoSize(video.clientWidth - 32, video.clientHeight - 16);
            }
         }

         requestAnimationFrame(proccessFrames);
      }
   }, [])

   return (
      <>
         <div className="flex flex-col items-center justify-center gap-7 min-h-dvh">
            <p className="text-center font-Estedad-Black lg:text-xl">{currentSection?.nameFA}</p>

            <div className="w-full min-h-80 flex items-center justify-center">
               <div className="relative">
                  <Webcam
                     ref={webcamRef}
                     videoConstraints={{
                        facingMode: "environment",
                        aspectRatio: 1600 / 1000,
                     }}
                     onLoadedData={() => {
                        proccessFrames();
                        setIsWebcamLoaded(true);
                     }}
                     onUserMediaError={() => {
                        setIsMediaError(true);
                     }}
                  />
                  <canvas
                     ref={canvasRef}
                     className="absolute top-0 left-0"
                  />

                  {isMediaError &&
                     <p className="w-full absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-center text-sm lg:text-base font-Estedad-Black text-red bg-white px-4 py-2 rounded-full">
                        دریافت دوربین با مشکل مواجه شد!
                        <br />
                        لطفا دسترسی دوربین مرورگر خود را چک کنید.
                     </p>
                  }
               </div>
            </div>

            <div className="w-full flex justify-center items-center gap-8">
               {/* <CameraModeBtn
                  isDisabled={isMediaError}
                  setIsWebcamLoaded={setIsWebcamLoaded}
                  setFacingMode={setFacingMode}
               /> */}
               <div className="size-11 lg:size-14"></div>

               <CapturePhotoBtn
                  isLoading={!isWebcamLoaded}
                  isDisabled={landmarksStatus.includes(false)}
                  isClickedRef={isClickedRef}
               />

               <CloseBtn />
            </div>
         </div>
         {
            showUserHeight &&
            <HeightInputModal />
         }
      </>
   );
};

export default CameraLandmarks;