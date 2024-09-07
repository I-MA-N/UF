import { useEffect, useState } from "react";
import Header from "./editElem/Header";
import Footer from "./editElem/Footer";
import EditElem from "./EditElem";
import usePhotoStore from "../../../../store/photoStore";
import { PoseLandmarker } from "@mediapipe/tasks-vision";

type EditElemFirstLoadProps = {
   model: PoseLandmarker
}

function EditElemFirstLoad({ model }: EditElemFirstLoadProps) {
   const { image, landmarks, setLandmarks } = usePhotoStore(state => ({ image: state.image, landmarks: state.landmarks, setLandmarks: state.setLandmarks }));

   const [showSample, setShowSample] = useState(false);
   const [selectedLandmark, setSelectedLandmark] = useState<number | null>(null);

   useEffect(() => {
      if (image) {
         model.setOptions({
            runningMode: "IMAGE"
         });
         const result = model.detect(image);

         setLandmarks(result.landmarks[0]);
      }
   }, [image])

   return (
      <div className="flex flex-col items-center justify-center gap-7 min-h-dvh">
         <Header
            showSample={showSample}
            setShowSample={setShowSample}
            selectedLandmark={selectedLandmark}
         />
         {
            landmarks &&
            <EditElem
               selectedLandmark={selectedLandmark}
               setSelectedLandmark={setSelectedLandmark}
            />
         }

         <Footer />
      </div>
   )
};

export default EditElemFirstLoad;