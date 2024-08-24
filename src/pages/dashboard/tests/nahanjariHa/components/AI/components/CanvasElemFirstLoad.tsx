import { useEffect, useState } from "react";
import { useAIContext } from "../../../../context/AIContextProvider";
import CanvasElem from "./CanvasElem";
import { Results } from "@mediapipe/holistic";

type CanvasElemFirstLoadProps = {
   setShowCanvas: React.Dispatch<React.SetStateAction<boolean>>
}

function CanvasElemFirstLoad({ setShowCanvas }: CanvasElemFirstLoadProps) {
   const [AIData, setAIData] = useAIContext();
   const [photoData, setPhotoData] = useState<Results | null>(null);

   useEffect(() => {
      if (!AIData?.isSampleResults && AIData?.results) {
         setPhotoData(AIData.results)
         setAIData(prevValue => ({
            ...prevValue,
            results: undefined
         }))
      }
   }, [AIData?.results, AIData?.isSampleResults])

   if (photoData?.image) return (
      <CanvasElem
         photoData={photoData}
         setPhotoData={setPhotoData}
         setShowCanvas={setShowCanvas}
      />
   )

   return (
      <>
         <p>{AIData?.imageState!.nameFA}</p>
         <button
            type="button"
            onClick={() => setShowCanvas(false)}
         >
            برگشت
         </button>
         <p>دریافت عکس گرفته شده با مشکل مواجه شد!</p>
      </>
   )
};

export default CanvasElemFirstLoad;