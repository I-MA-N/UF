import dynamic from "../data/testsData/dynamic";
import nahanjariHa from "../data/testsData/nahanjariHa";

function SampleImages() {
   return (
      <div className="hidden">
         {
            nahanjariHa.map(input => (
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
            dynamic.map(input => (
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