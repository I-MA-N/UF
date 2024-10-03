import { drawOnCanvas, getEditableLandmarks } from "../../../../../../../../../utils/AIFuncs";
import { useEffect, useMemo, useRef } from "react";
import usePhotoStore from "../../../../../../store/photoStore";
import useAIStore from "../../../../../../store/AIStore";
import FocusCircle from "./FocusCircle";

type CanvasElemProps = {
   selectedLandmark: number | null,
   selectedPalette: string[]
}

function CanvasElem({ selectedLandmark, selectedPalette }: CanvasElemProps) {
   const { landmarks, videoSize } = usePhotoStore(state => ({ landmarks: state.landmarks, videoSize: state.videoSize }));
   const currentSection = useAIStore(store => store.currentSection);

   const canvasRef = useRef<HTMLCanvasElement>(null);

   const { isSide, editableLandmarks } = useMemo(() => {
      if (currentSection) {
         const isSide = currentSection.name.toLowerCase().includes("side");

         const editableLandmarks = getEditableLandmarks(landmarks);
         return {
            isSide,
            editableLandmarks
         }
      }

      return {
         isSide: undefined,
         editableLandmarks: undefined
      }
   }, [currentSection])

   useEffect(() => {
      const canvas = canvasRef.current;

      if (canvas && landmarks?.length && isSide !== undefined && editableLandmarks !== undefined) {
         drawOnCanvas(canvas, selectedPalette, landmarks, isSide, editableLandmarks);
      }
   }, [selectedPalette, JSON.stringify(landmarks), isSide, editableLandmarks])

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