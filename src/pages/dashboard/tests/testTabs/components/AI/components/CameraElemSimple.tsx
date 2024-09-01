import { useEffect, useMemo, useRef, useState } from "react";
import { cameraFuncs } from "../../../../../../../utils/AIFuncs";
import CanvasElemFirstLoad from "./CanvasElemFirstLoad";
import { useAIContext } from "../../../../context/AIContextProvider";
import CoordinatesType from "../../../../../../../types/CoordinatesType";
import AimContainer from "./camera/AimContainer";
import BetaLine from "./camera/BetaLine";
import Buttons from "./camera/Buttons";

function CameraElemSimple() {
   const [AIData, setAIData] = useAIContext();
   const [showCanvas, setShowCanvas] = useState(false);

   const videoRef = useRef<HTMLVideoElement | null>(null);
   const [facingMode, setFacingMode] = useState<"environment" | "user">("environment");

   const [isSupported, setIsSupported] = useState(true);
   const [coordinates, setCoordinates] = useState<CoordinatesType>(null);

   const { startCamera, stopCamera } = useMemo(() => (
      cameraFuncs(videoRef, facingMode, setIsSupported, setCoordinates)
   ), [videoRef, facingMode, setIsSupported, setCoordinates])

   useEffect(() => {
      if (!showCanvas) {
         startCamera();
      }

      return () => {
         stopCamera();
      }
   }, [startCamera, stopCamera, showCanvas])

   return (
      <div className="w-full fixed top-0 left-0 z-30 bg-primary/60 px-4">
         {
            showCanvas ?
               <CanvasElemFirstLoad setShowCanvas={setShowCanvas} />
               :
               <div className="flex flex-col items-center justify-center gap-7 min-h-screen">
                  <p className="text-center">{AIData?.imageState?.nameFA}</p>

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

                  <Buttons
                     setFacingMode={setFacingMode}
                     isSupported={isSupported}
                     clickHandler={async () => {
                        console.log("click", videoRef.current);
                        await AIData?.model?.send({ image: videoRef.current! });
                        setShowCanvas(true);
                        setAIData(prevValue => ({
                           ...prevValue,
                           videoSize: {
                              width: videoRef.current?.clientWidth!,
                              height: videoRef.current?.clientHeight!,
                           }
                        }))
                     }}
                     coordinates={coordinates}
                     stopCamera={stopCamera}
                  />
               </div>
         }
      </div>
   );
};

export default CameraElemSimple;