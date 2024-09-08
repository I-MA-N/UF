import { useEffect, useRef } from "react";
import ExtractedZipType from "../../../../../../../../../types/ExtractedZipType";
import { drawOnCanvas } from "../../../../../../../../../utils/AIFuncs";

type CardImageProps = {
   image: ExtractedZipType["image"],
   landmarks: ExtractedZipType["landmarks"],
   showLandmarks: boolean,
}

function CardImage({ image, landmarks, showLandmarks }: CardImageProps) {
   const imgRef = useRef<HTMLImageElement>(null);
   const canvasRef = useRef<HTMLCanvasElement>(null);

   useEffect(() => {
      const img = imgRef.current;
      if (img) {
         drawOnCanvas(canvasRef, img.clientWidth, img.clientHeight, undefined, showLandmarks ? landmarks : undefined);
      }
   }, [showLandmarks])

   return (
      <>
         <div className="relative">
            <img
               ref={imgRef}
               src={image}
               alt="captured photo for this section"
               className="max-h-full"
            />

            <canvas
               ref={canvasRef}
               className="absolute top-0 left-0"
            />
         </div>
      </>
   );
};

export default CardImage;