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
   if (ankle >= 2.5 && ankle <= 7.5) values["چرخش مچ پا به داخل"] = "3";
   if (ankle > 7.5) values["چرخش مچ پا به داخل"] = "1";
   if (ankle <= -2.5 && ankle >= -7.5) values["چرخش مچ پا به خارج"] = "3";
   if (ankle < -7.5) values["چرخش مچ پا به خارج"] = "1";
   
   let ankleValue = "5";
   if (values["چرخش مچ پا به داخل"] === "1" || values["چرخش مچ پا به خارج"] === "1") {
      ankleValue = "1";
   }
   if (values["چرخش مچ پا به داخل"] === "3" || values["چرخش مچ پا به خارج"] === "3") {
      ankleValue = "3";
   }
   degrees.push({
      landmarksUsed: [28, 30],
      degree: ankle,
      value: ankleValue
   })

   return {
      values,
      degrees,
   };
}

export default Back_P;