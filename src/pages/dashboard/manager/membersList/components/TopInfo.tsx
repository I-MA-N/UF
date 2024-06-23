import { Link } from "react-router-dom";

type TopInfoProps = {
   mentorNames: string[],
   isError: boolean
}

function TopInfo({ mentorNames, isError }: TopInfoProps) {
   return (
      <>
         <Link
            to="/manager/dashboard"
            className="btn px-4 py-3.5 gap-3 w-fit mx-auto mb-5"
         >
            برگشت
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="11" viewBox="0 0 16 11" fill="none">
               <path d="M5.375 9.75L1 5.375M1 5.375L15 5.375M1 5.375L5.375 1" stroke="#083C5A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
         </Link>
         {
            mentorNames.length > 0 &&
            <h2 className="text-center text-sm mb-4">
               مربی مورد نظر خود را انتخاب کرده و کاربران مربوط به آن
               <br />
               را در لیست زیر میتوانید مشاهده کنید.
            </h2>
         }

         {
            isError &&
            <p className="text-yellow text-xs mb-4">مشکلی در دریافت اطلاعات کاربران این سازمان بوجود آمده است!</p>
         }
      </>
   );
};

export default TopInfo;