import { NormalizedLandmark } from "@mediapipe/tasks-vision";

function SwimSide_C(landmarks: NormalizedLandmark[], videoSize: { width: number, height: number }) {
   let isEven = true;
   if (landmarks[11].z < landmarks[12].z) isEven = false;

   const leftLandmark = isEven ? 30 : 0;
   const left = landmarks[leftLandmark].x * videoSize.width;

   const topLandmark = isEven ? 12 : 11;
   const top = landmarks[topLandmark].y * videoSize.height;

   const width1 = isEven ? 0 : 29;
   const width2 = isEven ? 30 : 0;
   const width = (landmarks[width1].x - landmarks[width2].x) * videoSize.width;

   const height1 = isEven ? 16 : 15;
   const height2 = isEven ? 8 : 7;
   const height = (landmarks[height1].y - landmarks[height2].y) * videoSize.height;

   return {
      landmarksUsed: [leftLandmark, topLandmark, width1, width2, height1, height2],
      result: {
         left: left - 35,
         top: top - 60,
         width: width + 100,
         height: height + 90
      }
   }
}

export default SwimSide_C;