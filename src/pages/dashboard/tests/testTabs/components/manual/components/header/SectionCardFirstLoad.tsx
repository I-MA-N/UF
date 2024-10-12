import SectionCard from "./SectionCard";
import { useEffect, useState } from "react";
import ExtractedZipType from "../../../../../../../../types/ExtractedZipType";
import { extractZip } from "../../../../../../../../utils/AIFuncs";
import Loading from "../../../../../../../common/Loading";

type SectionCardFirstLoadProps = {
   zipFile: string
}

function SectionCardFirstLoad({ zipFile }: SectionCardFirstLoadProps) {
   const [files, setFiles] = useState<ExtractedZipType | null | undefined>(undefined);
   const [sizes, setSizes] = useState<{
      imgWidth: number,
      imgHeight: number,
      parentWidth: number,
   } | undefined>(undefined);

   useEffect(() => {
      const extractFiles = async () => {
         const files = await extractZip(zipFile);
         setFiles(files);
      }

      extractFiles();
   }, [zipFile])

   if (files === undefined) return (
      <Loading fullHeight={false} />
   )

   if (files === null) return (
      <p className="text-xs lg:text-sm text-center text-yellow mb-10">دریافت عکس با مشکل مواجه شد!</p>
   )
   
   return (
      <>
         <img
            src={files.image}
            onLoad={(e) => {
               const imgWidth = e.currentTarget.naturalWidth;
               const imgHeight = e.currentTarget.naturalHeight;
               const parentWidth = e.currentTarget.parentElement?.clientWidth;

               if (parentWidth) setSizes({ imgWidth, imgHeight, parentWidth });
            }}
            hidden
         />
         {
            sizes &&
            <SectionCard
               files={files}
               sizes={sizes}
            />
         }
      </>
   )
};

export default SectionCardFirstLoad;