import { NormalizedLandmark } from "@mediapipe/tasks-vision";

function Walking_V(landmarks:  NormalizedLandmark[]) {
   // Calculations
   const p11 = landmarks[11];
   const p12 = landmarks[12];
   const p2 = landmarks[2];
   const p3 = landmarks[3];

   return [
      {
         landmarks: [p11, p12],
         status: false
      },
      {
         landmarks: [p2, p3],
         status: true
      },
   ]
}

export default Walking_V;