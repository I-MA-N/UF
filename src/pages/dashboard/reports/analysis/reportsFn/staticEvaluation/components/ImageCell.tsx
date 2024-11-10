import { useParams } from "react-router-dom";
import SectionNames from "../../../../../../../types/SectionNames";
import GImage from "../../../../../../../api/common/GImage";
import { useEffect, useState } from "react";
import ExtractedZipType from "../../../../../../../types/ExtractedZipType";
import { extractZip } from "../../../../../../../utils/AIFuncs";
import Loading from "../../../../../../common/Loading";

type ImageCellProps = {
   sectionName: SectionNames
}

function ImageCell({ sectionName }: ImageCellProps) {
   const [files, setFiles] = useState<ExtractedZipType | null>(null);

   const { formname, username } = useParams();
   const { mutate, data, isPending } = GImage(username, formname, sectionName);

   useEffect(() => {
      mutate();
   }, [sectionName])

   useEffect(() => {
      if (data?.result) {
         const extractFiles = async () => {
            const files = await extractZip(data.result);
            setFiles(files);
         }

         extractFiles();
      }
   }, [data])

   return (
      <td rowSpan={50} className="p-1">
         {
            isPending
               ?
               <Loading />
               :
               files
                  ?
                  <img
                     src={files.image}
                     width={files.imageSize.width}
                     height={files.imageSize.height}
                     className="mx-auto"
                  />
                  :
                  '-'
         }
      </td>
   );
};

export default ImageCell;