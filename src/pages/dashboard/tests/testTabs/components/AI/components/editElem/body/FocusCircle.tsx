import { useState } from "react";
import { circleDown, circleMove } from "../../../../../../../../../utils/AIFuncs";
import usePhotoStore from "../../../../../../store/photoStore";

type FocusCircleProps = {
   canvas: HTMLCanvasElement,
   selectedLandmark: number
}

function FocusCircle({ canvas, selectedLandmark }: FocusCircleProps) {
   const { landmarks, setLandmarks } = usePhotoStore(state => ({ landmarks: state.landmarks, setLandmarks: state.setLandmarks }));
   const [isClicked, setIsClicked] = useState(false);

   return (
      <>
         <div
            id="focusCircle"
            className="absolute top-0 left-0 z-10 size-[108px] rounded-full
            bg-yellow/40 border-2 border-[#000]"

            onMouseDown={(e) => {
               console.log(e);
               const pageX = e.pageX;
               const pageY = e.pageY;
               circleDown(setIsClicked, pageX, pageY);
            }}
            onMouseMove={(e) => {
               const pageX = e.pageX;
               const pageY = e.pageY;
               circleMove(isClicked, pageX, pageY, canvas, landmarks, setLandmarks, selectedLandmark)
            }}
            onMouseUp={() => setIsClicked(false)}

            onTouchStart={(e) => {
               console.log(e);
               const rect = canvas.getBoundingClientRect();
               const offsetX = e.changedTouches[0].pageX - rect.left;
               const offsetY = e.changedTouches[0].pageY - rect.top;
               circleDown(setIsClicked, offsetX, offsetY);
            }}
            onTouchMove={(e) => {
               const rect = canvas.getBoundingClientRect();
               const offsetX = e.changedTouches[0].pageX - rect.left;
               const offsetY = e.changedTouches[0].pageY - rect.top;
               // console.log(offsetX, offsetY);
               circleMove(isClicked, offsetX, offsetY, canvas, landmarks, setLandmarks, selectedLandmark);
            }}
            onTouchEnd={() => setIsClicked(false)}
         />

         <div
            className="size-full bg-gray/50 absolute top-0 left-0 transition-all duration-500"
         />
      </>
   );
};

export default FocusCircle;