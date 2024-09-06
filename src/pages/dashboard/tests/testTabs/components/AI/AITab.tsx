import CameraElemSimple from "./components/CameraElemSimple";
import CameraElemLandmarks from "./components/CameraElemLandmarks";
import SectionBtn from "./components/sectionBtn/SectionBtn";
import useAIStore from "../../../store/AIStore";
import useModelStore from "../../../store/modelStore";
import ModalElem from "./components/modal/ModalElem";
import Loading from "../../../../../common/Loading";
import { useCallback } from "react";

function AITab() {
   const model = useModelStore(state => state.model);
   const { activeTestData, currentSection } = useAIStore(state => ({ activeTestData: state.activeTestData, currentSection: state.currentSection }));

   const generateJSX = useCallback(() => {
      if (currentSection && activeTestData) {
         if (model === null) return (
            <ModalElem>
               <p className="text-sm font-Estedad-Black text-red bg-white px-4 py-2 rounded-full mt-5">
                  دانلود مدل هوش مصنوعی با مشکل مواجه شد!
               </p>
            </ModalElem>
         )

         if (model === undefined) return (
            <ModalElem>
               <Loading fullHeight={false} />
            </ModalElem>
         )

         if ("src" in activeTestData[0].questions[0]) return (
            <CameraElemLandmarks model={model} />
         )

         return (
            <CameraElemSimple model={model} />
         )
      }
   }, [model, activeTestData, currentSection])

   return (
      <>
         <div>
            <div className="grid grid-cols-2 gap-x-5 gap-y-6">
               {
                  activeTestData?.map(section => (
                     <SectionBtn
                        key={section.name}
                        section={section}
                     />
                  ))
               }
            </div>
         </div>
         
         {generateJSX()}
      </>
   );
};

export default AITab;