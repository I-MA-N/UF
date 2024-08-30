import { Holistic, NormalizedLandmarkList, Results } from "@mediapipe/holistic";
import { FieldValues, UseFormGetValues, UseFormSetValue } from "react-hook-form";
import { nahanjariHaType } from "../pages/dashboard/tests/data/testsData/nahanjariHa";
import { dynamicType } from "../pages/dashboard/tests/data/testsData/dynamic";
import VideoFnType from "./VideoFnType";

export type ImageStateNames =
   "front" |
   "back" |
   "side" |
   "test"

type ImageStateType = {
   name: ImageStateNames,
   nameFA: string,
   sampleImageSrc: string,
   sampleImageLandmarks: NormalizedLandmarkList,
   photoFn: (landmarks: NormalizedLandmarkList, setValue: UseFormSetValue<FieldValues>) => void,
   videoFn?: VideoFnType
}

type AIContextType = {
   model?: Holistic;
   modelDownlaoded?: boolean;
   results?: Results;
   imageState?: ImageStateType,
   testData?: nahanjariHaType | dynamicType,
   videoSize?: {
      width: number,
      height: number
   },
   imagesToSave?: {
      key: ImageStateNames,
      value: string
   }[],
   nameFromManualTab?: ImageStateNames,
   setValue?: UseFormSetValue<FieldValues>,
   getValues?: UseFormGetValues<FieldValues>,
   formData?: any
}

export default AIContextType;