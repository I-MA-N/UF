import { Link } from 'react-router-dom';
import simpleuserGFormNames from "../../../../api/simpleuser/simpleuserGFormNames";
import simpleuserGFormData from "../../../../api/simpleuser/simpleuserGFormData";
import Container from "../../../common/Container";

function Forms() {
   const { data, isPending } = simpleuserGFormNames();
   const { mutate, isError } = simpleuserGFormData();

   if (isPending) return <h1>Loading...</h1>

   return (
      <Container withTitle={false} sectionClassName="w-64 mx-auto">
         <h2 className="text-center font-Estedad-Black mb-6">پرسشنامه ها</h2>
         {
            isError &&
            <span className="text-sm text-yellow mb-4">مشکلی در دریافت اطلاعات بوجود آمده!</span>
         }

         <div className="flex flex-col gap-4 items-center justify-center">
            {
               data?.map(form => {
                  const testsLength = form.formTests.filter((test: any) => test.testAccess.includes('simpleuser')).length;

                  return (
                     <div key={form.formName} className="bg-white rounded-[32px] w-64 px-12 divide-y divide-primary divide-dashed">
                        <button className="w-full text-xs text-primary py-3.5 text-center">
                           {form.formName} | {testsLength} تست
                        </button>
                        {
                           testsLength &&
                           <>
                              <Link
                                 to={`/simpleuser/dashboard/forms/tests?formName=${form.formName}`}
                                 className="inline-block w-full text-xs text-primary py-3.5 text-center underline underline-offset-[5px] decoration-primary"
                              >
                                 ورود به پرسشنامه
                              </Link>
                              <button
                                 className="w-full text-xs text-primary py-3.5 text-center underline underline-offset-[5px] decoration-primary"
                                 onClick={() => mutate({ formName: form.formName, action: "reports" })}
                              >
                                 گزارش پرسشنامه
                              </button>
                           </>
                        }
                        {
                           form.formTests.find((test: any) => test.testName === 'وضعیت بدنی') &&
                           form.formTests.find((test: any) => test.testName === 'مقدار تحرک') &&
                           <button
                              className="w-full text-xs text-primary py-3.5 text-center underline underline-offset-[5px] decoration-primary"
                              onClick={() => mutate({ formName: form.formName, action: "fitnessProgram" })}
                           >
                              برنامه ورزشی
                           </button>
                        }
                        {
                           form.formTests.find((test: any) => test.testName === 'ناهنجاری ها') &&
                           form.formTests.find((test: any) => test.testName === 'ارزیابی پویا') &&
                           <button
                              className="w-full text-xs text-primary py-3.5 text-center underline underline-offset-[5px] decoration-primary"
                              onClick={() => mutate({ formName: form.formName, action: "correctiveProgram" })}
                           >
                              حرکات اصلاحی
                           </button>
                        }
                     </div>
                  )
               })
            }
         </div>

         <Link
            to="/simpleuser/dashboard"
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