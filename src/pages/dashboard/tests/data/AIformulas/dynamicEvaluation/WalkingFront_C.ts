import { NormalizedLandmark } from "@mediapipe/tasks-vision";

function WalkingFront_C(landmarks: NormalizedLandmark[], videoSize: { width: number, height: number }) {
   const left = landmarks[14].x * videoSize.width;
   const top = landmarks[6].y * videoSize.height;
   const width = (landmarks[13].x - landmarks[14].x) * videoSize.width;
   const height = (landmarks[30].y - landmarks[6].y) * videoSize.height;

   return {
      left: left - 20,
      top: top - 40,
      width: width + 80,
      height: height + 80
   }
}

export default WalkingFront_C;