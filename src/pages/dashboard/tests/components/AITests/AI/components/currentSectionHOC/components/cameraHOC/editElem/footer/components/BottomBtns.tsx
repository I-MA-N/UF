import { useMemo } from "react";
import BackBtn from "./bottomBtns/BackBtn";
import NextBtn from "./bottomBtns/NextBtn";
import LandmarkNameSpan from "./bottomBtns/LandmarkNameSpan";
import useAIStore from "../../../../../../../../../../store/AIStore";
import usePhotoStore from "../../../../../../../../../../store/photoStore";
import { filterLandmarks } from "../../../../../../../../../../../../../utils/AIFuncs";

type BottomBtnsProps = {
   selectedLandmark: number | null
}

function BottomBtns({ selectedLandmark }: BottomBtnsProps) {
   const currentSection = useAIStore(state => state.currentSection!);
   const landmarks = usePhotoStore(state => state.landmarks);

   const { needableLandmarks } = useMemo(() => (
      landmarks?.length ? filterLandmarks(currentSection, landmarks) : { needableLandmarks: null }
   ), []);


   return (
      <div className="flex items-center justify-between w-full h-12 lg:h-14">
         <BackBtn />

         {
            (selectedLandmark !== null && needableLandmarks !== null) &&
            <LandmarkNameSpan
               selectedLandmark={selectedLandmark}
               needableLandmarks={needableLandmarks}
            />
         }

         <NextBtn />
      </div>
   );
};

export default BottomBtns;