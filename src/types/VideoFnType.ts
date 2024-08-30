import { NormalizedLandmarkList } from "@mediapipe/holistic";

type VideoFnType = (landmarks: NormalizedLandmarkList) => {
   landmarks: NormalizedLandmarkList;
   status: boolean;
}[]

export default VideoFnType;
