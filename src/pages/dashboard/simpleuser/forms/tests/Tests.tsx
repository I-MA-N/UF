import { useState } from "react"
import { useForm } from "react-hook-form";
import Container from "../../../../common/Container";
import FormsBtn from "./FormsBtn";
import Btn from "../../../../common/Btn";
import generateTestInputs from "../../../common/tests/generateTestInputs";
import testsData from "./testsData";
import { TestObj } from "../../../../../types/TestsTypes";

type TestsProps = {
   testsArr: TestObj[],
   initialFormData: any
}

function Tests({ testsArr, initialFormData }: TestsProps) {
   const { handleSubmit, register, setValue, reset, getValues, formState: { errors } } = useForm();
   console.log('tests form errors: ', errors)

   const [formData, setFormData] = useState(initialFormData);
   console.log('formData in tests: ', formData)
   const [page, setPage] = useState(testsArr && testsArr[0].testName);
   let pageTxt = testsArr && testsArr[0].testName;

   const submitHandler = (data: any) => {
      setFormData((prevValue: any) => ({
         ...data,
         ...prevValue
      }))
      reset();
      setPage(pageTxt);
   }

   return (
      <Container withTitle={false}>
         <FormsBtn getValues={getValues} page={page} formData={formData} />
         <form
            className="w-full"
            onSubmit={handleSubmit(submitHandler)}
         >
            <div className="flex items-center gap-4 w-full mt-8 mb-14 overflow-x-auto">
               {
                  testsArr.map(test => (
                     <Btn
                        key={test.testName}
                        text={test.testName}
                        type="submit"
                        className={`w-auto px-6 py-3 flex-shrink-0 text-white
                                 ${page ? (page === test.testName ? 'bg-secondary' : 'bg-transparent border border-white') : (testsArr && testsArr[0].testName === test.testName ? 'bg-secondary' : 'bg-transparent border border-white')}`
                        }
                        onClick={() => pageTxt = test.testName}
                     />
                  ))
               }
            </div>

            {
               page ? testsData[page as keyof typeof testsData].testSubTitle : testsArr && testsData[testsArr[0].testName as keyof typeof testsData].testSubTitle &&
                  <p className="text-sm leading-6 mb-6 text-center">
                     {page ? testsData[page as keyof typeof testsData].testSubTitle : testsArr && testsData[testsArr[0].testName as keyof typeof testsData].testSubTitle}
                  </p>
            }

            <div className={page ? testsData[page as keyof typeof testsData].testClassName : testsArr && testsData[testsArr[0].testName as keyof typeof testsData].testClassName}>
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