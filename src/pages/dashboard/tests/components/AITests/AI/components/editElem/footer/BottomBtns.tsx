import { useMemo } from "react";
import BackBtn from "./bottomBtns/BackBtn";
import NextBtn from "./bottomBtns/NextBtn";
import LANDMARKS_NAMES from "./editBtns/LandmarksNames";
import { filterLandmarks } from "../../../../../../../../../utils/AIFuncs";
import useAIStore from "../../../../../../store/AIStore";
import usePhotoStore from "../../../../../../store/photoStore";

type BottomBtnsProps = {
   selectedLandmark: number | null
}

function BottomBtns({ selectedLandmark }: BottomBtnsProps) {
   const currentSection = useAIStore(state => state.currentSection!);
   const landmarks = usePhotoStore(state => state.landmarks);

   const { needableLandmarks } = useMemo(() => filterLandmarks(currentSection, landmarks), []);
   const isNeedableLandmark = useMemo(() => (
      selectedLandmark !== null && needableLandmarks.includes(selectedLandmark)
   ), [selectedLandmark])

   return (
      <div className="flex items-center justify-between w-full h-12 lg:h-14">
         <BackBtn />

         <span className={`text-center px-1 ${isNeedableLandmark ? "font-bold" : "font-Estedad-ExtraLight"}`}>
            {selectedLandmark !== null && LANDMARKS_NAMES[selectedLandmark]}
         </span>

         <NextBtn />
      </div>
   );
};

export default BottomBtns;