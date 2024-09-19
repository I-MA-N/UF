import { useCallback, useMemo, useRef, useState } from "react";
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
import HeightInput from "./camera/HeightInput";

type CameraSimpleProps = {
   model: PoseLandmarker
}

function CameraSimple({ model }: CameraSimpleProps) {
   const currentSection = useAIStore(state => state.currentSection);
   const isSide = useMemo(() => currentSection?.name === "side", [currentSection?.name]);
   const { setImage, setLandmarks, setVideoSize, userHeight } = usePhotoStore(state => ({ setImage: state.setImage, setLandmarks: state.setLandmarks, setVideoSize: state.setVideoSize, userHeight: state.userHeight }));

   const webcamRef = useRef<Webcam | null>(null);
   const isClickedRef = useRef(false);

   const [facingMode, setFacingMode] = useState<"environment" | "user">("environment");
   const [isCameraLoaded, setIsCameraLoaded] = useState(false);
   const [isSupported, setIsSupported] = useState(true);
   const [coordinates, setCoordinates] = useState<CoordinatesType>(null);

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
               addExtraLandmarks(landmarks, true);
               setLandmarks(landmarks);
               setVideoSize(video.clientWidth, video.clientHeight);
            }
         }

         requestAnimationFrame(proccessFrames);
      }
   }, [])

   const isDisabled = useMemo(() => {
      if (isSide) {
         if (typeof userHeight !== "number" || userHeight <= 0) return true;
      }

      if (isSupported && coordinates) {
         const betaBool = coordinates.beta < 87 || coordinates.beta > 93;
         const gammaBool = coordinates.gamma < -3 || coordinates?.gamma > 3;

         return betaBool || gammaBool;
      }

      return false;
   }, [isSide, userHeight, isSupported, coordinates?.beta, coordinates?.gamma])

   return (
      <div className="flex flex-col items-center justify-center gap-7 min-h-dvh">
         <div className="relative">
            {
               isSide &&
               <HeightInput />
            }
            <p className="text-center font-Estedad-Black lg:text-xl">{currentSection?.nameFA}</p>
         </div>

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
   );
};

export default CameraSimple;