import { NormalizedLandmark } from "@mediapipe/tasks-vision";

function SquatFront_C(landmarks: NormalizedLandmark[], videoSize: { width: number, height: number }) {
   const left = landmarks[14].x * videoSize.width;
   const top = landmarks[16].y * videoSize.height;
   const width = (landmarks[13].x - landmarks[14].x) * videoSize.width;
   const height = (landmarks[30].y - landmarks[16].y) * videoSize.height;

   return {
      left: left - 20,
      top: top - 50,
      width: width + 70,
      height: height + 90
   }
}

export default SquatFront_C;