import SectionElem from "./components/SectionElem";
import useAIStore from "../../../store/AIStore";

type ManualTabProps = {
   setIsAIMethod: React.Dispatch<React.SetStateAction<boolean>>,
}

function ManualTab({ setIsAIMethod }: ManualTabProps) {
   const activeTestData = useAIStore(state => state.activeTestData);

   return (
      <div className="grid grid-cols-1 justify-center divide-y-2 divide-secondary overflow-hidden">
         {
            activeTestData?.map((part, index) => (
               <div
                  key={index}
                  className="grid grid-cols-1 justify-center divide-y divide-white overflow-hidden"
               >
                  {
                     part?.map(section => (
                        <SectionElem
                           key={section.name}
                           setIsAIMethod={setIsAIMethod}
                           section={section}
                        />
                     ))
                  }
               </div>
            ))
         }
      </div>
   );
};

export default ManualTab;