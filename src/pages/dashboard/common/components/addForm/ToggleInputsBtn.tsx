type ToggleInputsBtnProps = {
   isInputsVisible: boolean,
   setIsInputsVisible: React.Dispatch<React.SetStateAction<boolean>>
}

function ToggleInputsBtn({ isInputsVisible, setIsInputsVisible }: ToggleInputsBtnProps) {
   return (
      <button
         type="button"
         className={`
            w-full px-4 border-t-2 border-secondary flex flex-col items-center text-primary
             ${isInputsVisible ? "mt-8" : "mt-4"} mb-2 mx-auto transition-all duration-500
         `}
         onClick={() => setIsInputsVisible(prevValue => !prevValue)}
      >

         <div className="w-full h-5 lg:h-6 bg-white rounded-b-[18px] flex items-center justify-center text-[11px] lg:text-sm">
            {isInputsVisible ? "بستن" : "ویرایش سایر مشخصات"}
         </div>

         <div className="relative -mt-px">
            <img src="/images/section-rectangle-mobile.png" className="-mt-px lg:hidden" />
            <img src="/images/section-rectangle-desktop.png" className="-mt-px hidden lg:block" />

            <div
               className={`
                  transition-transform duration-500 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 
                  ${isInputsVisible ? "rotate-180" : 'rotate-0'}
               `}
            >
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 6" fill="none" className="w-2.5">
                  <path d="M9.28564 0.714287L4.99993 5L0.714216 0.714286" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
               </svg>
            </div>
         </div>

      </button>
   );
};

export default ToggleInputsBtn;