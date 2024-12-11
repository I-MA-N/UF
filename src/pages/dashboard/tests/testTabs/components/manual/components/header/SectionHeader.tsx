import Loading from "../../../../../../../common/Loading";
import SectionImageFirstLoad from "./sectionImage/SectionImageFirstLoad";
import { useParams } from "react-router-dom";
import GImage from "../../../../../../../../api/common/GImage";
import { useEffect } from "react";
import SectionNames from "../../../../../../../../types/SectionNames";
import useAIStore from "../../../../../store/AIStore";
import AddImageBtn from "./AddImageBtn";

type SectionHeaderProps = {
   setIsAIMethod: React.Dispatch<React.SetStateAction<boolean>>,
   sectionName: SectionNames,
}

function SectionHeader({ setIsAIMethod, sectionName }: SectionHeaderProps) {
   const { zipFiles, setZipFile } = useAIStore(state => ({ zipFiles: state.zipFiles, setZipFile: state.setZipFile }));
   const { formname, username } = useParams();
   const { mutate, data, isPending } = GImage(username, formname, sectionName);

   const zipFile = zipFiles[sectionName];

   useEffect(() => {
      if (zipFile === undefined) mutate();
   }, [zipFile])

   useEffect(() => {
      if (data) setZipFile(sectionName, data?.result || null);
   }, [data])

   return (
      <div>
         {
            (zipFile === undefined || isPending) &&
            <div className="pb-8">
               <Loading withoutText />
            </div>
         }
         {
            zipFile === null &&
            <AddImageBtn
               sectionName={sectionName}
               setIsAIMethod={setIsAIMethod}
            />
         }
         {
            zipFile &&
            <SectionImageFirstLoad
               zipFile={zipFile}
            />
         }
      </div>
   )
};

export default SectionHeader;