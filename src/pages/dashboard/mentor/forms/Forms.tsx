import { Link } from "react-router-dom";
import mentorGFormNames from "../../../../api/mentor/mentorGFormNames";
import mentorGSimpleuserFormData from "../../../../api/mentor/mentorGSimpleuserFormData";
import Container from "../../../common/Container";
import Btn from "../../../common/Btn";
import { useMentoringContext } from "../context/MentoringContextProvider";
import ErrorElem from "../components/ErrorElem";


function Forms() {
   const { mentoringData } = useMentoringContext();

   if (!mentoringData.orgName || !mentoringData.username) return <ErrorElem />

   const { data, error, isPending } = mentorGFormNames(mentoringData.username);
   const { mutate, isError } = mentorGSimpleuserFormData(mentoringData.username);
   console.log(data, error, isError);
   

   if (isPending) return <h1>Loading...</h1>

   return (
      <Container withTitle={false} sectionClassName="w-64 mx-auto">
         <h2 className="text-center font-Estedad-Black">فرم های ارزیابی</h2>
         <h3 className="text-sm font-Estedad-ExtraLight mt-2 mb-6">
            کاربر: {mentoringData.username}
         </h3>
         {
            (isError || error) &&
            <span className="text-sm text-yellow mb-4">مشکلی در دریافت اطلاعات بوجود آمده!</span>
         }

         <div className="flex flex-col gap-4 items-center justify-center">
            {
               data?.map(form => {
                  const testsLength = form.formTests.filter((test: any) => test.testAccess.includes('mentor')).length;
                  return <Btn
                     key={form.formName}
                     text={`${form.formName} | ${testsLength} تست`}
                     onClick={() => {
                        mutate({
                           formName: form.formName,
                        })
                     }}
                     type="button"
                  />
               })
            }
         </div>

         <Link
            to="/mentor/dashboard/memberslist"
            className="btn w-auto px-4 py-3.5 gap-3 mt-8 mr-auto"
         >
            برگشت
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="11" viewBox="0 0 16 11" fill="none">
               <path d="M5.375 9.75L1 5.375M1 5.375L15 5.375M1 5.375L5.375 1" stroke="#083C5A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
         </Link>
      </Container>
   )
}

export default Forms