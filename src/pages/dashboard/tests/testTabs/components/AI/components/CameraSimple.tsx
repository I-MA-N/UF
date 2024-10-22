import { useCallback, useMemo, useRef, useState } from "react";
import CoordinatesType from "../../../../../../../types/CoordinatesType";
import CloseBtn from "./camera/buttons/CloseBtn";
import CapturePhotoBtn from "./camera/buttons/CapturePhotoBtn";
import useAIStore from "../../../../store/AIStore";
import { PoseLandmarker } from "@mediapipe/tasks-vision";
import Webcam from "react-webcam";
import usePhotoStore from "../../../../store/photoStore";
import DeviceOrientation from "./camera/DeviceOrientation";
import { addExtraLandmarks, drawOnVideo } from "../../../../../../../utils/AIFuncs";
import HeightInputModal from "./camera/HeightInputModal";

type CameraSimpleProps = {
   model: PoseLandmarker
}

function CameraSimple({ model }: CameraSimpleProps) {
   const { currentSection, showUserHeight } = useAIStore(state => ({ currentSection: state.currentSection, showUserHeight: state.showUserHeight }));
   const { setImage, setLandmarks, setVideoSize } = usePhotoStore(state => (
      { setImage: state.setImage, setLandmarks: state.setLandmarks, setVideoSize: state.setVideoSize }
   ));

   const canvasRef = useRef<HTMLCanvasElement>(null);
   const webcamRef = useRef<Webcam | null>(null);
   const isClickedRef = useRef(false);

   const [isWebcamLoaded, setIsWebcamLoaded] = useState(false);
   const [isMediaError, setIsMediaError] = useState(false);

   const [isSupported, setIsSupported] = useState(true);
   const [coordinates, setCoordinates] = useState<CoordinatesType>(null);

   const proccessFrames = useCallback(() => {
      const video = webcamRef.current?.video;

      if (video) {
         let startTimeMs = performance.now();
         const result = model.detectForVideo(video, startTimeMs);
         const landmarks = result.landmarks[0];

         drawOnVideo(canvasRef, video, landmarks);

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

   const isDisabled = useMemo(() => {
      if (isSupported && coordinates) {
         const betaBool = coordinates.beta < 82 || coordinates.beta > 90;
         const gammaBool = coordinates.gamma < -3 || coordinates.gamma > 3;

         return betaBool || gammaBool;
      }

      return false;
   }, [isSupported, coordinates?.beta, coordinates?.gamma])

   return (
      <>
         <div className="flex flex-col items-center justify-center gap-7 min-h-dvh">
            <p className="text-center font-Estedad-Black lg:text-xl">{currentSection?.nameFA}</p>

            <div className="w-full min-h-80 flex items-center justify-center">
               <div className="relative">
                  <div className="relative">
                     <Webcam
                        ref={webcamRef}
                        videoConstraints={{
                           facingMode: { exact: "environment" },
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
                  </div>

                  <DeviceOrientation
                     isSupported={isSupported}
                     setIsSupported={setIsSupported}
                     coordinates={coordinates}
                     setCoordinates={setCoordinates}
                  />

                  {isMediaError &&
                     <p className="w-full absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-center text-sm lg:text-base font-Estedad-Black text-red bg-white px-4 py-2 rounded-full">
                        دریافت دوربین با مشکل مواجه شد!
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

               <CapturePhotoBtn
                  isLoading={!isWebcamLoaded}
                  isDisabled={isDisabled}
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

export default CameraSimple;
