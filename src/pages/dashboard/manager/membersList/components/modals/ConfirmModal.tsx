import { useEffect, useState } from "react";
import managerPManageSimpleuser from "../../../../../../api/manager/managerPManageSimpleuser"
import Modal from "../../../../../common/Modal";

type ConfirmModalPropsType = {
   action: string,
   setAction: React.Dispatch<React.SetStateAction<string | null>>,
   username: string
}

function ConfirmModal({ action, setAction, username }: ConfirmModalPropsType) {
   const [showModal, setShowModal] = useState(true);
   const { mutate, data } = managerPManageSimpleuser(username);

   useEffect(() => {
      if (data || !showModal) {
         setAction(null);
      }
   }, [showModal, data])

   return (
      <Modal>
         <Modal.Header>
            <Modal.CloseBtn setShowModal={setShowModal} />
         </Modal.Header>
         <Modal.Body>
            <p className="text-center">
               آیا از
               <span className={action === 'enable' ? 'text-secondary' : action === 'disable' ? 'text-yellow' : 'text-red'}>
                  {
                     action === 'enable' ? ' فعال کردن ' : action === 'disable' ? ' غیر فعال کردن ' : ' حذف کردن '
                  }
               </span>
               این کاربر اطمینان دارید؟
            </p>

            <div className="flex justify-between items-center mt-4 px-10">
               <button
                  className="text-secondary underline underline-offset-[6px]"
                  onClick={() => mutate(action)}
               >
                  بله
               </button>
               <button
                  className="text-red underline underline-offset-[6px]"
                  onClick={() => setAction(null)}
               >
                  خیر
               </button>
            </div>
         </Modal.Body>
      </Modal>
   )
}

export default ConfirmModal