import { useEffect, useRef } from "react";
import ExtractedZipType from "../../../../../../../../../types/ExtractedZipType";
import { drawOnCanvas } from "../../../../../../../../../utils/AIFuncs";
import SectionNames from "../../../../../../../../../types/SectionNames";

type CardImageProps = {
   sectionName: SectionNames,
   image: ExtractedZipType["image"],
   width: number | undefined,
   height: number | undefined,
   landmarks: ExtractedZipType["landmarks"],
   showLandmarks: boolean,
}

function CardImage({ sectionName, image, width, height, landmarks, showLandmarks }: CardImageProps) {
   const imgRef = useRef<HTMLImageElement>(null);
   const canvasRef = useRef<HTMLCanvasElement>(null);

   useEffect(() => {
      const img = imgRef.current;
      const isSide = sectionName.toLowerCase().includes("side");
      if (img) {
         drawOnCanvas(canvasRef, img.clientWidth, img.clientHeight, 0.6, undefined, showLandmarks ? landmarks : undefined, isSide);
      }
   }, [showLandmarks, width])

   return (
      <>
         <div className="relative">
            <img
               ref={imgRef}
               src={image}
               alt="captured photo for this section"
               width={width}
               height={height}
               className="rounded-3xl"
            />

            <canvas
               ref={canvasRef}
               className="absolute top-0 left-0"
               width={width}
               height={height}
            />
         </div>
      </>
   );
};

export default CardImage;