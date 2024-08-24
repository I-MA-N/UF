import { useEffect, useState } from "react";
import TabButtons from "./components/TabButtons";
import AITab from "./components/AI/AITab";
import HiddenInputs from "./components/HiddenInputs";
import { FieldValues, UseFormGetValues, UseFormRegister, UseFormSetValue } from "react-hook-form";
import ManualTab from "./components/manual/ManualTab";
import AI_IMAGES_STATE from "./data/AI_IMAGES_STATE";

type AIElemsProps = {
   testName: 'ناهنجاری ها' | 'ارزیابی پویا',
   initialData: any,
   register: UseFormRegister<FieldValues>,
   setValue: UseFormSetValue<FieldValues>,
   getValues: UseFormGetValues<FieldValues>,
}

function AIElems({ testName, initialData, register, setValue, getValues }: AIElemsProps) {
   const [isAIMethod, setIsAIMethod] = useState(true);

   useEffect(() => {
      const AIMethodStorage = localStorage.getItem("AIMethod") ? true : false;
      setIsAIMethod(AIMethodStorage);
   }, [])

   return (
      <>
         <TabButtons setIsAIMethod={setIsAIMethod} />

         <HiddenInputs
            testName={testName}
            initialData={initialData}
            register={register}
         />

         <AITab
            AI_IMAGES_STATE={testName === "ناهنجاری ها" ? AI_IMAGES_STATE[0] : AI_IMAGES_STATE[1]}
            isHidden={!isAIMethod}
            setValue={setValue}
         />

         {
            !isAIMethod &&
            <ManualTab
               getValues={getValues}
               setValue={setValue}
            />
         }
      </>
   )
}

export default AIElems;