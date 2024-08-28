import CameraElem from "./components/CameraElem";
import { useAIContext } from "../../../context/AIContextProvider";
import { useMemo } from "react";
import ImageStateBtn from "./components/buttons/ImageStateBtn";

function AITab() {
   const [AIData] = useAIContext();
   const imageState = useMemo(() => AIData?.imageState, [AIData?.imageState])

   return (
      <>
         <div>
            <div className="flex gap-4">
               {
                  AIData?.testData &&
                  AIData.testData.map(state => (
                     <ImageStateBtn
                        key={state.name}
                        state={state}
                     />
                  ))
               }
            </div>
         </div>
         {
            imageState &&
            <CameraElem />
         }
      </>
   );
};

export default AITab;