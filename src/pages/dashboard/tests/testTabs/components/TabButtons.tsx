type TabButtonsProps = {
   isAIMethod: boolean,
   setIsAIMethod: React.Dispatch<React.SetStateAction<boolean>>
}

function TabButtons({ isAIMethod, setIsAIMethod }: TabButtonsProps) {
   return (
      <div className="mb-10">
         <div className="relative z-0 inner-shadow">
            <div
               className="w-1/2 h-11 absolute top-1/2 -translate-y-1/2 z-10 bg-secondary rounded-3xl transition-all duration-200 outer-shadow"
               style={{ right: isAIMethod ? "2px" : "calc(50% - 2px)" }}
            />
            <div className="flex items-center h-12 bg-white rounded-3xl">
               <button
                  type="button"
                  className={`w-1/2 text-xs transition-colors duration-200 relative z-20 ${isAIMethod ? 'text-white' : 'text-primary'}`}
                  onClick={() => {
                     setIsAIMethod(true);
                     localStorage.setItem("AIMethod", "true");
                  }}>
                  ارزیابی با هوش مصنوعی
               </button>

               <button
                  type="button"
                  className={`w-1/2 text-xs transition-colors duration-200 relative z-20 ${isAIMethod ? 'text-primary' : 'text-white'}`}
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