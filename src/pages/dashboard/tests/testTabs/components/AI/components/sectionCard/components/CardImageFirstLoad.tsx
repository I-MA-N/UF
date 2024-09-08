import { useEffect, useState } from "react";
import { extractZip } from "../../../../../../../../../utils/AIFuncs";
import Loading from "../../../../../../../../common/Loading";
import CardImage from "./CardImage";
import ExtractedZipType from "../../../../../../../../../types/ExtractedZipType";
import SectionNames from "../../../../../../../../../types/SectionNames";
import CardMenu from "./CardMenu";

type CardImageFristLoadProps = {
   sectionName: SectionNames,
   fileContent: string,
}

function CardImageFirstLoad({ sectionName, fileContent }: CardImageFristLoadProps) {
   const [files, setFiles] = useState<ExtractedZipType | null | undefined>(undefined);
   const [showLandmarks, setShowLandmarks] = useState(true);

   useEffect(() => {
      const extractFiles = async () => {
         const files = await extractZip(fileContent);
         setFiles(files);
      }

      extractFiles();
   }, [fileContent])

   return (
      <div className="size-full flex items-center justify-center border-4 rounded-3xl relative">
         <CardMenu
            sectionName={sectionName}
            setShowLandmarks={setShowLandmarks}
            isImageBtnsDisabled={!files}
         />

         {
            files === undefined &&
            // Should show loading without text
            <Loading fullHeight={false} />
         }
         {
            files === null &&
            <span className="text-xs  text-center text-yellow">دریافت عکس با مشکل مواجه شد!</span>
         }
         {
            files &&
            <CardImage
               image={files.image}
               landmarks={files.landmarks}
               showLandmarks={showLandmarks}
            />
         }
      </div>
   )
};

export default CardImageFirstLoad;