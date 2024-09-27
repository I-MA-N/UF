import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import CoordinatesType from "../../../../../../../types/CoordinatesType";
import CloseBtn from "./camera/buttons/CloseBtn";
import CapturePhotoBtn from "./camera/buttons/CapturePhotoBtn";
import CameraModeBtn from "./camera/buttons/CameraModeBtn";
import useAIStore from "../../../../store/AIStore";
import { PoseLandmarker } from "@mediapipe/tasks-vision";
import Webcam from "react-webcam";
import usePhotoStore from "../../../../store/photoStore";
import DeviceOrientation from "./camera/DeviceOrientation";
import { addExtraLandmarks } from "../../../../../../../utils/AIFuncs";
import HeightInputModal from "./camera/HeightInputModal";

type CameraSimpleProps = {
   model: PoseLandmarker
}

function CameraSimple({ model }: CameraSimpleProps) {
   const { currentSection, showUserHeight } = useAIStore(state => ({ currentSection: state.currentSection, showUserHeight: state.showUserHeight }));
   const { setImage, setLandmarks, setVideoSize } = usePhotoStore(state => (
      { setImage: state.setImage, setLandmarks: state.setLandmarks, setVideoSize: state.setVideoSize }
   ));

   const webcamRef = useRef<Webcam | null>(null);
   const isClickedRef = useRef(false);

   const [facingMode, setFacingMode] = useState<"environment" | "user">("environment");
   const [isCameraLoaded, setIsCameraLoaded] = useState(false);
   const [isSupported, setIsSupported] = useState(true);
   const [coordinates, setCoordinates] = useState<CoordinatesType>(null);

   useEffect(() => {
      return () => {

      }
   }, [])

   const proccessFrames = useCallback(() => {
      if (!isCameraLoaded) setIsCameraLoaded(true);

      const video = webcamRef.current?.video;
      if (video) {
         let startTimeMs = performance.now();
         const result = model.detectForVideo(video, startTimeMs);
         const landmarks = result.landmarks[0];

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
                  <div className="absolute flex flex-col gap-1">
                     <span>{coordinates?.gamma.toFixed(2)}</span>
                     <span>{coordinates?.beta.toFixed(2)}</span>
                  </div>
                  <Webcam
                     ref={webcamRef}
                     videoConstraints={{
                        facingMode,
                        aspectRatio: 1600 / 1000,
                     }}
                     onLoadedData={proccessFrames}
                  />

                  <DeviceOrientation
                     isSupported={isSupported}
                     setIsSupported={setIsSupported}
                     coordinates={coordinates}
                     setCoordinates={setCoordinates}
                  />
               </div>
            </div>

            <div className="w-full flex justify-center items-center gap-8">
               <CameraModeBtn
                  isDisabled={!isCameraLoaded}
                  setFacingMode={setFacingMode}
               />

               <CapturePhotoBtn
                  isLoading={!isCameraLoaded}
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
