import { useEffect, useMemo, useRef, useState } from "react";
import ExtractedZipType from "../../../../../../../../types/ExtractedZipType";
import ImageToggleBtn from "./ImageToggleBtn";
import ImageElem from "./ImageElem";

type SectionCardProps = {
   files: ExtractedZipType,
}

function SectionCard({ files }: SectionCardProps) {
   const divRef = useRef<HTMLDivElement>(null);

   const [width, setWidth] = useState(divRef.current?.clientWidth);
   const height = useMemo(() => {
      if (width) {
         if (files.imageSize.width > files.imageSize.height) {
            return width / 1.6
         }

         return width * 1.6;
      }

      return undefined
   }, [width]);

   const [isVisible, setIsVisible] = useState(false);

   useEffect(() => {
      setWidth(divRef.current?.clientWidth);

      const handleResize = () => {
         setWidth(divRef.current?.clientWidth);
      }

      divRef.current?.addEventListener("resize", handleResize);
      return () => {
         divRef.current?.removeEventListener("resize", handleResize);
      }
   }, [divRef.current])

   return (
      <div
         ref={divRef}
         className="relative mb-6"
      >
         {
            width && height &&
            <>
               <div
                  className="relative top-0 left-0 transition-all duration-500"
                  style={{
                     width,
                     height: isVisible ? height : 0
                  }}
               />
               <ImageToggleBtn
                  isVisible={isVisible}
                  setIsVisible={setIsVisible}
               />

               <div
                  className="absolute left-0 -z-10 bg-primary transition-all duration-500"
                  style={{
                     width,
                     height: isVisible ? 0 : height,
                     top: isVisible ? height : 0
                  }}
               />
               <ImageElem
                  image={files.image}
                  landmarks={files.landmarks}
                  width={width}
                  height={height}
               />
            </>
         }
      </div>
   );
};

export default SectionCard;