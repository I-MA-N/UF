import { Link } from "react-router-dom";
import Btn from "../../../../../common/Btn";

type TopInfoProps = {
   mentors: any
}

function TopInfo({ mentors }: TopInfoProps) {
   return (
      <>
         <Link
            to="/manager/dashboard/memberslist"
            className="btn px-4 py-3.5 gap-3 w-fit mx-auto mb-5"
         >
            برگشت
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="11" viewBox="0 0 16 11" fill="none">
               <path d="M5.375 9.75L1 5.375M1 5.375L15 5.375M1 5.375L5.375 1" stroke="#083C5A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
         </Link>
         {
            mentors.length > 0 &&
            <h2 className="text-center text-sm mb-4">
               برای مشاهده اطلاعات هر مربی روی نامش
               <br />
               کلیک کنید.
            </h2>
         }
         {
            mentors.length > 0 ?
               <Btn
                  text="مربی های سازمان من"
                  type="button"
                  icon={<svg xmlns="http://www.w3.org/2000/svg" width="24" height="21" viewBox="0 0 24 21" fill="none">
                     <path d="M5.55 17.6667C5.55 18.3276 5.61544 18.7966 5.75333 19.1413C5.88237 19.4639 6.08251 19.6976 6.41423 19.8819C6.76583 20.0773 7.28081 20.2249 8.04541 20.3193C8.8056 20.4132 9.77144 20.45 11 20.45C12.2286 20.45 13.1944 20.4132 13.9546 20.3193C14.7192 20.2249 15.2342 20.0773 15.5858 19.8819C15.9175 19.6976 16.1176 19.4639 16.2467 19.1413C16.3846 18.7966 16.45 18.3276 16.45 17.6667C16.45 17.0057 16.3846 16.5368 16.2467 16.1921C16.1176 15.8695 15.9175 15.6357 15.5858 15.4514C15.2342 15.2561 14.7192 15.1084 13.9546 15.014C13.1944 14.9201 12.2286 14.8833 11 14.8833C9.77144 14.8833 8.8056 14.9201 8.04541 15.014C7.28081 15.1084 6.76583 15.2561 6.41423 15.4514C6.08251 15.6357 5.88237 15.8695 5.75333 16.1921C5.61544 16.5368 5.55 17.0057 5.55 17.6667Z" stroke="#E4F4FD" stroke-width="1.1" strokeLinecap="round" strokeLinejoin="round" />
                     <path d="M7.55 9C7.55 10.9054 9.09462 12.45 11 12.45C12.9054 12.45 14.45 10.9054 14.45 9C14.45 7.09462 12.9054 5.55 11 5.55C9.09462 5.55 7.55 7.09462 7.55 9Z" stroke="#E4F4FD" stroke-width="1.1" />
                     <path d="M16.3333 7C17.9333 7 19 8.33333 19 9.66667C19 11 17.9333 12.3333 16.3333 12.3333" stroke="#E4F4FD" stroke-width="1.1" strokeLinecap="round" strokeLinejoin="round" />
                     <path d="M19.0887 18.9999C21.5776 18.9999 22.9998 18.6666 22.9998 16.6666C22.9998 14.6666 21.5776 14.3333 17.6665 14.3333" stroke="#E4F4FD" stroke-width="1.1" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>}
                  className="w-[300px]"
               />
               :
               <span className="flex gap-2 items-center justify-center text-yellow text-center text-sm mb-10">
                  مربی در سازمان شما وجود ندارد!
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="size-8">
                     <path d="M1 12C1 14.4477 1.13246 16.3463 1.46153 17.827C1.78807 19.2963 2.29478 20.2921 3.00136 20.9986C3.70794 21.7052 4.70365 22.2119 6.17298 22.5385C7.65366 22.8675 9.55232 23 12 23C14.4477 23 16.3463 22.8675 17.827 22.5385C19.2963 22.2119 20.2921 21.7052 20.9986 20.9986C21.7052 20.2921 22.2119 19.2963 22.5385 17.827C22.8675 16.3463 23 14.4477 23 12C23 9.55232 22.8675 7.65366 22.5385 6.17298C22.2119 4.70365 21.7052 3.70794 20.9986 3.00136C20.2921 2.29478 19.2963 1.78807 17.827 1.46153C16.3463 1.13246 14.4477 1 12 1C9.55232 1 7.65366 1.13246 6.17298 1.46153C4.70365 1.78807 3.70794 2.29478 3.00136 3.00136C2.29478 3.70794 1.78807 4.70365 1.46153 6.17298C1.13246 7.65366 1 9.55232 1 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                     <path d="M15.5493 8.47826C14.6434 7.56533 13.3877 7 12 7C9.23858 7 7 9.23858 7 12C7 13.3877 7.56533 14.6434 8.47826 15.5493M15.5493 8.47826C16.446 9.38197 17 10.6263 17 12C17 14.7614 14.7614 17 12 17C10.6263 17 9.38197 16.446 8.47826 15.5493M15.5493 8.47826L8.47826 15.5493" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
               </span>
         }
      </>
   );
};

export default TopInfo;