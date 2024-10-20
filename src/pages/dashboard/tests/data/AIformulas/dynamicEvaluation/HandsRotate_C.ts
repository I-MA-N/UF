import { NormalizedLandmark } from "@mediapipe/tasks-vision";

function HandsRotate_C(landmarks: NormalizedLandmark[], videoSize: { width: number, height: number }) {
   const left = landmarks[14].x * videoSize.width;

   const top = landmarks[0].y * videoSize.height;

   const width = (landmarks[13].x - landmarks[14].x) * videoSize.width;

   const height = (landmarks[32].y - landmarks[0].y) * videoSize.height;

   return {
      landmarksUsed: [14, 0, 13, 32],
      result: {
         left: left - 20,
         top: top - 50,
         width: width + 80,
         height: height + 100
      }
   }
}

export default HandsRotate_C;