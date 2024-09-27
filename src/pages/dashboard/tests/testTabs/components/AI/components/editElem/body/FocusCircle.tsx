import { useMemo, useRef } from "react";
import { circleDown, circleMove } from "../../../../../../../../../utils/AIFuncs";
import usePhotoStore from "../../../../../../store/photoStore";

type FocusCircleProps = {
   canvas: HTMLCanvasElement,
   selectedLandmark: number
}

function FocusCircle({ canvas, selectedLandmark }: FocusCircleProps) {
   const { landmarks, setLandmarks, setIsMovingLandmark } = usePhotoStore(state => ({ landmarks: state.landmarks, setLandmarks: state.setLandmarks, setIsMovingLandmark: state.setIsMovingLandmark }));
   const divRef = useRef<HTMLDivElement>(null);

   const initialCoordinates = useMemo(() => {
      const landmark = landmarks[selectedLandmark];

      const width = 108 / 2;
      const height = 108 / 2;

      return {
         left: landmark.x * canvas.clientWidth - width,
         top: landmark.y * canvas.clientHeight - height
      }
   }, [selectedLandmark])

   return (
      <>
         <div
            ref={divRef}
            className="absolute z-10 size-[108px] rounded-full
            bg-yellow/40 border border-secondary flex items-center justify-center"
            style={{
               left: initialCoordinates.left,
               top: initialCoordinates.top,
            }}

            onMouseDown={(e) => {
               circleDown(e.pageX, e.pageY, divRef.current);
            }}
            onMouseMove={(e) => {
               circleMove(divRef.current, e.pageX, e.pageY, canvas, landmarks, setLandmarks, selectedLandmark);
            }}
            onMouseUp={() => setIsMovingLandmark(false)}

            onTouchStart={(e) => {
               const rect = canvas.getBoundingClientRect();
               const offsetX = e.changedTouches[0].pageX - rect.left;
               const offsetY = e.changedTouches[0].pageY - rect.top;
               circleDown(offsetX, offsetY, divRef.current);
            }}
            onTouchMove={(e) => {
               const rect = canvas.getBoundingClientRect();
               const offsetX = e.changedTouches[0].pageX - rect.left;
               const offsetY = e.changedTouches[0].pageY - rect.top;
               circleMove(divRef.current, offsetX, offsetY, canvas, landmarks, setLandmarks, selectedLandmark);
            }}
            onTouchEnd={() => setIsMovingLandmark(false)}
         >
            <div className="size-2 bg-secondary rounded-full" />
         </div>

         <div
            className="size-full bg-gray/50 absolute top-0 left-0 transition-all duration-500"
         />
      </>
   );
};

export default FocusCircle;