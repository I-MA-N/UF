import { useEffect, useState } from "react";
import TabButtons from "./components/TabButtons";
import AITab from "./components/AI/AITab";
import ManualTab from "./components/manual/ManualTab";
import { useAIContext } from "../context/AIContextProvider";
import { FieldValues, UseFormGetValues } from "react-hook-form";

type TestTabsProps = {
   defaultIsAIMethod: boolean,
   getValues: UseFormGetValues<FieldValues>,
}

function TestTabs({ defaultIsAIMethod, getValues }: TestTabsProps) {
   const [_AIData, setAIData] = useAIContext();
   const [isAIMethod, setIsAIMethod] = useState(defaultIsAIMethod);

   useEffect(() => {
      setAIData(prevValue => ({
         ...prevValue,
         formData: getValues()
      }))
   }, [isAIMethod])

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