import Loading from "../../../../../../../common/Loading";
import SectionCardFirstLoad from "./SectionCardFirstLoad";
import { useParams } from "react-router-dom";
import GImage from "../../../../../../../../api/common/GImage";
import { useEffect, useMemo } from "react";
import SectionNames from "../../../../../../../../types/SectionNames";
import useAIStore from "../../../../../store/AIStore";
import AddImageBtn from "./AddImageBtn";

type SectionHeaderProps = {
   setIsAIMethod: React.Dispatch<React.SetStateAction<boolean>>,
   sectionName: SectionNames,
}

function SectionHeader({ setIsAIMethod, sectionName }: SectionHeaderProps) {
   const getOrSetZipFile = useAIStore(state => state.getOrSetZipFile);

   const { formname, username } = useParams();
   const { mutate, data, isPending } = GImage(username, formname, sectionName);

   const zipFile = useMemo(() => (
      getOrSetZipFile(sectionName, data ? (data?.result || null) : undefined)
   ), [getOrSetZipFile, sectionName, data])

   useEffect(() => {
      if (zipFile === undefined) mutate();
   }, [zipFile])

   return (
      <>
         {
            (zipFile === undefined || isPending) &&
            <div className="pb-8">
               <Loading fullHeight={false} />
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
            <SectionCardFirstLoad
               zipFile={zipFile}
            />
         }
      </>
   )
};

export default SectionHeader;