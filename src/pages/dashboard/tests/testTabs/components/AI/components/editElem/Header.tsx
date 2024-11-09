import useAIStore from "../../../../../store/AIStore";
import PaletteBtns from "./header/PaletteBtns";
import SampleImage from "./header/SampleImage";
import ZoomElem from "./header/ZoomElem";

type HeaderProps = {
   selectedPalette: string[],
   setSelectedPalette: React.Dispatch<React.SetStateAction<string[]>>,
   selectedLandmark: number | null
}

function Header({ selectedPalette, setSelectedPalette, selectedLandmark }: HeaderProps) {
   const removeCurrentSection = useAIStore(state => state.removeCurrentSection);

   return (
      <div className="w-full h-11 lg:h-14 relative">
         <button
            type="button"
            onClick={removeCurrentSection}
            className="absolute top-0 right-0 flex items-center justify-center size-11 lg:size-14 border-2 border-yellow text-yellow bg-primary rounded-full"
         >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" className="size-5 lg:size-6">
               <path d="M13 3L8 8M8 8L3 13M8 8L13 13M8 8L3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
         </button>

         <p className="text-center font-Estedad-Black leading-[2.75rem] lg:text-xl lg:leading-[3.5rem]">ویرایش نقاط</p>

         <PaletteBtns
            selectedPalette={selectedPalette}
            setSelectedPalette={setSelectedPalette}
         />

         <ZoomElem />

         {
            typeof selectedLandmark === "number" &&
            <SampleImage
               selectedLandmark={selectedLandmark}
            />
         }
      </div>
   );
};

export default Header;