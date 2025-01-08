import useBooleansStore from "../../../../../../../store/booleansStore";

type ConfirmBtnProps = {
    userHeight: number | undefined
}

function ConfirmBtn({ userHeight }: ConfirmBtnProps) {
    const setIsInputHeightNeeded = useBooleansStore(state => state.setIsInputHeightNeeded);

    return (
        <div className="flex justify-center">
            <button
                type="button"
                className={`${!userHeight ? "text-gray" : "text-secondary"} underline underline-offset-[6px]`}
                disabled={!userHeight}
                onClick={() => setIsInputHeightNeeded(false)}
            >
                تایید
            </button>
        </div>
    );
};

export default ConfirmBtn;