import { useEffect, useMemo, useRef } from "react";
import BackdropElem from "./sampleCanvas/BackdropElem";
import CircleElem from "./sampleCanvas/CircleElem";
import useAIStore from "../../../../../../store/AIStore";
import { drawOnCanvas } from "../../../../../../../../../utils/AIFuncs";
import { NormalizedLandmark } from "@mediapipe/tasks-vision";

type SampleCanvasProps = {
   setShowSample: React.Dispatch<React.SetStateAction<boolean>>,
   showSample: boolean,
   selectedLandmark: number | null
}

function SampleCanvas({ setShowSample, showSample, selectedLandmark }: SampleCanvasProps) {
   const currentSection = useAIStore(state => state.currentSection);
   const sampleLandmarks = useMemo(() => currentSection?.AI.sampleImageLandmarks, [currentSection]) as NormalizedLandmark[];
   console.log(sampleLandmarks)

   const canvasRef = useRef<HTMLCanvasElement>(null);

   const landmarkCoordinates = useMemo(() => {
      const canvas = canvasRef.current;
      if (selectedLandmark !== null && sampleLandmarks && canvas) {
         const landmark = sampleLandmarks[selectedLandmark];
         return {
            left: landmark.x * canvas.clientWidth - 12,
            top: landmark.y * canvas.clientHeight - 12,
         }
      }

      return null;
   }, [selectedLandmark, sampleLandmarks])

   useEffect(() => {
      const imgElem = document.getElementById(currentSection!.name) as HTMLImageElement | null;
      if (canvasRef.current && imgElem) {
         drawOnCanvas(canvasRef, canvasRef.current.clientWidth, canvasRef.current.clientHeight, imgElem, { nature: sampleLandmarks, dummy: undefined });
      }
   }, [canvasRef.current, selectedLandmark, sampleLandmarks])

   return (
      <div className="absolute top-0 left-0 flex flex-col items-center">
         <button
            type="button"
            className="h-11 relative z-50 underline underline-offset-8"
            style={{
               textShadow: "#083C5A 0 2px 0"
            }}
            onClick={() => setShowSample(prevValue => !prevValue)}
         >
            نمونه
         </button>

         <div className={`flex flex-col items-center transition-all duration-300 ${showSample ? "opacity-100 z-40" : "opacity-0 -z-10"}`}>
            <img src="/images/sample-rectangle.png" />

            <div className="bg-primary px-2 py-5 border rounded-2xl">
               <div className="relative">
                  <canvas
                     ref={canvasRef}
                     width={120}
                     height={170}
                  />

                  <BackdropElem isShown={landmarkCoordinates === null ? false : true} />
                  <CircleElem landmarkCoordinates={landmarkCoordinates} />
               </div>
            </div>
         </div>
      </div>
   );
};

export default SampleCanvas;