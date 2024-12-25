import Modal from "../../../../../../../../../../common/Modal";

type ImageBiggerModalProps = {
    sectionNameFA: string,
    setShowImageBigger: React.Dispatch<React.SetStateAction<boolean>>,
    src: string,
    imgDirection: "vertical" | "horizental"
}

function ImageBiggerModal({ sectionNameFA, setShowImageBigger, src, imgDirection }: ImageBiggerModalProps) {
    return (
        <Modal>
            <Modal.Header>
                <Modal.CloseBtn setShowModal={setShowImageBigger} />
                <Modal.Title text={`عکس ${sectionNameFA}`} />
            </Modal.Header>
            <Modal.Body className="!p-4">
                <img
                    src={src}
                    alt="عکس گرفته شده"
                    className={`
                        ${imgDirection === "vertical" ? "w-[200px] lg:w-[250px]" : "w-[260px] xs:w-[320px] lg:w-[450px]"}
                        max-h-[80vh] mx-auto rounded-3xl
                    `}
                />
            </Modal.Body>
        </Modal>
    );
};

export default ImageBiggerModal;