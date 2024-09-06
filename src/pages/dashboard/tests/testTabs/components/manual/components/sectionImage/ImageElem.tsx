import ImageCanvas from "./ImageCanvas";
import SectionNames from "../../../../../../../../types/SectionNames";
import useAIStore from "../../../../../store/AIStore";

type ImageELemProps = {
   setIsAIMethod: React.Dispatch<React.SetStateAction<boolean>>,
   sectionName: SectionNames,
   zipFile: string | null
}

function ImageElem({ setIsAIMethod, sectionName, zipFile }: ImageELemProps) {
   const setNameFromManualTab = useAIStore(state => state.setNameFromManualTab);

   if (zipFile) return (
      <ImageCanvas fileContent={zipFile} />
   )

   return (
      <button
         type="button"
         onClick={() => {
            setNameFromManualTab(sectionName);
            setIsAIMethod(true);
         }}
      >
         Add image
      </button>
   );
};

export default ImageElem;