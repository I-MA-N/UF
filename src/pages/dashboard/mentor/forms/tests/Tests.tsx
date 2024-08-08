import { useState } from "react"
import { useForm } from "react-hook-form";
import Container from "../../../../common/Container";
import Btn from "../../../../common/Btn";
import testsData from "./data/testsData";
import generateTestInputs from "../../../common/tests/generateTestInputs";
import { TestObj } from "../../../../../types/TestsTypes";
import TopBtns from "../../../common/components/form/TopBtns";
import { useParams } from "react-router-dom";
import BottomBtns from "../../../common/components/form/BottomBtns";
import ExitModal from "../../../common/components/form/ExitModal";
import PFormData from "../../../../../api/common/PFormData";
import ResultModal from "../../../common/components/form/ResultModal";

type TestsProps = {
   testsArr: TestObj[],
   initialFormData: any
}

function Tests({ testsArr, initialFormData }: TestsProps) {
   const params = useParams();
   const { mutate, data, isPending } = PFormData(params.username);

   const { handleSubmit, register, setValue, reset, getValues, formState: { errors } } = useForm();
   const [formData, setFormData] = useState(initialFormData);
   console.log("errors", errors)

   const [showExitModal, setShowExitModal] = useState(false);
   const [page, setPage] = useState(testsArr[0].testName);

   const submitHandler = (data: any) => {
      setPage(data["nextPage"]);
      delete data["nextPage"]
      setFormData((prevValue: any) => {
         const newData = { ...prevValue };
         newData[page as keyof typeof newData] = data;
         return newData
      })
      reset();
      window.scrollTo(0, 0)
   }

   return (
      <>
         <Container withTitle={false}>
            <TopBtns
               getValues={getValues}
               page={page} formData={formData}
               formname={params.formName!}
               mutate={mutate}
               setShowExitModal={setShowExitModal}
            />

            <form
               className="w-full"
               onSubmit={handleSubmit(submitHandler)}
            >
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
                  getValues={getValues}
                  page={page}
                  formData={formData} formname={params.formName!}
                  mutate={mutate}
                  testsArr={testsArr}
                  setValue={setValue}
                  setShowExitModal={setShowExitModal}
                  submitFn={handleSubmit(submitHandler)}
               />
            </form>
         </Container>

         {showExitModal && <ExitModal setShowModal={setShowExitModal} linkTo={`/mentor/dashboard/members/${params.orgName}/${params.username}`} />}
         <ResultModal data={data} isPending={isPending} />
      </>
   )
}

export default Tests