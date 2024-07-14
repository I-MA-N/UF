import { Link } from 'react-router-dom';
import simpleuserGFormNames from "../../../../api/simpleuser/simpleuserGFormNames";
import Container from "../../../common/Container";
import { useUserDataContext } from '../../../authentication/UserDataProvider';
import Loading from '../../../common/Loading';

function Forms() {
   const { data, isPending } = simpleuserGFormNames();
   const userData = useUserDataContext();

   if (isPending) return <Loading />

   return (
      <Container withTitle={false} sectionClassName="w-64 lg:w-80 mx-auto">
         <h2 className="text-center lg:text-lg font-Estedad-Black mb-6">پرسشنامه ها</h2>

         <div className="flex flex-col gap-4 lg:gap-8 items-center justify-center">
            {
               data?.length ? 
               data?.map(form => {
                  const testsLength = form.formTests.filter((test: any) => test.testAccess.includes('simpleuser')).length;

                  return (
                     <div key={form.formName} className="bg-white rounded-[32px] w-64 lg:w-80 px-12 py-2 lg:py-4 divide-y divide-primary divide-dashed">
                        <button className="w-full text-xs lg:text-base text-primary py-3.5 text-center">
                           {form.formName} | {testsLength} تست
                        </button>
                        {
                           testsLength &&
                           <>
                              <Link
                                 to={`/simpleuser/dashboard/forms/tests?formName=${form.formName}`}
                                 className="inline-block w-full text-xs lg:text-base text-primary py-3.5 text-center underline underline-offset-[5px] decoration-primary"
                              >
                                 ورود به پرسشنامه
                              </Link>
                              <Link
                                 to={`/simpleuser/dashboard/forms/reports?formName=${form.formName}`}
                                 className="inline-block w-full text-xs lg:text-base text-primary py-3.5 text-center underline underline-offset-[5px] decoration-primary"
                              >
                                 گزارش پرسشنامه
                              </Link>
                           </>
                        }
                        {
                           form.formTests.find(test => test.testName === 'وضعیت بدنی') &&
                           form.formTests.find(test => test.testName === 'مقدار تحرک') &&
                           <Link
                              to={`/simpleuser/fitness/${form.formName}/${userData.username}`}
                              className="block w-full text-xs lg:text-base text-primary py-3.5 text-center underline underline-offset-[5px] decoration-primary"
                           >
                              برنامه ورزشی
                           </Link>
                        }
                        {
                           form.formTests.find(test => test.testName === 'ناهنجاری ها') &&
                           form.formTests.find(test => test.testName === 'ارزیابی پویا') &&
                           <Link
                              to={`/simpleuser/corrective/${form.formName}/${userData.username}`}
                              className="block w-full text-xs lg:text-base text-primary py-3.5 text-center underline underline-offset-[5px] decoration-primary"
                           >
                              حرکات اصلاحی
                           </Link>
                        }
                     </div>
                  )
               }) : <p className="lg:text-lg text-center text-yellow">هیچ فرمی برای این سازمان وجود ندارد.</p>
            }
         </div>

         <Link
            to="/simpleuser/dashboard"
            className="btn w-auto lg:w-40 px-4 py-3.5 justify-end gap-3 lg:gap-8 mt-8 mr-auto"
         >
            برگشت
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 11" fill="none" className='w-4 lg:w-5'>
               <path d="M5.375 9.75L1 5.375M1 5.375L15 5.375M1 5.375L5.375 1" stroke="#083C5A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
         </Link>
      </Container>
   )
}

export default Forms