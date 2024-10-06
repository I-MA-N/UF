import { useMemo } from "react";
import clickHandler from "./nextBtnClickHandler";
import NextBtnSvg from "./NextBtnSvg";
import useAIStore from "../../../../../../../store/AIStore";
import usePhotoStore from "../../../../../../../store/photoStore";

function NextBtn() {
   const { currentSection, activeTestData } = useAIStore(state => ({ currentSection: state.currentSection, activeTestData: state.activeTestData }));
   const landmarks = usePhotoStore(state => state.landmarks);

   const nextSection = useMemo(() => {
      const sectionName = currentSection?.name;     
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
   }, [currentSection])

   const shouldGoNext = useMemo(() => {
      if (currentSection?.zipFile || !nextSection) return false;
      return true;
   }, [nextSection, currentSection?.zipFile]);

   const isDisabled = useMemo(() => !landmarks?.length, [landmarks]);

   return (
      <button
         type="button"
         className={`
            h-full flex items-center gap-2 px-8 border rounded-full
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