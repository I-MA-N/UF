import { NormalizedLandmark } from "@mediapipe/tasks-vision";

function SquatSide_C(landmarks: NormalizedLandmark[], videoSize: { width: number, height: number }) {
   let isEven = true;
   if (landmarks[11].z < landmarks[12].z) isEven = false;

   const leftLandmark = isEven ? 24 : 15;
   const left = landmarks[leftLandmark].x * videoSize.width;

   const topLandmark = landmarks[8].y > landmarks[16].y ? 16 : 8;
   const top = landmarks[topLandmark].y * videoSize.height;

   const width1 = isEven ? 16 : 23;
   const width = (landmarks[width1].x - landmarks[leftLandmark].x) * videoSize.width;

   const height1 = isEven ? 30 : 29;
   const height = (landmarks[height1].y - landmarks[topLandmark].y) * videoSize.height;

   return {
      landmarksUsed: [leftLandmark, topLandmark, width1, height1],
      result: {
         left: left - 50,
         top: top - 60,
         width: width + 130,
         height: height + 110
      }
   }
}

export default SquatSide_C;