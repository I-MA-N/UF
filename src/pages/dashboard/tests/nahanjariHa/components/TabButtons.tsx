type TabButtonsProps = {
   setIsAIMethod: React.Dispatch<React.SetStateAction<boolean>>
}

function TabButtons({ setIsAIMethod }: TabButtonsProps) {
   return (
      <div className="flex mb-10">
         <button type="button" className="w-1/2" onClick={() => {
            setIsAIMethod(true);
            localStorage.setItem("AIMethod", "true");
         }}>ارزیابی با هوش مصنوعی</button>
         <button type="button" className="w-1/2" onClick={() => {
            setIsAIMethod(false);
            localStorage.removeItem("AIMethod");
         }}>ارزیابی دستی</button>
      </div>
   );
};

export default TabButtons;