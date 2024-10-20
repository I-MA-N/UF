import { NormalizedLandmark } from "@mediapipe/tasks-vision";
import degreeTwoPoints from "../../../../../../utils/degreeTwoPoints";
import DegreeType from "../../../../../../types/DegreeType";

function RotaryStabilityLeftSide_P(landmarks: NormalizedLandmark[]) {
   const values = {}
   const degrees: DegreeType[] = [];

   return {
      values,
      degrees,
   };
}

export default RotaryStabilityLeftSide_P;