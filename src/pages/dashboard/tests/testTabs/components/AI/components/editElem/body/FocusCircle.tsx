import { useMemo, useRef } from "react";
import usePhotoStore from "../../../../../../store/photoStore";
import { circleDown, circleMove, circleUp } from "./pointerEventFns";

type FocusCircleProps = {
   canvas: HTMLCanvasElement,
   selectedLandmark: number
}

function FocusCircle({ canvas, selectedLandmark }: FocusCircleProps) {
   const landmarks = usePhotoStore(state => state.landmarks);
   const circleRef = useRef<HTMLDivElement>(null);

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
            ref={circleRef}
            className="absolute z-10 size-[108px] rounded-full
            bg-yellow/40 border border-secondary flex items-center justify-center"
            style={{
               left: initialCoordinates.left,
               top: initialCoordinates.top,
            }}

            // Start dragging
            onMouseDown={(e) => {
               circleDown(e.pageX, e.pageY, circleRef.current!);
            }}
            onTouchStart={(e) => {
               const rect = canvas.getBoundingClientRect();
               const offsetX = e.changedTouches[0].pageX - rect.left;
               const offsetY = e.changedTouches[0].pageY - rect.top;
               circleDown(offsetX, offsetY, circleRef.current!);
            }}

            // End dragging
            onTouchEnd={circleUp}
            onMouseUp={circleUp}

            // Dragging
            onMouseMove={(e) => {
               circleMove(circleRef.current!, e.pageX, e.pageY, canvas, selectedLandmark);
            }}
            onTouchMove={(e) => {
               const rect = canvas.getBoundingClientRect();
               const offsetX = e.changedTouches[0].pageX - rect.left;
               const offsetY = e.changedTouches[0].pageY - rect.top;
               circleMove(circleRef.current!, offsetX, offsetY, canvas, selectedLandmark);
            }}
         >
            {/* <div className="size-[10px] bg-secondary rounded-full" /> */}
         </div>

         <div
            className="size-full bg-gray/50 absolute top-0 left-0 transition-all duration-500"
         />
      </>
   );
};

export default FocusCircle;