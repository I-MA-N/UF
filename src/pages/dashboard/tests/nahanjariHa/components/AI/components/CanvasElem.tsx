import { Results } from "@mediapipe/holistic";
import { useEffect, useMemo, useRef, useState } from "react";
import { canvasClick, canvasMouseMove, drawOnCanvas } from "../../../../../../../utils/AIFuncs";
import SampleCanvasFirstLoad from "./SampleCanvasFirstLoad";

type CanvasElemProps = {
   photoData: Results,
   setPhotoData: React.Dispatch<React.SetStateAction<Results | null>>
   setShowCanvas: React.Dispatch<React.SetStateAction<boolean>>
}

function CanvasElem({ photoData, setPhotoData, setShowCanvas }: CanvasElemProps) {
   const canvasRef = useRef<HTMLCanvasElement | null>(null);
   const landmarks = useMemo(() => photoData.poseLandmarks, [photoData])
   const [selectedLandmark, setSelectedLandmark] = useState<number | null>(null);

   useEffect(() => {
      drawOnCanvas(canvasRef.current, photoData.image, photoData.poseLandmarks);
   }, [canvasRef.current, photoData, selectedLandmark])

   return (
      <div className="relative">
         <SampleCanvasFirstLoad selectedLandmark={selectedLandmark} />
         <canvas
            ref={canvasRef}
            onClick={(e) => landmarks?.length &&
               canvasClick(
                  e,
                  canvasRef.current,
                  selectedLandmark,
                  setSelectedLandmark,
                  landmarks,
                  setPhotoData
               )
            }
            onMouseMove={() => canvasMouseMove(selectedLandmark)}
            width={600}
            height={400}
         />
         {!landmarks?.length && <p>نقطه ای در عکس یافت نشد!</p>}
         <button
            type="button"
            onClick={() => setShowCanvas(false)}
         >
            برگشت
         </button>
      </div>
   );
};

export default CanvasElem;