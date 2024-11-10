import { useEffect, useMemo } from "react";
import CircularProgressWithLabel from "./CircularProgressWithLabel";
import useAIStore from "../../store/AIStore";
import useFormDataStore from "../../store/formDataStore";
import Modal from "../../../../common/Modal";

function ProgressModal() {
   const { progress, clearProgress, setMessage } = useFormDataStore(state => ({ progress: state.progress, clearProgress: state.clearProgress, setMessage: state.setMessage }));
   const getFilesToSave = useAIStore(state => state.getFilesToSave);

   const percentage = useMemo(() => {
      if (progress !== null) {
         const filesToSave = getFilesToSave();
         if (filesToSave.length) {
            const division = progress / (filesToSave.length + 1);
            return division * 100;
         }
         return progress * 100;
      }

      return 0;
   }, [progress, getFilesToSave])

   useEffect(() => {
      if (percentage >= 100) {
         setTimeout(() => {
            clearProgress();
            setMessage(["داده ها با موفقیت ذخیره شد!", "✔"]);
         }, 300);
      }
   }, [percentage])

   if (progress !== null) return (
      <Modal>
         <Modal.Body className="flex items-center justify-center" noBackground>
            <CircularProgressWithLabel value={percentage} />
         </Modal.Body>
      </Modal>
   )
};

export default ProgressModal;