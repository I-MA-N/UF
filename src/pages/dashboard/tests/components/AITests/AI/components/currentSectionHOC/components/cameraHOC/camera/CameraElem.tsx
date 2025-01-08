import { useMemo, useState } from "react";
import CoordinatesType from "../../../../../../../../../../../types/CoordinatesType";
import CloseBtn from "./buttons/CloseBtn";
import CapturePhotoBtn from "./buttons/CapturePhotoBtn";
import useAIStore from "../../../../../../../../store/AIStore";
import DeviceOrientation from "./sensors/DeviceOrientation";
import CameraListBtn from "./buttons/CameraListBtn";
import Webcam from "./webcam/Webcam";
import useCameraStore from "../../../../../../../../store/cameraStore";

function CameraElem() {
   const currentSection = useAIStore(state => state.currentSection);
   const deviceID = useCameraStore(state => state.deviceID!);

   const [isWebcamLoading, setIsWebcamLoading] = useState(true);
   const [isMediaError, setIsMediaError] = useState(false);
   const [isClicked, setIsClicked] = useState(false);
   const [isSupported, setIsSupported] = useState(true);
   const [coordinates, setCoordinates] = useState<CoordinatesType>(null);

   const isDisabled = useMemo(() => {
      if (isSupported && coordinates) {
         const betaBool = coordinates.beta < 82 || coordinates.beta > 90;
         const gammaBool = coordinates.gamma < -3 || coordinates.gamma > 3;

         return betaBool || gammaBool;
      }

      return false;
   }, [isSupported, coordinates?.beta, coordinates?.gamma])

   return (
      <div className="flex flex-col items-center justify-center gap-7 min-h-dvh">
         <p className="text-center font-Estedad-Black lg:text-xl">{currentSection?.nameFA}</p>

         <div className="w-full min-h-80 flex items-center justify-center">
            <div className="relative">
               <Webcam
                  key={deviceID}
                  deviceID={deviceID}
                  setLoadingState={() => setIsWebcamLoading(false)}
                  setErrorState={() => setIsMediaError(true)}
                  isClicked={isClicked}
               />

               {
                  isMediaError ?
                     <p className="w-full absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 text-center text-sm lg:text-base font-Estedad-Black text-red bg-white px-4 py-2 rounded-full">
                        دریافت دوربین با مشکل مواجه شد!
                        <br />
                        لطفا دسترسی دوربین مرورگر خود را چک کنید.
                     </p>
                     :
                     <DeviceOrientation
                        isSupported={isSupported}
                        setIsSupported={setIsSupported}
                        coordinates={coordinates}
                        setCoordinates={setCoordinates}
                     />
               }
            </div>
         </div>

         <div className="w-full flex justify-center items-center gap-8">
            <CameraListBtn
               isLoading={isWebcamLoading}
               resetCameraStates={() => {
                  setIsWebcamLoading(true);
                  setIsMediaError(false);
               }}
            />

            <CapturePhotoBtn
               isLoading={isWebcamLoading}
               isDisabled={isDisabled}
               clickHandler={() => setIsClicked(true)}
            />

            <CloseBtn />
         </div>
      </div>
   );
};

export default CameraElem;
