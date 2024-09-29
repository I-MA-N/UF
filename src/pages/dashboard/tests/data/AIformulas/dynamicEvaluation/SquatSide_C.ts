import { NormalizedLandmark } from "@mediapipe/tasks-vision";

function SquatSide_C(landmarks: NormalizedLandmark[], videoSize: { width: number, height: number }) {
   let isEven = true;
   if (landmarks[11].z < landmarks[12].z) isEven = false;

   const left = (isEven ? landmarks[24].x : landmarks[23].x) * videoSize.width;
   const top = (isEven ? landmarks[16].y : landmarks[15].y) * videoSize.height;
   const width = ((isEven ? landmarks[20].x : landmarks[19].x) - (isEven ? landmarks[24].x : landmarks[23].x)) * videoSize.width;
   const height = ((isEven ? landmarks[30].y : landmarks[29].y) - (isEven ? landmarks[16].y : landmarks[15].y)) * videoSize.height;

   return {
      left: left - 40,
      top: top - 50,
      width: width + 120,
      height: height + 100
   }
}

export default SquatSide_C;