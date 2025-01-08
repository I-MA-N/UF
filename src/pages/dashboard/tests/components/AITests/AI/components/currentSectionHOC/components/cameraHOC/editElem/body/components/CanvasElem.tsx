import { filterLandmarks } from "../../../../../../../../../../../../../utils/AIFuncs";
import { useEffect, useMemo, useRef } from "react";
import usePhotoStore from "../../../../../../../../../../store/photoStore";
import useAIStore from "../../../../../../../../../../store/AIStore";
import FocusCircle from "./FocusCircle";
import drawOnCanvas from "../utils/drawOnCanvas";

type CanvasElemProps = {
   selectedLandmark: number | null,
   selectedPalette: string[]
}

function CanvasElem({ selectedLandmark, selectedPalette }: CanvasElemProps) {
   const { landmarks, videoSize } = usePhotoStore(state => ({ landmarks: state.landmarks, videoSize: state.videoSize }));
   const currentSection = useAIStore(store => store.currentSection!);

   const canvasRef = useRef<HTMLCanvasElement>(null);

   const { needableLandmarks, drawableLandmarks } = useMemo(() => (
      filterLandmarks(currentSection, landmarks)
   ), [currentSection?.name])

   useEffect(() => {
      const canvas = canvasRef.current;
      
      if (canvas && landmarks?.length && drawableLandmarks.length > 0) {
         drawOnCanvas(canvas, selectedPalette, landmarks, drawableLandmarks, needableLandmarks);
      }
   }, [selectedPalette, JSON.stringify(landmarks)])

   return (
      <>
         <canvas
            ref={canvasRef}
            id="editCanvas"
            className="absolute top-0 left-0 size-full"
            width={videoSize?.width}
            height={videoSize?.height}
         />

         {
            (typeof selectedLandmark === "number" && canvasRef.current) &&
            <FocusCircle
               canvas={canvasRef.current}
               selectedLandmark={selectedLandmark}
            />
         }
      </>
   );
};

export default CanvasElem;