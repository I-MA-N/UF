import SectionImage from "./SectionImage";
import { useEffect, useState } from "react";
import { extractZip } from "../../../../../../../../../utils/AIFuncs";
import Loading from "../../../../../../../../common/Loading";

type SectionImageFirstLoadProps = {
   zipFile: string
}

function SectionImageFirstLoad({ zipFile }: SectionImageFirstLoadProps) {
   const [imageBase64, setImageBase64] = useState<string | null | undefined>(undefined);

   useEffect(() => {
      const extractFiles = async () => {
         const imageBase64 = await extractZip(zipFile);
         setImageBase64(imageBase64);
      }

      extractFiles();
   }, [zipFile])

   if (imageBase64 === undefined) return (
      <div className="pb-8">
         <Loading withoutText />
      </div>
   )

   if (imageBase64 === null) return (
      <p className="text-xs lg:text-sm text-center text-yellow mb-10">دریافت عکس با مشکل مواجه شد!</p>
   )

   return (
      <SectionImage
         imageBase64={imageBase64}
      />
   )
};

export default SectionImageFirstLoad;