import { NormalizedLandmark } from "@mediapipe/tasks-vision";

type ExtractedZipType = {
   image: string;
   imageSize: {
      width: number;
      height: number;
   };
   landmarks: NormalizedLandmark[];
}

export default ExtractedZipType;