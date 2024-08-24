import { Pose, Results } from "@mediapipe/pose";
import { AI_IMAGE_STATE } from "../pages/dashboard/tests/nahanjariHa/data/AI_IMAGES_STATE";

type AIContextType = {
   model?: Pose;
   modelDownlaoded?: boolean;
   results?: Results;
   isSampleResults?: boolean;
   imageState?: AI_IMAGE_STATE
}

export default AIContextType;