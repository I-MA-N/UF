import PLogout from "../../../api/common/PLogout";
import Modal from "../../common/Modal";

type LogoutModalProps = {
   setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

function LogoutModal({ setShowModal }: LogoutModalProps) {
   const { mutate } = PLogout();

   return (
      <Modal>
         <Modal.Header>
            <Modal.CloseBtn clickHandler={() => setShowModal(false)} />
         </Modal.Header>
         <Modal.Body className="text-sm lg:text-base">
            <p className="text-center mb-4 mx-auto max-w-48 xs:max-w-60 lg:max-w-80">آیا برای خروج از حساب کاربری خود مطمئن هستید؟</p>

            <div className="w-full flex gap-20 justify-center">
               <button
                  type="button"
                  className="text-secondary underline underline-offset-[6px]"
                  onClick={() => mutate()}
               >
                  بله
               </button>
               <button
                  type="button"
                  className="text-red underline underline-offset-[6px]"
                  onClick={() => setShowModal(false)}
               >
                  خیر
               </button>
            </div>
         </Modal.Body>
      </Modal>
   );
};

export default LogoutModal;