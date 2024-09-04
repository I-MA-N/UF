import { Holistic, Results } from "@mediapipe/holistic";
import { FieldValues, UseFormGetValues, UseFormSetValue } from "react-hook-form";
import { staticEvaluationType } from "../pages/dashboard/tests/data/testsData/staticEvaluation";
import { dynamicEvaluationType } from "../pages/dashboard/tests/data/testsData/dynamicEvaluation";

export type SectionNames =
   "front" |
   "back" |
   "side" |
   "test";

type AIContextType = {
   model?: Holistic;
   modelDownlaoded?: boolean;
   results?: Results;
   currentSection?: staticEvaluationType[0] | dynamicEvaluationType[0],
   staticEvaluationData?: staticEvaluationType,
   dynamicEvaluationData?: dynamicEvaluationType,
   activeTestData?: staticEvaluationType | dynamicEvaluationType,
   videoSize?: {
      width: number,
      height: number
   },
   nameFromManualTab?: SectionNames,
   setValue?: UseFormSetValue<FieldValues>,
   getValues?: UseFormGetValues<FieldValues>,
   formData?: any,
}

export default AIContextType;