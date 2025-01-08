import { useMemo } from "react";
import clickHandler from "./utils/nextBtnClickHandler";
import NextBtnSvg from "./NextBtnSvg";
import useAIStore from "../../../../../../../../../../../store/AIStore";
import usePhotoStore from "../../../../../../../../../../../store/photoStore";

function NextBtn() {
   const { currentSection, activeTestData, zipFiles } = useAIStore(state => ({ currentSection: state.currentSection, activeTestData: state.activeTestData, zipFiles: state.zipFiles }));
   const landmarks = usePhotoStore(state => state.landmarks);

   const sectionName = useMemo(() => currentSection!.name, [currentSection]);

   const nextSection = useMemo(() => {
      let partIndex: number | undefined = undefined;
      let sectionIndex: number | undefined = undefined;

      activeTestData?.forEach((part, index) => {
         const foundedIndex = part.findIndex(section => section.name === sectionName);
         if (foundedIndex > -1) {
            sectionIndex = foundedIndex;
            partIndex = index;
         };
      });

      if (activeTestData && typeof partIndex === "number" && typeof sectionIndex === "number") {
         let nextSection = activeTestData[partIndex]?.[sectionIndex + 1];

         if (nextSection === undefined) {
            nextSection = activeTestData[partIndex + 1]?.[0];
         }

         return nextSection;
      }

      return undefined;
   }, [sectionName])

   const shouldGoNext = useMemo(() => {
      const zipFile = zipFiles[sectionName];
      if (zipFile || !nextSection) return false;
      return true;
   }, [sectionName, nextSection]);

   const isDisabled = useMemo(() => !landmarks?.length, [landmarks]);

   return (
      <button
         type="button"
         className={`
            h-full flex items-center gap-2 px-5 xs:px-8 border rounded-full
            ${
               (isDisabled) ? "bg-gray border-gray" : 
               shouldGoNext ? "bg-primary" : "bg-secondary border-secondary"
            }
         `}
         onClick={async () => {
            if (!isDisabled) clickHandler(landmarks, shouldGoNext ? nextSection!.name : undefined);
         }}
      >
         {
            shouldGoNext ? "بعدی" : "تایید"
         }
         <NextBtnSvg
            shouldGoNext={shouldGoNext}
         />
      </button>
   );
};

export default NextBtn;