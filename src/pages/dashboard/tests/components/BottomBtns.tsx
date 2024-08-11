import { FieldValues, UseFormGetValues, UseFormSetValue } from "react-hook-form";
import { useMemo } from "react";
import { TestObj } from "../../../../types/TestsTypes";
import { UseMutateFunction } from "@tanstack/react-query";

type BottomBtnsProps = {
   getValues: UseFormGetValues<FieldValues>,
   page: string,
   formData: any,
   formname: string,
   mutate: UseMutateFunction<any, Error, {
      formname: string,
      data: any
   }, unknown>,
   username?: string,
   testsArr: TestObj[],
   setValue: UseFormSetValue<FieldValues>,
   setShowExitModal: React.Dispatch<React.SetStateAction<boolean>>,
   submitFn: () => void
}

function BottomBtns({ getValues, page, formData, formname, mutate, testsArr, setValue, setShowExitModal, submitFn }: BottomBtnsProps) {
   const [nextPage, prevPage] = useMemo(() => {
      const currentIndex = testsArr.findIndex(testObj => testObj.testName === page);
      const nextTest = testsArr[currentIndex + 1];
      const prevTest = testsArr[currentIndex - 1];
      return [nextTest ? nextTest.testName : null, prevTest ? prevTest.testName : null]
   }, [page, testsArr])

   return (
      <div className="flex flex-wrap justify-between items-center sm:items-stretch flex-col-reverse sm:flex-row gap-y-2 mt-14">
         <div className="flex flex-col-reverse sm:flex-col gap-2">
            <button
               className="relative w-48 lg:w-64 h-12 lg:h-14 flex items-center justify-center bg-transparent text-yellow text-sm lg:text-base rounded-[48px] border lg:border-2 border-white"
               onClick={() => setShowExitModal(true)}
               type="button"
            >
               <span>خروج</span>
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" className="w-4.5 lg:w-5 absolute left-6 sm:right-6 top-1/2 -translate-y-1/2">
                  <path d="M13 3L8 8M8 8L3 13M8 8L13 13M8 8L3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
               </svg>
            </button>
            {
               prevPage &&
               <button
                  className="relative w-48 lg:w-64 h-12 lg:h-14 flex items-center justify-center bg-transparent text-white text-sm lg:text-base rounded-[48px] border lg:border-2 border-white"
                  type="submit"
                  onClick={() => setValue("nextPage", prevPage)}
               >
                  <span>تست قبل</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 12" fill="none" className="w-4.5 lg:w-5 absolute left-6 sm:right-6 top-1/2 -translate-y-1/2">
                     <path d="M12 1L17 6M17 6H1M17 6L12 11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
               </button>
            }
         </div>
         <div className="flex flex-col gap-2">
            <button
               className="relative w-48 lg:w-64 h-12 lg:h-14 flex items-center justify-center bg-transparent text-white text-sm lg:text-base rounded-[48px] border lg:border-2 border-white"
               onClick={() => {
                  const newObj = { ...formData };
                  const data = getValues();
                  delete data["nextPage"]; 
                  newObj[page as keyof typeof newObj] = data;
                  mutate({
                     formname,
                     data: JSON.stringify(newObj).toString()
                  })
                  if (nextPage) {
                     setValue("nextPage", nextPage);
                     submitFn();
                  }
               }}
               type="button"
            >
               <span>
                  {
                     nextPage ? "ذخیره و تست بعد"
                     : "ذخیره"
                  }
               </span>
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 18" fill="none" className="w-4 lg:w-4.5 absolute left-6 top-1/2 -translate-y-1/2">
                  <path d="M3.03256 17.1623L3.03253 17.1623L3.02714 17.1663C2.15901 17.819 0.860873 17.2795 0.766794 15.9799C0.673671 14.6935 0.54998 12.3416 0.550001 8.92421V8.86267C0.549978 7.51208 0.550442 6.31952 0.641895 5.32111C0.734687 4.30808 0.929395 3.37179 1.39584 2.6011C2.37005 0.991454 4.2213 0.562502 6.99664 0.550258C9.77556 0.537999 11.6299 0.964222 12.6053 2.58448C13.071 3.35794 13.2654 4.29825 13.3581 5.3145C13.4496 6.31662 13.45 7.51222 13.45 8.86329V8.92422C13.45 12.3416 13.3263 14.6935 13.2332 15.9799C13.1391 17.2795 11.841 17.819 10.9728 17.1664L10.9729 17.1663L10.9674 17.1623C10.2398 16.6292 9.56718 16.0557 9.04651 15.6116L9.03902 15.6052C8.80073 15.4019 8.58762 15.2202 8.42126 15.0881C8.1104 14.8412 7.85734 14.6779 7.62745 14.5788C7.37896 14.4715 7.17913 14.4486 7 14.4486C6.82086 14.4486 6.62104 14.4715 6.37254 14.5788C6.14266 14.6779 5.88959 14.8412 5.57873 15.0881L5.92076 15.5188L5.57872 15.0881C5.41235 15.2202 5.19913 15.402 4.9608 15.6053L4.95348 15.6116C4.43281 16.0557 3.76015 16.6291 3.03256 17.1623Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M8.3999 3.74976C9.0999 3.74976 9.4499 3.7469 9.9749 4.30836C10.4999 4.86982 10.4999 6.74903 10.4999 7.49957" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
               </svg>
            </button>
            {nextPage &&
               <button
                  className="relative w-48 lg:w-64 h-12 lg:h-14 flex items-center justify-center bg-transparent text-white text-sm lg:text-base rounded-[48px] border lg:border-2 border-white"
                  type="submit"
                  onClick={() => setValue("nextPage", nextPage)}
               >
                  <span>تست بعد</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 11" fill="none" className="w-4.5 lg:w-5 absolute left-6 top-1/2 -translate-y-1/2">
                     <path d="M5.375 9.75L1 5.375M1 5.375L15 5.375M1 5.375L5.375 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
               </button>
            }
         </div>
      </div>
   )
}

export default BottomBtns;