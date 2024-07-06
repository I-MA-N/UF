import { useState } from "react"
import { useForm } from "react-hook-form";
import Container from "../../../../common/Container";
import Btn from "../../../../common/Btn";
import generateTestInputs from "../../../common/tests/generateTestInputs";
import testsData from "./data/testsData";
import { TestObj } from "../../../../../types/TestsTypes";
import FormBtns from "../../../common/components/form/FormBtns";
import { useSearchParams } from "react-router-dom";

type TestsProps = {
   testsArr: TestObj[],
   initialFormData: any
}

function Tests({ testsArr, initialFormData }: TestsProps) {
   const [searchParams] = useSearchParams();

   const { handleSubmit, register, setValue, reset, getValues } = useForm();
   const [formData, setFormData] = useState(initialFormData);

   const [page, setPage] = useState(testsArr[0].testName);
   let pageTxt = testsArr[0].testName;

   const submitHandler = (data: any) => {
      setFormData((prevValue: any) => {
         const newData = { ...prevValue };
         newData[page as keyof typeof newData] = data;
         return newData
      })
      reset();
      setPage(pageTxt);
   }

   return (
      <Container withTitle={false}>
         <FormBtns
            getValues={getValues}
            page={page} formData={formData}
            formName={searchParams.get('formName')!}
            exitBtnHref="/simpleuser/dashboard/forms"
         />

         <form
            className="w-full"
            onSubmit={handleSubmit(submitHandler)}
         >
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
                        onClick={() => pageTxt = test.testName}
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
         </form>
      </Container>
   )
}

export default Tests