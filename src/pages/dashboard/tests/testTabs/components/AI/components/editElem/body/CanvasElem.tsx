import { canvasDown, canvasMove, canvasUp } from "../../../../../../../../../utils/AIFuncs";
import { useEffect } from "react";
import useAIStore from "../../../../../../store/AIStore";
import { NormalizedLandmark } from "@mediapipe/tasks-vision";

type CanvasElemProps = {
   canvasRef: React.MutableRefObject<HTMLCanvasElement | null>,
   landmarks: NormalizedLandmark[],
   selectedLandmark: number | null,
   setSelectedLandmark: React.Dispatch<React.SetStateAction<number | null>>,
}

function CanvasElem({ canvasRef, landmarks, selectedLandmark, setSelectedLandmark }: CanvasElemProps) {
   const videoSize = useAIStore(state => state.videoSize);
   
   useEffect(() => {
      document.documentElement.style.overflow = "hidden";

      return () => {
         document.documentElement.style.overflow = "auto";
      }
   }, [])

   return (
      <canvas
         ref={canvasRef}

         onMouseDown={(e) => {
            const offsetX = e.nativeEvent.offsetX;
            const offsetY = e.nativeEvent.offsetY;
            canvasDown(landmarks, setSelectedLandmark, canvasRef.current, offsetX, offsetY);
         }}
         onMouseMove={(e) => {
            const offsetX = e.nativeEvent.offsetX;
            const offsetY = e.nativeEvent.offsetY;
            canvasMove(landmarks, selectedLandmark, canvasRef.current, offsetX, offsetY);
         }}
         onMouseUp={() => canvasUp(setSelectedLandmark)}

         onTouchStart={(e) => {
            // document.querySelectorAll("*").forEach(elem => elem.classList.add("touch-action-none"));
            // e.currentTarget.style.touchAction = "auto !important";
            const rect = e.currentTarget.getBoundingClientRect();
            const offsetX = e.targetTouches[0].pageX - rect.left;
            const offsetY = e.targetTouches[0].pageY - rect.top;
            canvasDown(landmarks, setSelectedLandmark, canvasRef.current, offsetX, offsetY);
         }}
         onTouchMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            const offsetX = e.targetTouches[0].pageX - rect.left;
            const offsetY = e.targetTouches[0].pageY - rect.top;
            canvasMove(landmarks, selectedLandmark, canvasRef.current, offsetX, offsetY);
         }}
         onTouchEnd={() => {
            // document.querySelectorAll("*").forEach(elem => elem.classList.remove("touch-action-none"))
            canvasUp(setSelectedLandmark)
         }}

         width={videoSize?.width}
         height={videoSize?.height}
         className="mx-auto"
      />
   );
};

export default CanvasElem;