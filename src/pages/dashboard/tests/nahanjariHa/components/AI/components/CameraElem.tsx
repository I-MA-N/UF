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
   const [isSupported, setIsSupported] = useState(true);
   const [isStraight, setIsStraight] = useState(false);

   useEffect(() => {
      if (!showCanvas) {
         startCamera(videoRef, facingMode, setIsStraight, setIsSupported);
      }
   }, [facingMode, showCanvas])

   return (
      <div className="fixed top-0 left-0 w-full z-30 transition-all duration-300 bg-primary/60">
         {
            showCanvas ?
               <CanvasElemFirstLoad setShowCanvas={setShowCanvas} /> :
               <>
                  <video ref={videoRef} autoPlay className="min-h-screen mx-auto" />

                  <span className="absolute top-2 left-1/2 -translate-x-1/2">{AIData?.imageState?.nameFA}</span>

                  <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 size-32 rounded-full outline-dotted outline-4 outline-primary">
                     <div className={`w-full h-1 ${isSupported ? (isStraight ? "bg-secondary/80" : "bg-red/60") : "bg-white"} absolute top-1/2 -translate-y-1/2`} />
                     <div className={`w-1 h-full ${isSupported ? (isStraight ? "bg-secondary/80" : "bg-red/60") : "bg-white"} absolute left-1/2 -translate-x-1/2`}/>
                  </div>

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
               </>
         }
      </div>
   );
};

export default CameraElem;