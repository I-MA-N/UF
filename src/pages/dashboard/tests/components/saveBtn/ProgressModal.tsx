import { useEffect, useMemo, useState } from "react";
import CircularProgressWithLabel from "./CircularProgressWithLabel";
import useFormDataStore from "../../store/formDataStore";
import Modal from "../../../../common/Modal";
import { Alert, Snackbar } from "@mui/material";

type ProgressModalProps = {
   zipFilesToSaveLength: number
}

function ProgressModal({ zipFilesToSaveLength }: ProgressModalProps) {
   const { progress, clearProgress } = useFormDataStore(state => ({ progress: state.progress, clearProgress: state.clearProgress }));

   const [showSnackbar, setShowSnackbar] = useState(false);

   const percentage = useMemo(() => {
      if (progress !== null) {
         if (zipFilesToSaveLength) {
            const division = progress / (zipFilesToSaveLength + 1);
            return division * 100;
         }

         return progress * 100;
      }

      return null;
   }, [progress])

   useEffect(() => {
      if (percentage !== null && percentage >= 100) {
         setTimeout(() => {
            clearProgress();
            setShowSnackbar(true);
         }, 300);
      }
   }, [percentage])

   return (
      <>
         {
            percentage !== null &&
            <Modal>
               <Modal.Body className="flex items-center justify-center" noBackground>
                  <CircularProgressWithLabel value={percentage} />
               </Modal.Body>
            </Modal>
         }

         <div className="container flex fixed left-1/2 bottom-16 -translate-x-1/2 z-50">
            <Snackbar
               open={showSnackbar}
               autoHideDuration={3000}
               onClose={() => setShowSnackbar(false)}
               anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
               className="!relative !bottom-0 !right-auto !left-auto rounded-xl overflow-hidden"
            >
               <Alert
                  variant="filled"
                  sx={{ color: "#E4F4FD", backgroundColor: "#4CB648" }}
                  classes={{
                     icon: "!m-0 !ml-2"
                  }}
               >
                  ذخیره سازی داده ها با موفقیت انجام شد!
               </Alert>
            </Snackbar>
         </div>
      </>
   )
};

export default ProgressModal;