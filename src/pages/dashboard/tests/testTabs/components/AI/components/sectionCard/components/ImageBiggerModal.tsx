import ExtractedZipType from "../../../../../../../../../types/ExtractedZipType";
import Modal from "../../../../../../../../common/Modal";

type ImageBiggerModalProps = {
    sectionNameFA: string,
    src: ExtractedZipType["image"],
    setShowImageBigger: React.Dispatch<React.SetStateAction<boolean>>
}

function ImageBiggerModal({ sectionNameFA, src, setShowImageBigger }: ImageBiggerModalProps) {
    return (
        <Modal>
            <Modal.Header>
                <Modal.CloseBtn setShowModal={setShowImageBigger} />
                <Modal.Title text={`عکس ${sectionNameFA}`} />
            </Modal.Header>
            <Modal.Body>
                <img
                    src={src}
                    alt="sample image for this section"
                    className="max-h-[80vh] mx-auto rounded-3xl"
                />
            </Modal.Body>
        </Modal>
    );
};

export default ImageBiggerModal;