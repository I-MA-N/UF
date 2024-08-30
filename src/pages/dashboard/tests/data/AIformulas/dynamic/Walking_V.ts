import { NormalizedLandmarkList } from "@mediapipe/holistic";

function Walking_V(landmarks: NormalizedLandmarkList) {
   // Calculations
   const p11 = landmarks[11];
   const p12 = landmarks[12];
   const p2 = landmarks[2];
   const p3 = landmarks[3];

   return [
      {
         landmarks: [p11, p12],
         status: true
      },
      {
         landmarks: [p2, p3],
         status: true
      },
   ]
}

export default Walking_V;