import { useEffect, useMemo, useRef, useState } from "react";
import { FieldValues, UseFormSetValue } from "react-hook-form";
import { startCamera } from "../../../../../../../utils/AIFuncs";
import CanvasElemFirstLoad from "./CanvasElemFirstLoad";
import { useAIContext } from "../../../../context/AIContextProvider";
import CoordinatesType from "../../../../../../../types/CoordinatesType";

type CameraElemProps = {
   setValue: UseFormSetValue<FieldValues>
}

function CameraElem({ setValue }: CameraElemProps) {
   const [AIData, setAIData] = useAIContext();
   const [showCanvas, setShowCanvas] = useState(false);

   const videoRef = useRef<HTMLVideoElement | null>(null);
   const [facingMode, setFacingMode] = useState<"environment" | "user">("environment");
   const [isSupported, setIsSupported] = useState(true);
   const [coordinates, setCoordinates] = useState<CoordinatesType>(null);
   const className = useMemo(() => {
      if (coordinates && isSupported) {
         // const alphaBool = alpha >= -5 && alpha <= 5;
         const betaBool = coordinates.beta >= 85 && coordinates.beta <= 95;
         const gammaBool = coordinates.gamma >= -5 && coordinates.gamma <= 5;

         return (gammaBool && betaBool) ? "bg-secondary" : "bg-red";
      }
      return "bg-white";
   }, [coordinates])

   useEffect(() => {
      if (!showCanvas) {
         startCamera(videoRef, facingMode, setIsSupported, setCoordinates);
      }
   }, [facingMode, showCanvas])

   return (
      <div className="fixed top-0 left-0 w-full min-h-screen flex items-center justify-center z-30 transition-all duration-300 bg-primary/60">
         {
            showCanvas ?
               <CanvasElemFirstLoad setShowCanvas={setShowCanvas} /> :
               <div className="relative">
                  <video ref={videoRef} autoPlay />

                  {/* <span className="absolute top-2 left-1/2 -translate-x-1/2">{AIData?.imageState?.nameFA}</span> */}

                  <div className="flex gap-4 absolute top-1 left-1">
                     <span>alpha is: {coordinates?.alpha}</span>
                     <span>beta is: {coordinates?.beta}</span>
                     <span>gamma is: {coordinates?.gamma}</span>
                  </div>

                  <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 size-32 rounded-full outline-dotted outline-4 outline-primary">
                     <div
                        className={
                           `w-full h-1 absolute top-1/2 -translate-y-1/2
                           ${className}
                           `
                        }
                     />
                     <div
                        className={
                           `w-1 h-full absolute left-1/2 -translate-x-1/2
                           ${className}
                           `
                        }
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
                        disabled={!AIData?.modelDownlaoded}
                        onClick={async () => {
                           await AIData?.model?.send({ image: videoRef.current! });
                           setShowCanvas(true);
                           console.log(videoRef.current?.clientWidth);
                           console.log(videoRef.current?.clientHeight);
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
                        onClick={() => setAIData(prevValue => ({
                           ...prevValue,
                           imageState: undefined
                        }))}
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