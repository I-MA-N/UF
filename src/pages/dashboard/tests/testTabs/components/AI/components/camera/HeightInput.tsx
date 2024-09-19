import usePhotoStore from "../../../../../store/photoStore";

function HeightInput() {
    const { userHeight, setUserHeight } = usePhotoStore(state => ({ userHeight: state.userHeight, setUserHeight: state.setUserHeight }));

    return (
        <div className={`flex items-center gap-1 absolute left-[calc(100%+8px)] lg:left-[calc(100%+32px)] top-0 ${userHeight ? "text-white" : "text-yellow"}`}>
            <span>قد:</span>
            <input
                form="nothing"
                className="bg-primary border rounded-3xl px-4 max-w-24 outline-none"
                type="number"
                value={userHeight}
                onChange={e => setUserHeight(Number(e.target.value))}
            />
        </div>
    );
};

export default HeightInput;