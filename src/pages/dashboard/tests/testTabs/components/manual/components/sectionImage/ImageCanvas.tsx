import { useEffect, useRef, useState } from "react";
import { extractZip } from "../../../../../../../../utils/AIFuncs";

type ImageCanvasProps = {
   fileContent: string
}

function ImageCanvas({ fileContent }: ImageCanvasProps) {
   const [width, setWidth] = useState(384);
   const canvasRef = useRef<HTMLCanvasElement>(null);

   useEffect(() => {
      const resizeHandler = () => {
         // @ts-ignore
         const width = window.innerWidth;
         if (width < 384) setWidth(width)

      }
      window.addEventListener("resize", resizeHandler);

      return () => {
         window.removeEventListener("resize", resizeHandler);
      }
   }, [])

   useEffect(() => {
      const canvas = canvasRef.current;
      if (canvas) extractZip(fileContent, canvas);
   }, [canvasRef.current, fileContent, width])

   return (
      <canvas
         ref={canvasRef}
         width={width}
         height={width / 1.6}
         className="max-w-full"
      />
   );
};

export default ImageCanvas;