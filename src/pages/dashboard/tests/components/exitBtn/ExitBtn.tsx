import { useState } from "react";
import ExitModal from "./ExitModal";

type ExitBtnProps = {
   isCircle: boolean
}

function ExitBtn({ isCircle }: ExitBtnProps) {
   const [showExitModal, setShowExitModal] = useState(false);

   return (
      <>
         <button
            type="button"
            className={`exit-btn ${isCircle ? "exit-btn-circle" : "exit-btn-ellipse"}`}
            onClick={() => setShowExitModal(true)}
         >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" className={`transition-all ${isCircle ? "w-4.5 lg:w-5" : "w-4 lg:w-5"}`}>
               <path d="M13 3L8 8M8 8L3 13M8 8L13 13M8 8L3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {
               !isCircle && "خروج"
            }
         </button>

         {showExitModal && <ExitModal setShowExitModal={setShowExitModal} />}
      </>
   );
};

export default ExitBtn;