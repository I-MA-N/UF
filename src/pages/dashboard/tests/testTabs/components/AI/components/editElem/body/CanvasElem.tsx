import { drawOnCanvas, getDeletedLandmarks, writeLandmarkIndexes } from "../../../../../../../../../utils/AIFuncs";
import { useEffect, useMemo } from "react";
import usePhotoStore from "../../../../../../store/photoStore";
import useAIStore from "../../../../../../store/AIStore";
import FocusCircle from "./FocusCircle";

type CanvasElemProps = {
   canvasRef: React.MutableRefObject<HTMLCanvasElement | null>,
   selectedLandmark: number | null,
   selectedPalette: string[]
}

function CanvasElem({ canvasRef, selectedLandmark, selectedPalette }: CanvasElemProps) {
   const { landmarks, videoSize } = usePhotoStore(state => ({ landmarks: state.landmarks, videoSize: state.videoSize, setLandmarks: state.setLandmarks }));
   const currentSection = useAIStore(store => store.currentSection);

   const isSide = useMemo(() => currentSection?.name.toLowerCase().includes("side"), [currentSection?.name]);

   const deletedLandmarks = useMemo(() => {
      if (isSide !== undefined) return (
         getDeletedLandmarks(landmarks, isSide)
      )
      return [];
   }, [isSide])

   useEffect(() => {
      if (videoSize && landmarks?.length) {
         drawOnCanvas(canvasRef, videoSize.width, videoSize.height, 1.5, selectedPalette, undefined, landmarks, isSide);
         writeLandmarkIndexes(landmarks, deletedLandmarks, canvasRef.current?.getContext("2d"), videoSize.width, videoSize.height, selectedPalette[2]);
      }
   }, [JSON.stringify(landmarks), selectedPalette, deletedLandmarks])

   return (
      <>
         <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 size-full"
            id="editCanvas"
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