import { SectionNames } from "../../../../../../../../types/AIContextType";
import ImageCanvas from "./ImageCanvas";
import { useAIContext } from "../../../../../context/AIContextProvider";

type ImageELemProps = {
   setIsAIMethod: React.Dispatch<React.SetStateAction<boolean>>,
   sectionName: SectionNames,
   zipFile: string | null
}

function ImageElem({ setIsAIMethod, sectionName, zipFile }: ImageELemProps) {
   const [_AIData, setAIData] = useAIContext();

   if (zipFile) return (
      <ImageCanvas fileContent={zipFile} />
   )

   return (
      <button
         type="button"
         onClick={() => {
            setAIData(prevValue => ({
               ...prevValue,
               nameFromManualTab: sectionName
            }))
            setIsAIMethod(true);
         }}
      >
         Add image
      </button>
   );
};

export default ImageElem;