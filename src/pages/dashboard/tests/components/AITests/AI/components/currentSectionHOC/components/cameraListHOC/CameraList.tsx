import { useState } from "react";
import ConfirmBtn from "./ConfirmBtn";

type CameraListProps = {
   cameraList: MediaDeviceInfo[],
   confirmFn: () => void,
   deviceID: string | null
}

function CameraList({ cameraList, confirmFn, deviceID }: CameraListProps) {
   const [selectedDeviceID, setSelectedDeviceID] = useState(deviceID || cameraList[0].deviceId);

   return (
      <>
         <div className="flex flex-col items-center max-h-60 overflow-y-auto my-4">
            {
               cameraList.map((device, index) => (
                  <button
                     key={device.deviceId}
                     className={`
                        w-full py-2 px-4 hover:bg-secondary hover:text-white first:rounded-t-[16px] last:rounded-b-[16px]
                        ${selectedDeviceID === device.deviceId ? "bg-secondary" : ""} transition-all
                     `}
                     onClick={() => {
                        setSelectedDeviceID(device.deviceId);
                     }}
                  >
                     <p className="text-sm lg:text-base">
                        دوربین شماره {index + 1}
                     </p>
                     <p className="truncate text-xs lg:text-sm" dir="ltr">{device.label}</p>
                  </button>
               ))
            }
         </div>

         <ConfirmBtn
            selectedDeviceID={selectedDeviceID}
            confirmFn={confirmFn}
         />
      </>
   );
};

export default CameraList;