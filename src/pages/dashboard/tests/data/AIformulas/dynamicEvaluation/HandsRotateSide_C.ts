import { NormalizedLandmark } from "@mediapipe/tasks-vision";

function HandsRotateSide_C(landmarks: NormalizedLandmark[], videoSize: { width: number, height: number }) {
   // const left = landmarks[13].x * videoSize.width;
   // const top = landmarks[0].y * videoSize.height;
   // const width = (landmarks[14].x - landmarks[13].x) * videoSize.width;
   // const height = (landmarks[30].y - landmarks[0].y) * videoSize.height;

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

export default HandsRotateSide_C;