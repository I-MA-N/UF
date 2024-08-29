import { useEffect, useMemo, useRef, useState } from "react";
import { cameraFuncs } from "../../../../../../../utils/AIFuncs";
import CanvasElemFirstLoad from "./CanvasElemFirstLoad";
import { useAIContext } from "../../../../context/AIContextProvider";
import CoordinatesType from "../../../../../../../types/CoordinatesType";

function CameraElem() {
   const [AIData, setAIData] = useAIContext();
   const [showCanvas, setShowCanvas] = useState(false);

   const videoRef = useRef<HTMLVideoElement | null>(null);
   const [facingMode, setFacingMode] = useState<"environment" | "user">("environment");

   const [isSupported, setIsSupported] = useState(true);
   const [coordinates, setCoordinates] = useState<CoordinatesType>(null);
   const gammaClassName = useMemo(() => {
      if (typeof coordinates?.gamma === "number" && isSupported) {
         const gammaBool = coordinates.gamma >= -3 && coordinates.gamma <= 3;

         return gammaBool ? "bg-secondary" : "bg-red";
      }
      return "bg-white";
   }, [coordinates, isSupported])
   const betaClassName = useMemo(() => {
      if (typeof coordinates?.beta === "number" && isSupported) {
         const betaBool = coordinates.beta >= 87 && coordinates.beta <= 93;
         return betaBool ? "bg-secondary" : "bg-red";
      }
      return "bg-white";
   }, [coordinates, isSupported])

   useEffect(() => {
      const { startCamera, stopCamera } = cameraFuncs(videoRef, facingMode, setIsSupported, setCoordinates);

      if (!showCanvas) {
         startCamera();
      }

      return () => {
         stopCamera();
      }
   }, [facingMode, showCanvas])

   return (
      <div className="fixed top-0 left-0 w-full min-h-screen flex items-center justify-center z-30 transition-all duration-300 bg-primary/60">
         {
            showCanvas ?
               <CanvasElemFirstLoad setShowCanvas={setShowCanvas} />
               :
               <div className="relative">
                  <video
                     ref={videoRef}
                     autoPlay
                     playsInline
                  />

                  <span className="absolute top-2 left-1/2 -translate-x-1/2">{AIData?.imageState?.nameFA}</span>

                  <div className="flex items-center justify-center absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 size-32 rounded-full outline-dotted outline-4 outline-primary">
                     <div
                        className={`w-full h-1 absolute ${gammaClassName}`}
                     />
                     <div
                        className={`w-1 h-full absolute ${gammaClassName}`}
                     />
                     <div
                        className="w-1 h-full absolute bg-yellow"
                        style={{
                           rotate: coordinates?.gamma ? `${coordinates.gamma}deg` : '0deg'
                        }}
                     />
                     <div
                        className="w-1 h-full absolute bg-yellow"
                        style={{
                           rotate: coordinates?.gamma ? `${coordinates.gamma + 90}deg` : '0deg'
                        }}
                     />
                  </div>

                  <div
                     className="absolute bottom-0 left-0"
                     style={{ perspective: 100 }}
                  >
                     <div
                        className={`w-2 h-12 ${betaClassName}`}
                        style={{ transform: coordinates?.beta ? `rotateX(${90 - coordinates?.beta}deg) rotateZ(15deg)` : "" }}
                     />
                  </div>

                  <div className="w-full flex justify-center gap-4 absolute bottom-1 left-1/2 -translate-x-1/2">
                     <button
                        type="button"
                        onClick={() => setFacingMode(
                           prevValue => prevValue === "environment" ? "user" : "environment"
                        )}>
                        change camera mode
                     </button>

                     <button
                        type="button"
                        disabled={!AIData?.modelDownlaoded || (isSupported && (betaClassName !== "bg-secondary" || gammaClassName !== "bg-secondary"))}
                        onClick={async () => {
                           await AIData?.model?.send({ image: videoRef.current! });
                           setShowCanvas(true);
                           setAIData(prevValue => ({
                              ...prevValue,
                              videoSize: {
                                 width: videoRef.current?.clientWidth!,
                                 height: videoRef.current?.clientHeight!,
                              }
                           }))
                        }}>
                        {
                           AIData?.modelDownlaoded
                              ? "capture photo"
                              : "loading..."
                        }
                     </button>

                     <button
                        type="button"
                        onClick={() => {
                           const { stopCamera } = cameraFuncs(videoRef, facingMode, setIsSupported, setCoordinates);
                           stopCamera();
                           setAIData(prevValue => ({
                              ...prevValue,
                              imageState: undefined
                           }))
                        }}
                     >
                        برگشت
                     </button>
                  </div>
               </div>
         }
      </div>
   );
};

export default CameraElem;