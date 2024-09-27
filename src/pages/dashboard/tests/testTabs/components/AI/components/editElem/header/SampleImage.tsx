import { useMemo } from "react";
import useAIStore from "../../../../../../store/AIStore";
import usePhotoStore from "../../../../../../store/photoStore";

type SampleImageProps = {
   selectedLandmark: number | null
}

function SampleImage({ selectedLandmark }: SampleImageProps) {
   const isMovingLandmark = usePhotoStore(state => state.isMovingLandmark);
   const currentSection = useAIStore(state => state.currentSection);

   const key = useMemo(() => {
      const name = currentSection?.name.toLowerCase();

      if (name?.includes("side")) return "side";
      else if (name?.includes("back")) return "back";
      return "front"
   }, [currentSection?.name]);

   if (isMovingLandmark) return (
      <img
         className="absolute z-20 top-0 left-0"
         src={`/images/sampleImages/${key}/${selectedLandmark}.png`}
         width={80}
         height={80}
      />
   );
};

export default SampleImage;