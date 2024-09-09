import { NormalizedLandmark } from "@mediapipe/tasks-vision";

type VideoFnType = (landmarks: NormalizedLandmark[]) => {
   landmarks: NormalizedLandmark[];
   status: boolean;
}[]

export default VideoFnType;
