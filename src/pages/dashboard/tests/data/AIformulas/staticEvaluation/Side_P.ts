import { NormalizedLandmark } from "@mediapipe/tasks-vision";
import degreeTwoPoints from "../../../../../../utils/degreeTwoPoints";
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
      'کمر گود': '5',
      'کمر صاف': '5',
   }
   const degrees: DegreeType[] = [];

   let isEven = true;
   if (landmarks[11].z < landmarks[12].z) isEven = false;

   const shoulderLandmark = isEven ? 12 : 11;
   const hipLandmark = isEven ? 24 : 23;
   const ankleLandmark = isEven ? 28 : 27;

   {
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
   }

   {
      let shoulderC7 = Math.abs(degreeTwoPoints(landmarks[33], landmarks[shoulderLandmark]));
      if (!isEven) shoulderC7 = 180 - shoulderC7;

      if (shoulderC7 <= 50 && shoulderC7 >= 30) values["شانه گرد"] = "3";
      if (shoulderC7 < 30) values["شانه گرد"] = "1";

      degrees.push({
         landmarksUsed: [shoulderLandmark, 33],
         degree: shoulderC7,
         value: values["شانه گرد"]
      })
   }

   if (editCanvasSize && userHeight) {
      const bottomLandmark = isEven ? 32 : 31;
      const centimeters = userHeight - 12;
      const pixels = (landmarks[bottomLandmark].y - landmarks[0].y) * editCanvasSize.height;
      const ratio = centimeters / pixels;

      degrees.push({
         landmarksUsed: [bottomLandmark, 0],
         degree: null,
         value: null
      })

      {
         const H = (Math.abs(landmarks[36].x - landmarks[34].x)) * editCanvasSize.width;
         const HCentimeters = H * ratio;
         const L = (landmarks[34].y - landmarks[33].y) * editCanvasSize.height;
         const LCentimeters = L * ratio;
         const thoracicKyphosisRadians = 4 * Math.atan((2 * HCentimeters) / LCentimeters);
         const thoracicKyphosis = thoracicKyphosisRadians * (180 / Math.PI);

         if (thoracicKyphosis >= 40 && thoracicKyphosis <= 55) values["پشت گرد"] = "3";
         if (thoracicKyphosis > 55) values["پشت گرد"] = "1";
         if (thoracicKyphosis <= 20 && thoracicKyphosis >= 10) values["پشت صاف"] = "3";
         if (thoracicKyphosis < 10) values["پشت صاف"] = "1";

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
      }

      {
         const H = (Math.abs(landmarks[37].x - landmarks[34].x)) * editCanvasSize.width;
         const HCentimeters = H * ratio;
         const L = (landmarks[35].y - landmarks[34].y) * editCanvasSize.height;
         const LCentimeters = L * ratio;
         const lumbarLordosisRadians = 4 * Math.atan((2 * HCentimeters) / LCentimeters);
         const lumbarLordosis = lumbarLordosisRadians * (180 / Math.PI);

         if (lumbarLordosis >= 50 && lumbarLordosis <= 65) values["کمر گود"] = "3";
         if (lumbarLordosis > 65) values["کمر گود"] = "1";
         if (lumbarLordosis <= 30 && lumbarLordosis >= 20) values["کمر صاف"] = "3";
         if (lumbarLordosis < 20) values["کمر صاف"] = "1";

         let lumbarLordosisValue = "5";
         if (values["کمر گود"] === "1" || values["کمر صاف"] === "1") {
            lumbarLordosisValue = "1";
         }
         if (values["کمر گود"] === "3" || values["کمر صاف"] === "3") {
            lumbarLordosisValue = "3";
         }

         degrees.push({
            landmarksUsed: [34, 37, 35],
            degree: lumbarLordosis,
            value: lumbarLordosisValue
         })
      }
   }

   {
      const shoulderHip = degreeTwoPoints(landmarks[hipLandmark], landmarks[shoulderLandmark]);
      const hipAnkle = degreeTwoPoints(landmarks[ankleLandmark], landmarks[hipLandmark]);
      const swayBack = isEven ? (shoulderHip + (180 - hipAnkle)) : ((180 - shoulderHip) + hipAnkle);

      if (swayBack >= 140 && swayBack <= 160) values["پشت تابدار"] = "3";
      if (swayBack < 140) values["پشت تابدار"] = "1";

      degrees.push({
         landmarksUsed: [shoulderLandmark, hipLandmark, ankleLandmark],
         degree: swayBack,
         value: values["پشت تابدار"]
      })
   }

   {
      const kneeLandmark = isEven ? 26 : 25;
      const hipKnee = degreeTwoPoints(landmarks[kneeLandmark], landmarks[hipLandmark]);
      const kneeAnkle = degreeTwoPoints(landmarks[ankleLandmark], landmarks[kneeLandmark]);
      const knee = isEven ? (hipKnee + (180 - kneeAnkle)) : ((180 - hipKnee) + kneeAnkle);

      if (knee >= 180 && knee <= 190) values["زانوی عقب رفته"] = "3";
      if (knee > 190) values["زانوی عقب رفته"] = "1";
      if (knee >= 160 && knee <= 170) values["زانوی خمیده"] = "3";
      if (knee < 160) values["زانوی خمیده"] = "1";

      let kneeValue = "5";
      if (values["زانوی عقب رفته"] === "1" || values["زانوی خمیده"] === "1") {
         kneeValue = "1";
      }
      if (values["زانوی عقب رفته"] === "3" || values["زانوی خمیده"] === "3") {
         kneeValue = "3";
      }

      degrees.push({
         landmarksUsed: [hipLandmark, kneeLandmark, ankleLandmark],
         degree: knee,
         value: kneeValue
      })
   }

   return {
      values,
      degrees,
   };
}

export default Side_P;