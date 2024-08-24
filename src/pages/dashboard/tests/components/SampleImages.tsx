import AI_IMAGES_STATE from "../nahanjariHa/data/AI_IMAGES_STATE";

function SampleImages() {
   return (
      <div className="hidden">
         {
            AI_IMAGES_STATE.map(section => {
               return section.map(({ name, sampleImageSrc }) => (
                  <img
                     key={name}
                     src={sampleImageSrc}
                     id={name}
                     alt={`sample image for AI - ${name}`}
                     hidden
                  />
               ))
            })
         }
      </div>
   )
}
export default SampleImages;