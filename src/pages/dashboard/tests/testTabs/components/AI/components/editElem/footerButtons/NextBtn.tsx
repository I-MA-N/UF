import { Results } from "@mediapipe/holistic";
import { useAIContext } from "../../../../../../context/AIContextProvider";
import { useMemo } from "react";
import clickHandler from "./nextBtnClickHandler";
import NextBtnSvg from "./NextBtnSvg";

type NextBtnProps = {
   setShowCanvas: React.Dispatch<React.SetStateAction<boolean>>,
   photoData: Results | null | undefined,
}

function NextBtn({ setShowCanvas, photoData }: NextBtnProps) {
   const [AIData, setAIData] = useAIContext();

   const nextSection = useMemo(() => {
      const sectionName = AIData?.currentSection?.name;
      const testData = AIData?.activeTestData;
      const sectionIndex = testData?.findIndex(section => section.name === sectionName);

      if (testData && typeof sectionIndex === "number") {
         const nextSection = testData[sectionIndex + 1];

         return nextSection;
      }

      return undefined;
   }, [AIData?.currentSection])

   const isDisabled = useMemo(() => !photoData?.image || !photoData?.poseLandmarks, [photoData])

   return (
      <button
         type="button"
         className={`
            h-full flex items-center gap-2 px-8 text-sm border rounded-full
            ${(isDisabled) ? "bg-gray border-gray" : "bg-primary"}
            ${!nextSection && "bg-secondary border-secondary"}
         `}
         onClick={async () => {
            if (photoData) clickHandler(photoData, AIData, setAIData, nextSection, setShowCanvas);
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