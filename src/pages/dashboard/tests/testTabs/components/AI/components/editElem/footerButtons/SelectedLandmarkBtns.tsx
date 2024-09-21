import { useMemo, useState } from "react";
import usePhotoStore from "../../../../../../store/photoStore";
import { getDeletedLandmarks } from "../../../../../../../../../utils/AIFuncs";

type SelectedLandmarkBtnsProps = {
   selectedLandmark: number | null,
   setSelectedLandmark: React.Dispatch<React.SetStateAction<number | null>>
}

function SelectedLandmarkBtns({ selectedLandmark, setSelectedLandmark }: SelectedLandmarkBtnsProps) {
   const landmarks = usePhotoStore(state => state.landmarks);
   const deletedLandmarks = useMemo(() => getDeletedLandmarks(), []);

   const [showMenu, setShowMenu] = useState(false);

   return (
      <div className="flex gap-10 items-center h-full">
         <button
            disabled={!landmarks?.length}
            type="button"
         >
            next
         </button>

         <div className="relative h-full">
            <button
               disabled={!landmarks?.length}
               type="button"
               className={`min-w-32 h-full ${!landmarks?.length ? "bg-gray text-white" : "bg-white text-primary"} rounded-full`}
               onClick={() => setShowMenu(prevValue => !prevValue)}
            >
               {selectedLandmark === null ? "انتخاب شماره" : `شماره ${selectedLandmark}`}
            </button>

            <div className={`selectedLandmark-menu ${showMenu ? "opacity-100 z-10" : "opacity-0 -z-10"}`}>
               <button
                  type="button"
                  className=""
                  onClick={() => {
                     setSelectedLandmark(null);
                     setShowMenu(false);
                  }}
               >
                  &nbsp;
               </button>
               {
                  landmarks?.map((_landmark, index) => (
                     !deletedLandmarks.includes(index) &&
                     <button
                        key={index}
                        type="button"
                        className=""
                        onClick={() => {
                           setSelectedLandmark(index);
                           setShowMenu(false);
                        }}
                     >
                        {index}
                     </button>
                  ))
               }
            </div>
         </div>

         <button
            disabled={!landmarks?.length}
            type="button"
         >
            prev
         </button>
      </div>
   );
};

export default SelectedLandmarkBtns;