import usePhotoStore from "../../../../../store/photoStore";

type HeightInputModalProps = {
    setShowHeightInputModal: React.Dispatch<React.SetStateAction<boolean>>
}

function HeightInputModal({ setShowHeightInputModal }: HeightInputModalProps) {
    const { userHeight, setUserHeight } = usePhotoStore(state => ({ userHeight: state.userHeight, setUserHeight: state.setUserHeight }));

    return (
        <div className="modal z-40">
            <div className="bg-primary border-2 rounded-[32px] p-8 max-w-72 xs:max-w-80 lg:max-w-[420px]">
                <p className="text-center text-sm lg:text-base">
                    برای ارزیابی از نمای جانب، نیاز به قد کاربر می باشد. لطفا فیلد زیر را پر کنید.
                </p>

                <div className="flex justify-center mb-4 mt-8">
                    <input
                        form="nothing"
                        className="bg-primary border rounded-3xl px-4 py-1 outline-none text-center placeholder:text-sm"
                        type="number"
                        value={userHeight}
                        onChange={e => setUserHeight(Number(e.target.value))}
                        placeholder="قد به سانتی متر"
                    />
                </div>
                
                <div className="flex justify-center">
                    <button
                        type="button"
                        className={`${!userHeight ? "text-gray" : "text-secondary"} underline underline-offset-[6px]`}
                        disabled={!userHeight}
                        onClick={() => setShowHeightInputModal(false)}
                    >
                        تایید
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeightInputModal;