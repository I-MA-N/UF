import { useEffect, useMemo } from "react";
import CircularProgressWithLabel from "./CircularProgressWithLabel";
import useAIStore from "../store/AIStore";

type ProgressModalProps = {
   progress: number,
   setProgress: React.Dispatch<React.SetStateAction<number | null>>,
}

function ProgressModal({progress, setProgress }: ProgressModalProps) {
   const getFilesToSave = useAIStore(state => state.getFilesToSave);

   const percentage = useMemo(() => {
      const filesToSave = getFilesToSave();
      if (filesToSave.length) {
         const division = progress / (filesToSave.length + 1);
         return division * 100;
      }
      return progress * 100;
   }, [progress, getFilesToSave])
   
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