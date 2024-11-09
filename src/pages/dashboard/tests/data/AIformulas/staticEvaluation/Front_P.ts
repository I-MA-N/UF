import degreeTwoPoints from "../../../../../../utils/degreeTwoPoints";
import DegreeType from "../../../../../../types/DegreeType";
import { NormalizedLandmark } from "@mediapipe/tasks-vision";

function Front_P(landmarks: NormalizedLandmark[]) {
   const values = {
      'گردن کج': '5',
      'شانه نابرابر': '5',
      'انحراف جانبی لگن': '5',
      'زانو پرانتزی - راست': '5',
      'زانو ضربدری - راست': '5',
      'زانو پرانتزی - چپ': '5',
      'زانو ضربدری - چپ': '5',
      'چرخش خارجی پا - راست': '5',
      'چرخش داخلی پا - راست': '5',
      'چرخش خارجی پا - چپ': '5',
      'چرخش داخلی پا - چپ': '5',
   };
   const degrees: DegreeType[] = [];

   const ears = Math.abs(degreeTwoPoints(landmarks[7], landmarks[8]));
   if (ears >= 2.5) values["گردن کج"] = "3";
   if (ears >= 7.5) values["گردن کج"] = "1";

   degrees.push({
      landmarksUsed: [7, 8],
      degree: ears,
      value: values["گردن کج"]
   })

   const shoulders = Math.abs(degreeTwoPoints(landmarks[11], landmarks[12]));
   if (shoulders >= 2.5) values["شانه نابرابر"] = "3";
   if (shoulders >= 7.5) values["شانه نابرابر"] = "1";

   degrees.push({
      landmarksUsed: [11, 12],
      degree: shoulders,
      value: values["شانه نابرابر"]
   })

   const asis = Math.abs(degreeTwoPoints(landmarks[23], landmarks[24]));
   if (asis >= 2.5) values["انحراف جانبی لگن"] = "3";
   if (asis >= 7.5) values["انحراف جانبی لگن"] = "1";

   degrees.push({
      landmarksUsed: [23, 24],
      degree: asis,
      value: values["انحراف جانبی لگن"]
   })

   const kneeTopRight = 180 - Math.abs(degreeTwoPoints(landmarks[24], landmarks[26]));
   const kneeBottomRight = Math.abs(degreeTwoPoints(landmarks[26], landmarks[28]));
   const kneeSumRight = kneeTopRight + kneeBottomRight;
   if (kneeSumRight >= 160 && kneeSumRight <= 173) values["زانو ضربدری - راست"] = "3";
   if (kneeSumRight < 160) values["زانو ضربدری - راست"] = "1";
   if (kneeSumRight >= 180 && kneeSumRight <= 190) values["زانو پرانتزی - راست"] = "3";
   if (kneeSumRight > 190) values["زانو پرانتزی - راست"] = "1";

   let kneeSumRightValue = "5";
   if (values["زانو ضربدری - راست"] === "1" || values["زانو پرانتزی - راست"] === "1") {
      kneeSumRightValue = "1";
   }
   if (values["زانو ضربدری - راست"] === "3" || values["زانو پرانتزی - راست"] === "3") {
      kneeSumRightValue = "3";
   }
   degrees.push({
      landmarksUsed: [24, 26, 28],
      degree: kneeSumRight,
      value: kneeSumRightValue
   })

   const kneeTopLeft = Math.abs(degreeTwoPoints(landmarks[23], landmarks[25]));
   const kneeBottomLeft = 180 - Math.abs(degreeTwoPoints(landmarks[25], landmarks[27]));
   const kneeSumLeft = kneeTopLeft + kneeBottomLeft;
   if (kneeSumLeft >= 160 && kneeSumLeft <= 173) values["زانو ضربدری - چپ"] = "3";
   if (kneeSumLeft < 160) values["زانو ضربدری - چپ"] = "1";
   if (kneeSumLeft >= 180 && kneeSumLeft <= 190) values["زانو پرانتزی - چپ"] = "3";
   if (kneeSumLeft > 190) values["زانو پرانتزی - چپ"] = "1";

   let kneeSumLeftValue = "5";
   if (values["زانو ضربدری - چپ"] === "1" || values["زانو پرانتزی - چپ"] === "1") {
      kneeSumLeftValue = "1";
   }
   if (values["زانو ضربدری - چپ"] === "3" || values["زانو پرانتزی - چپ"] === "3") {
      kneeSumLeftValue = "3";
   }
   degrees.push({
      landmarksUsed: [23, 25, 27],
      degree: kneeSumLeft,
      value: kneeSumLeftValue
   })


   const footRight = Math.abs(degreeTwoPoints(landmarks[30], landmarks[32]));
   if (footRight < 75 && footRight >= 65) values["چرخش خارجی پا - راست"] = "3";
   if (footRight < 65) values["چرخش خارجی پا - راست"] = "1";
   if (footRight >= 95 && footRight <= 110) values["چرخش داخلی پا - راست"] = "3";
   if (footRight > 110) values["چرخش داخلی پا - راست"] = "1";

   let footRightValue = "5";
   if (values["چرخش خارجی پا - راست"] === "1" || values["چرخش داخلی پا - راست"] === "1") {
      footRightValue = "1";
   }
   if (values["چرخش خارجی پا - راست"] === "3" || values["چرخش داخلی پا - راست"] === "3") {
      footRightValue = "3";
   }
   degrees.push({
      landmarksUsed: [30, 32],
      degree: footRight,
      value: footRightValue
   })

   const footLeft = Math.abs(degreeTwoPoints(landmarks[29], landmarks[31])) - 90;
   if (footLeft >= 15 && footLeft <= 25) values["چرخش خارجی پا - چپ"] = "3";
   if (footLeft > 25) values["چرخش خارجی پا - چپ"] = "1";
   if (footLeft >= -10 && footLeft <= 5) values["چرخش داخلی پا - چپ"] = "3";
   if (footLeft < -10) values["چرخش داخلی پا - چپ"] = "1";

   let footLeftValue = "5";
   if (values["چرخش خارجی پا - چپ"] === "1" || values["چرخش داخلی پا - چپ"] === "1") {
      footLeftValue = "1";
   }
   if (values["چرخش خارجی پا - چپ"] === "3" || values["چرخش داخلی پا - چپ"] === "3") {
      footLeftValue = "3";
   }
   degrees.push({
      landmarksUsed: [29, 31],
      degree: footLeft,
      value: footLeftValue
   })

   return {
      values,
      degrees,
   };
}

export default Front_P;