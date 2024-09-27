import SectionElem from "./components/SectionElem";
import useAIStore from "../../../store/AIStore";

type ManualTabProps = {
   setIsAIMethod: React.Dispatch<React.SetStateAction<boolean>>,
}

function ManualTab({ setIsAIMethod }: ManualTabProps) {
   const activeTestData = useAIStore(state => state.activeTestData);

   return (
      <div className="grid grid-cols-1 justify-center divide-y divide-y-white overflow-hidden">
         {
            activeTestData?.map(section => (
               <SectionElem
                  key={section.name}
                  setIsAIMethod={setIsAIMethod}
                  section={section}
               />
            ))
         }
      </div>
   );
};

export default ManualTab;