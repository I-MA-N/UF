import { useState } from "react"
import { useForm } from "react-hook-form";
import { TestObj } from "../../../types/TestsTypes";
import PFormData from "../../../api/common/form/PFormData";
import Container from "../../common/Container";
import TopBtns from "./components/TopBtns";
import Btn from "../../common/Btn";
import testsData from "./data/testsData";
import generateTestInputs from "./data/generateTestInputs";
import BottomBtns from "./components/BottomBtns";
import ExitModal from "./components/ExitModal";
import ResultModal from "./components/ResultModal";
import AIElems from "./nahanjariHa/AIElems";
import SampleImages from "./components/SampleImages";

type TestsProps = {
   username: string,
   formname: string,
   testsArr: TestObj[],
   initialFormData: any
}

function Tests({ username, formname, testsArr, initialFormData }: TestsProps) {
   const { mutate, data, isPending } = PFormData(username);

   const { handleSubmit, register, setValue, getValues, reset, formState: { errors } } = useForm();
   const [formData, setFormData] = useState(initialFormData);
   console.log("errors", errors);

   const [showExitModal, setShowExitModal] = useState(false);
   const [page, setPage] = useState(testsArr[0].testName);

   const submitHandler = (data: any) => {
      console.log('in submit', data);
      const nextPage = data["nextPage"];
      const shouldSave = data["shouldSave"];
      const newData = { ...formData };
      newData[page as keyof typeof newData] = data;

      if (nextPage) setPage(nextPage);
      if (shouldSave) mutate({
         formname,
         data: JSON.stringify(newData).toString()
      })

      setFormData(newData);
      reset();
      window.scrollTo(0, 0);

      delete data["nextPage"];
      delete data["shouldSave"];
   }

   return (
      <>
         <Container withTitle={false}>
            <SampleImages />

            <form
               className="w-full"
               onSubmit={handleSubmit(submitHandler)}
            >
               <TopBtns
                  setValue={setValue}
                  setShowExitModal={setShowExitModal}
                  errors={errors}
               />

               <input hidden {...register("nextPage")} />
               <div className="flex lg:flex-wrap items-center gap-4 w-full mt-8 mb-14 overflow-x-auto">
                  {
                     testsArr.map(test => (
                        <Btn
                           key={test.testName}
                           text={test.testName}
                           type="submit"
                           className={`w-auto px-6 py-3 flex-shrink-0 text-white
                                 ${page === test.testName ? 'bg-secondary' : 'bg-transparent border border-white'}`
                           }
                           onClick={() => setValue("nextPage", test.testName)}
                        />
                     ))
                  }
               </div>

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
                  (page === 'ناهنجاری ها'||  page === 'ارزیابی پویا') ?
                     <AIElems
                        testName={page}
                        initialData={formData[page]}
                        register={register}
                        setValue={setValue}
                        getValues={getValues}
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

                        <BottomBtns
                           page={page}
                           testsArr={testsArr}
                           setValue={setValue}
                           setShowExitModal={setShowExitModal}
                        />
                     </>
               }

            </form>
         </Container>

         {showExitModal && <ExitModal setShowExitModal={setShowExitModal} />}
         <ResultModal data={data} isPending={isPending} />
      </>
   )
}

export default Tests