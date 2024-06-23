import { useState } from "react"
import { useForm } from "react-hook-form";
import Container from "../../../../common/Container";
import Btn from "../../../../common/Btn";
import testsData from "./data/testsData";
import generateTestInputs from "../../../common/tests/generateTestInputs";
import { TestObj } from "../../../../../types/TestsTypes";
import FormBtns from "../../../common/components/FormBtns";
import { useParams } from "react-router-dom";

type TestsProps = {
   testsArr: TestObj[],
   initialFormData: any
}

function Tests({ testsArr, initialFormData }: TestsProps) {
   const params = useParams();

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
            formName={params.formName!}
            exitBtnHref={`/mentor/dashboard/members/${params.orgName}/${params.username}`} 
            username={params.username}
         />

         <form
            className="w-full"
            onSubmit={handleSubmit(submitHandler)}
         >
            <div className="flex items-center gap-4 w-full my-8 overflow-x-auto">
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
               <p className="text-sm leading-6 mb-6 text-center">
                  {testsData[page as keyof typeof testsData].testSubTitle}
               </p>
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