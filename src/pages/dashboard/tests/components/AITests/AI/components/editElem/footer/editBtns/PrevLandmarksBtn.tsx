import { useMemo } from "react";

type PrevLandmarksBtnProps = {
   drawableLandmarks: number[],
   selectedLandmark: number | null,
   setSelectedLandmark: React.Dispatch<React.SetStateAction<number | null>>,
   isDisabled: boolean
}

function PrevLandmarksBtn({ drawableLandmarks, selectedLandmark, setSelectedLandmark, isDisabled }: PrevLandmarksBtnProps) {
   const prevLandmark = useMemo(() => {
      if (selectedLandmark !== null) {
         const currentIndex = drawableLandmarks.indexOf(selectedLandmark);

         if (currentIndex > -1) {
            const prevLandmark = drawableLandmarks[currentIndex - 1];

            if (prevLandmark === undefined) return null;
            return prevLandmark;
         }
      }

      return drawableLandmarks[drawableLandmarks.length - 1];
   }, [selectedLandmark])

   return (
      <button
         disabled={isDisabled}
         type="button"
         onClick={() => setSelectedLandmark(prevLandmark)}
      >
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 8 14" fill="none" className="w-2 lg:w-3">
            <path d="M1 1L7 7L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
         </svg>
      </button>
   );
};

export default PrevLandmarksBtn;