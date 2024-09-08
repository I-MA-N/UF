import { useEffect, useRef, useState } from "react";
import { drawOnCanvas, extractZip } from "../../../../../../../../utils/AIFuncs";
import Loading from "../../../../../../../common/Loading";
import ExtractedZipType from "../../../../../../../../types/ExtractedZipType";

type ImageCanvasProps = {
   fileContent: string
}

function ImageCanvas({ fileContent }: ImageCanvasProps) {
   const [files, setFiles] = useState<ExtractedZipType | null | undefined>(undefined);

   const canvasRef = useRef<HTMLCanvasElement>(null);

   useEffect(() => {
      const extractFiles = async () => {
         const files = await extractZip(fileContent);
         setFiles(files);
      }

      extractFiles();
   }, [fileContent])

   useEffect(() => {
      if (canvasRef.current) {
         drawOnCanvas(canvasRef, canvasRef.current.width, canvasRef.current.height, undefined, files!.landmarks);
      }
   }, [files?.landmarks])

   if (files === undefined) return (
      <Loading fullHeight={false} />
   )

   if (files === null) return (
      <span className="text-xs  text-center text-yellow">دریافت عکس با مشکل مواجه شد!</span>
   )

   return (
      <div className="relative">
         <img
            src={files.image}
            alt="captured photo for this section"
            style={{
               width: files.imageSize.width,
               height: files.imageSize.height
            }}
         />

         <canvas
            ref={canvasRef}
            width={files.imageSize.width}
            height={files.imageSize.height}
            className="absolute top-0 left-0"
         />
      </div>
   );
};

export default ImageCanvas;