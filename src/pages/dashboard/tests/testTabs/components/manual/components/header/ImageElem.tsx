import { useEffect, useRef } from "react";
import { drawOnCanvas } from "../../../../../../../../utils/AIFuncs";
import { NormalizedLandmark } from "@mediapipe/tasks-vision";

type ImageElemProps = {
   image: string,
   width: number | undefined,
   height: number | undefined,
   landmarks: NormalizedLandmark[],
}

function ImageElem({ image, width, height, landmarks }: ImageElemProps) {
   const canvasRef = useRef<HTMLCanvasElement>(null);

   useEffect(() => {
      if (canvasRef.current) {
         drawOnCanvas(canvasRef, canvasRef.current.width, canvasRef.current.height, undefined, landmarks);
      }
   }, [landmarks, width])

   return (
      <div className="absolute top-0 left-0 -z-20">
         <img
            src={image}
            alt="captured photo for this section"
            width={width}
            height={height}
         />

         <canvas
            ref={canvasRef}
            className="absolute top-0 left-0"
            width={width}
            height={height}
         />
      </div>
   );
};

export default ImageElem;