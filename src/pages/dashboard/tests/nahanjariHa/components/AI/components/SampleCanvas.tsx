import { useEffect, useMemo, useRef, useState } from "react";
import { drawOnCanvas, highlightLandmark } from "../../../../../../../utils/AIFuncs";
import { useAIContext } from "../../../../context/AIContextProvider";
import { GpuBuffer } from "@mediapipe/pose";

type SampleCanvasProps = {
   sampleImage: GpuBuffer,
   selectedLandmark: number | null
}

function SampleCanvas({ sampleImage, selectedLandmark }: SampleCanvasProps) {
   const [AIData] = useAIContext();
   const imageState = useMemo(() => AIData?.imageState, [AIData?.imageState]);

   const canvasRef = useRef<HTMLCanvasElement>(null);
   const [landmarkDetails, setLandmarkDetails] = useState<
      { top: number, left: number } | null
   >(null);

   useEffect(() => {
      if (imageState?.sampleImageLandmarks) {
         if (typeof selectedLandmark === "number") {
            highlightLandmark(canvasRef.current, selectedLandmark, imageState.sampleImageLandmarks, setLandmarkDetails)
         } else {
            setLandmarkDetails(null);
            drawOnCanvas(canvasRef.current, sampleImage, imageState?.sampleImageLandmarks);
         }
      }
   }, [canvasRef.current, selectedLandmark, sampleImage])

   return (
      <div className="relative">
         <canvas
            ref={canvasRef}
            width={600}
            height={400}
         />
         <div
            className={
               `absolute top-0 left-0 bg-white/50 size-full 
               ${landmarkDetails ? "opacity-100 z-0" : "opacity-0 -z-10"}
               `
            }
         />
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