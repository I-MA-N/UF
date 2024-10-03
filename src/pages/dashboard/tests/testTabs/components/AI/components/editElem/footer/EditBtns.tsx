import { useMemo } from "react";
import usePhotoStore from "../../../../../../store/photoStore";
import NextLandmarkBtn from "./editBtns/NextLandmarkBtn";
import PrevLandmarksBtn from "./editBtns/PrevLandmarksBtn";
import LandmarksMenu from "./editBtns/LandmarksMenu";
import { getEditableLandmarks } from "../../../../../../../../../utils/AIFuncs";

type SelectedLandmarkBtnsProps = {
   selectedLandmark: number | null,
   setSelectedLandmark: React.Dispatch<React.SetStateAction<number | null>>,
}

function EditBtns({ selectedLandmark, setSelectedLandmark }: SelectedLandmarkBtnsProps) {
   const landmarks = usePhotoStore(state => state.landmarks);

   const editableLandmarks = useMemo(() => getEditableLandmarks(landmarks), []);

   if (editableLandmarks) return (
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