type TabButtonsProps = {
   isAIMethod: boolean,
   setIsAIMethod: React.Dispatch<React.SetStateAction<boolean>>
}

function TabButtons({ isAIMethod, setIsAIMethod }: TabButtonsProps) {
   return (
      <div className="mb-10">
         <div className="relative z-0 inner-shadow">
            <div
               className={`
                  w-1/2 h-11 lg:h-12 absolute top-1/2 -translate-y-1/2 z-10 bg-secondary
                  rounded-[48px] transition-all duration-200 outer-shadow 
                  ${isAIMethod ? "right-0.5 lg:right-1" : "right-[calc(50%-2px)] lg:right-[calc(50%-4px)]"}
               `}
            />
            <div className="flex items-center h-12 lg:h-14 bg-white rounded-[48px] text-xs lg:text-base">
               <button
                  type="button"
                  className={`w-1/2 transition-colors duration-200 relative z-20 ${isAIMethod ? 'text-white' : 'text-primary'}`}
                  onClick={() => {
                     setIsAIMethod(true);
                     localStorage.setItem("AIMethod", "true");
                  }}>
                  ارزیابی با هوش مصنوعی
               </button>

               <button
                  type="button"
                  className={`w-1/2 transition-colors duration-200 relative z-20 ${isAIMethod ? 'text-primary' : 'text-white'}`}
                  onClick={() => {
                     setIsAIMethod(false);
                     localStorage.removeItem("AIMethod");
                  }}
               >
                  ارزیابی دستی
               </button>
            </div>
         </div>
      </div>
   );
};

export default TabButtons;