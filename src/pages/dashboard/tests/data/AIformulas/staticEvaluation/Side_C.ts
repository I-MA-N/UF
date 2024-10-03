import { NormalizedLandmark } from "@mediapipe/tasks-vision";

function Side_C(landmarks: NormalizedLandmark[], videoSize: { width: number, height: number }) {
   let isEven = true;
   if (landmarks[11].z < landmarks[12].z) isEven = false;

   const leftLandmark = isEven ? 30 : 31;
   const left = landmarks[leftLandmark].x * videoSize.width;

   const topLandmark = isEven ? 8 : 7;
   const top = landmarks[topLandmark].y * videoSize.height;

   const width1 = isEven ? 32 : 29;
   const width = (landmarks[width1].x - landmarks[leftLandmark].x) * videoSize.width;

   const height1 = isEven ? 30 : 29;
   const height = (landmarks[height1].y - landmarks[topLandmark].y) * videoSize.height;

   return {
      landmarksUsed: [leftLandmark, topLandmark, width1, height1],
      result: {
         left: left - 10,
         top: top - 30,
         width: width + 60,
         height: height + 80
      }
   }
}

export default Side_C;