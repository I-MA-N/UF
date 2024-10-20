import { useMemo } from "react";
import useAIStore from "../../../../../../store/AIStore";
import usePhotoStore from "../../../../../../store/photoStore";

type SampleImageProps = {
   selectedLandmark: number
}

function SampleImage({ selectedLandmark }: SampleImageProps) {
   const { isMovingLandmark, landmarks } = usePhotoStore(state => ({ isMovingLandmark: state.isMovingLandmark, landmarks: state.landmarks }));
   const currentSection = useAIStore(state => state.currentSection);

   const isEven = useMemo(() => {
      let isEven = true;
      if (landmarks[11].z < landmarks[12].z) isEven = false;
      
      return isEven;
   }, [])

   const key = useMemo(() => {
      const name = currentSection?.name.toLowerCase();

      if (name?.includes("side")) return "side";
      else if (name?.includes("back")) return "back";
      return "front"
   }, [currentSection?.name]);

   if (isMovingLandmark && selectedLandmark !== 38) return (
      <img
         src={`/images/editImages/${key}/${selectedLandmark}.png`}
         style={{
            transform: isEven ? "rotateY(180deg)" : "none"
         }}
         className="absolute z-20 top-0 left-0"
         width={80}
         height={80}
      />
   );
};

export default SampleImage;