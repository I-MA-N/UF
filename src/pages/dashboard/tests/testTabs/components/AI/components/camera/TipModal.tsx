import useAIStore from "../../../../../store/AIStore";

function TipModal() {
    const toggleIsTipShown = useAIStore(state => state.toggleIsTipShown);

    return (
        <div className="modal">
            <div className="bg-primary border-2 rounded-[32px] p-8 max-w-72 xs:max-w-80 lg:max-w-[420px]">
                <p className="text-center text-sm/8 lg:text-base/10">لطفا هنگام عکس گرفتن، دوربین را به صورت کاملا صاف و بدون چرخش نگهدارید.</p>
                
                <div className="mt-4 flex justify-center">
                    <button
                        type="button"
                        className="text-secondary underline underline-offset-[6px]"
                        onClick={toggleIsTipShown}
                    >
                        تایید
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TipModal;