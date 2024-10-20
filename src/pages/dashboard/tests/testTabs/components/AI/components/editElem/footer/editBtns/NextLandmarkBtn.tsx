import { useMemo } from "react";

type NextLandmarkBtnProps = {
   editableLandmarks: number[],
   selectedLandmark: number | null,
   setSelectedLandmark: React.Dispatch<React.SetStateAction<number | null>>,
   isDisabled: boolean
}

function NextLandmarkBtn({ editableLandmarks, selectedLandmark, setSelectedLandmark, isDisabled }: NextLandmarkBtnProps) {
   const nextLandmark = useMemo(() => {
      if (selectedLandmark !== null) {
         const currentIndex = editableLandmarks.indexOf(selectedLandmark);

         if (currentIndex > -1) {
            const nextLandmark = editableLandmarks[currentIndex + 1];

            if (nextLandmark === undefined) return null;
            return nextLandmark;
         }
      }

      return editableLandmarks[0];
   }, [selectedLandmark])

   return (
      <button
         disabled={isDisabled}
         type="button"
         onClick={() => setSelectedLandmark(nextLandmark)}
      >
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 14" fill="none" className="w-2 lg:w-3">
            <path d="M7 13L1 7L7 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
         </svg>
      </button>
   );
};

export default NextLandmarkBtn;