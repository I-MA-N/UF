import { useEffect, useRef } from "react";
import Modal from "../../../../../../../../../common/Modal";
import useAIStore from "../../../../../../../store/AIStore";
import useFormDataStore from "../../../../../../../store/formDataStore";
import ConfirmBtn from "./ConfirmBtn";

function HeightInputModal() {
    const data = useFormDataStore(state => state.data);
    const { userHeight, setUserHeight, removeCurrentSection } = useAIStore(state => ({ userHeight: state.userHeight, setUserHeight: state.setUserHeight, removeCurrentSection: state.removeCurrentSection }));

    const inputRef = useRef<HTMLInputElement>(null);
    
    useEffect(() => {
        inputRef.current?.select();

        const heightData = data["وضعیت بدنی"]?.["قد"]?.value;
        if (heightData) setUserHeight(Number(heightData));
    }, []);

    return (
        <Modal>
            <Modal.Header>
                <Modal.CloseBtn clickHandler={removeCurrentSection} />
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

                <ConfirmBtn userHeight={userHeight} />
            </Modal.Body>
        </Modal>
    );
};

export default HeightInputModal;