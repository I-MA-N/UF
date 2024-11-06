import GenderStrings from "../../../../../../../types/GenderStrings";
import Modal from "../../../../../../common/Modal";

type GenderModalProps = {
   gender: GenderStrings,
   setGender: React.Dispatch<React.SetStateAction<GenderStrings>>,
   setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

function GenderModal({ gender, setGender, setShowModal }: GenderModalProps) {
   return (
      <Modal>
         <Modal.Header>
            <Modal.CloseBtn setShowModal={setShowModal} />
            <Modal.Title text="انتخاب جنسیت" />
         </Modal.Header>

         <Modal.Body>
            <div className="flex flex-col gap-8 text-sm lg:text-base">
               <button onClick={() => setGender("whole")}>
                  <span className={`border-b-2 ${gender === "whole" ? "border-secondary" : "border-white"}`}>
                     مجموع
                  </span>
               </button>

               <button onClick={() => setGender("male")}>
                  <span className={`border-b-2 ${gender === "male" ? "border-secondary" : "border-white"}`}>
                     آقایان
                  </span>
               </button>

               <button onClick={() => setGender("female")}>
                  <span className={`border-b-2 ${gender === "female" ? "border-secondary" : "border-white"}`}>
                     بانوان
                  </span>
               </button>
            </div>
         </Modal.Body>
      </Modal>
   );
};

export default GenderModal;