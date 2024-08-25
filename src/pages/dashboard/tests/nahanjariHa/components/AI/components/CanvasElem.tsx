import { Results } from "@mediapipe/holistic";
import { useEffect, useMemo, useRef, useState } from "react";
import { canvasClick, canvasMouseMove, drawOnCanvas } from "../../../../../../../utils/AIFuncs";
import SampleCanvas from "./SampleCanvas";
import { useAIContext } from "../../../../context/AIContextProvider";
import AI_IMAGES_STATE from "../../../data/AI_IMAGES_STATE";

type CanvasElemProps = {
   photoData: Results,
   setPhotoData: React.Dispatch<React.SetStateAction<Results | null>>
   setShowCanvas: React.Dispatch<React.SetStateAction<boolean>>
}

function CanvasElem({ photoData, setPhotoData, setShowCanvas }: CanvasElemProps) {
   const [AIData, setAIData] = useAIContext();
   const canvasRef = useRef<HTMLCanvasElement | null>(null);
   const landmarks = useMemo(() => photoData.poseLandmarks, [photoData])
   const [selectedLandmark, setSelectedLandmark] = useState<number | null>(null);

   useEffect(() => {
      drawOnCanvas(canvasRef.current, photoData.image, photoData.poseLandmarks);
   }, [canvasRef.current, photoData, selectedLandmark])

   return (
      <>
         <SampleCanvas selectedLandmark={selectedLandmark} />
         <canvas
            ref={canvasRef}
            onClick={(e) => landmarks?.length &&
               canvasClick(
                  e,
                  canvasRef.current,
                  selectedLandmark,
                  setSelectedLandmark,
                  landmarks,
                  setPhotoData
               )
            }
            onMouseMove={() => canvasMouseMove(selectedLandmark)}
            width={AIData?.videoSize?.width}
            height={AIData?.videoSize?.height}
            className="mx-auto"
         />
         {!landmarks?.length && <p>نقطه ای در عکس یافت نشد!</p>}
         <div className="flex gap-4 absolute bottom-10 left-1/2 -translate-x-1/2">
            <button
               type="button"
               onClick={() => setShowCanvas(false)}
            >
               برگشت
            </button>
            <button
               type="button"
               onClick={() => {
                  setAIData(prevValue => {
                     const imageStateName = prevValue?.imageState?.name;
                     const currentSection = AI_IMAGES_STATE.find(section => section.find(state => (
                        state.name === imageStateName
                     )))
                     const imageStateIndex = currentSection?.findIndex(state => state.name === imageStateName);
                     
                     if (currentSection && typeof imageStateIndex === "number") {
                        const nextImageState = currentSection[imageStateIndex + 1];
                        return {
                           ...prevValue,
                           imageState: nextImageState
                        }
                     }
                     
                     return {
                        ...prevValue
                     }
                  })
                  setShowCanvas(false);
                  // Send image to save in database
                  // Evaluate function should be called here
               }}
            >
               تایید
            </button>
         </div>
      </>
   );
};

export default CanvasElem;