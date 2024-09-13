import PhotoLandmarksType from "./PhotoLandmarksType";

type ExtractedZipType = {
   image: string;
   imageSize: {
      width: number;
      height: number;
   };
   landmarks: PhotoLandmarksType;
}

export default ExtractedZipType;