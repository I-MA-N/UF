type SampleImageModalProps = {
   src: string,
   setShowImage: React.Dispatch<React.SetStateAction<boolean>>,
}

function SampleImageModal({ src, setShowImage }: SampleImageModalProps) {
   return (
      <div className="modal">
         <div className="bg-primary px-4 py-9 rounded-[32px] border-2 relative">
            
            <button
               type="button"
               className="size-11 flex items-center justify-center absolute bottom-[calc(100%+16px)] right-4 bg-primary text-yellow border border-yellow rounded-full"
               onClick={() => setShowImage(false)}
            >
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" className="size-4">
                  <path d="M13 3L8 8M8 8L3 13M8 8L13 13M8 8L3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
               </svg>
            </button>

            <span className="absolute bottom-[calc(100%+24px)] left-1/2 -translate-x-1/2 -ml-2">عکس نمونه</span>

            <img src={src} alt="sample image for this section" />

         </div>
      </div>
   );
};

export default SampleImageModal;