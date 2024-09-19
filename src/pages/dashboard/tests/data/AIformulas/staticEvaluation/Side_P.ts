import { NormalizedLandmark } from "@mediapipe/tasks-vision";
import degreeTwoPoints from "../../../../../../utils/degreeTwoPoints";
import usePhotoStore from "../../../store/photoStore";

function Side_P(landmarks: NormalizedLandmark[]) {
   const resultObj = {
      'سر به جلو': '5',
      'شانه گرد': '5',
      'پشت تابدار': '5',
      'زانوی عقب رفته': '5',
      'زانوی خمیده': '5',
   }

   let isEven = true;
   if (landmarks[11].z < landmarks[12].z) isEven = false;

   let earC7 = Math.abs(degreeTwoPoints(isEven ? landmarks[8] : landmarks[7], landmarks[33]));
   if (!isEven) earC7 = 180 - earC7;

   if (earC7 <= 50 && earC7 >= 30) resultObj["سر به جلو"] = "3";
   if (earC7 < 30) resultObj["سر به جلو"] = "1";
   
   let shoulderC7 = degreeTwoPoints(isEven ? landmarks[12] : landmarks[11], landmarks[33]);
   if (!isEven) shoulderC7 = 180 - shoulderC7;

   if (shoulderC7 <= 50 && shoulderC7 >= 30) resultObj["شانه گرد"] = "3";
   if (shoulderC7 < 30) resultObj["شانه گرد"] = "1";

   const editCanvas = document.getElementById("editCanvas");
   const userHeight = usePhotoStore.getState().userHeight;
   if (editCanvas && userHeight) {
      const distanceCentimeters = userHeight - 12;
      const distancePixels = (landmarks[35].y - landmarks[34].y) * editCanvas.clientHeight;

      const swayBackDistance = ((isEven ? landmarks[24].x : landmarks[23].x) - landmarks[35].x) * editCanvas.clientWidth;
      const swayBack = Math.abs((distanceCentimeters * swayBackDistance) / distancePixels);

      if (swayBack >= 5) resultObj["پشت تابدار"] = "3";
      if (swayBack >= 7.5) resultObj["پشت تابدار"] = "1";

      const kneeDistance = ((isEven ? landmarks[26].x : landmarks[25].x) - landmarks[35].x) * editCanvas.clientWidth;
      let knee = (distanceCentimeters * kneeDistance) / distancePixels;
      if (!isEven) knee = -knee;

      if (knee <= -2) resultObj["زانوی عقب رفته"] = "3";
      if (knee <= -3) resultObj["زانوی عقب رفته"] = "1";

      if (knee >= 5) resultObj["زانوی خمیده"] = "3";
      if (knee >= 7.5) resultObj["زانوی خمیده"] = "1";
   }

   return resultObj
}

export default Side_P;