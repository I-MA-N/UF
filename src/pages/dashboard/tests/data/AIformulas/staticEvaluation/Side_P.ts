import { NormalizedLandmark } from "@mediapipe/tasks-vision";
import degreeTwoPoints from "../../../../../../utils/degreeTwoPoints";
import DistanceType from "../../../../../../types/DistanceType";
import DegreeType from "../../../../../../types/DegreeType";

function Side_P(landmarks: NormalizedLandmark[], userHeight?: number, editCanvasSize?: { width: number, height: number }) {
   const values = {
      'سر به جلو': '5',
      'شانه گرد': '5',
      'پشت تابدار': '5',
      'زانوی عقب رفته': '5',
      'زانوی خمیده': '5',
   }
   const degrees: DegreeType[] = [];
   const distances: DistanceType[] = [];

   let isEven = true;
   if (landmarks[11].z < landmarks[12].z) isEven = false;

   const earLandmark = isEven ? 8 : 7;
   let earC7 = Math.abs(degreeTwoPoints(landmarks[earLandmark], landmarks[33]));
   if (!isEven) earC7 = 180 - earC7;
   if (earC7 <= 50 && earC7 >= 30) values["سر به جلو"] = "3";
   if (earC7 < 30) values["سر به جلو"] = "1";

   degrees.push({
      landmarksUsed: [earLandmark, 33],
      degree: earC7,
      value: values["سر به جلو"]
   })

   const shoulderLandmark = isEven ? 12 : 11;
   let shoulderC7 = degreeTwoPoints(landmarks[shoulderLandmark], landmarks[33]);
   if (!isEven) shoulderC7 = 180 - shoulderC7;
   if (shoulderC7 <= 50 && shoulderC7 >= 30) values["شانه گرد"] = "3";
   if (shoulderC7 < 30) values["شانه گرد"] = "1";

   degrees.push({
      landmarksUsed: [shoulderLandmark, 33],
      degree: shoulderC7,
      value: values["شانه گرد"]
   })

   if (editCanvasSize && userHeight) {
      const distanceCentimeters = userHeight - 12;
      const distancePixels = (landmarks[36].y - landmarks[35].y) * editCanvasSize.height;

      const swayBackLandmark = isEven ? 24 : 23;
      const swayBackDistance = (landmarks[swayBackLandmark].x - landmarks[36].x) * editCanvasSize.width;
      const swayBack = Math.abs((distanceCentimeters * swayBackDistance) / distancePixels);
      if (swayBack >= 5) values["پشت تابدار"] = "3";
      if (swayBack >= 7.5) values["پشت تابدار"] = "1";

      distances.push({
         landmarksUsed: [swayBackLandmark, 36],
         distance: swayBack,
         value: values["پشت تابدار"]
      })

      const kneeLandmark = isEven ? 26 : 25;
      const kneeDistance = (landmarks[kneeLandmark].x - landmarks[36].x) * editCanvasSize.width;
      let knee = (distanceCentimeters * kneeDistance) / distancePixels;
      if (!isEven) knee = -knee;
      if (knee <= -2) values["زانوی عقب رفته"] = "3";
      if (knee <= -3) values["زانوی عقب رفته"] = "1";
      if (knee >= 5) values["زانوی خمیده"] = "3";
      if (knee >= 7.5) values["زانوی خمیده"] = "1";

      let kneeValue = "5";
      if (values["زانوی عقب رفته"] === "1" || values["زانوی خمیده"] === "1") {
         kneeValue = "1";
      }
      if (values["زانوی عقب رفته"] === "3" || values["زانوی خمیده"] === "3") {
         kneeValue = "3";
      }
      distances.push({
         landmarksUsed: [kneeLandmark, 36],
         distance: knee,
         value: kneeValue
      })
   }

   return {
      values,
      degrees,
      distances
   };
}

export default Side_P;