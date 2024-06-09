import { useState } from "react"
import { useForm } from "react-hook-form";
import { useUserTestsInfoContext } from "../context/UserTestsInfoProvider";
import Container from "../../../../common/Container";
import { useNavigate } from "react-router-dom";
import PrevBtn from "../../../../common/PrevBtn";
import simpleuserGFormNames from "../../../../../api/simpleuser/simpleuserGFormNames";
import FormsBtn from "./FormsBtn";
import Btn from "../../../../common/Btn";
import generateTestsInputs from "../../../common/tests/generateTestsInputs";
import testsData from "./testsData";

function Tests() {
   const { handleSubmit, register, setValue, reset, getValues, formState: { errors } } = useForm();
   const { userTestsInfo, setUserTestsInfo } = useUserTestsInfoContext();
   const navigate = useNavigate();
   console.log(errors);


   if (!userTestsInfo.formName) return <Container>
      <h1 className="mb-8">نام فرم انتخاب نشده است!</h1>
      <PrevBtn type="button" onClick={() => navigate('/simpleuser/forms')} />
   </Container>

   const { data, isPending } = simpleuserGFormNames();
   const testsArr = data?.find(form => form.formName === userTestsInfo.formName).formTests.filter((test: any) => test.testAccess.includes('simpleuser'));

   const [page, setPage] = useState(testsArr && testsArr[0].testName);
   let pageTxt = testsArr && testsArr[0].testName;

   if (isPending) return <h1>Loading...</h1>

   const submitHandler = (data: any) => {
      setUserTestsInfo(prevValue => {
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
            <div className="flex items-center gap-4 w-full mt-8 mb-14 overflow-x-auto">
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
                  generateTestsInputs({
                     context: userTestsInfo.data,
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