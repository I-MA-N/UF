import { useEffect, useRef } from "react";
import Modal from "../../../../../../../common/Modal";
import useAIStore from "../../../../../store/AIStore";
import useFormDataStore from "../../../../../store/formDataStore";

function HeightInputModal() {
    const data = useFormDataStore(state => state.data);
    const { userHeight, setUserHeight, setShowUserHeight, removeCurrentSection } = useAIStore(state => ({ userHeight: state.userHeight, setUserHeight: state.setUserHeight, setShowUserHeight: state.setShowUserHeight, removeCurrentSection: state.removeCurrentSection }));
    const inputRef = useRef<HTMLInputElement>(null);
    
    useEffect(() => {
        inputRef.current?.select();

        const heightData = data["وضعیت بدنی"]?.["قد"]?.value;
        if (heightData) setUserHeight(Number(heightData));
    }, []);

    return (
        <Modal>
            <Modal.Header>
                <Modal.CloseBtn setShowModal={removeCurrentSection} />
                <Modal.Title text="قد کاربر" />
            </Modal.Header>
            <Modal.Body className="max-w-72 xs:max-w-80 lg:max-w-[420px]">
                <p className="text-center text-sm lg:text-base">
                    برای ارزیابی از این نما، نیاز به قد کاربر می باشد. لطفا فیلد زیر را پر کنید.
                </p>

                <div className="flex justify-center mb-4 mt-8">
                    <input
                        ref={inputRef}
                        form="nothing"
                        className="bg-primary border rounded-3xl px-4 py-1 outline-none text-center placeholder:text-sm"
                        type="number"
                        value={userHeight || 0}
                        onChange={e => setUserHeight(Number(e.target.value))}
                        placeholder="قد به سانتی متر"
                        dir="ltr"
                    />
                </div>

                <div className="flex justify-center">
                    <button
                        type="button"
                        className={`${!userHeight ? "text-gray" : "text-secondary"} underline underline-offset-[6px]`}
                        disabled={!userHeight}
                        onClick={() => setShowUserHeight(false)}
                    >
                        تایید
                    </button>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default HeightInputModal;