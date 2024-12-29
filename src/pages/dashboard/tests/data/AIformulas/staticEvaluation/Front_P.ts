import degreeTwoPoints from "../../../../../../utils/degreeTwoPoints";
import DegreeType from "../../../../../../types/DegreeType";
import { NormalizedLandmark } from "@mediapipe/tasks-vision";

function Front_P(landmarks: NormalizedLandmark[]) {
   const values = {
      'کج گردنی یا چرخش گردن': '5',
      'انحراف جانبی لگن': '5',
      'زانو پرانتزی': '5',
      'زانو ضربدری': '5',
      'چرخش خارجی پا': '5',
      'چرخش داخلی پا': '5',
   };
   const degrees: DegreeType[] = [];

   {
      const ears = Math.abs(degreeTwoPoints(landmarks[7], landmarks[8]));
      if (ears >= 2.5) values["کج گردنی یا چرخش گردن"] = "3";
      if (ears >= 7.5) values["کج گردنی یا چرخش گردن"] = "1";

      degrees.push({
         landmarksUsed: [7, 8],
         degree: ears,
         value: values["کج گردنی یا چرخش گردن"]
      })
   }

   {
      const asis = Math.abs(degreeTwoPoints(landmarks[23], landmarks[24]));
      if (asis >= 2.5) values["انحراف جانبی لگن"] = "3";
      if (asis >= 7.5) values["انحراف جانبی لگن"] = "1";

      degrees.push({
         landmarksUsed: [23, 24],
         degree: asis,
         value: values["انحراف جانبی لگن"]
      })
   }

   {
      const kneeTopRight = 180 - Math.abs(degreeTwoPoints(landmarks[24], landmarks[26]));
      const kneeBottomRight = Math.abs(degreeTwoPoints(landmarks[26], landmarks[28]));
      const kneeRight = kneeTopRight + kneeBottomRight;

      const kneeTopLeft = Math.abs(degreeTwoPoints(landmarks[23], landmarks[25]));
      const kneeBottomLeft = 180 - Math.abs(degreeTwoPoints(landmarks[25], landmarks[27]));
      const kneeLeft = kneeTopLeft + kneeBottomLeft;

      let kneeRightZ = 5;
      let kneeRightP = 5;
      if (kneeRight >= 173 && kneeRight <= 178) kneeRightZ = 3;
      if (kneeRight < 173) kneeRightZ = 1;
      if (kneeRight >= 182 && kneeRight <= 187) kneeRightP = 3;
      if (kneeRight > 187) kneeRightP = 1;

      let kneeLeftZ = 5;
      let kneeLeftP = 5;
      if (kneeLeft >= 173 && kneeLeft <= 178) kneeLeftZ = 3;
      if (kneeLeft < 173) kneeLeftZ = 1;
      if (kneeLeft >= 182 && kneeLeft <= 187) kneeLeftP = 3;
      if (kneeLeft > 187) kneeLeftP = 1;

      const kneeRightValue = Math.min(kneeRightZ, kneeRightP).toString();
      const kneeLeftValue = Math.min(kneeLeftZ, kneeLeftP).toString();

      values["زانو ضربدری"] = Math.min(kneeRightZ, kneeLeftZ).toString();
      values["زانو پرانتزی"] = Math.min(kneeRightP, kneeLeftP).toString();

      degrees.push({
         landmarksUsed: [24, 26, 28],
         degree: kneeRight,
         value: kneeRightValue
      })

      degrees.push({
         landmarksUsed: [23, 25, 27],
         degree: kneeLeft,
         value: kneeLeftValue
      })
   }

   {
      const footRight = Math.abs(degreeTwoPoints(landmarks[30], landmarks[32]));
      const footLeft = Math.abs(degreeTwoPoints(landmarks[29], landmarks[31])) - 90;

      let footRightKh = 5;
      let footRightD = 5;
      if (footRight < 75 && footRight >= 65) footRightKh = 3;
      if (footRight < 65) footRightKh = 1;
      if (footRight >= 95 && footRight <= 110) footRightD = 3;
      if (footRight > 110) footRightD = 1;

      let footLeftKh = 5;
      let footLeftD = 5;
      if (footLeft >= 15 && footLeft <= 25) footLeftKh = 3;
      if (footLeft > 25) footLeftKh = 1;
      if (footLeft >= -10 && footLeft <= 5) footLeftD = 3;
      if (footLeft < -10) footLeftD = 1;

      const footRightValue = Math.min(footRightKh, footRightD).toString();
      const footLeftValue = Math.min(footLeftKh, footLeftD).toString();

      values["چرخش خارجی پا"] = Math.min(footRightKh, footLeftKh).toString();
      values["چرخش داخلی پا"] = Math.min(footRightD, footLeftD).toString();

      degrees.push({
         landmarksUsed: [30, 32],
         degree: footRight,
         value: footRightValue
      })

      degrees.push({
         landmarksUsed: [29, 31],
         degree: footLeft,
         value: footLeftValue
      })
   }

   return {
      values,
      degrees,
   };
}

export default Front_P;