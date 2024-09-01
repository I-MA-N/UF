import { useEffect, useState } from "react";
import { useAIContext } from "../../../../context/AIContextProvider";
import { Results } from "@mediapipe/holistic";
import Header from "./canvas/Header";
import Footer from "./canvas/Footer";
import Body from "./canvas/Body";

type CanvasElemFirstLoadProps = {
   setShowCanvas: React.Dispatch<React.SetStateAction<boolean>>
}

function CanvasElemFirstLoad({ setShowCanvas }: CanvasElemFirstLoadProps) {
   const [AIData, setAIData] = useAIContext();
   const [photoData, setPhotoData] = useState<Results | null>(null);

   useEffect(() => {
      if (AIData?.results) {
         setPhotoData(AIData.results)
         setAIData(prevValue => ({
            ...prevValue,
            results: undefined
         }))
      }
   }, [AIData?.results])

   return (
      <div className="flex flex-col items-center justify-center gap-7 min-h-screen">
         <Header />
         <Body
            photoData={photoData}
            setPhotoData={setPhotoData}
         />
         <Footer
            setShowCanvas={setShowCanvas}
            photoData={photoData}
         />
      </div>
   ) 
};

export default CanvasElemFirstLoad;