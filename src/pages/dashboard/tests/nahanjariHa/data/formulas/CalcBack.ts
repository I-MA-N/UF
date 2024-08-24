import { NormalizedLandmarkList } from "@mediapipe/holistic";
import { FieldValues, UseFormSetValue } from "react-hook-form";

function CalcBack(landmarks: NormalizedLandmarkList, setValue: UseFormSetValue<FieldValues>) {
   const p11 = landmarks?.[11];
   const p12 = landmarks?.[12];
   const result = p11.x / p12.y;

   if (result) {
      setValue("گردن کج", result > 1 ? "3": "5");
   }
}

export default CalcBack;