import { useEffect, useState } from "react";
import dynamicEvaluation from "../data/testsData/dynamicEvaluation";
import staticEvaluation from "../data/testsData/staticEvaluation";
import useModelStore from "../store/modelStore";

function SampleImages() {
   const setModel = useModelStore(state => state.setModel);
   const [imagesLoaded, setImagesLoaded] = useState<string[]>([]);

   useEffect(() => {
      if (imagesLoaded.length === staticEvaluation.length + dynamicEvaluation.length) {
         setModel();
      }
   }, [imagesLoaded.length])

   return (
      <div className="hidden">
         {
            staticEvaluation.map(section => (
               <img
                  key={section.name}
                  src={section.AI.sampleImageSrc}
                  id={section.name}
                  alt={`sample image for AI - ${section.name}`}
                  hidden
                  onLoad={() => setImagesLoaded(prevValue => [...prevValue, section.name])}
               />
            ))
         }
         {
            dynamicEvaluation.map(section => (
               <img
                  key={section.name}
                  src={section.AI.sampleImageSrc}
                  id={section.name}
                  alt={`sample image for AI - ${section.name}`}
                  hidden
                  onLoad={() => setImagesLoaded(prevValue => [...prevValue, section.name])}
               />
            ))
         }
      </div>
   )
}
export default SampleImages;