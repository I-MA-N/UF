import { useEffect, useState } from "react";
import { Holistic, Results } from "@mediapipe/holistic";
import Header from "./editElem/Header";
import Footer from "./editElem/Footer";
import Body from "./editElem/Body";
import Loading from "../../../../../../common/Loading";

type EditElemFirstLoadProps = {
   model: Holistic,
   setShowCanvas: React.Dispatch<React.SetStateAction<boolean>>
}

let photoDataRef: Results | undefined = undefined;

function EditElemFirstLoad({ model, setShowCanvas }: EditElemFirstLoadProps) {
   const [photoData, setPhotoData] = useState<Results | undefined>(undefined);

   const [showSample, setShowSample] = useState(false);
   const [selectedLandmark, setSelectedLandmark] = useState<number | null>(null);

   useEffect(() => {
      model.onResults(results => {
         photoDataRef = results;
         console.log("in result", photoDataRef);
      });
   }, [])

   useEffect(() => {
      setPhotoData(photoDataRef);
   }, [photoDataRef])
   console.log(photoData, photoDataRef);

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