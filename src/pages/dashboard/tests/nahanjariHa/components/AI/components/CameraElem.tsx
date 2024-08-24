import { useEffect, useRef, useState } from "react";
import { FieldValues, UseFormSetValue } from "react-hook-form";
import { startCamera } from "../../../../../../../utils/AIFuncs";
import CanvasElemFirstLoad from "./CanvasElemFirstLoad";
import { useAIContext } from "../../../../context/AIContextProvider";

type CameraElemProps = {
   setValue: UseFormSetValue<FieldValues>
}

function CameraElem({ setValue }: CameraElemProps) {
   const [AIData, setAIData] = useAIContext();
   const [showCanvas, setShowCanvas] = useState(false);

   const videoRef = useRef<HTMLVideoElement | null>(null);
   const [facingMode, setFacingMode] = useState<"environment" | "user">("environment");

   useEffect(() => {
      if (!showCanvas) {
         startCamera(videoRef, facingMode);
      }
   }, [facingMode, showCanvas])

   return (
      <div className="absolute top-0 left-0 w-full h-full z-30 transition-all duration-300 bg-primary/60">
         {
            showCanvas ?
               <CanvasElemFirstLoad setShowCanvas={setShowCanvas} /> :
               <div className="relative">
                  <video ref={videoRef} autoPlay className="w-full max-h-screen" />

                  <div className="flex gap-4 absolute bottom-2 left-1/2 -translate-x-1/2">
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