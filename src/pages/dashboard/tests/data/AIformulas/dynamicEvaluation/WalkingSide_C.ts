import { NormalizedLandmark } from "@mediapipe/tasks-vision";

function WalkingSide_C(landmarks: NormalizedLandmark[], videoSize: { width: number, height: number }) {
   let isEven = true;
   if (landmarks[11].z < landmarks[12].z) isEven = false;
   
   const leftLandmark = 33;
   const left = landmarks[leftLandmark].x * videoSize.width;

   const topLandmark = isEven ? 8 : 7;
   const top = landmarks[topLandmark].y * videoSize.height;

   // const width1 = isEven ? 32 : 29;
   // const width = (landmarks[width1].x - landmarks[leftLandmark].x) * videoSize.width;

   const height1 = isEven ? 30 : 29;
   const height = (landmarks[height1].y - landmarks[topLandmark].y) * videoSize.height;
   
   return {
      landmarksUsed: [leftLandmark, topLandmark, height1],
      result: {
         left: left - 70,
         top: top - 40,
         width: left + (isEven ? 40 : 20),
         height: height + 80
      }
   }
}

export default WalkingSide_C;