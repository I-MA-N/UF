import Loading from "../../../../../../../common/Loading";
import ImageElem from "./ImageElem";
import { useParams } from "react-router-dom";
import GImage from "../../../../../../../../api/common/GImage";
import { useEffect, useMemo } from "react";
import SectionNames from "../../../../../../../../types/SectionNames";
import useAIStore from "../../../../../store/AIStore";

type ImageElemFirstLoadProps = {
   setIsAIMethod: React.Dispatch<React.SetStateAction<boolean>>,
   sectionName: SectionNames,
}

function ImageElemFirstLoad({ setIsAIMethod, sectionName }: ImageElemFirstLoadProps) {
   const getOrSetZipFile = useAIStore(state => state.getOrSetZipFile);
   
   const { formname, username } = useParams();
   const { mutate, data, isPending } = GImage(username, formname, sectionName);
   
   const zipFile = useMemo(() => (
      getOrSetZipFile(sectionName, data ? (data?.result || null) : undefined)
   ), [getOrSetZipFile, sectionName, data])

   useEffect(() => {
      if (zipFile === undefined) mutate();
   }, [zipFile])

   if (isPending || zipFile === undefined) return (
      <div className="pb-8">
         <Loading fullHeight={false} />
      </div>
   )

   return (
      <ImageElem
         setIsAIMethod={setIsAIMethod}
         zipFile={zipFile}
         sectionName={sectionName}
      />
   )
};

export default ImageElemFirstLoad;