import { FieldValues, UseFormGetValues } from "react-hook-form";
import { UseMutateFunction } from "@tanstack/react-query";

type TopBtnsPropsType = {
   getValues: UseFormGetValues<FieldValues>,
   page: string,
   formData: any,
   formname: string,
   mutate: UseMutateFunction<any, Error, {
      formname: string,
      data: any
   }, unknown>,
   setShowExitModal: React.Dispatch<React.SetStateAction<boolean>>
}

function TopBtns({ getValues, page, formData, formname, mutate, setShowExitModal }: TopBtnsPropsType) {
   return (
      <>
         <div className="w-64 flex items-center justify-between lg:justify-start lg:gap-14 lg:ml-auto lg:pr-16">
            <button
               type="button"
               className="flex items-center gap-2 text-yellow lg:text-lg"
               onClick={() => setShowExitModal(true)}
            >
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" className="w-4 lg:w-5">
                  <path d="M13 3L8 8M8 8L3 13M8 8L13 13M8 8L3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
               </svg>
               خروج
            </button>
            <button
               type="button"
               className="flex items-center gap-2 lg:flex-row-reverse lg:text-lg"
               onClick={() => {
                  const newObj = { ...formData };
                  newObj[page as keyof typeof newObj] = getValues();
                  mutate({
                     formname,
                     data: JSON.stringify(newObj).toString()
                  })
               }}
            >
               ذخیره
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 18" fill="none" className="w-4 lg:w-4.5">
                  <path d="M3.03256 17.1623L3.03253 17.1623L3.02714 17.1663C2.15901 17.819 0.860873 17.2795 0.766794 15.9799C0.673671 14.6935 0.54998 12.3416 0.550001 8.92421V8.86267C0.549978 7.51208 0.550442 6.31952 0.641895 5.32111C0.734687 4.30808 0.929395 3.37179 1.39584 2.6011C2.37005 0.991454 4.2213 0.562502 6.99664 0.550258C9.77556 0.537999 11.6299 0.964222 12.6053 2.58448C13.071 3.35794 13.2654 4.29825 13.3581 5.3145C13.4496 6.31662 13.45 7.51222 13.45 8.86329V8.92422C13.45 12.3416 13.3263 14.6935 13.2332 15.9799C13.1391 17.2795 11.841 17.819 10.9728 17.1664L10.9729 17.1663L10.9674 17.1623C10.2398 16.6292 9.56718 16.0557 9.04651 15.6116L9.03902 15.6052C8.80073 15.4019 8.58762 15.2202 8.42126 15.0881C8.1104 14.8412 7.85734 14.6779 7.62745 14.5788C7.37896 14.4715 7.17913 14.4486 7 14.4486C6.82086 14.4486 6.62104 14.4715 6.37254 14.5788C6.14266 14.6779 5.88959 14.8412 5.57873 15.0881L5.92076 15.5188L5.57872 15.0881C5.41235 15.2202 5.19913 15.402 4.9608 15.6053L4.95348 15.6116C4.43281 16.0557 3.76015 16.6291 3.03256 17.1623Z" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M8.3999 3.74976C9.0999 3.74976 9.4499 3.7469 9.9749 4.30836C10.4999 4.86982 10.4999 6.74903 10.4999 7.49957" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
               </svg>
            </button>
         </div>
      </>
   )
}

export default TopBtns