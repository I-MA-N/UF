import dynamicEvaluation from "../data/testsData/dynamicEvaluation";
import staticEvaluation from "../data/testsData/staticEvaluation";

function SampleImages() {
   return (
      <div className="hidden">
         {
            staticEvaluation.map(input => (
               <img
                  key={input.name}
                  src={input.AI.sampleImageSrc}
                  id={input.name}
                  alt={`sample image for AI - ${input.name}`}
                  hidden
               />
            ))
         }
         {
            dynamicEvaluation.map(input => (
               <img
                  key={input.name}
                  src={input.AI.sampleImageSrc}
                  id={input.name}
                  alt={`sample image for AI - ${input.name}`}
                  hidden
               />
            ))
         }
      </div>
   )
}
export default SampleImages;