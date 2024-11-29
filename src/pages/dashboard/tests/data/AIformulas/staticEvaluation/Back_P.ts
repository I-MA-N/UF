import { NormalizedLandmark } from "@mediapipe/tasks-vision";
import degreeTwoPoints from "../../../../../../utils/degreeTwoPoints";
import DegreeType from "../../../../../../types/DegreeType";

function Back_P(landmarks: NormalizedLandmark[]) {
   const values = {
      'چرخش مچ پا به خارج': '5',
      'چرخش مچ پا به داخل': '5',
   }
   const degrees: DegreeType[] = [];

   {
      const ankleRight = Math.abs(degreeTwoPoints(landmarks[28], landmarks[30])) - 90;
      const ankleLeft = Math.abs(degreeTwoPoints(landmarks[27], landmarks[29]));

      let ankleRightKh = 5;
      let ankleRightD = 5;
      if (ankleRight >= 2.5 && ankleRight <= 7.5) ankleRightKh = 3;
      if (ankleRight > 7.5) ankleRightKh = 1;
      if (ankleRight >= -7.5 && ankleRight <= -2.5) ankleRightD = 3;
      if (ankleRight < -7.5) ankleRightD = 1;

      let ankleLeftKh = 5;
      let ankleLeftD = 5;
      if (ankleLeft <= 87.5 && ankleLeft >= 82.5) ankleLeftKh = 3;
      if (ankleLeft < 82.5) ankleLeftKh = 1;
      if (ankleLeft >= 92.5 && ankleLeft <= 97.5) ankleLeftD = 3;
      if (ankleLeft > 97.5) ankleLeftD = 1;

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