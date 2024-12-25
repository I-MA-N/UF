import useAIStore from "../../../store/AIStore";
import useModelStore from "../../../store/modelStore";
import ModalElem from "./components/modal/ModalElem";
import Loading from "../../../../../common/Loading";
import { useCallback } from "react";
import CameraFirstLoad from "./components/CameraFirstLoad";
import SectionCard from "./components/sectionCard/SectionCard";
import { useShallow } from "zustand/react/shallow";

function AITab() {
   const model = useModelStore(state => state.model);
   const { activeTestData, currentSection } = useAIStore(useShallow(
      state => ({ activeTestData: state.activeTestData, currentSection: state.currentSection })
   ));

   const generateJSX = useCallback(() => {
      if (currentSection && activeTestData) {
         if (model === null) return (
            <ModalElem>
               <p className="text-sm lg:text-base font-Estedad-Black text-red bg-white px-4 py-2 rounded-full mt-5">
                  دانلود مدل هوش مصنوعی با مشکل مواجه شد!
               </p>
            </ModalElem>
         )

         if (model === undefined) return (
            <ModalElem>
               <Loading />
            </ModalElem>
         )

         return (
            <CameraFirstLoad model={model} />
         )
      }
   }, [model, activeTestData, currentSection])

   return (
      <>
         <div className="grid grid-cols-1 divide-y-2 divide-secondary">
            {
               activeTestData?.map((part, index) => (
                  <div
                     key={index}
                     className="flex flex-wrap justify-center gap-x-5 lg:gap-x-12 gap-y-6 py-10"
                  >
                     {
                        part.map(section => (
                           <SectionCard
                              key={section.name}
                              sectionName={section.name}
                              sectionNameFA={section.nameFA}
                           />
                        ))
                     }
                  </div>
               ))
            }
         </div>

         {generateJSX()}
      </>
   );
};

export default AITab;