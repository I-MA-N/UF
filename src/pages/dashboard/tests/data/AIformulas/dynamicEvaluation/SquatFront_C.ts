import { NormalizedLandmark } from "@mediapipe/tasks-vision";

function SquatFront_C(landmarks: NormalizedLandmark[], videoSize: { width: number, height: number }) {
   const leftLandmark = 14;
   const left = landmarks[leftLandmark].x * videoSize.width;

   const topLandmark = landmarks[0].y > landmarks[16].y ? 16 : 0;
   const top = landmarks[topLandmark].y * videoSize.height;

   const width = (landmarks[13].x - landmarks[leftLandmark].x) * videoSize.width;
   const height = (landmarks[30].y - landmarks[topLandmark].y) * videoSize.height;

   return {
      landmarksUsed: [leftLandmark, topLandmark, 13, 30],
      result: {
         left: left - 30,
         top: top - 60,
         width: width + 90,
         height: height + 110
      }
   }
}

export default SquatFront_C;