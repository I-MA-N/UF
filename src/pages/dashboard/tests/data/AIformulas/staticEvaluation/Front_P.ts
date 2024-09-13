import { FieldValues, UseFormSetValue } from "react-hook-form";
import PhotoLandmarksType from "../../../../../../types/PhotoLandmarksType";

function Front_P(landmarks: PhotoLandmarksType, setValue: UseFormSetValue<FieldValues>) {
   const nature = landmarks.nature;
   if (nature) {
      const p11 = nature[11];
      const p12 = nature[12];
      const result = p11.x / p12.y;
   
      if (result) {
         setValue("سر به جلو", "3");
      }
   }
}

export default Front_P;