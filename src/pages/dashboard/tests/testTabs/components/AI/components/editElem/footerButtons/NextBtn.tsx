import { Results } from "@mediapipe/holistic";
import { useMemo } from "react";
import clickHandler from "./nextBtnClickHandler";
import NextBtnSvg from "./NextBtnSvg";
import useAIStore from "../../../../../../store/AIStore";

type NextBtnProps = {
   setShowCanvas: React.Dispatch<React.SetStateAction<boolean>>,
   photoData: Results | null | undefined,
}

function NextBtn({ setShowCanvas, photoData }: NextBtnProps) {
   const { currentSection, activeTestData } = useAIStore(state => ({ currentSection: state.currentSection, activeTestData: state.activeTestData }));

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

   const isDisabled = useMemo(() => !photoData?.image || !photoData?.poseLandmarks, [photoData])

   return (
      <button
         type="button"
         className={`
            h-full flex items-center gap-2 px-8 text-sm border rounded-full
            ${
               (isDisabled) ? "bg-gray border-gray" : 
               nextSection ? "bg-primary" : "bg-secondary border-secondary"
            }
         `}
         onClick={async () => {
            if (photoData) clickHandler(photoData, nextSection?.name, setShowCanvas);
         }}
      >
         {
            nextSection ? "بعدی" : "تایید"
         }
         <NextBtnSvg
            nextSection={nextSection}
            isPhotoDataUndefined={photoData === undefined}
         />
      </button>
   );
};

export default NextBtn;