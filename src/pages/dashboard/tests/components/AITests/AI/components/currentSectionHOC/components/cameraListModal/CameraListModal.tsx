import Modal from "../../../../../../../../../common/Modal";
import useAIStore from "../../../../../../../store/AIStore";
import useBooleansStore from "../../../../../../../store/booleansStore";
import CameraListHOC from "../cameraListHOC/CameraListHOC";

function CameraListModal() {
   const removeCurrentSection = useAIStore(state => state.removeCurrentSection);
   const toggleIsCameraListShown = useBooleansStore(state => state.toggleIsCameraListShown);

   return (
      <Modal>
         <Modal.Header>
            <Modal.Title text="انتخاب دوربین" />
            <Modal.CloseBtn clickHandler={removeCurrentSection} />
         </Modal.Header>
         
         <Modal.Body className="!p-4">
            <CameraListHOC
               description={"برای ادامه، لطفا از لیست زیر دوربینی انتخاب کنید."}
               confirmFn={toggleIsCameraListShown}
            />
         </Modal.Body>
      </Modal>
   );
};

export default CameraListModal;