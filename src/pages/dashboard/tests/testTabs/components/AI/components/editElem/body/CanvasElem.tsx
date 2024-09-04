import { NormalizedLandmarkList, Results } from "@mediapipe/holistic";
import { canvasDown, canvasMove, canvasUp } from "../../../../../../../../../utils/AIFuncs";
import { useAIContext } from "../../../../../../context/AIContextProvider";
import { useEffect } from "react";

type CanvasElemProps = {
   canvasRef: React.MutableRefObject<HTMLCanvasElement | null>,
   landmarks: NormalizedLandmarkList,
   selectedLandmark: number | null,
   setSelectedLandmark: React.Dispatch<React.SetStateAction<number | null>>,
   setPhotoData: React.Dispatch<React.SetStateAction<Results | null | undefined>>
}

function CanvasElem({ canvasRef, landmarks, selectedLandmark, setSelectedLandmark, setPhotoData }: CanvasElemProps) {
   const [AIData] = useAIContext();

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
            canvasMove(selectedLandmark, setPhotoData, canvasRef.current, offsetX, offsetY);
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
            canvasMove(selectedLandmark, setPhotoData, canvasRef.current, offsetX, offsetY);
         }}
         onTouchEnd={() => {
            // document.querySelectorAll("*").forEach(elem => elem.classList.remove("touch-action-none"))
            canvasUp(setSelectedLandmark)
         }}

         width={AIData?.videoSize?.width}
         height={AIData?.videoSize?.height}
         className="mx-auto"
      />
   );
};

export default CanvasElem;