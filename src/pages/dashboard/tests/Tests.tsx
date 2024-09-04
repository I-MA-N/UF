import { useEffect, useMemo, useState } from "react"
import { useForm } from "react-hook-form";
import { TestObj } from "../../../types/TestsTypes";
import PFormData from "../../../api/common/form/PFormData";
import TopBtns from "./components/TopBtns";
import testsData from "./data/testsData";
import generateTestInputs from "./data/generateTestInputs";
import BottomBtns from "./components/BottomBtns";
import ExitModal from "./components/ExitModal";
import PImage from "../../../api/common/PImage";
import { useAIContext } from "./context/AIContextProvider";
import ErrorModal from "./components/ErrorModal";
import ProgressModal from "./components/ProgressModal";
import TestTabsFirstLoad from "./testTabs/TestTabsFirstLoad";
import staticEvaluation from "./data/testsData/staticEvaluation";
import dynamicEvaluation from "./data/testsData/dynamicEvaluation";
import ZipFileType from "../../../types/ZipFileType";

type TestsProps = {
   username: string,
   formname: string,
   testsArr: TestObj[],
   initialFormData: any
}

function Tests({ username, formname, testsArr, initialFormData }: TestsProps) {
   const [AIData, setAIData] = useAIContext();
   const [progress, setProgress] = useState<number | null>(null);
   const [error, setError] = useState<string | null>(null);

   const { mutateAsync: formDataMutate } = PFormData(username);

   const { handleSubmit, register, setValue, getValues, reset, formState: { errors } } = useForm();
   const [formData, setFormData] = useState(initialFormData);

   const [showExitModal, setShowExitModal] = useState(false);
   const [page, setPage] = useState(testsArr[0].testName);

   const { mutateAsync: imageMutate } = PImage(username, formname);
   const filesToSave = useMemo(() => {
      const arr: ZipFileType[] = [];
      if (AIData?.activeTestData !== undefined) {
         const isDynamicEvaluationData = "src" in AIData.activeTestData[0].questions[0];
         if (isDynamicEvaluationData) {
            AIData.staticEvaluationData?.forEach(section =>
               typeof section.zipFile === "string" && arr.push({
                  name: section.name,
                  value: section.zipFile
               })
            );
         } else {
            AIData.dynamicEvaluationData?.forEach(section =>
               typeof section.zipFile === "string" && arr.push({
                  name: section.name,
                  value: section.zipFile
               })
            );
         }
         AIData.activeTestData.forEach(section =>
            typeof section.zipFile === "string" && arr.push({
               name: section.name,
               value: section.zipFile
            })
         );
      }
      return arr;
   }, [JSON.stringify(AIData?.activeTestData)])

   useEffect(() => {
      if (Object.keys(errors).length) {
         setError("لطفا تمامی فیلد ها را به درستی پر نمایید!")
      }
   }, [JSON.stringify(Object.keys(errors))])

   useEffect(() => {
      setAIData(prevValue => ({
         ...prevValue,
         staticEvaluationData: staticEvaluation,
         dynamicEvaluationData: dynamicEvaluation
      }))
   }, [])

   useEffect(() => {
      if (progress !== null && progress > 0 && filesToSave.length) {
         const file = filesToSave[progress - 1];
         if (file) {
            imageMutate({
               imgKey: file.name,
               imgValue: file.value,
            })
               .then(res => {
                  if (res?.msg) setProgress(prevValue => typeof prevValue === "number" ? prevValue += 1 : null);
                  if (res?.error) setError(res.error);
               })
         }
      }
   }, [progress, filesToSave])

   const submitHandler = (data: any) => {
      const nextPage = data["nextPage"];
      const shouldSave = data["shouldSave"];
      const newData = { ...formData };
      newData[page as keyof typeof newData] = data;

      const lastPage = page;
      if (lastPage === "ناهنجاری ها" || lastPage === "ارزیابی پویا") {
         const lastPageKey = lastPage === "ناهنجاری ها" ? "staticEvaluationData" : "dynamicEvaluationData";
         setAIData(prevValue => {
            if (prevValue?.activeTestData !== undefined) {
               // @ts-ignore
               prevValue[lastPageKey] = prevValue.activeTestData;
            }
            return prevValue;
         })
      }

      if (nextPage === "ناهنجاری ها" || nextPage === "ارزیابی پویا") {
         const nextPageKey = nextPage === "ناهنجاری ها" ? "staticEvaluationData" : "dynamicEvaluationData";
         setAIData(prevValue => {
            if (prevValue?.[nextPageKey]) {
               prevValue.activeTestData = prevValue[nextPageKey];
            }
            return prevValue;
         })
      }

      if (nextPage) {
         setPage(nextPage);
         window.scrollTo(0, 0);
      };
      if (shouldSave) {
         setProgress(0);
         formDataMutate({
            formname,
            data: JSON.stringify(newData).toString()
         })
            .then(res => {
               if (res?.msg) setProgress(prevValue => typeof prevValue === "number" ? prevValue += 1 : null);
               if (res?.error) setError(res.error);
            })
      }

      setFormData(newData);
      reset();

      delete data["nextPage"];
      delete data["shouldSave"];
   }

   return (
      <>
         <div className="px-4 sm:container pt-24 lg:pt-32">
            <form
               className="w-full relative pt-24 pb-16"
               onSubmit={handleSubmit(submitHandler)}
            >
               <TopBtns
                  page={page}
                  setValue={setValue}
                  setShowExitModal={setShowExitModal}
               />

               {
                  testsData[page as keyof typeof testsData].testSubTitle &&
                  <div className="relative">
                     <p className="text-base lg:text-lg leading-6 mb-6 mr-6">
                        {testsData[page as keyof typeof testsData].testSubTitle}
                     </p>
                     <div className="absolute w-2.5 lg:w-3 h-2.5 lg:h-3 bg-white rounded-full right-0 top-1/2 -translate-y-1/2" />
                  </div>
               }

               {
                  (page === 'ناهنجاری ها' || page === 'ارزیابی پویا') ?
                     <TestTabsFirstLoad
                        key={page}
                        testName={page}
                        initialData={formData[page]}
                        getValues={getValues}
                        setValue={setValue}
                        register={register}
                     /> :
                     <>
                        <div className={testsData[page as keyof typeof testsData].testClassName}>
                           {
                              generateTestInputs({
                                 initialData: formData[page],
                                 testPattern: testsData[page as keyof typeof testsData].testPattern,
                                 testData: testsData[page as keyof typeof testsData].testData,
                                 register: register,
                                 setValue: setValue
                              }).map((input: any) => input)
                           }
                        </div>
                     </>
               }

               <BottomBtns
                  testsArr={testsArr}
                  page={page}
                  setValue={setValue}
               />
            </form>
         </div>

         {showExitModal && <ExitModal setShowExitModal={setShowExitModal} />}
         {error && <ErrorModal error={error} setError={setError} />}
         {typeof progress === "number" && 
            <ProgressModal 
               filesToSave={filesToSave} 
               progress={progress} 
               setProgress={setProgress} 
            />
         }
      </>
   )
}

export default Tests