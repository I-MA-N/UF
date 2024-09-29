import { NormalizedLandmark } from "@mediapipe/tasks-vision";

function Front_C(landmarks: NormalizedLandmark[], videoSize: { width: number, height: number }) {
   const left = landmarks[14].x * videoSize.width;
   const top = landmarks[6].y * videoSize.height;
   const width = (landmarks[13].x - landmarks[14].x) * videoSize.width;
   const height = (landmarks[30].y - landmarks[6].y) * videoSize.height;

   return {
      left: left - 20,
      top: top - 40,
      width: width + 70,
      height: height + 80
   }
}

export default Front_C;