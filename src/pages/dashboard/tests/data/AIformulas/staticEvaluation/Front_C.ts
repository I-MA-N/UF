import { NormalizedLandmark } from "@mediapipe/tasks-vision";

function Front_C(landmarks: NormalizedLandmark[], videoSize: { width: number, height: number }) {
   const leftLandmark = 14;
   const left = landmarks[leftLandmark].x * videoSize.width;

   const topLandmark = 0;
   const top = landmarks[topLandmark].y * videoSize.height;

   const width = (landmarks[13].x - landmarks[leftLandmark].x) * videoSize.width;
   const height = (landmarks[30].y - landmarks[topLandmark].y) * videoSize.height;

   return {
      landmarksUsed: [leftLandmark, topLandmark, 13, 30],
      result: {
         left: left - 20,
         top: top - 40,
         width: width + 70,
         height: height + 110
      }
   }
}

export default Front_C;