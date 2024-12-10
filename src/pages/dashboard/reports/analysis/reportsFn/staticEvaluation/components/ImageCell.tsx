import { useParams } from "react-router-dom";
import SectionNames from "../../../../../../../types/SectionNames";
import GImage from "../../../../../../../api/common/GImage";
import { useEffect, useState } from "react";
import { extractZip } from "../../../../../../../utils/AIFuncs";
import Loading from "../../../../../../common/Loading";

type ImageCellProps = {
   sectionName: SectionNames
}

function ImageCell({ sectionName }: ImageCellProps) {
   const [imageBase64, setImageBase64] = useState<string | null | undefined>(undefined);

   const { formname, username } = useParams();
   const { mutate, data, isPending } = GImage(username, formname, sectionName);

   useEffect(() => {
      mutate();
   }, [sectionName])

   useEffect(() => {
      if (data?.result) {
         const extractFiles = async () => {
            const imageBase64 = await extractZip(data.result);
            setImageBase64(imageBase64);
         }

         extractFiles();
      }

      setImageBase64(null);
   }, [data])

   return (
      <td rowSpan={50} className="p-1 w-[200px] lg:w-[400px]">
         {
            (imageBase64 === undefined || isPending)
               ?
               <Loading />
               :
               imageBase64
                  ?
                  <img
                     src={imageBase64}
                     className="max-h-[80vh] mx-auto"
                  />
                  :
                  '-'
         }
      </td>
   );
};

export default ImageCell;