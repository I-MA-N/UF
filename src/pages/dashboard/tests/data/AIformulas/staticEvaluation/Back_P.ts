import { NormalizedLandmark } from "@mediapipe/tasks-vision";
import degreeTwoPoints from "../../../../../../utils/degreeTwoPoints";

function Back_P(landmarks: NormalizedLandmark[]) {
   const resultObj = {
      'چرخش مچ پا به داخل': '5',
      'چرخش مچ پا به خارج': '5',
   }

   const ankle = Math.abs(degreeTwoPoints(landmarks[28], landmarks[30])) - 90;

   if (ankle >= 2.5 && ankle <= 7.5) resultObj["چرخش مچ پا به داخل"] = "3";
   if (ankle > 7.5) resultObj["چرخش مچ پا به داخل"] = "1";
   if (ankle <= -2.5 && ankle >= -7.5) resultObj["چرخش مچ پا به خارج"] = "3";
   if (ankle < -7.5) resultObj["چرخش مچ پا به خارج"] = "1";

   return resultObj
}

export default Back_P;