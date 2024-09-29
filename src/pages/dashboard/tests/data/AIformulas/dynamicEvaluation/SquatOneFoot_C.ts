import { NormalizedLandmark } from "@mediapipe/tasks-vision";

function SquatOneFoot_C(landmarks: NormalizedLandmark[], videoSize: { width: number, height: number }) {
   const isRightKneeDown = landmarks[32].y >= landmarks[31].y;

   const left = landmarks[14].x * videoSize.width;
   const top = landmarks[6].y * videoSize.height;
   const width = (landmarks[13].x - landmarks[14].x) * videoSize.width;
   const height = ((isRightKneeDown ? landmarks[30].y : landmarks[29].y) - landmarks[6].y) * videoSize.height;
   
   return {
      left: left - 20,
      top: top - 30,
      width: width + 70,
      height: height + 70
   }
}

export default SquatOneFoot_C;