import useAIStore from "../../../../../store/AIStore";

function HeightInputModal() {
    const { userHeight, setUserHeight, setShowUserHeight } = useAIStore(state => ({ userHeight: state.userHeight, setUserHeight: state.setUserHeight, setShowUserHeight: state.setShowUserHeight }));
    const removeCurrentSection = useAIStore(state => state.removeCurrentSection);

    return (
        <div className="modal z-40">
            <div className="bg-primary border-2 rounded-[32px] p-8 max-w-72 xs:max-w-80 lg:max-w-[420px] relative">
                <button
                    type="button"
                    onClick={removeCurrentSection}
                    className="flex items-center justify-center size-11 lg:size-14 border-2 border-yellow bg-primary text-yellow rounded-full absolute right-0 bottom-[calc(100%+16px)]"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" className="size-5 lg:size-7">
                        <path d="M13 3L8 8M8 8L3 13M8 8L13 13M8 8L3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
                
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
                        onClick={() => setShowUserHeight(false)}
                    >
                        تایید
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeightInputModal;