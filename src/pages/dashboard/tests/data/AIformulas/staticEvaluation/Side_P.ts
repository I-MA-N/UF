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
      'پشت گرد': '5',
      'پشت صاف': '5',
      'گود کمر': '5',
      'صاف کمر': '5',
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
      const centimeters = userHeight - 12;
      const pixels = (landmarks[39].y - landmarks[38].y) * editCanvasSize.height;
      const ratio = centimeters / pixels;

      degrees.push({
         landmarksUsed: [39, 38],
         degree: null,
         value: null
      })

      const H1 = (Math.abs(landmarks[36].x - landmarks[34].x)) * editCanvasSize.width;
      const H1Centimeters = H1 * ratio;
      const L1 = (landmarks[34].y - landmarks[33].y) * editCanvasSize.height;
      const L1Centimeters = L1 * ratio;
      const thoracicKyphosisRadians = 4 * Math.atan(H1Centimeters / L1Centimeters);
      const thoracicKyphosis = thoracicKyphosisRadians * (180 / Math.PI);

      if (thoracicKyphosis >= 50 && thoracicKyphosis <= 65) values["پشت گرد"] = "3";
      if (thoracicKyphosis > 65) values["پشت گرد"] = "1";
      if (thoracicKyphosis <= 30 && thoracicKyphosis >= 20) values["پشت صاف"] = "3";
      if (thoracicKyphosis < 20) values["پشت صاف"] = "1";

      let thoracicKyphosisValue = "5";
      if (values["پشت گرد"] === "1" || values["پشت صاف"] === "1") {
         thoracicKyphosisValue = "1";
      }
      if (values["پشت گرد"] === "3" || values["پشت صاف"] === "3") {
         thoracicKyphosisValue = "3";
      }

      degrees.push({
         landmarksUsed: [33, 36, 34],
         degree: thoracicKyphosis,
         value: thoracicKyphosisValue
      })

      const H2 = (Math.abs(landmarks[37].x - landmarks[34].x)) * editCanvasSize.width;
      const H2Centimeters = H2 * ratio;
      const L2 = (landmarks[35].y - landmarks[34].y) * editCanvasSize.height;
      const L2Centimeters = L2 * ratio;
      const lumbarLordosisRadians = 4 * Math.atan(H2Centimeters / L2Centimeters);
      const lumbarLordosis = lumbarLordosisRadians * (180 / Math.PI);

      if (lumbarLordosis >= 45 && lumbarLordosis <= 60) values["گود کمر"] = "3";
      if (lumbarLordosis > 60) values["گود کمر"] = "1";
      if (lumbarLordosis <= 25 && lumbarLordosis >= 20) values["صاف کمر"] = "3";
      if (lumbarLordosis < 20) values["صاف کمر"] = "1";

      let lumbarLordosisValue = "5";
      if (values["گود کمر"] === "1" || values["صاف کمر"] === "1") {
         lumbarLordosisValue = "1";
      }
      if (values["گود کمر"] === "3" || values["صاف کمر"] === "3") {
         lumbarLordosisValue = "3";
      }

      degrees.push({
         landmarksUsed: [34, 37, 35],
         degree: lumbarLordosis,
         value: lumbarLordosisValue
      })

      const swayBackLandmark = isEven ? 24 : 23;
      const swayBackDistance = (landmarks[swayBackLandmark].x - landmarks[39].x) * editCanvasSize.width;
      const swayBack = Math.abs(swayBackDistance * ratio);
      if (swayBack >= 5) values["پشت تابدار"] = "3";
      if (swayBack >= 7.5) values["پشت تابدار"] = "1";

      distances.push({
         landmarksUsed: [swayBackLandmark, 39],
         distance: swayBack,
         value: values["پشت تابدار"]
      })

      const kneeLandmark = isEven ? 26 : 25;
      const kneeDistance = (landmarks[kneeLandmark].x - landmarks[39].x) * editCanvasSize.width;
      let knee = kneeDistance * ratio;
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
         landmarksUsed: [kneeLandmark, 39],
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