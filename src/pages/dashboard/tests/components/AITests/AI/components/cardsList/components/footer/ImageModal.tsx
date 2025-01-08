import SectionNames from "../../../../../../../../../../types/SectionNames";
import Modal from "../../../../../../../../../common/Modal";

type ImageModalProps = {
   sectionName: SectionNames,
   sectionNameFA: string,
   setShowImage: React.Dispatch<React.SetStateAction<boolean>>
}

function ImageModal({ sectionName, sectionNameFA, setShowImage }: ImageModalProps) {
   return (
      <Modal>
         <Modal.Header>
            <Modal.CloseBtn clickHandler={() => setShowImage(false)} />
            <Modal.Title text={`عکس نمونه - ${sectionNameFA}`} />
         </Modal.Header>
         <Modal.Body className="flex items-center justify-center">
            <img
               src={`/images/sampleImages/${sectionName}.png`}
               className="rounded-lg max-h-[500px]"
               alt="یافت نشد!"
            />
         </Modal.Body>
      </Modal>
   );
};

export default ImageModal;