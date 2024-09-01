import CoordinatesType from "../../../../../../../../types/CoordinatesType";
import { useAIContext } from "../../../../../context/AIContextProvider";
import CameraModeBtn from "./buttons/CameraModeBtn";
import CapturePhotoBtn from "./buttons/CapturePhotoBtn";
import CloseBtn from "./buttons/CloseBtn";

type ButtonsProps = {
   setFacingMode: React.Dispatch<React.SetStateAction<"environment" | "user">>,
   isSupported: boolean,
   coordinates: CoordinatesType,
   clickHandler: () => Promise<void>,
   stopCamera: () => Promise<void>,
}

function Buttons({ setFacingMode, isSupported, coordinates, clickHandler, stopCamera }: ButtonsProps) {
   const [AIData, setAIData] = useAIContext();

   return (
      <div className="w-full flex justify-center items-center gap-8">
         <CameraModeBtn setFacingMode={setFacingMode} />

         <CapturePhotoBtn
            AIData={AIData}
            isSupported={isSupported}
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