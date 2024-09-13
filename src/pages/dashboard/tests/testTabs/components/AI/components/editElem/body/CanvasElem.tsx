import { canvasDown, canvasMove, canvasUp, updateMiddleLine, drawOnCanvas } from "../../../../../../../../../utils/AIFuncs";
import { useEffect } from "react";
import usePhotoStore from "../../../../../../store/photoStore";

type CanvasElemProps = {
   canvasRef: React.MutableRefObject<HTMLCanvasElement | null>,
   selectedLandmark: number | null,
   setSelectedLandmark: React.Dispatch<React.SetStateAction<number | null>>,
}

function CanvasElem({ canvasRef, selectedLandmark, setSelectedLandmark }: CanvasElemProps) {
   const { landmarks, videoSize } = usePhotoStore(state => ({ landmarks: state.landmarks, videoSize: state.videoSize }));

   useEffect(() => {
      if (videoSize) {
         drawOnCanvas(canvasRef, videoSize.width, videoSize.height, undefined, landmarks);
      }
      updateMiddleLine(landmarks.nature!);
   }, [JSON.stringify(landmarks)])

   return (
      <canvas
         ref={canvasRef}

         onMouseDown={(e) => {
            const offsetX = e.nativeEvent.offsetX;
            const offsetY = e.nativeEvent.offsetY;
            canvasDown(landmarks.nature!, setSelectedLandmark, canvasRef.current, offsetX, offsetY);
         }}
         onMouseMove={(e) => {
            const offsetX = e.nativeEvent.offsetX;
            const offsetY = e.nativeEvent.offsetY;
            canvasMove(landmarks.nature!, selectedLandmark, canvasRef.current, offsetX, offsetY);
         }}
         onMouseUp={() => {
            canvasUp(setSelectedLandmark)
         }}

         onTouchStart={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const offsetX = e.changedTouches[0].pageX - rect.left;
            const offsetY = e.changedTouches[0].pageY - rect.top;
            canvasDown(landmarks.nature!, setSelectedLandmark, canvasRef.current, offsetX, offsetY);
         }}
         onTouchMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const offsetX = e.changedTouches[0].pageX - rect.left;
            const offsetY = e.changedTouches[0].pageY - rect.top;
            canvasMove(landmarks.nature!, selectedLandmark, canvasRef.current, offsetX, offsetY);
         }}
         onTouchEnd={() => {
            canvasUp(setSelectedLandmark)
         }}

         className="absolute top-0 left-0"
      />
   );
};

export default CanvasElem;