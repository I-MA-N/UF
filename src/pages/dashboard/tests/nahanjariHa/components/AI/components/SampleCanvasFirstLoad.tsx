import { useEffect, useMemo, useState } from "react";
import { useAIContext } from "../../../../context/AIContextProvider";
import SampleCanvas from "./SampleCanvas";
import { GpuBuffer } from "@mediapipe/pose";

type SampleCanvasFirstLoad = {
   selectedLandmark: number | null
}

function SampleCanvasFirstLoad({ selectedLandmark }: SampleCanvasFirstLoad) {
   const [AIData, setAIData] = useAIContext();
   const imgName = useMemo(() => AIData?.imageState?.name!, [AIData]);

   const [sampleImage, setSampleImage] = useState<GpuBuffer | null>(null);

   useEffect(() => {
      if (AIData?.results && AIData.isSampleResults) {
         setSampleImage(AIData.results.image);
         setAIData(prevValue => ({
            ...prevValue,
            results: undefined,
            isSampleResults: false
         }))
      }
   }, [AIData?.results, AIData?.isSampleResults])

   useEffect(() => {
      const sendSamplePhoto = async () => {
         if (imgName) {
            const imgElem = document.getElementById(imgName) as HTMLImageElement | null;
            setAIData(prevValue => ({
               ...prevValue,
               isSampleResults: true
            }))
            await AIData?.model?.send({ image: imgElem! });
         }
      }

      sendSamplePhoto();
   }, [imgName])

   return (
      <div className="absolute top-0 left-0">
         {
            sampleImage ?
               <SampleCanvas
                  sampleImage={sampleImage}
                  selectedLandmark={selectedLandmark}
               /> :
               <p>دریافت عکس نمونه با مشکل مواجه شد!</p>
         }
      </div>
   );
};

export default SampleCanvasFirstLoad;