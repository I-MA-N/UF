import { Link } from "react-router-dom";
import { FormObj } from "../../../../../types/TestsTypes";

type FormNamesList = {
   formNames: FormObj[],
   role: "simpleuser" | "mentor",
   username: string
}

function FormNamesList({ formNames, role, username }: FormNamesList) {
   if (!formNames?.length) return (
      <p className="lg:text-lg text-center text-yellow">هیچ فرمی برای نمایش وجود ندارد.</p>
   )

   return formNames?.map(form => {
      const testsLength = form.formTests.filter((test: any) => test.testAccess.includes(role)).length;

      return (
         <div key={form.formName} className="bg-white rounded-[32px] w-64 lg:w-80 px-12 py-2 lg:py-4 divide-y divide-primary divide-dashed">
            <button className="w-full text-xs lg:text-base text-primary py-3.5 text-center">
               {form.formName} | {testsLength} تست
            </button>
            {
               testsLength &&
               <>
                  <Link
                     to={`/${role}/tests/${form.formName}/${username}`}
                     className="inline-block w-full text-xs lg:text-base text-primary py-3.5 text-center underline underline-offset-[5px] decoration-primary"
                  >
                     ورود به پرسشنامه
                  </Link>
                  <Link
                     to={`/${role}/reports/${form.formName}/${username}`}
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
                  to={`/${role}/fitness/${form.formName}/${username}`}
                  className="block w-full text-xs lg:text-base text-primary py-3.5 text-center underline underline-offset-[5px] decoration-primary"
               >
                  برنامه ورزشی
               </Link>
            }
            {
               form.formTests.find(test => test.testName === 'ناهنجاری ها') &&
               form.formTests.find(test => test.testName === 'ارزیابی پویا') &&
               <Link
                  to={`/${role}/corrective/${form.formName}/${username}`}
                  className="block w-full text-xs lg:text-base text-primary py-3.5 text-center underline underline-offset-[5px] decoration-primary"
               >
                  حرکات اصلاحی
               </Link>
            }
         </div>
      )
   })
}

export default FormNamesList;