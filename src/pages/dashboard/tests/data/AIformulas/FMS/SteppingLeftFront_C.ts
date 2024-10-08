import { NormalizedLandmark } from "@mediapipe/tasks-vision";

function SteppingLeftFront_C(landmarks: NormalizedLandmark[], videoSize: { width: number, height: number }) {
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

export default SteppingLeftFront_C;