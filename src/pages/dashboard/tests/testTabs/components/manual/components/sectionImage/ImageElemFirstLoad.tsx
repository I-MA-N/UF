import { useAIContext } from "../../../../../context/AIContextProvider";
import Loading from "../../../../../../../common/Loading";
import ImageElem from "./ImageElem";
import { SectionNames } from "../../../../../../../../types/AIContextType";
import { useParams } from "react-router-dom";
import GImage from "../../../../../../../../api/common/GImage";
import { useEffect, useMemo } from "react";

type ImageElemFirstLoadProps = {
   setIsAIMethod: React.Dispatch<React.SetStateAction<boolean>>,
   sectionName: SectionNames,
}

function ImageElemFirstLoad({ setIsAIMethod, sectionName }: ImageElemFirstLoadProps) {
   const [AIData, setAIData] = useAIContext();
   const zipFile = useMemo(() => (
      AIData?.activeTestData?.find(section => section.name === sectionName)?.zipFile
   ), [JSON.stringify(AIData?.activeTestData)])

   const { formname, username } = useParams();
   const { mutateAsync } = GImage(username, formname, sectionName);

   useEffect(() => {
      if (zipFile === undefined) {
         mutateAsync()
            .then(res => {
               setAIData(prevValue => {
                  const activeTestData = prevValue?.activeTestData;
                  const currentSectionIndex = activeTestData?.findIndex(section => section.name === sectionName);
                  
                  if (activeTestData && currentSectionIndex !== undefined && currentSectionIndex > -1) {
                     activeTestData[currentSectionIndex].zipFile = res?.result || null;
                  }
                  
                  return {
                     ...prevValue,
                     activeTestData
                  }
               })
            })
      }
   }, [zipFile])

   if (zipFile === undefined) return (
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