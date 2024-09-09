import SectionCard from "./SectionCard";
import { useEffect, useState } from "react";
import ExtractedZipType from "../../../../../../../../types/ExtractedZipType";
import { extractZip } from "../../../../../../../../utils/AIFuncs";
import Loading from "../../../../../../../common/Loading";

type SectionCardFirtLoadProps = {
   zipFile: string
}

function SectionCardFirtLoad({ zipFile }: SectionCardFirtLoadProps) {
   const [files, setFiles] = useState<ExtractedZipType | null | undefined>(undefined);

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
      <span className="text-xs  text-center text-yellow">دریافت عکس با مشکل مواجه شد!</span>
   )

   return (
      <SectionCard
         files={files}
      />
   )
};

export default SectionCardFirtLoad;