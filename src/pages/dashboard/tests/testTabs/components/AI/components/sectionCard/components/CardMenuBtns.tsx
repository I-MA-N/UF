type CardMenuBtnsProps = {
   showMenu: boolean,
   setShowMenu: React.Dispatch<React.SetStateAction<boolean>>
}

function CardMenuBtns({ showMenu, setShowMenu }: CardMenuBtnsProps) {
   return (
      <>
         <button
            type="button"
            onClick={() => setShowMenu(false)}
            className={`absolute top-6 right-6 ${showMenu ? "opacity-100 z-20" : "opacity-0 -z-10"} text-primary`}
         >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 12" fill="none" className="w-5">
               <path d="M6 1L1 6M1 6H17M1 6L6 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
         </button>

         <button
            type="button"
            onClick={() => setShowMenu(true)}
            className={`absolute top-6 right-6 ${!showMenu ? "opacity-100 z-20" : "opacity-0 -z-10"}`}
         >
            <div className="flex flex-col gap-0.5 items-center">
               <div className="size-1.5 rounded-full border-2 bg-primary" />
               <div className="size-1.5 rounded-full border-2 bg-primary" />
               <div className="size-1.5 rounded-full border-2 bg-primary" />
            </div>
         </button>
      </>
   );
};

export default CardMenuBtns;