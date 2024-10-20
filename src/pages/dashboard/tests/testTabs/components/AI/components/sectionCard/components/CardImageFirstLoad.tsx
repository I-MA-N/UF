import { useCallback, useEffect, useRef, useState } from "react";
import { extractZip } from "../../../../../../../../../utils/AIFuncs";
import Loading from "../../../../../../../../common/Loading";
import ExtractedZipType from "../../../../../../../../../types/ExtractedZipType";
import SectionNames from "../../../../../../../../../types/SectionNames";
import CardMenu from "./CardMenu";
import ImageBiggerModal from "./ImageBiggerModal";

type CardImageFristLoadProps = {
   sectionName: SectionNames,
   sectionNameFA: string,
   fileContent: string,
}

function CardImageFirstLoad({ sectionName, sectionNameFA, fileContent }: CardImageFristLoadProps) {
   const [files, setFiles] = useState<ExtractedZipType | null | undefined>(undefined);
   const [showImageBigger, setShowImageBigger] = useState(false);

   useEffect(() => {
      const extractFiles = async () => {
         const files = await extractZip(fileContent);
         setFiles(files);
      }

      extractFiles();
   }, [fileContent])

   // const imgRef = useRef<HTMLImageElement>(null);
   // const [size, setSize] = useState<{
   //    width: number,
   //    height: number
   // } | null>(null);

   // const handleResize = useCallback(() => {
   //    const imgWidth = imgRef.current?.naturalWidth;
   //    const imgHeight = imgRef.current?.naturalHeight;
   //    const parentWidth = imgRef.current?.parentElement?.clientWidth;

   //    if (imgWidth && imgHeight && parentWidth) {
   //       const aspectRatio = imgWidth / imgHeight;

   //       if (parentWidth / aspectRatio > 500) {
   //          setSize({
   //             width: parentWidth - 30,
   //             height: (parentWidth - 30) / aspectRatio
   //          })
   //       } 

   //       setSize({
   //          width: parentWidth,
   //          height: parentWidth / aspectRatio
   //       })
   //    }
   // }, [imgRef.current])

   // useEffect(() => {
   //    handleResize();
   //    window.addEventListener("resize", handleResize);

   //    return () => {
   //       window.removeEventListener("resize", handleResize);
   //    }
   // }, [])

   return (
      <div
         className="size-full flex items-center justify-center border-4 lg:border-[5px] rounded-3xl lg:rounded-[48px] relative p-2"
      >
         <CardMenu
            sectionName={sectionName}
            setShowImageBigger={setShowImageBigger}
            isImageBtnsDisabled={!files}
         />

         {
            files === undefined &&
            // Should show loading without text
            <Loading fullHeight={false} />
         }
         {
            files === null &&
            <span className="text-xs lg:text-sm text-center text-yellow">دریافت عکس با مشکل مواجه شد!</span>
         }
         {
            files &&
            <>
               <img
                  src={files.image}
                  alt="captured photo for this section"
                  className="rounded-3xl max-h-80"
                  // width={size.width}
                  // height={size.height}
               />
               {
                  showImageBigger &&
                  <ImageBiggerModal
                     sectionNameFA={sectionNameFA}
                     src={files.image}
                     setShowImageBigger={setShowImageBigger}
                  />
               }
            </>
         }
      </div>
   )
};

export default CardImageFirstLoad;