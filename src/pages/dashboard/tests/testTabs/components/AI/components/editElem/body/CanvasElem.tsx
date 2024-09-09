import { canvasDown, canvasMove, canvasUp, drawOnCanvas } from "../../../../../../../../../utils/AIFuncs";
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
      document.documentElement.style.overflow = "hidden";

      return () => {
         document.documentElement.style.overflow = "auto";
      }
   }, [])

   useEffect(() => {
      if (videoSize) {
         drawOnCanvas(canvasRef, videoSize.width, videoSize.height, undefined, landmarks);
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
            canvasMove(landmarks!, selectedLandmark, canvasRef.current, offsetX, offsetY);
         }}
         onMouseUp={() => canvasUp(setSelectedLandmark)}

         onTouchStart={(e) => {
            // document.querySelectorAll("*").forEach(elem => elem.classList.add("touch-action-none"));
            // e.currentTarget.style.touchAction = "auto !important";
            const rect = e.currentTarget.getBoundingClientRect();
            const offsetX = e.targetTouches[0].pageX - rect.left;
            const offsetY = e.targetTouches[0].pageY - rect.top;
            canvasDown(landmarks!, setSelectedLandmark, canvasRef.current, offsetX, offsetY);
         }}
         onTouchMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const offsetX = e.targetTouches[0].pageX - rect.left;
            const offsetY = e.targetTouches[0].pageY - rect.top;
            canvasMove(landmarks!, selectedLandmark, canvasRef.current, offsetX, offsetY);
         }}
         onTouchEnd={() => {
            // document.querySelectorAll("*").forEach(elem => elem.classList.remove("touch-action-none"))
            canvasUp(setSelectedLandmark)
         }}

         className="absolute top-0 left-0"
      />
   );
};

export default CanvasElem;