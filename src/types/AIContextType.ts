import { Holistic, Results } from "@mediapipe/holistic";
import { AI_IMAGE_STATE } from "../pages/dashboard/tests/nahanjariHa/data/AI_IMAGES_STATE";

type AIContextType = {
   model?: Holistic;
   modelDownlaoded?: boolean;
   results?: Results;
   isSampleResults?: boolean;
   imageState?: AI_IMAGE_STATE
}

export default AIContextType;