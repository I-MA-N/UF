import { useMemo } from "react";
import LANDMARKS_NAMES from "../editBtns/LandmarksNames";

type LandmarkNameSpanProps = {
   selectedLandmark: number,
   needableLandmarks: number[]
}

function LandmarkNameSpan({ selectedLandmark, needableLandmarks }: LandmarkNameSpanProps) {
   const isNeedableLandmark = useMemo(() => (
      needableLandmarks.includes(selectedLandmark)
   ), [selectedLandmark])

   return (
      <span
         className={
            `text-center px-1 ${isNeedableLandmark ? "font-bold" : "font-Estedad-ExtraLight"}`
         }
      >
         {LANDMARKS_NAMES[selectedLandmark]}
      </span>
   );
};

export default LandmarkNameSpan;