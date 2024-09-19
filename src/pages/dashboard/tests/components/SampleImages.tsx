import { useEffect, useState } from "react";
import dynamicEvaluation from "../data/testsData/dynamicEvaluation";
import staticEvaluation from "../data/testsData/staticEvaluation";
import useModelStore from "../store/modelStore";
import usePhotoStore from "../store/photoStore";

function SampleImages() {
   const setModel = useModelStore(state => state.setModel);
   const resetUserHeight = usePhotoStore(state => state.resetUserHeight);
   const [imagesLoaded, setImagesLoaded] = useState<string[]>([]);

   useEffect(() => {
      if (imagesLoaded.length === staticEvaluation.length + dynamicEvaluation.length) {
         setModel();
         resetUserHeight();
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