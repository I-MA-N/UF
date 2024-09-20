import dynamicEvaluation from "../data/testsData/dynamicEvaluation";
import staticEvaluation from "../data/testsData/staticEvaluation";

function SampleImages() {
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
               />
            ))
         }
      </div>
   )
}
export default SampleImages;