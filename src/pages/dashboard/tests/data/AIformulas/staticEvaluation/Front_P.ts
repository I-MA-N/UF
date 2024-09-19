import { NormalizedLandmark } from "@mediapipe/tasks-vision";
import degreeTwoPoints from "../../../../../../utils/degreeTwoPoints";

function Front_P(landmarks: NormalizedLandmark[]) {
   const resultObj = {
      'گردن کج': '5',
      'شانه نابرابر': '5',
      'انحراف جانبی لگن': '5',
      'زانو پرانتزی': '5',
      'زانو ضربدری': '5',
      'چرخش خارجی پا': '5',
      'چرخش داخلی پا': '5',
   };

   const ears = Math.abs(degreeTwoPoints(landmarks[7], landmarks[8]));
   if (ears >= 2.5) resultObj["گردن کج"] = "3";
   if (ears >= 7.5) resultObj["گردن کج"] = "1";

   const shoulders = Math.abs(degreeTwoPoints(landmarks[11], landmarks[12]));
   if (shoulders >= 2.5) resultObj["شانه نابرابر"] = "3";
   if (shoulders >= 7.5) resultObj["شانه نابرابر"] = "1";

   const asis = Math.abs(degreeTwoPoints(landmarks[23], landmarks[24]));
   if (asis >= 2.5) resultObj["انحراف جانبی لگن"] = "3";
   if (asis >= 7.5) resultObj["انحراف جانبی لگن"] = "1";

   const kneeTopLeft = Math.abs(degreeTwoPoints(landmarks[23], landmarks[25]));
   const kneeBottomLeft = 180 - Math.abs(degreeTwoPoints(landmarks[25], landmarks[27]));
   // const kneeTopRight = 180 - Math.abs(degreeTwoPoints(landmarks[24], landmarks[26]));
   // const kneeBottomRight = Math.abs(degreeTwoPoints(landmarks[26], landmarks[28]));
   // const kneeAvg = ((kneeTopLeft + kneeBottomLeft) + (kneeTopRight + kneeBottomRight)) / 2;
   const kneeAvg = kneeTopLeft + kneeBottomLeft;

   if (kneeAvg >= 160 && kneeAvg <= 173) resultObj["زانو ضربدری"] = "3";
   if (kneeAvg < 160) resultObj["زانو ضربدری"] = "1";
   if (kneeAvg >= 180 && kneeAvg <= 190) resultObj["زانو پرانتزی"] = "3";
   if (kneeAvg > 190) resultObj["زانو پرانتزی"] = "1";

   const footLeft = Math.abs(degreeTwoPoints(landmarks[29], landmarks[31])) - 90; 
   // let footRight = Math.abs(degreeTwoPoints(landmarks[30], landmarks[32]));
   // footRight = footRight <= 90 ? footRight : footRight - 180;
   // const footAvg = (footLeft + footRight) / 2;
   const footAvg = footLeft;

   if (footAvg >= 15 && footAvg <= 25) resultObj["چرخش خارجی پا"] = "3";
   if (footAvg > 25) resultObj["چرخش خارجی پا"] = "1";
   if (footAvg >= -10 && footAvg <= 5) resultObj["چرخش داخلی پا"] = "3";
   if (footAvg < -10) resultObj["چرخش داخلی پا"] = "1";

   return resultObj;
}

export default Front_P;