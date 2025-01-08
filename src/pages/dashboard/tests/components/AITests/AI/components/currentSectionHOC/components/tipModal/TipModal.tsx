import Modal from "../../../../../../../../../common/Modal";
import useBooleansStore from "../../../../../../../store/booleansStore";

function TipModal() {
    const toggleIsTipShown = useBooleansStore(state => state.toggleIsTipShown);

    return (
        <Modal>
            <Modal.Header>
                <Modal.CloseBtn clickHandler={toggleIsTipShown} />
            </Modal.Header>
            <Modal.Body className="max-w-72 xs:max-w-80 lg:max-w-[420px]">
                <p className="text-center text-sm/8 lg:text-base/10">
                    لطفا هنگام عکس گرفتن، دوربین را به صورت کاملا صاف و بدون چرخش نگهدارید.
                </p>

                <div className="mt-4 flex justify-center">
                    <button
                        type="button"
                        className="text-secondary underline underline-offset-[6px]"
                        onClick={toggleIsTipShown}
                    >
                        تایید
                    </button>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default TipModal;