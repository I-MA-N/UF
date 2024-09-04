import { useEffect, useMemo } from "react";
import CircularProgressWithLabel from "./CircularProgressWithLabel";
import ZipFileType from "../../../../types/ZipFileType";

type ProgressModalProps = {
   filesToSave:  ZipFileType[],
   progress: number,
   setProgress: React.Dispatch<React.SetStateAction<number | null>>,
}

function ProgressModal({ filesToSave, progress, setProgress }: ProgressModalProps) {
   const percentage = useMemo(() => {
      if (filesToSave.length) {
         const division = progress / (filesToSave.length + 1);
         return division * 100;
      }
      return progress * 100;
   }, [progress, filesToSave.length])
   
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