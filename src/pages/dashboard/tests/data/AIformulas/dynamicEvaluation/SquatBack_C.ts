import { NormalizedLandmark } from "@mediapipe/tasks-vision";

function SquatBack_C(landmarks: NormalizedLandmark[], videoSize: { width: number, height: number }) {
   const left = landmarks[13].x * videoSize.width;
   const top = landmarks[16].y * videoSize.height;
   const width = (landmarks[14].x - landmarks[13].x) * videoSize.width;
   const height = (landmarks[30].y - landmarks[16].y) * videoSize.height;

   return {
      left: left - 20,
      top: top - 40,
      width: width + 70,
      height: height + 80
   }
}

export default SquatBack_C;