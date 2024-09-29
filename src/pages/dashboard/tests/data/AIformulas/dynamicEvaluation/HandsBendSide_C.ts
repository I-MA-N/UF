import { NormalizedLandmark } from "@mediapipe/tasks-vision";

function HandsBendSide_C(landmarks: NormalizedLandmark[], videoSize: { width: number, height: number }) {
   let isEven = true;
   if (landmarks[11].z < landmarks[12].z) isEven = false;
   
   const left = (isEven ? landmarks[30].x : landmarks[29].x) * videoSize.width;
   const top = (isEven ? landmarks[20].y : landmarks[19].y) * videoSize.height;
   const height = ((isEven ? landmarks[30].y : landmarks[29].y) - (isEven ? landmarks[20].y : landmarks[19].y)) * videoSize.height;

   return {
      left: left - 40,
      top: top - 20,
      width: left + 150,
      height: height + 40
   }
}

export default HandsBendSide_C;