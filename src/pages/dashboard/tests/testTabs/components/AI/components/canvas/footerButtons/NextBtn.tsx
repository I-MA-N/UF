import { Results } from "@mediapipe/holistic";
import { useAIContext } from "../../../../../../context/AIContextProvider";
import { useMemo } from "react";
import clickHandler from "./NextBtnClickHandler";
import NextBtnSvg from "./NextBtnSvg";

type NextBtnProps = {
   setShowCanvas: React.Dispatch<React.SetStateAction<boolean>>,
   photoData: Results | null,
}

function NextBtn({ setShowCanvas, photoData }: NextBtnProps) {
   const [AIData, setAIData] = useAIContext();

   const nextImageState = useMemo(() => {
      const imageStateName = AIData?.imageState?.name;
      const testData = AIData?.testData;
      const imageStateIndex = testData?.findIndex(state => state.name === imageStateName);

      if (testData && typeof imageStateIndex === "number") {
         const nextImageState = testData[imageStateIndex + 1];

         return nextImageState;
      }

      return undefined;
   }, [AIData?.imageState])

   const isDisabled = useMemo(() => !photoData?.image || !photoData?.poseLandmarks, [photoData])
   console.log(photoData, isDisabled);

   return (
      <button
         type="button"
         className={`
            h-full flex items-center gap-2 px-8 text-sm border rounded-full
            ${isDisabled ? "bg-gray border-gray" : "bg-primary"}
            ${!nextImageState && "bg-secondary border-secondary"}
         `}
         disabled={isDisabled}
         onClick={async () => {
            if (photoData) clickHandler(photoData, AIData, setAIData, nextImageState, setShowCanvas);
         }}
      >
         {
            nextImageState ? "بعدی" : "تایید"
         }
         <NextBtnSvg nextImageState={nextImageState} />
      </button>
   );
};

export default NextBtn;