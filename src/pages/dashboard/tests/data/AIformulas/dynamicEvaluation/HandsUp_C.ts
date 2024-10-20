import { NormalizedLandmark } from "@mediapipe/tasks-vision";

function HandsUp_C(landmarks: NormalizedLandmark[], videoSize: { width: number, height: number }) {
   const left = landmarks[14].x * videoSize.width;

   const top = landmarks[16].y * videoSize.height;

   const width = (landmarks[13].x - landmarks[14].x) * videoSize.width;

   const height = (landmarks[32].y - landmarks[16].y) * videoSize.height;

   return {
      landmarksUsed: [16, 14, 13, 32],
      result: {
         left: left - 20,
         top: top - 40,
         width: width + 80,
         height: height + 100
      }
   }
}

export default HandsUp_C;