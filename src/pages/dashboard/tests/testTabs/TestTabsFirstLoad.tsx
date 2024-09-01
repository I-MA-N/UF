import { useEffect, useState } from "react";
import { FieldValues, UseFormGetValues, UseFormRegister, UseFormSetValue } from "react-hook-form";
import testsData from "../data/testsData";
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
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      setAIData(prevValue => ({
         ...prevValue,
         formData: initialData,
         setValue,
         getValues,
         testData: testsData[testName].testData
      }))
      setLoading(false);
   }, [initialData, setValue, testName])

   if (!loading) {
      return (
         <>
            <HiddenInputs
               testName={testName}
               initialData={initialData}
               register={register}
            />
            {
               (AIData?.setValue && AIData?.testData) &&
               <TestTabs
                  defaultIsAIMethod={localStorage.getItem("AIMethod") ? true : false}
                  getValues={getValues}
               />
            }
         </>
      );
   }

   return <Loading />
};

export default TestTabsFirstLoad;