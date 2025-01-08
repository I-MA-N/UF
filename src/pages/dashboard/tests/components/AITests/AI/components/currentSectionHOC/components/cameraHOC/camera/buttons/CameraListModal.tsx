import Modal from "../../../../../../../../../../../common/Modal";
import CameraListHOC from "../../../cameraListHOC/CameraListHOC";

type CameraListModalProps = {
   closeModalFn: () => void
}

function CameraListModal({ closeModalFn }: CameraListModalProps) {
   return (
      <Modal>
         <Modal.Header>
            <Modal.Title text="تعویض دوربین" />
            <Modal.CloseBtn clickHandler={closeModalFn} />
         </Modal.Header>
         
         <Modal.Body>
            <CameraListHOC
               description="دوربین مورد نظر خود را انتخاب و جایگزین کنید."
               confirmFn={closeModalFn}
            />
         </Modal.Body>
      </Modal>
   );
};

export default CameraListModal;