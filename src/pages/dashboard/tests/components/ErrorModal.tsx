type ErrorModalProps = {
   error: string,
   setError: React.Dispatch<React.SetStateAction<string | null>>,
}

function ErrorModal({ error, setError }: ErrorModalProps) {
   return (
      <div
         className="modal"
         onClick={() => setError(null)}
      >
         <div className="w-[298px] xs:w-80 bg-white text-primary rounded-[32px] p-12 text-sm/7">
            <div className="space-y-6">
               <div className="flex flex-col gap-2 items-center">
                  <span className="inline-block text-center">مشکلی پیش آمده است!</span>
                  <span className="text-xs inline-block text-center">{error}</span>
               </div>
               <button
                  onClick={() => setError(null)}
                  className="flex items-center gap-2 mx-auto text-yellow"
               >
                  <span>بستن</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" className="w-4 lg:w-4.5">
                     <path d="M13 3L8 8M8 8L3 13M8 8L13 13M8 8L3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
               </button>
            </div>
         </div>
      </div>
   )
}

export default ErrorModal;