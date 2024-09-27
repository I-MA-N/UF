import { useEffect, useRef } from "react";
import { drawOnCanvas } from "../../../../../../../../utils/AIFuncs";
import ExtractedZipType from "../../../../../../../../types/ExtractedZipType";
import SectionNames from "../../../../../../../../types/SectionNames";

type ImageElemProps = {
   sectionName: SectionNames,
   image: ExtractedZipType["image"],
   landmarks: ExtractedZipType["landmarks"],
   isVisible: boolean,
   width: number | undefined,
   height: number | undefined,
}

function ImageElem({ sectionName, image, landmarks, isVisible, width, height }: ImageElemProps) {
   const canvasRef = useRef<HTMLCanvasElement>(null);

   useEffect(() => {
      const isSide = sectionName.toLowerCase().includes("side");

      if (width && height) {
         drawOnCanvas(canvasRef, width, height, width >= 1024 ? 2.5 : 1.5, ["#fff", "#fff"], undefined, landmarks, isSide);
      }
   }, [landmarks, width, height])

   return (
      <div
         className="absolute top-0 left-0 z-0 transition-all duration-500"
         style={{
            width,
            height: isVisible ? height : 0
         }}
      >
         <img
            src={image}
            alt="captured photo for this section"
            className="size-full"
         />

         <canvas
            ref={canvasRef}
            className="size-full absolute top-0 left-0"
         />
      </div>
   );
};

export default ImageElem;