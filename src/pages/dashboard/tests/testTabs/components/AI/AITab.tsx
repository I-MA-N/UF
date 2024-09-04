import CameraElemSimple from "./components/CameraElemSimple";
import CameraElemLandmarks from "./components/CameraElemLandmarks";
import { useAIContext } from "../../../context/AIContextProvider";
import { useMemo } from "react";
import SectionBtn from "./components/sectionBtn/SectionBtn";

function AITab() {
   const [AIData] = useAIContext();
   const currentSection = useMemo(() => AIData?.currentSection, [AIData?.currentSection])

   return (
      <>
         <div>
            <div className="grid grid-cols-2 gap-x-5 gap-y-6">
               {
                  AIData?.activeTestData &&
                  AIData.activeTestData.map(section => (
                     <SectionBtn
                        key={section.name}
                        section={section}
                     />
                  ))
               }
            </div>
         </div>
         {
            currentSection &&
            ("src" in AIData!.activeTestData![0].questions[0] ?
            <CameraElemLandmarks />
            : <CameraElemSimple />)
         }
      </>
   );
};

export default AITab;