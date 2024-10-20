import { NormalizedLandmark } from "@mediapipe/tasks-vision";
import degreeTwoPoints from "../../../../../../utils/degreeTwoPoints";
import DegreeType from "../../../../../../types/DegreeType";

function Back_P(landmarks: NormalizedLandmark[]) {
   const values = {
      'چرخش داخلی مچ پا راست': '5',
      'چرخش خارجی مچ پا راست': '5',
      'چرخش داخلی مچ پا چپ': '5',
      'چرخش خارجی مچ پا چپ': '5',
   }
   const degrees: DegreeType[] = [];

   const ankleRight = Math.abs(degreeTwoPoints(landmarks[28], landmarks[30])) - 90;
   if (ankleRight >= -7.5 && ankleRight <= -2.5) values["چرخش داخلی مچ پا راست"] = "3";
   if (ankleRight < -7.5) values["چرخش داخلی مچ پا راست"] = "1";
   if (ankleRight >= 2.5 && ankleRight <= 7.5) values["چرخش خارجی مچ پا راست"] = "3";
   if (ankleRight > 7.5) values["چرخش خارجی مچ پا راست"] = "1";

   let ankleRightValue = "5";
   if (values["چرخش داخلی مچ پا راست"] === "1" || values["چرخش خارجی مچ پا راست"] === "1") {
      ankleRightValue = "1";
   }
   if (values["چرخش داخلی مچ پا راست"] === "3" || values["چرخش خارجی مچ پا راست"] === "3") {
      ankleRightValue = "3";
   }
   degrees.push({
      landmarksUsed: [28, 30],
      degree: ankleRight,
      value: ankleRightValue
   })

   const ankleLeft = Math.abs(degreeTwoPoints(landmarks[27], landmarks[29]));
   if (ankleLeft >= 92.5 && ankleLeft <= 97.5) values["چرخش داخلی مچ پا چپ"] = "3";
   if (ankleLeft > 97.5) values["چرخش داخلی مچ پا چپ"] = "1";
   if (ankleLeft <= 87.5 && ankleLeft >= 82.5) values["چرخش خارجی مچ پا چپ"] = "3";
   if (ankleLeft < 82.5) values["چرخش خارجی مچ پا چپ"] = "1";

   let ankleLeftValue = "5";
   if (values["چرخش داخلی مچ پا چپ"] === "1" || values["چرخش خارجی مچ پا چپ"] === "1") {
      ankleLeftValue = "1";
   }
   if (values["چرخش داخلی مچ پا چپ"] === "3" || values["چرخش خارجی مچ پا چپ"] === "3") {
      ankleLeftValue = "3";
   }
   degrees.push({
      landmarksUsed: [27, 29],
      degree: ankleLeft,
      value: ankleLeftValue
   })

   return {
      values,
      degrees,
   };
}

export default Back_P;