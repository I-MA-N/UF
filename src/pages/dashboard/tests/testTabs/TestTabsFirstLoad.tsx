import { useEffect } from "react";
import { FieldValues, UseFormGetValues, UseFormRegister, UseFormSetValue } from "react-hook-form";
import HiddenInputs from "./components/HiddenInputs";
import TestTabs from "./TestTabs";
import { useAIContext } from "../context/AIContextProvider";
import Loading from "../../../common/Loading";

type TestTabsFirstLoadProps = {
   testName: 'ناهنجاری ها' | 'ارزیابی پویا',
   initialData: any,
   getValues: UseFormGetValues<FieldValues>,
   setValue: UseFormSetValue<FieldValues>,
   register: UseFormRegister<FieldValues>,
}

function TestTabsFirstLoad({ testName, initialData, getValues, setValue, register }: TestTabsFirstLoadProps) {
   const [AIData, setAIData] = useAIContext();

   useEffect(() => {
      setAIData(prevValue => ({
         ...prevValue,
         formData: initialData,
         setValue,
         getValues,
      }))
   }, [initialData, setValue])

   if (AIData?.setValue && AIData?.activeTestData) {
      return (
         <>
            <HiddenInputs
               testName={testName}
               initialData={initialData}
               register={register}
            />

            <TestTabs
               defaultIsAIMethod={localStorage.getItem("AIMethod") ? true : false}
               getValues={getValues}
            />
         </>
      );
   }

   return <Loading />
};

export default TestTabsFirstLoad;