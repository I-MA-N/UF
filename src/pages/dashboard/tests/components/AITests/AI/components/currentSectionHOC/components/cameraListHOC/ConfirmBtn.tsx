import useCameraStore from "../../../../../../../store/cameraStore";

type ConfirmBtnProps = {
   selectedDeviceID: string,
   confirmFn: () => void
}

function ConfirmBtn({ selectedDeviceID, confirmFn }: ConfirmBtnProps) {
   const setDeviceID = useCameraStore(state => state.setDeviceID);

   return (
      <button
         type="button"
         className="w-full text-secondary underline underline-offset-[6px] mx-auto"
         onClick={() => {
            setDeviceID(selectedDeviceID);
            confirmFn();
         }}
      >
         تایید
      </button>
   );
};

export default ConfirmBtn;