import Modal from "../../../../../common/Modal";

type ImageModalProps = {
   name: string,
   imgAddress: string,
   setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

function ImageModal({ name, imgAddress, setShowModal }: ImageModalProps) {
   return (
      <Modal>
         <Modal.Header>
            <Modal.CloseBtn setShowModal={setShowModal} />
            <Modal.Title text={name} />
         </Modal.Header>
         <Modal.Body className="flex items-center justify-center">
            <img
               src={imgAddress}
               className="max-h-[60vh] lg:max max-w-[60vw]"
            />
         </Modal.Body>
      </Modal>
   );
};

export default ImageModal;