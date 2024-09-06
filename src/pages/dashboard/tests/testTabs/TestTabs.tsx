import { useEffect, useState } from "react";
import TabButtons from "./components/TabButtons";
import AITab from "./components/AI/AITab";
import ManualTab from "./components/manual/ManualTab";
import useFormStore from "../store/formStore";

type TestTabsProps = {
   defaultIsAIMethod: boolean,
}

function TestTabs({ defaultIsAIMethod }: TestTabsProps) {
   const updateFormData = useFormStore(state => state.updateFormData);
   const [isAIMethod, setIsAIMethod] = useState(defaultIsAIMethod);

   useEffect(() => {
      updateFormData();
   }, [isAIMethod, updateFormData])

   return (
      <>
         <TabButtons
            isAIMethod={isAIMethod}
            setIsAIMethod={setIsAIMethod}
         />

         {
            isAIMethod &&
            <AITab />
         }

         {
            !isAIMethod &&
            <ManualTab
               setIsAIMethod={setIsAIMethod}
            />
         }
      </>
   )
}

export default TestTabs;