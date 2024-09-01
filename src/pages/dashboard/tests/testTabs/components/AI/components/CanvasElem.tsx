import { Results } from "@mediapipe/holistic";
import { useEffect, useMemo, useRef, useState } from "react";
import { canvasDown, canvasMove, canvasUp, drawOnCanvas } from "../../../../../../../utils/AIFuncs";
import SampleCanvas from "./SampleCanvas";
import { useAIContext } from "../../../../context/AIContextProvider";

type CanvasElemProps = {
   photoData: Results,
   setPhotoData: React.Dispatch<React.SetStateAction<Results | null>>
}

function CanvasElem({ photoData, setPhotoData }: CanvasElemProps) {
   const [AIData] = useAIContext();
   const canvasRef = useRef<HTMLCanvasElement | null>(null);
   const landmarks = useMemo(() => photoData.poseLandmarks, [photoData])
   const [selectedLandmark, setSelectedLandmark] = useState<number | null>(null);

   useEffect(() => {
      drawOnCanvas(canvasRef.current, photoData.image, photoData.poseLandmarks);
   }, [canvasRef.current, photoData])

   return (
      <>
         <SampleCanvas selectedLandmark={selectedLandmark} />
         <div className="relative">
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
               onTouchEnd={() => canvasUp(setSelectedLandmark)}

               width={AIData?.videoSize?.width}
               height={AIData?.videoSize?.height}
               className="mx-auto"
            />
            
            <div
               id="circle"
               className="absolute top-0 left-0 hidden items-center justify-center size-6 rounded-full bg-yellow/50 border-[0.5px] border-red pointer-events-none"
            >
               <img src="/images/edit-cursor.png" alt="" />
            </div>
         </div>

         {!landmarks?.length && <p>نقطه ای در عکس یافت نشد!</p>}
      </>
   );
};

export default CanvasElem;