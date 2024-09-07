import { NormalizedLandmark } from "@mediapipe/tasks-vision";

type PhotoData = {
   image: HTMLVideoElement,
   landmarks: NormalizedLandmark[],
   width: number,
   height: number
}

export default PhotoData;