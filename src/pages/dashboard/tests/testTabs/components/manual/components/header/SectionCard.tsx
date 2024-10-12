import { useCallback, useEffect, useState } from "react";
import ExtractedZipType from "../../../../../../../../types/ExtractedZipType";
import ImageToggleBtn from "./ImageToggleBtn";

type SectionCardProps = {
   files: ExtractedZipType,
   sizes: {
      imgWidth: number,
      imgHeight: number,
      parentWidth: number,
   }
}

function SectionCard({ files, sizes }: SectionCardProps) {
   const [size, setSize] = useState<{
      width: number,
      height: number
   } | null>(null);

   const [isVisible, setIsVisible] = useState(false);

   const handleResize = useCallback(() => {
      const aspectRatio = sizes.imgWidth / sizes.imgHeight;

      setSize({
         width: sizes.parentWidth,
         height: sizes.parentWidth / aspectRatio
      })
   }, [])

   useEffect(() => {
      handleResize();
      window.addEventListener("resize", handleResize);

      return () => {
         window.removeEventListener("resize", handleResize);
      }
   }, [])

   return (
      <div className="max-w-4xl relative mb-6 mx-auto">
         {
            size &&
            <>
               <div
                  className="relative top-0 left-0 transition-all duration-500"
                  style={{
                     width: size.width,
                     height: isVisible ? size.height : 0
                  }}
               />
               <ImageToggleBtn
                  isVisible={isVisible}
                  setIsVisible={setIsVisible}
               />

               <div
                  className="absolute left-0 -z-10 bg-primary transition-all duration-500"
                  style={{
                     width: size.width,
                     height: isVisible ? 0 : size.height,
                     top: isVisible ? size.height : 0
                  }}
               />
               <img
                  src={files.image}
                  alt="captured photo for this section"
                  className="absolute top-0 left-0 z-0 transition-all duration-500"
                  style={{
                     width: size.width,
                     height: isVisible ? size.height : 0
                  }}
               />
            </>
         }
      </div>
   );
};

export default SectionCard;