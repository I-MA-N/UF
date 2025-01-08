import { useEffect, useState } from "react";
import Loading from "../../../../../../../../../common/Loading";
import CameraList from "./CameraList";
import useCameraStore from "../../../../../../../store/cameraStore";

type CameraListHOCProps = {
   description: string,
   confirmFn: () => void
}

function CameraListHOC({ description, confirmFn }: CameraListHOCProps) {
   const [list, setList] = useState<MediaDeviceInfo[] | null | undefined>(undefined);
   const deviceID = useCameraStore(state => state.deviceID);

   useEffect(() => {
      const enumerateDevices = () => {
         navigator.mediaDevices.enumerateDevices()
            .then(res => {
               setList(res.filter(device => device.kind === "videoinput"))
            })
            .catch(() => setList(null))
      }

      const getUserMedia = () => {
         navigator.mediaDevices.getUserMedia({
            video: {
               facingMode: "environment"
            },
            audio: false,
         })
            .then(() => enumerateDevices())
            .catch(() => setList(null))
      }

      if (navigator.mediaDevices) getUserMedia();
   }, [])

   if (list === undefined) return (
      <Loading />
   )

   if (!list?.length) return (
      <p className="text-sm lg:text-base text-yellow text-center">دوربینی یافت نشد!</p>
   )

   return (
      <>
         <p className="text-sm lg:text-base text-center mx-auto">
            {description}
         </p>

         <CameraList
            cameraList={list}
            confirmFn={confirmFn}
            deviceID={deviceID}
         />
      </>
   );
};

export default CameraListHOC;