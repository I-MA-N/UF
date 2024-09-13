import { FieldValues, UseFormSetValue } from "react-hook-form";
import PhotoLandmarksType from "../../../../../../types/PhotoLandmarksType";

function Walking_P(landmarks: PhotoLandmarksType, setValue: UseFormSetValue<FieldValues>) {
   const nature = landmarks.nature;
   if (nature) {
      const p11 = nature[11];
      const p12 = nature[12];
      const result = p11.x / p12.y;
      
      if (result) {
         setValue("شانه ها گرد می شود", "0");
      }
   }
}

export default Walking_P;