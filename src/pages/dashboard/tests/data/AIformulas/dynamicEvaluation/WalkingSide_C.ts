import { NormalizedLandmark } from "@mediapipe/tasks-vision";

function WalkingSide_C(landmarks: NormalizedLandmark[], videoSize: { width: number, height: number }) {
   let isRightBack = false;
   if (landmarks[29].x > landmarks[30].x) isRightBack = true;
   
   const left = (isRightBack ? landmarks[30].x : landmarks[29].x) * videoSize.width;
   const top = (isRightBack ? landmarks[6].y : landmarks[3].y) * videoSize.height;
   const width = ((isRightBack ? landmarks[31].x : landmarks[32].x) - (isRightBack ? landmarks[30].x : landmarks[29].x)) * videoSize.width;
   const height = ((isRightBack ? landmarks[30].y : landmarks[29].y) - (isRightBack ? landmarks[6].y : landmarks[3].y)) * videoSize.height;

   return {
      left: left - 20,
      top: top - 20,
      width: width + 80,
      height: height + 80
   }
}

export default WalkingSide_C;