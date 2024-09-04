import { useEffect, useMemo, useRef, useState } from "react";
import { cameraFuncs } from "../../../../../../../utils/AIFuncs";
import EditElemFirstLoad from "./EditElemFirstLoad";
import { useAIContext } from "../../../../context/AIContextProvider";
import CoordinatesType from "../../../../../../../types/CoordinatesType";
import AimContainer from "./camera/AimContainer";
import BetaLine from "./camera/BetaLine";
import CloseBtn from "./camera/buttons/CloseBtn";
import CapturePhotoBtn from "./camera/buttons/CapturePhotoBtn";
import CameraModeBtn from "./camera/buttons/CameraModeBtn";

function CameraElemSimple() {
   const [AIData, setAIData] = useAIContext();
   const [showCanvas, setShowCanvas] = useState(false);

   const videoRef = useRef<HTMLVideoElement | null>(null);
   const [facingMode, setFacingMode] = useState<"environment" | "user">("environment");

   const [isCameraLoaded, setIsCameraLoaded] = useState(false);
   const [isSupported, setIsSupported] = useState(true);
   const [coordinates, setCoordinates] = useState<CoordinatesType>(null);

   const isDisabled = useMemo(() => {
      if (isSupported && coordinates) {
         const betaBool = coordinates.beta < 87 || coordinates.beta > 93;
         const gammaBool = coordinates.gamma < -3 || coordinates?.gamma > 3;

         return betaBool || gammaBool;
      }

      return false;
   }, [isSupported, coordinates?.beta, coordinates?.gamma])

   const { startCamera, stopCamera } = useMemo(() => (
      cameraFuncs(videoRef, facingMode, setIsCameraLoaded, setIsSupported, setCoordinates)
   ), [videoRef, facingMode, setIsCameraLoaded, setIsSupported, setCoordinates])

   useEffect(() => {
      if (!showCanvas) startCamera();

      return () => {
         stopCamera();
      }
   }, [startCamera, stopCamera, showCanvas])

   return (
      <div className="w-full fixed top-0 left-0 z-30 bg-primary/60 px-4">
         {
            showCanvas ?
               <EditElemFirstLoad setShowCanvas={setShowCanvas} />
               :
               <div className="flex flex-col items-center justify-center gap-7 min-h-screen">
                  <p className="text-center">{AIData?.currentSection?.nameFA}</p>

                  <div className="w-full min-h-80 flex items-center justify-center">
                     <div className="relative">
                        <video
                           ref={videoRef}
                           autoPlay
                           playsInline
                        />

                        <AimContainer isSupported={isSupported} gamma={coordinates?.gamma} />
                        <BetaLine isSupported={isSupported} beta={coordinates?.beta} />
                     </div>
                  </div>

                  <div className="w-full flex justify-center items-center gap-8">
                     <CameraModeBtn
                        isDisabled={!isCameraLoaded}
                        setFacingMode={setFacingMode}
                     />

                     <CapturePhotoBtn
                        isLoading={!isCameraLoaded || !AIData?.modelDownlaoded}
                        isDisabled={isDisabled}
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

export default CameraElemSimple;