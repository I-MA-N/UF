import { useState } from "react"
import { useForm } from "react-hook-form";
import { useMentoringContext } from "../../context/MentoringContextProvider";
import mentorGFormNames from "../../../../../api/mentor/mentorGFormNames";
import Container from "../../../../common/Container";
import FormsBtn from "./FormsBtn";
import Btn from "../../../../common/Btn";
import ErrorElem from "../../components/ErrorElem";
import testsData from "./testsData";
import generateTestInputs from "../../../common/tests/generateTestInputs";

function Tests() {
   const { handleSubmit, register, setValue, reset, getValues } = useForm();
   const { mentoringData, setMentoringData } = useMentoringContext();

   if (!mentoringData.orgName || !mentoringData.username || !mentoringData.formName) return <ErrorElem />

   const { data, isPending } = mentorGFormNames(mentoringData.username);
   const testsArr = data?.find(form => form.formName === mentoringData.formName).formTests.filter((test: any) => test.testAccess.includes('mentor'));

   const [page, setPage] = useState(testsArr && testsArr[0].testName);
   let pageTxt = testsArr && testsArr[0].testName;

   if (isPending) return <h1>Loading...</h1>

   const submitHandler = (data: any) => {
      setMentoringData(prevValue => {
         const dataObj = prevValue.data;
         dataObj[page as keyof typeof dataObj] = data;
         return {
            ...prevValue,
            data: {
               ...dataObj
            }
         }
      })
      reset();
      setPage(pageTxt);
   }

   return (
      <Container withTitle={false}>
         <FormsBtn getValues={getValues} page={page} />
         <form
            className="w-full"
            onSubmit={handleSubmit(submitHandler)}
         >
            <div className="flex items-center gap-4 w-full my-8 overflow-x-auto">
               {
                  testsArr.map((test: any) => (
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
               testsData[page as keyof typeof testsData]?.testSubTitle &&
               <p className="text-sm leading-6 mb-6 text-center">
                  {testsData[page as keyof typeof testsData]?.testSubTitle}
               </p>
            }

            <div className={testsData[page as keyof typeof testsData]?.testClassName}>
               {
                  generateTestInputs({
                     context: mentoringData.data,
                     testTitle: page,
                     testPattern: testsData[page as keyof typeof testsData]?.testPattern,
                     testData: testsData[page as keyof typeof testsData]?.testData,
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