import { NormalizedLandmark } from "@mediapipe/tasks-vision";
import degreeTwoPoints from "../../../../../../utils/degreeTwoPoints";
import DegreeType from "../../../../../../types/DegreeType";

function WalkingFront_P(landmarks: NormalizedLandmark[]) {
   const values = {
      'چرخش به داخل یا خارج زانو راست': "0",
      'چرخش به داخل یا خارج زانو چپ': "0",
   }
   const degrees: DegreeType[] = [];

   const kneeRightTop = Math.abs(degreeTwoPoints(landmarks[24], landmarks[26]));
   const kneeRightBottom = 180 - Math.abs(degreeTwoPoints(landmarks[26], landmarks[28]));
   const kneeRightSum = kneeRightTop + kneeRightBottom;
   if (kneeRightSum <= 173) values["چرخش به داخل یا خارج زانو راست"] = "1";

   degrees.push({
      landmarksUsed: [24, 26, 28],
      degree: kneeRightSum,
      value: values["چرخش به داخل یا خارج زانو راست"]
   })

   const kneeLeftTop = Math.abs(degreeTwoPoints(landmarks[23], landmarks[25]));
   const kneeLeftBottom = 180 - Math.abs(degreeTwoPoints(landmarks[25], landmarks[27]));
   const kneeLeftSum = kneeLeftTop + kneeLeftBottom;
   if (kneeLeftSum <= 173) values["چرخش به داخل یا خارج زانو چپ"] = "1";

   degrees.push({
      landmarksUsed: [23, 25, 27],
      degree: kneeLeftSum,
      value: values["چرخش به داخل یا خارج زانو چپ"]
   })

   return {
      values,
      degrees
   };
}

export default WalkingFront_P;