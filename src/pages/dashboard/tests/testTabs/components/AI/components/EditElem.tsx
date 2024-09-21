import { useState } from "react";
import Header from "./editElem/Header";
import Footer from "./editElem/Footer";
import Body from "./editElem/Body";

function EditElem() {
   const [showSample, setShowSample] = useState(false);
   const [selectedLandmark, setSelectedLandmark] = useState<number | null>(null);

   return (
      <div className="flex flex-col items-center justify-center gap-7 min-h-dvh">
         <Header
            showSample={showSample}
            setShowSample={setShowSample}
            selectedLandmark={selectedLandmark}
         />

         <Body
            selectedLandmark={selectedLandmark}
            setSelectedLandmark={setSelectedLandmark}
         />

         <Footer
            selectedLandmark={selectedLandmark}
            setSelectedLandmark={setSelectedLandmark}
         />
      </div>
   )
};

export default EditElem;