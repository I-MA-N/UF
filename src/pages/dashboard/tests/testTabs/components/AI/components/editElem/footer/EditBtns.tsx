import { useMemo } from "react";
import usePhotoStore from "../../../../../../store/photoStore";
import { getDeletedLandmarks } from "../../../../../../../../../utils/AIFuncs";
import useAIStore from "../../../../../../store/AIStore";
import NextLandmarkBtn from "./editBtns/NextLandmarkBtn";
import PrevLandmarksBtn from "./editBtns/PrevLandmarksBtn";
import LandmarksMenu from "./editBtns/LandmarksMenu";

type SelectedLandmarkBtnsProps = {
   selectedLandmark: number | null,
   setSelectedLandmark: React.Dispatch<React.SetStateAction<number | null>>,
}

function EditBtns({ selectedLandmark, setSelectedLandmark }: SelectedLandmarkBtnsProps) {
   const landmarks = usePhotoStore(state => state.landmarks);
   const currentSectionName = useAIStore(state => state.currentSection?.name);

   const editableLandmarks = useMemo(() => {
      let editableLandmarks: number[] = [];

      if (currentSectionName) {
         const isSide = currentSectionName.toLowerCase().includes("side");
         const deletedLandmarks = getDeletedLandmarks(landmarks, isSide);

         landmarks.forEach((_landmark, index) => {
            if (!deletedLandmarks.includes(index)) {
               editableLandmarks.push(index)
            }
         })
      }
      return editableLandmarks;
   }, [currentSectionName]);

   return (
      <div className="w-full h-12 lg:h-14 flex gap-3 lg:gap-4 justify-center">
         <PrevLandmarksBtn
            editableLandmarks={editableLandmarks}
            selectedLandmark={selectedLandmark}
            setSelectedLandmark={setSelectedLandmark}
            isDisabled={!landmarks?.length}
         />

         <LandmarksMenu
            editableLandmarks={editableLandmarks}
            selectedLandmark={selectedLandmark}
            setSelectedLandmark={setSelectedLandmark}
            isDisabled={!landmarks?.length}
         />

         <NextLandmarkBtn
            editableLandmarks={editableLandmarks}
            selectedLandmark={selectedLandmark}
            setSelectedLandmark={setSelectedLandmark}
            isDisabled={!landmarks?.length}
         />
      </div>
   );
};

export default EditBtns;