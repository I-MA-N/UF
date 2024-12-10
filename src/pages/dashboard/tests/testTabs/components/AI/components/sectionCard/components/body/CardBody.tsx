import { useParams } from "react-router-dom";
import GImage from "../../../../../../../../../../api/common/GImage";
import { useEffect } from "react";
import useAIStore from "../../../../../../../store/AIStore";
import SectionNames from "../../../../../../../../../../types/SectionNames";
import Loading from "../../../../../../../../../common/Loading";
import CardBtn from "./CardBtn";
import CardImage from "./cardImage/CardImage";

type CardBodyProps = {
   sectionName: SectionNames,
   sectionNameFA: string
}

function CardBody({ sectionName, sectionNameFA }: CardBodyProps) {
   const { zipFiles, setZipFile } = useAIStore(state => ({ zipFiles: state.zipFiles, setZipFile: state.setZipFile }));
   const { formname, username } = useParams();
   const { mutate, data, isPending } = GImage(username, formname, sectionName);

   const zipFile = zipFiles[sectionName];

   useEffect(() => {
      if (zipFile === undefined) mutate();
   }, [zipFile])

   useEffect(() => {
      if (data) {
         setZipFile(sectionName, data?.result || null);
      }
   }, [data])

   return (
      <div className="size-full min-h-80 md:min-h-[23rem] lg:min-h-96">
         {
            (zipFile === undefined || isPending)
               ?
               <div className="h-full flex items-center justify-center border-4 lg:border-[5px] border-dashed rounded-3xl lg:rounded-[48px]">
                  <Loading />
               </div>
               :
               zipFile === null
                  ?
                  <CardBtn sectionName={sectionName} />
                  :
                  <CardImage
                     sectionName={sectionName}
                     sectionNameFA={sectionNameFA}
                     fileContent={zipFile}
                  />
         }
      </div>
   );
};

export default CardBody;