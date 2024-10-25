import { useNavigate } from "react-router-dom";
import Modal from "../../../../common/Modal";

type ExitModalProps = {
   setShowExitModal: React.Dispatch<React.SetStateAction<boolean>>,
}

function ExitModal({ setShowExitModal }: ExitModalProps) {
   const navigate = useNavigate();

   return (
      <Modal>
         <Modal.Header>
            <Modal.CloseBtn setShowModal={setShowExitModal} />
         </Modal.Header>
         <Modal.Body className="text-sm lg:text-base">
            <p className="text-center mb-4 mx-auto max-w-48 xs:max-w-60 sm:max-w-80 lg:max-w-96">آیا از خروج مطمئنید؟ (اگر ذخیره نکرده باشید، تغییرات شما اعمال نمی شود)</p>

            <div className="w-full flex gap-20 justify-center">
               <button
                  type="button"
                  className="text-secondary underline underline-offset-[6px]"
                  onClick={() => navigate(-1)}
               >
                  بله
               </button>
               <button
                  type="button"
                  className="text-red underline underline-offset-[6px]"
                  onClick={() => setShowExitModal(false)}
               >
                  خیر
               </button>
            </div>
         </Modal.Body>
      </Modal>
   );
};

export default ExitModal;