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
      const testData = activeTestData;
      const sectionIndex = testData?.findIndex(section => section.name === sectionName);

      if (testData && typeof sectionIndex === "number") {
         const nextSection = testData[sectionIndex + 1];

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