import { memo, useEffect, useState } from "react";
import Modal from "../../../../../common/Modal";
import useFormDataStore from "../../../store/formDataStore";

function MessageModal() {
   const message = useFormDataStore(state => state.message);
   const [showModal, setShowModal] = useState(false);

   useEffect(() => {
      if (message !== null) setShowModal(true);
   }, [message])

   if (showModal && message) return (
      <Modal>
         <Modal.Header>
            <Modal.CloseBtn clickHandler={() => setShowModal(false)} />
            <Modal.Title text="توجه" />
         </Modal.Header>

         <Modal.Body>
            <p className="text-center lg:text-lg mx-auto">{message[0]}</p>
            
            <div className="w-[100px] h-0.5 bg-yellow mx-auto mt-4 mb-6" />

            <p className="text-center text-sm lg:text-base mx-auto">{message[1]}</p>
         </Modal.Body>
      </Modal>
   )
}

export default memo(MessageModal);