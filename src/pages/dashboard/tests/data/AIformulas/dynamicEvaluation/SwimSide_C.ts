import { NormalizedLandmark } from "@mediapipe/tasks-vision";

function SwimSide_C(landmarks: NormalizedLandmark[], videoSize: { width: number, height: number }) {
   let isEven = true;
   if (landmarks[11].z < landmarks[12].z) isEven = false;

   const left = (isEven ? landmarks[30].x : landmarks[3].x) * videoSize.width;
   const top = (isEven ? landmarks[12].y : landmarks[11].y) * videoSize.height;
   const width = ((isEven ? landmarks[6].x : landmarks[29].x) - (isEven ? landmarks[30].x : landmarks[3].x)) * videoSize.width;
   const height = ((isEven ? landmarks[16].y : landmarks[15].y) - (isEven ? landmarks[8].y : landmarks[7].y)) * videoSize.height;

   return {
      left: left - 35,
      top: top - 40,
      width: width + 100,
      height: height + 70
   }
}

export default SwimSide_C;