import SectionElem from "./components/SectionElem";
import { useAIContext } from "../../../context/AIContextProvider";

type ManualTabProps = {
   setIsAIMethod: React.Dispatch<React.SetStateAction<boolean>>,
}

function ManualTab({ setIsAIMethod }: ManualTabProps) {
   const [AIData] = useAIContext();

   return (
      <div className="grid grid-cols-1 justify-center divide-y divide-y-white">
         {
            AIData?.testData?.map(section => (
               <SectionElem
                  key={section.name}
                  setIsAIMethod={setIsAIMethod}
                  section={section}
                  formData={AIData?.formData}
               />
            ))
         }
      </div>
   );
};

export default ManualTab;