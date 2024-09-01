import CameraElemSimple from "./components/CameraElemSimple";
import CameraElemLandmarks from "./components/CameraElemLandmarks";
import { useAIContext } from "../../../context/AIContextProvider";
import { useMemo } from "react";
import ImageStateBtn from "./components/buttons/ImageStateBtn";

function AITab() {
   const [AIData] = useAIContext();
   const imageState = useMemo(() => AIData?.imageState, [AIData?.imageState])

   return (
      <>
         <div>
            <div className="grid grid-cols-2 gap-x-5 gap-y-6">
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
            ("src" in AIData!.testData![0].questions[0] ?
            <CameraElemLandmarks />
            : <CameraElemSimple />)
         }
      </>
   );
};

export default AITab;