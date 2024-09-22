import { NormalizedLandmark } from "@mediapipe/tasks-vision";
import degreeTwoPoints from "../../../../../../utils/degreeTwoPoints";

function WalkingFront_P(landmarks: NormalizedLandmark[]) {
   const resultObj = {
      'صاف شدن پاها و زانو به داخل': "0",
   }

   const kneeTop = Math.abs(degreeTwoPoints(landmarks[23], landmarks[25]));
   const kneeBottom = 180 - Math.abs(degreeTwoPoints(landmarks[25], landmarks[27]));
   const kneeSum = kneeTop + kneeBottom;

   if (kneeSum <= 173) resultObj["صاف شدن پاها و زانو به داخل"] = "1";

   return resultObj
}

export default WalkingFront_P;