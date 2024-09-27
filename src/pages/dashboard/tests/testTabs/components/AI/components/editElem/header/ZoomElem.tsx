import { useEffect, useMemo, useRef } from "react";
import usePhotoStore from "../../../../../../store/photoStore";
import { DrawingUtils } from "@mediapipe/tasks-vision";

type ZoomElemProps = {
   selectedLandmark: number | null
}

const CROP_SIZE = 50;

function ZoomElem({ selectedLandmark }: ZoomElemProps) {
   const { videoSize, landmarks, isMovingLandmark } = usePhotoStore(state =>
      ({ videoSize: state.videoSize, landmarks: state.landmarks, isMovingLandmark: state.isMovingLandmark })
   );

   const canvasRef = useRef<HTMLCanvasElement>(null);

   const image = useMemo(() => (
      document.getElementById("editImage") as HTMLImageElement | null
   ), [selectedLandmark]);

   useEffect(() => {
      if (image && videoSize && selectedLandmark !== null) {
         const canvas = canvasRef.current;
         const ctx = canvas?.getContext("2d");

         if (canvas && ctx) {
            if (isMovingLandmark) {
               const landmark = landmarks[selectedLandmark];
               const pixelX = (landmark.x * image.clientWidth) - (CROP_SIZE / 2);
               const pixelY = (landmark.y * image.clientHeight) - (CROP_SIZE / 2);
               
               ctx.drawImage(image, pixelX, pixelY, CROP_SIZE, CROP_SIZE, 0, 0, CROP_SIZE, CROP_SIZE);
               let drawingUtils = new DrawingUtils(ctx);
               drawingUtils.drawLandmarks([{ x: 0.5, y: 0.5, z: 0, visibility: 1 }], { color: "#fff", radius: 2 });
            } else {
               ctx.clearRect(0, 0, canvas.width, canvas.height);
            }
         }
      }
   }, [JSON.stringify(landmarks), isMovingLandmark])

   return (
      <canvas
         ref={canvasRef}
         className="absolute top-0 right-0"
         width={CROP_SIZE}
         height={CROP_SIZE}
      />
   );
};

export default ZoomElem;