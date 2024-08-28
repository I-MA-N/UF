import { useEffect, useMemo } from "react";
import { useAIContext } from "../context/AIContextProvider";
import CircularProgressWithLabel from "./CircularProgressWithLabel";

type ProgressModalProps = {
   progress: number,
   setProgress: React.Dispatch<React.SetStateAction<number | null>>,
}

function ProgressModal({ progress, setProgress }: ProgressModalProps) {
   const [AIData] = useAIContext();
   const percentage = useMemo(() => {
      if (AIData?.imagesToSave?.length) {
         const division = progress / (AIData?.imagesToSave?.length + 1);
         return division * 100;
      }
      return progress * 100;
   }, [progress, AIData?.imagesToSave?.length])
   
   useEffect(() => {
      if (percentage >= 100) {
         setTimeout(() => {
            setProgress(null)
         }, 300);
      }
   }, [percentage])

   return (
      <div className="modal">
         <CircularProgressWithLabel value={percentage} />
      </div>
   )
};

export default ProgressModal;