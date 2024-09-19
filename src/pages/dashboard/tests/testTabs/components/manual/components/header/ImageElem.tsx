import { useEffect, useRef } from "react";
import { drawOnCanvas } from "../../../../../../../../utils/AIFuncs";
import ExtractedZipType from "../../../../../../../../types/ExtractedZipType";
import SectionNames from "../../../../../../../../types/SectionNames";

type ImageElemProps = {
   sectionName: SectionNames,
   image: ExtractedZipType["image"],
   width: number | undefined,
   height: number | undefined,
   landmarks: ExtractedZipType["landmarks"],
}

function ImageElem({ sectionName, image, width, height, landmarks }: ImageElemProps) {
   const imgRef = useRef<HTMLImageElement>(null);
   const canvasRef = useRef<HTMLCanvasElement>(null);

   useEffect(() => {
      const img = imgRef.current;
      const isSide = sectionName.toLowerCase().includes("side");
      if (img) {
         drawOnCanvas(canvasRef, img.clientWidth, img.clientHeight, 1.5, undefined, landmarks, isSide);
      }
   }, [landmarks, width])

   return (
      <div className="absolute top-0 left-0 -z-20">
         <img
            ref={imgRef}
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