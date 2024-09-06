import { Results } from "@mediapipe/holistic";
import { useEffect, useMemo, useRef } from "react";
import { drawOnCanvas } from "../../../../../../../utils/AIFuncs";
import CanvasElem from "./editElem/body/CanvasElem";
import EditCursor from "./editElem/body/EditCursor";

type EditElemProps = {
   photoData: Results,
   setPhotoData: React.Dispatch<React.SetStateAction<Results | undefined>>,
   selectedLandmark: number | null,
   setSelectedLandmark: React.Dispatch<React.SetStateAction<number | null>>
}

function EditElem({ photoData, setPhotoData, selectedLandmark, setSelectedLandmark }: EditElemProps) {
   const canvasRef = useRef<HTMLCanvasElement | null>(null);
   const landmarks = useMemo(() => photoData.poseLandmarks, [photoData])

   useEffect(() => {
      drawOnCanvas(canvasRef.current, photoData.image, photoData.poseLandmarks);
   }, [canvasRef.current, photoData])

   return (
      <>
         <div className="relative">
            <CanvasElem
               canvasRef={canvasRef}
               landmarks={photoData.poseLandmarks}
               selectedLandmark={selectedLandmark}
               setSelectedLandmark={setSelectedLandmark}
               setPhotoData={setPhotoData}
            />

            <EditCursor />

            {!landmarks?.length &&
               <span className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 min-w-52 text-center text-sm font-Estedad-Black text-red bg-white px-4 py-2 rounded-full">
                  نقطه ای در عکس یافت نشد!
               </span>
            }
         </div>

      </>
   );
};

export default EditElem;