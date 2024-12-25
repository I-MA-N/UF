import PALETTES from "./utils/PALETTES";

type PaletteBtnsProps = {
   selectedPalette: string[],
   setSelectedPalette: React.Dispatch<React.SetStateAction<string[]>>
}

function PaletteBtns({ selectedPalette, setSelectedPalette }: PaletteBtnsProps) {
   return (
      <div className="absolute top-1/2 -translate-y-1/2 left-0 flex gap-1 xs:gap-2 lg:gap-4 items-center">
         {
            PALETTES.map(palette => {
               const isSelected = palette.toString() === selectedPalette.toString();
               
               return (
                  <button
                     key={palette.toString()}
                     type="button"
                     onClick={() => setSelectedPalette(palette)}
                     className={`flex flex-col rounded-full overflow-hidden
                        border-2 ${isSelected ? "border-secondary" : "border-white"} 
                        transition-colors duration-300 w-6 lg:w-8 h-full
                     `}
                  >
                     <div
                        className="w-full h-2.5 lg:h-3.5"
                        style={{
                           backgroundColor: palette[0]
                        }}
                     />
                     <div
                        className="w-full h-1.5 lg:h-2"
                        style={{
                           backgroundColor: palette[1]
                        }}
                     />
                     <div
                        className="w-full h-1 lg:h-1.5"
                        style={{
                           backgroundColor: palette[2]
                        }}
                     />
                  </button>
               )
            })
         }
      </div>
   );
};

export default PaletteBtns;