import Link from "../../../../../common/Link";
import { Link as RouterLink } from "react-router-dom";

function BottomBtns() {
   return (
      <>
         <Link
            text="اضافه کردن مربی جدید"
            icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 20" fill="none" className="w-4.5 lg:w-5">
               <path d="M0.75 15.8333C0.75 16.6461 0.848482 17.2015 1.04453 17.6025C1.22669 17.9751 1.52294 18.2752 2.0629 18.5206C2.62737 18.7772 3.44275 18.9658 4.62513 19.0853C5.80032 19.204 7.2869 19.25 9.16667 19.25C11.0464 19.25 12.533 19.204 13.7082 19.0853C14.8906 18.9658 15.706 18.7772 16.2704 18.5206C16.8104 18.2752 17.1066 17.9751 17.2888 17.6025C17.4848 17.2015 17.5833 16.6461 17.5833 15.8333C17.5833 15.0205 17.4848 14.4651 17.2888 14.0642C17.1066 13.6916 16.8104 13.3915 16.2704 13.1461C15.706 12.8895 14.8906 12.7008 13.7082 12.5814C12.533 12.4627 11.0464 12.4167 9.16667 12.4167C7.2869 12.4167 5.80032 12.4627 4.62513 12.5814C3.44275 12.7008 2.62737 12.8895 2.0629 13.1461C1.52294 13.3915 1.22669 13.6916 1.04453 14.0642C0.848482 14.4651 0.75 15.0205 0.75 15.8333Z" stroke="#E4F4FD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
               <circle cx="5" cy="5" r="4.25" transform="matrix(-1 0 0 1 14.167 0)" stroke="#E4F4FD" strokeWidth="1.5" />
               <path d="M18.333 5.83331V8.33331M18.333 10.8333V8.33331M18.333 8.33331H20.833H15.833" stroke="#E4F4FD" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>}
            className="mt-0.5 mb-16"
            url="/manager/dashboard/memberslist/editmentors/addmentor"
         />

         <RouterLink
            to="/manager/dashboard/memberslist"
            className="relative w-64 lg:w-80 h-14 flex items-center justify-center bg-transparent text-white text-sm lg:text-base rounded-[48px] border-2 border-white"
         >
            <span className="text-yellow">برگشت</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 11" fill="none" className="w-4.5 lg:w-5 absolute left-6 top-1/2 -translate-y-1/2">
               <path d="M5.375 9.75L1 5.375M1 5.375L15 5.375M1 5.375L5.375 1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
         </RouterLink>
      </>
   );
};

export default BottomBtns;