import { useEffect, useState } from "react"
import { useForm } from "react-hook-form";
import { TestObj } from "../../../types/TestsTypes";
import PFormData from "../../../api/common/form/PFormData";
import TopBtns from "./components/TopBtns";
import testsData from "./data/testsData";
import generateTestInputs from "./data/generateTestInputs";
import BottomBtns from "./components/BottomBtns";
import ExitModal from "./components/ExitModal";
import TestTabsFirstLoad from "./nahanjariHa/TestTabsFirstLoad";
import PImage from "../../../api/common/PImage";
import { useAIContext } from "./context/AIContextProvider";
import ErrorModal from "./components/ErrorModal";
import ProgressModal from "./components/ProgressModal";

type TestsProps = {
   username: string,
   formname: string,
   testsArr: TestObj[],
   initialFormData: any
}

function Tests({ username, formname, testsArr, initialFormData }: TestsProps) {
   const [AIData] = useAIContext();
   const [progress, setProgress] = useState<number | null>(null);
   const [error, setError] = useState<string | null>(null);

   const { mutateAsync: formDataMutate } = PFormData(username);

   const { handleSubmit, register, setValue, getValues, reset, formState: { errors } } = useForm();
   const [formData, setFormData] = useState(initialFormData);
   // console.log("errors", errors);

   const [showExitModal, setShowExitModal] = useState(false);
   const [page, setPage] = useState(testsArr[0].testName);

   const { mutateAsync: imageMutate } = PImage(username, formname);

   useEffect(() => {
      if (Object.keys(errors).length) {
         setError("لطفا تمامی فیلد ها را به درستی پر نمایید!")
      }
   }, [errors])

   useEffect(() => {
      if (typeof progress === "number") {
         const currentImage = AIData?.imagesToSave?.[progress - 1];
         if (currentImage) {
            imageMutate({
               imgKey: currentImage.key,
               imgValue: currentImage.value,
            })
               .then(res => {
                  if (res?.msg) setProgress(prevValue => typeof prevValue === "number" ? prevValue += 1 : null);
                  if (res?.error) setError(res.error);
               })
         }
      }
   }, [progress])

   const submitHandler = (data: any) => {
      const nextPage = data["nextPage"];
      const shouldSave = data["shouldSave"];
      const newData = { ...formData };
      newData[page as keyof typeof newData] = data;

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
         {typeof progress === "number" && <ProgressModal progress={progress} setProgress={setProgress} />}
      </>
   )
}

export default Tests