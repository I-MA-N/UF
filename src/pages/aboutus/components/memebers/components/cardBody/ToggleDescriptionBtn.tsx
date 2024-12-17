import { useCallback } from "react";

type ToggleDescriptionBtnProps = {
   isDivVisible: boolean | undefined,
   setIsDivVisible: React.Dispatch<React.SetStateAction<boolean | undefined>>,
   DIV_ANIMATION_DURATION: number
}

function ToggleDescriptionBtn({ isDivVisible, setIsDivVisible, DIV_ANIMATION_DURATION }: ToggleDescriptionBtnProps) {
   const clickHandler = useCallback(() => {
      setIsDivVisible(prevValue => {
         if (prevValue === undefined) return true;
         return !prevValue;
      })
   }, [])

   return (
      <button
         type='button'
         className='w-full flex gap-12 justify-center items-center py-4'
         onClick={clickHandler}
      >
         <span className='text-xs lg:text-sm'>معرفی</span>

         <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 18 18" fill="none" 
            className={`
               size-4.5 lg:size-6 transition-transform 
               ${isDivVisible ? "rotate-180" : "rotate-0"}
            `} 
            style={{ transitionDuration: `${DIV_ANIMATION_DURATION}ms` }}
         >
            <path d="M0.55 9C0.55 10.8403 0.649326 12.2816 0.900908 13.4137C1.1511 14.5394 1.5445 15.3253 2.1096 15.8904C2.67469 16.4555 3.46057 16.8489 4.58635 17.0991C5.71836 17.3507 7.15968 17.45 9 17.45C10.8403 17.45 12.2816 17.3507 13.4137 17.0991C14.5394 16.8489 15.3253 16.4555 15.8904 15.8904C16.4555 15.3253 16.8489 14.5394 17.0991 13.4137C17.3507 12.2816 17.45 10.8403 17.45 9C17.45 7.15968 17.3507 5.71836 17.0991 4.58635C16.8489 3.46057 16.4555 2.67469 15.8904 2.1096C15.3253 1.5445 14.5394 1.1511 13.4137 0.900909C12.2816 0.649326 10.8403 0.549999 9 0.549999C7.15968 0.549999 5.71836 0.649326 4.58635 0.900909C3.46057 1.1511 2.67469 1.5445 2.1096 2.1096C1.5445 2.67469 1.1511 3.46057 0.900908 4.58635C0.649326 5.71836 0.55 7.15968 0.55 9Z" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 7.5L9 10.5L6 7.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
         </svg>
      </button>
   );
};

export default ToggleDescriptionBtn;