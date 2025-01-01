import { NormalizedLandmark } from "@mediapipe/tasks-vision";
import degreeTwoPoints from "../../../../../../utils/degreeTwoPoints";
import DegreeType from "../../../../../../types/DegreeType";

function WalkingFront_P(landmarks: NormalizedLandmark[]) {
   const values = {
      'راه رفتن صاف شدن پاها و چرخش زانو به داخل': "0",
   }
   const degrees: DegreeType[] = [];

   {
      const kneeTopRight = 180 - Math.abs(degreeTwoPoints(landmarks[24], landmarks[26]));
      const kneeBottomRight = Math.abs(degreeTwoPoints(landmarks[26], landmarks[28]));
      const kneeRight = kneeTopRight + kneeBottomRight;

      let kneeRightValue = 0;
      if (kneeRight < 176) kneeRightValue = 1;

      const kneeTopLeft = Math.abs(degreeTwoPoints(landmarks[23], landmarks[25]));
      const kneeBottomLeft = 180 - Math.abs(degreeTwoPoints(landmarks[25], landmarks[27]));
      const kneeLeft = kneeTopLeft + kneeBottomLeft;

      let kneeLeftValue = 0;
      if (kneeLeft < 176) kneeLeftValue = 1;

      values["راه رفتن صاف شدن پاها و چرخش زانو به داخل"] = Math.max(kneeRightValue, kneeLeftValue).toString();

      degrees.push({
         landmarksUsed: [24, 26, 28],
         degree: kneeRight,
         value: kneeRightValue.toString()
      })

      degrees.push({
         landmarksUsed: [23, 25, 27],
         degree: kneeLeft,
         value: kneeLeftValue.toString()
      })
   }

   return {
      values,
      degrees
   };
}

export default WalkingFront_P;