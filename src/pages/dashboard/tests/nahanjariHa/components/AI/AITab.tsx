import { FieldValues, UseFormSetValue } from "react-hook-form";
import CameraElem from "./components/CameraElem";
import { AI_IMAGE_STATE } from "../../data/AI_IMAGES_STATE";
import { useAIContext } from "../../../context/AIContextProvider";
import { useMemo } from "react";

type AITabProps = {
   AI_IMAGES_STATE: AI_IMAGE_STATE[],
   isHidden: boolean,
   setValue: UseFormSetValue<FieldValues>,
}

function AITab({ AI_IMAGES_STATE, isHidden, setValue }: AITabProps) {
   const [AIData, setAIData] = useAIContext();
   const imageState = useMemo(() => AIData?.imageState, [AIData?.imageState])

   return (
      <>
         <div className={`${isHidden ? "hidden" : "block"}`}>
            <div className="flex gap-4">
               {
                  AI_IMAGES_STATE.map(state => (
                     <button
                        key={state.name}
                        type="button"
                        onClick={() => setAIData(prevValue => ({
                           ...prevValue,
                           imageState: state
                        }))}
                     >
                        {state.nameFA}
                     </button>
                  ))
               }
            </div>
         </div>
         {
            imageState &&
            <CameraElem setValue={setValue} />
         }
      </>
   );
};

export default AITab;