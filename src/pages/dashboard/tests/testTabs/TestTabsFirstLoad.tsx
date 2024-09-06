import { useEffect } from "react";
import { FieldValues, UseFormGetValues, UseFormRegister, UseFormSetValue } from "react-hook-form";
import HiddenInputs from "./components/HiddenInputs";
import TestTabs from "./TestTabs";
import useFormStore from "../store/formStore";

type TestTabsFirstLoadProps = {
   testName: 'ناهنجاری ها' | 'ارزیابی پویا',
   initialData: any,
   getValues: UseFormGetValues<FieldValues>,
   setValue: UseFormSetValue<FieldValues>,
   register: UseFormRegister<FieldValues>,
}

function TestTabsFirstLoad({ testName, initialData, getValues, setValue, register }: TestTabsFirstLoadProps) {
   const setFormState = useFormStore(state => state.setFormState);

   useEffect(() => {
      setFormState({
         register,
         setValue,
         getValues,
         formData: initialData
      })
   }, [register, setValue, getValues, initialData])

   return (
      <>
         <HiddenInputs
            testName={testName}
         />

         <TestTabs
            defaultIsAIMethod={localStorage.getItem("AIMethod") ? true : false}
         />
      </>
   );
};

export default TestTabsFirstLoad;