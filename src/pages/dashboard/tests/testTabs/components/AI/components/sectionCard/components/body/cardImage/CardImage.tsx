import { useEffect, useRef, useState } from "react";
import { extractZip } from "../../../../../../../../../../../utils/AIFuncs";
import Loading from "../../../../../../../../../../common/Loading";
import SectionNames from "../../../../../../../../../../../types/SectionNames";
import CardMenu from "./CardMenu";
import ImageBiggerModal from "./ImageBiggerModal";

type CardImageProps = {
   sectionName: SectionNames,
   sectionNameFA: string,
   fileContent: string,
}

function CardImage({ sectionName, sectionNameFA, fileContent }: CardImageProps) {
   const [imageBase64, setImageBase64] = useState<string | null | undefined>(undefined);
   const [showImageBigger, setShowImageBigger] = useState(false);
   const imgRef = useRef<HTMLImageElement>(null);

   useEffect(() => {
      const extractFiles = async () => {
         const imageBase64 = await extractZip(fileContent);
         setImageBase64(imageBase64);
      }

      extractFiles();
   }, [fileContent])

   return (
      <div
         className="size-full flex items-center justify-center border-4 lg:border-[5px] rounded-3xl lg:rounded-[48px] relative p-2"
      >
         {
            imageBase64 === undefined
               ?
               <Loading withoutText />
               :
               <>
                  <CardMenu
                     sectionName={sectionName}
                     setShowImageBigger={setShowImageBigger}
                     isImageBtnsDisabled={!imageBase64}
                  />

                  {
                     imageBase64 === null
                        ?
                        <span className="text-xs lg:text-sm text-center text-yellow">دریافت عکس با مشکل مواجه شد!</span>
                        :
                        <>
                           <img
                              ref={imgRef}
                              src={imageBase64}
                              alt="عکس گرفته شده"
                              className="rounded-3xl max-h-80"
                           />

                           {
                              (showImageBigger && imgRef.current) &&
                              <ImageBiggerModal
                                 sectionNameFA={sectionNameFA}
                                 setShowImageBigger={setShowImageBigger}
                                 src={imageBase64}
                                 imgDirection={imgRef.current.naturalWidth > imgRef.current.naturalHeight ? "horizental" : "vertical"}
                              />
                           }
                        </>
                  }
               </>
         }
      </div>
   )
};

export default CardImage;