import { useState } from "react";
import LANDMARKS_NAMES from "./LandmarksNames";

type LandmarksMenuProps = {
   drawableLandmarks: number[],
   needableLandmarks: number[],
   selectedLandmark: number | null,
   setSelectedLandmark: React.Dispatch<React.SetStateAction<number | null>>,
   isDisabled: boolean,
}

function LandmarksMenu({ drawableLandmarks, needableLandmarks, selectedLandmark, setSelectedLandmark, isDisabled }: LandmarksMenuProps) {
   const [showMenu, setShowMenu] = useState(false);

   return (
      <div className="relative h-full">
         <button
            disabled={isDisabled}
            type="button"
            className={`min-w-32 lg:min-w-36 px-4 h-full flex items-center justify-center gap-1 lg:gap-2 rounded-[32px] ${isDisabled ? "bg-gray text-white" : "bg-white text-primary"}`}
            onClick={() => setShowMenu(prevValue => !prevValue)}
         >
            <div className={`transition-transform duration-500 flex-shrink-0 ${showMenu ? "rotate-0" : 'rotate-180'}`}>
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 6" fill="none" className="w-2.5 lg:w-3">
                  <path d="M9.28564 0.714287L4.99993 5L0.714216 0.714286" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
               </svg>
            </div>
            {
               selectedLandmark === null ?
                  "انتخاب شماره" :
                  `شماره ${selectedLandmark}`
            }
         </button>

         <div className={`editlandmarks-menu ${showMenu ? "opacity-100 z-10" : "opacity-0 -z-10"}`}>
            <button
               type="button"
               className="py-0.5 text-sm"
               onClick={() => {
                  setSelectedLandmark(null);
                  setShowMenu(false);
               }}
            >
               بدون انتخاب
            </button>
            {
               drawableLandmarks.map(index => {
                  const isNeedableLandmark = needableLandmarks.includes(index);

                  return (
                     <button
                        key={index}
                        type="button"
                        className={`py-1.5 text-sm ${isNeedableLandmark ? "font-bold" : "font-Estedad-ExtraLight"}`}
                        onClick={() => {
                           setSelectedLandmark(index);
                           setShowMenu(false);
                        }}
                     >
                        {index} - {LANDMARKS_NAMES[index]}
                     </button>
                  )
               })
            }
         </div>
      </div>
   );
};

export default LandmarksMenu;