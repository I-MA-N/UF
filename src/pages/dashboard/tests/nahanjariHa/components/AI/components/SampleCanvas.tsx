import { useEffect, useMemo, useRef, useState } from "react";
import { drawOnCanvas, highlightLandmark } from "../../../../../../../utils/AIFuncs";
import { useAIContext } from "../../../../context/AIContextProvider";

type SampleCanvasProps = {
   selectedLandmark: number | null
}

function SampleCanvas({ selectedLandmark }: SampleCanvasProps) {
   const [AIData] = useAIContext();
   const imageState = useMemo(() => AIData?.imageState, [AIData?.imageState]);

   const canvasRef = useRef<HTMLCanvasElement>(null);
   const [landmarkDetails, setLandmarkDetails] = useState<
      { top: number, left: number } | null
   >(null);

   useEffect(() => {
      if (imageState?.name && imageState?.sampleImageLandmarks) {
         if (typeof selectedLandmark === "number") {
            highlightLandmark(canvasRef.current, selectedLandmark, imageState.sampleImageLandmarks, setLandmarkDetails)
         } else {
            setLandmarkDetails(null);
            const imgElem = document.getElementById(imageState.name) as HTMLImageElement | null;
            drawOnCanvas(canvasRef.current, imgElem, imageState?.sampleImageLandmarks);
         }
      }
   }, [canvasRef.current, selectedLandmark])

   return (
      <div className="absolute top-0 left-0">
         <canvas
            ref={canvasRef}
            width={100}
            height={200}
         />

         {/* Backdrop when landmarks is selected */}
         <div
            className={
               `absolute top-0 left-0 bg-white/50 size-full 
               ${landmarkDetails ? "opacity-100 z-0" : "opacity-0 -z-10"}
               `
            }
         />
         {/* Circle when landmarks is selected */}
         <div
            className={
               `absolute size-7 border-2 border-primary rounded-full
               ${landmarkDetails ? "opacity-100 z-10" : "opacity-0 z-0"}
               `
            }
            style={{
               left: landmarkDetails?.left || 0,
               top: landmarkDetails?.top || 0,
            }}
         />
      </div>
   );
};

export default SampleCanvas;