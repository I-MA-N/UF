import CoordinatesType from "../../../../../../../../types/CoordinatesType";
import { useAIContext } from "../../../../../context/AIContextProvider";
import CameraModeBtn from "./buttons/CameraModeBtn";
import CapturePhotoBtn from "./buttons/CapturePhotoBtn";
import CloseBtn from "./buttons/CloseBtn";

type ButtonsProps = {
   setFacingMode?: React.Dispatch<React.SetStateAction<"environment" | "user">>,
   isCameraLoaded: boolean,
   isSupported: boolean,
   videoLandmarksStatus?: boolean[],
   coordinates: CoordinatesType,
   clickHandler: () => Promise<void>,
   stopCamera: () => Promise<void>,
}

function Buttons({ setFacingMode, isCameraLoaded, isSupported, videoLandmarksStatus, coordinates, clickHandler, stopCamera }: ButtonsProps) {
   const [AIData, setAIData] = useAIContext();

   return (
      <div className="w-full flex justify-center items-center gap-8">
         {
            setFacingMode ?
               <CameraModeBtn setFacingMode={setFacingMode} />
               :
               <span className="size-11 border-2 border-transparent" />
         }

         <CapturePhotoBtn
            AIData={AIData}
            isCameraLoaded={isCameraLoaded}
            isSupported={isSupported}
            videoLandmarksStatus={videoLandmarksStatus}
            coordinates={coordinates}
            clickHandler={clickHandler}
         />

         <CloseBtn
            stopCamera={stopCamera}
            setAIData={setAIData}
         />
      </div>
   );
};

export default Buttons;