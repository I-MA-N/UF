import { canvasDown, canvasMove, canvasUp, drawOnCanvas } from "../../../../../../../../../utils/AIFuncs";
import { useEffect } from "react";
import usePhotoStore from "../../../../../../store/photoStore";
import useAIStore from "../../../../../../store/AIStore";

type CanvasElemProps = {
   canvasRef: React.MutableRefObject<HTMLCanvasElement | null>,
   selectedLandmark: number | null,
   setSelectedLandmark: React.Dispatch<React.SetStateAction<number | null>>,
}

function CanvasElem({ canvasRef, selectedLandmark, setSelectedLandmark }: CanvasElemProps) {
   const { landmarks, videoSize, setLandmarks } = usePhotoStore(state => ({ landmarks: state.landmarks, videoSize: state.videoSize, setLandmarks: state.setLandmarks }));
   const currentSection = useAIStore(store => store.currentSection);

   useEffect(() => {
      if (videoSize) {
         const isSide = currentSection?.name.toLowerCase().includes("side");
         drawOnCanvas(canvasRef, videoSize.width, videoSize.height, 1.5, undefined, landmarks, isSide);
      }
   }, [JSON.stringify(landmarks)])

   return (
      <canvas
         ref={canvasRef}

         onMouseDown={(e) => {
            const offsetX = e.nativeEvent.offsetX;
            const offsetY = e.nativeEvent.offsetY;
            canvasDown(landmarks!, setSelectedLandmark, canvasRef.current, offsetX, offsetY);
         }}
         onMouseMove={(e) => {
            const offsetX = e.nativeEvent.offsetX;
            const offsetY = e.nativeEvent.offsetY;
            canvasMove(landmarks!, setLandmarks, selectedLandmark, canvasRef.current, offsetX, offsetY);
         }}
         onMouseUp={() => {
            canvasUp(setSelectedLandmark)
         }}

         onTouchStart={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const offsetX = e.changedTouches[0].pageX - rect.left;
            const offsetY = e.changedTouches[0].pageY - rect.top;
            canvasDown(landmarks!, setSelectedLandmark, canvasRef.current, offsetX, offsetY);
         }}
         onTouchMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const offsetX = e.changedTouches[0].pageX - rect.left;
            const offsetY = e.changedTouches[0].pageY - rect.top;
            canvasMove(landmarks!, setLandmarks, selectedLandmark, canvasRef.current, offsetX, offsetY);
         }}
         onTouchEnd={() => {
            canvasUp(setSelectedLandmark)
         }}

         className="absolute top-0 left-0 w-full"
         id="editCanvas"
      />
   );
};

export default CanvasElem;