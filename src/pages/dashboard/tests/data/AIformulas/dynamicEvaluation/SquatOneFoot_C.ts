import { NormalizedLandmark } from "@mediapipe/tasks-vision";

function SquatOneFoot_C(landmarks: NormalizedLandmark[], videoSize: { width: number, height: number }) {
   const leftLandmark = 14;
   const left = landmarks[leftLandmark].x * videoSize.width;
   
   const topLandmark = 0;
   const top = landmarks[topLandmark].y * videoSize.height;
   
   const width = (landmarks[13].x - landmarks[leftLandmark].x) * videoSize.width;

   const height1 = landmarks[32].y >= landmarks[31].y ? 30 : 29;
   const height = (landmarks[height1].y - landmarks[topLandmark].y) * videoSize.height;
   
   return {
      landmarksUsed: [leftLandmark, topLandmark, 13, height1],
      result: {
         left: left - 20,
         top: top - 50,
         width: width + 70,
         height: height + 100
      }
   }
}

export default SquatOneFoot_C;