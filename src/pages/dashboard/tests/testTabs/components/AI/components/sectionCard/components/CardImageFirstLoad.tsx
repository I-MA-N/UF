import { useEffect, useMemo, useRef, useState } from "react";
import { extractZip } from "../../../../../../../../../utils/AIFuncs";
import Loading from "../../../../../../../../common/Loading";
import CardImage from "./CardImage";
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
   const [showLandmarks, setShowLandmarks] = useState(true);
   const [showImageBigger, setShowImageBigger] = useState(false);

   const divRef = useRef<HTMLDivElement>(null);
   const [width, setWidth] = useState(divRef.current?.clientWidth);
   const height = useMemo(() => width && width * 1.6, [width]);

   const isSide = useMemo(() => sectionName.toLowerCase().includes("side"), [sectionName]);

   useEffect(() => {
      setWidth(divRef.current?.clientWidth);

      const handleResize = () => {
         setWidth(divRef.current?.clientWidth);
      }

      window.addEventListener("resize", handleResize);
      return () => {
         window.removeEventListener("resize", handleResize);
      }
   }, [divRef.current])

   useEffect(() => {
      const extractFiles = async () => {
         const files = await extractZip(fileContent);
         setFiles(files);
      }

      extractFiles();
   }, [fileContent])

   return (
      <div
         ref={divRef}
         className="size-full flex items-center justify-center border-4 lg:border-[5px] rounded-3xl lg:rounded-[48px] relative p-2"
      >
         <CardMenu
            sectionName={sectionName}
            setShowLandmarks={setShowLandmarks}
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
               <CardImage
                  isSide={isSide}
                  image={files.image}
                  landmarks={files.landmarks}
                  showLandmarks={showLandmarks}
                  width={width}
                  height={height}
               />
               {
                  showImageBigger &&
                  <ImageBiggerModal
                     isSide={isSide}
                     landmarks={files.landmarks}
                     showLandmarks={showLandmarks}
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