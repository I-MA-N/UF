import { useMemo } from "react";
import NextLandmarkBtn from "./editBtns/NextLandmarkBtn";
import PrevLandmarksBtn from "./editBtns/PrevLandmarksBtn";
import LandmarksMenu from "./editBtns/LandmarksMenu";
import useAIStore from "../../../../../../../../../../store/AIStore";
import usePhotoStore from "../../../../../../../../../../store/photoStore";
import { filterLandmarks } from "../../../../../../../../../../../../../utils/AIFuncs";

type SelectedLandmarkBtnsProps = {
   selectedLandmark: number | null,
   setSelectedLandmark: React.Dispatch<React.SetStateAction<number | null>>,
}

function EditBtns({ selectedLandmark, setSelectedLandmark }: SelectedLandmarkBtnsProps) {
   const currentSection = useAIStore(state => state.currentSection!);
   const landmarks = usePhotoStore(state => state.landmarks);

   const { needableLandmarks, drawableLandmarks } = useMemo(() => filterLandmarks(currentSection, landmarks), []);

   return (
      <div className="w-full h-12 lg:h-14 flex gap-3 lg:gap-4 justify-center">
         <PrevLandmarksBtn
            drawableLandmarks={drawableLandmarks}
            selectedLandmark={selectedLandmark}
            setSelectedLandmark={setSelectedLandmark}
            isDisabled={!landmarks?.length}
         />

         <LandmarksMenu
            drawableLandmarks={drawableLandmarks}
            needableLandmarks={needableLandmarks}
            selectedLandmark={selectedLandmark}
            setSelectedLandmark={setSelectedLandmark}
            isDisabled={!landmarks?.length}
         />

         <NextLandmarkBtn
            drawableLandmarks={drawableLandmarks}
            selectedLandmark={selectedLandmark}
            setSelectedLandmark={setSelectedLandmark}
            isDisabled={!landmarks?.length}
         />
      </div>
   );
};

export default EditBtns;