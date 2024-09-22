import { useMemo, useRef, useState } from "react";
import { circleDown, circleMove } from "../../../../../../../../../utils/AIFuncs";
import usePhotoStore from "../../../../../../store/photoStore";

type FocusCircleProps = {
   canvas: HTMLCanvasElement,
   selectedLandmark: number
}

function FocusCircle({ canvas, selectedLandmark }: FocusCircleProps) {
   const { landmarks, setLandmarks } = usePhotoStore(state => ({ landmarks: state.landmarks, setLandmarks: state.setLandmarks }));
   const [isClicked, setIsClicked] = useState(false);

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
            id="focusCircle"
            className="absolute z-10 size-[108px] rounded-full
            bg-yellow/40 border border-secondary flex items-center justify-center"
            style={{
               left: initialCoordinates.left,
               top: initialCoordinates.top,
            }}

            onMouseDown={(e) => {
               circleDown(setIsClicked, e.pageX, e.pageY);
            }}
            onMouseMove={(e) => {
               circleMove(isClicked, e.pageX, e.pageY, canvas, landmarks, setLandmarks, selectedLandmark)
            }}
            onMouseUp={() => setIsClicked(false)}

            onTouchStart={(e) => {
               const rect = canvas.getBoundingClientRect();
               const offsetX = e.changedTouches[0].pageX - rect.left;
               const offsetY = e.changedTouches[0].pageY - rect.top;
               circleDown(setIsClicked, offsetX, offsetY);
            }}
            onTouchMove={(e) => {
               const rect = canvas.getBoundingClientRect();
               const offsetX = e.changedTouches[0].pageX - rect.left;
               const offsetY = e.changedTouches[0].pageY - rect.top;
               circleMove(isClicked, offsetX, offsetY, canvas, landmarks, setLandmarks, selectedLandmark);
            }}
            onTouchEnd={() => setIsClicked(false)}
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