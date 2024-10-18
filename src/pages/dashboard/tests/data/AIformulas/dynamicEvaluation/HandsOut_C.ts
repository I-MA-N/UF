import { NormalizedLandmark } from "@mediapipe/tasks-vision";

function HandsOut_C(landmarks: NormalizedLandmark[], videoSize: { width: number, height: number }) {
   const left = landmarks[16].x * videoSize.width;

   const top = landmarks[0].y * videoSize.height;

   const width = (landmarks[15].x - landmarks[16].x) * videoSize.width;

   const height = (landmarks[32].y - landmarks[0].y) * videoSize.height;

   return {
      landmarksUsed: [16, 0, 15, 32],
      result: {
         left: left - 20,
         top: top - 50,
         width: width + 80,
         height: height + 100
      }
   }
}

export default HandsOut_C;