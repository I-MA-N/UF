import { useState } from "react";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import Body from "./body/Body";
import PALETTES from "./header/utils/PALETTES";

function EditElem() {
   const [selectedLandmark, setSelectedLandmark] = useState<number | null>(null);
   const [selectedPalette, setSelectedPalette] = useState(PALETTES[0]);

   return (
      <div className="flex flex-col items-center justify-center gap-4 min-h-dvh relative">
         <Header
            selectedPalette={selectedPalette}
            selectedLandmark={selectedLandmark}
            setSelectedPalette={setSelectedPalette}
         />

         <Body
            selectedLandmark={selectedLandmark}
            selectedPalette={selectedPalette}
         />

         <Footer
            selectedLandmark={selectedLandmark}
            setSelectedLandmark={setSelectedLandmark}
         />
      </div>
   )
};

export default EditElem;