import { useEffect, useState } from "react";
import { useAIContext } from "../../../../context/AIContextProvider";
import { Results } from "@mediapipe/holistic";
import Header from "./editElem/Header";
import Footer from "./editElem/Footer";
import Body from "./editElem/Body";
import Loading from "../../../../../../common/Loading";

type EditElemFirstLoadProps = {
   setShowCanvas: React.Dispatch<React.SetStateAction<boolean>>
}

function EditElemFirstLoad({ setShowCanvas }: EditElemFirstLoadProps) {
   const [AIData] = useAIContext();
   const [photoData, setPhotoData] = useState<Results | null | undefined>(undefined);
   const [showSample, setShowSample] = useState(false);
   const [selectedLandmark, setSelectedLandmark] = useState<number | null>(null);

   useEffect(() => {
      if (AIData?.results) setPhotoData(AIData.results);
      else setPhotoData(null);
   }, [AIData?.results])

   return (
      <div className="flex flex-col items-center justify-center gap-7 min-h-screen">
         <Header
            showSample={showSample}
            setShowSample={setShowSample}
            selectedLandmark={selectedLandmark}
         />
         {
            photoData === undefined ?
               <Loading fullHeight={false} /> :
               <Body
                  photoData={photoData}
                  setPhotoData={setPhotoData}
                  selectedLandmark={selectedLandmark}
                  setSelectedLandmark={setSelectedLandmark}
               />
         }
         <Footer
            setShowCanvas={setShowCanvas}
            photoData={photoData}
         />
      </div>
   )
};

export default EditElemFirstLoad;