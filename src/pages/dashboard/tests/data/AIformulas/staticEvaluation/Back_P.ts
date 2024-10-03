import { NormalizedLandmark } from "@mediapipe/tasks-vision";
import degreeTwoPoints from "../../../../../../utils/degreeTwoPoints";
import DegreeType from "../../../../../../types/DegreeType";

function Back_P(landmarks: NormalizedLandmark[]) {
   const values = {
      'چرخش مچ پا به داخل': '5',
      'چرخش مچ پا به خارج': '5',
   }
   const degrees: DegreeType[] = [];

   const ankle = Math.abs(degreeTwoPoints(landmarks[28], landmarks[30])) - 90;
   degrees.push({
      landmarksUsed: [28, 30],
      degree: ankle
   })

   if (ankle >= 2.5 && ankle <= 7.5) values["چرخش مچ پا به داخل"] = "3";
   if (ankle > 7.5) values["چرخش مچ پا به داخل"] = "1";
   if (ankle <= -2.5 && ankle >= -7.5) values["چرخش مچ پا به خارج"] = "3";
   if (ankle < -7.5) values["چرخش مچ پا به خارج"] = "1";

   return {
      values,
      degrees,
   };
}

export default Back_P;