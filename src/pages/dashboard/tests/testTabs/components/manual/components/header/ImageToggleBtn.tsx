type ImageToggleBtnProps = {
   isVisible: boolean,
   setIsVisible: React.Dispatch<React.SetStateAction<boolean>>,
}

function ImageToggleBtn({ isVisible, setIsVisible }: ImageToggleBtnProps) {
   return (
      <button
         type="button"
         className="w-full px-4 border-t-2 border-white flex flex-col items-center text-primary"
         onClick={() => setIsVisible(prevValue => !prevValue)}
      >

         <div className="w-full h-6 bg-white rounded-b-[18px] flex items-center justify-center text-xs">
            عکس
         </div>

         <div className="relative">
            <img src="/images/section-rectangle.png" className="-mt-px" />

            <div className={`transition-transform duration-500 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 ${isVisible ? "rotate-180" : 'rotate-0'}`}>
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 6" fill="none" className="w-2.5">
                  <path d="M9.28564 0.714287L4.99993 5L0.714216 0.714286" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
               </svg>
            </div>
         </div>

      </button>
   );
};

export default ImageToggleBtn;