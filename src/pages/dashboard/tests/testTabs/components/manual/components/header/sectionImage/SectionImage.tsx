import { useCallback, useEffect, useRef, useState } from "react";
import ImageDrawer from "./ImageDrawer";

type SectionImageProps = {
   imageBase64: string,
}

function SectionImage({ imageBase64 }: SectionImageProps) {
   const [size, setSize] = useState<{
      width: number,
      height: number
   } | null>(null);
   const imgRef = useRef<HTMLImageElement>(null);

   const handleResize = useCallback(() => {
      if (imgRef.current) {
         const imgWidth = imgRef.current.naturalWidth;
         const imgHeight = imgRef.current.naturalHeight;
         const aspectRatio = imgWidth / imgHeight;

         let height = window.innerHeight / 2;
         let width = height * aspectRatio;

         if (aspectRatio >= 1) {
            const parentWidth = imgRef.current.parentElement!.clientWidth;
            width = parentWidth >= 480 ? 480 : parentWidth;
            height = width / aspectRatio;
         }
         
         if (imgHeight) setSize({
            width,
            height
         });
      }
   }, [])

   useEffect(() => {
      window.addEventListener("resize", handleResize);

      return () => {
         window.removeEventListener("resize", handleResize);
      }
   }, [])

   return (
      <div className="relative max-w-4xl mb-6 mx-auto">
         <img
            ref={imgRef}
            src={imageBase64}
            hidden
            onLoad={handleResize}
         />

         {
            size &&
            <ImageDrawer
               image={imageBase64}
               width={size.width}
               height={size.height}
            />
         }
      </div>
   );
};

export default SectionImage;