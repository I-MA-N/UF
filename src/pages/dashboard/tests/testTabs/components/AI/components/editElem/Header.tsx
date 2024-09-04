import { useAIContext } from "../../../../../context/AIContextProvider";
import SampleCanvas from "./body/SampleCanvas";

type HeaderProps = {
   showSample: boolean,
   setShowSample: React.Dispatch<React.SetStateAction<boolean>>,
   selectedLandmark: number | null
}

function Header({ showSample, setShowSample, selectedLandmark }: HeaderProps) {
   const [_AIData, setAIData] = useAIContext();

   return (
      <div className="w-full h-11 relative">
         <button
            type="button"
            onClick={() => {
               setAIData(prevValue => ({
                  ...prevValue,
                  currentSection: undefined,
               }))
            }}
            className="absolute top-0 right-0 flex items-center justify-center size-11 border-2 border-yellow text-yellow bg-primary rounded-full"
         >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" className="w-5">
               <path d="M13 3L8 8M8 8L3 13M8 8L13 13M8 8L3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
         </button>

         <p className="text-center font-Estedad-Black leading-[44px]">ویرایش نقاط</p>

         <SampleCanvas
            setShowSample={setShowSample}
            showSample={showSample}
            selectedLandmark={selectedLandmark}
         />
      </div>
   );
};

export default Header;