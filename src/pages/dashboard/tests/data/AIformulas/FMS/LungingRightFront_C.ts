import { NormalizedLandmark } from "@mediapipe/tasks-vision";

function LungingRightFront_C(landmarks: NormalizedLandmark[], videoSize: { width: number, height: number }) {
   return {
      landmarksUsed: [],
      result: {
         left: 0,
         top: 0,
         width: 0,
         height: 0
      }
   }
}

export default LungingRightFront_C;