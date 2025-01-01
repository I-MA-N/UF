import { NormalizedLandmark } from "@mediapipe/tasks-vision";
import degreeTwoPoints from "../../../../../../utils/degreeTwoPoints";
import DegreeType from "../../../../../../types/DegreeType";

function Back_P(landmarks: NormalizedLandmark[]) {
   const values = {
      'شانه نابرابر': '5',
      'چرخش مچ پا به خارج': '5',
      'چرخش مچ پا به داخل': '5',
   }
   const degrees: DegreeType[] = [];

   {
      let shoulders = -1 * degreeTwoPoints(landmarks[12], landmarks[11]);
      
      if ((shoulders >= 2.5 && shoulders <= 5) || (shoulders <= -2.5 && shoulders >= -5)) values["شانه نابرابر"] = "3";
      if (shoulders >= 5 || shoulders <= -5) values["شانه نابرابر"] = "1";

      degrees.push({
         landmarksUsed: [11, 12],
         degree: shoulders,
         value: values["شانه نابرابر"]
      })
   }

   {
      let ankleRight = Math.abs(degreeTwoPoints(landmarks[28], landmarks[30]));
      let zaribRight = -1;
      if (ankleRight > 90) { ankleRight = 180 - ankleRight; zaribRight = 1; }
      ankleRight = zaribRight * (90 - ankleRight);

      let ankleLeft = Math.abs(degreeTwoPoints(landmarks[27], landmarks[29]));
      let zaribLeft = 1;
      if (ankleLeft > 90) { ankleLeft = 180 - ankleLeft; zaribLeft = -1; }
      ankleLeft = zaribLeft * (90 - ankleLeft);

      let ankleRightKh = 5;
      let ankleRightD = 5;
      if (ankleRight >= 3 && ankleRight <= 7) ankleRightKh = 3;
      if (ankleRight > 7) ankleRightKh = 1;
      if (ankleRight >= -7 && ankleRight <= -3) ankleRightD = 3;
      if (ankleRight < -7) ankleRightD = 1;

      let ankleLeftKh = 5;
      let ankleLeftD = 5;
      if (ankleLeft >= 3 && ankleLeft <= 7) ankleLeftKh = 3;
      if (ankleLeft > 7) ankleLeftKh = 1;
      if (ankleLeft >= -7 && ankleLeft <= -3) ankleLeftD = 3;
      if (ankleLeft < -7) ankleLeftD = 1;

      const ankleRightValue = Math.min(ankleRightKh, ankleRightD).toString();
      const ankleLeftValue = Math.min(ankleLeftKh, ankleLeftD).toString();

      values["چرخش مچ پا به خارج"] = Math.min(ankleRightKh, ankleLeftKh).toString();
      values["چرخش مچ پا به داخل"] = Math.min(ankleRightD, ankleLeftD).toString();

      degrees.push({
         landmarksUsed: [28, 30],
         degree: ankleRight,
         value: ankleRightValue
      })

      degrees.push({
         landmarksUsed: [27, 29],
         degree: ankleLeft,
         value: ankleLeftValue
      })
   }

   return {
      values,
      degrees,
   };
}

export default Back_P;