import { PoseLandmarker } from "@mediapipe/tasks-vision"

type WindowModelType = {
   poseLandmarker?: PoseLandmarker | null | undefined,
   runningMode?: "VIDEO" | "IMAGE"
}

export default WindowModelType;