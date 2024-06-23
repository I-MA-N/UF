import { useEffect, useState } from "react";
import managerGSimpleuserActive from "../../../../../../api/manager/managerGSimpleuserActive";
import profileImg from "../../../../../../assets/images/profile-img.png";
import ConfirmModal from "./ConfirmModal";
import parseDate from "../../../../../../utils/parseDate";
import { useQueryClient } from "@tanstack/react-query";

type UserModalPropsType = {
   userData: any,
   setUserData: React.Dispatch<React.SetStateAction<any>>,
   mentorSelected: string
}

function UserModal({ userData, setUserData, mentorSelected }: UserModalPropsType) {
   const { data , isPending } = managerGSimpleuserActive(userData.username);
   const [action, setAction] = useState<string | null>(null);
   const queryClient = useQueryClient();

   useEffect(() => {
      if (data?.error) {
         queryClient.invalidateQueries({
            queryKey: ['managerG: mentor users data', mentorSelected]
         })
         setUserData(null)
      }
   }, [data])

   return (
      <>
         <div className="modal">
            <button onClick={() => setUserData(null)} className="flex gap-0.5 items-center mb-4.5 bg-primary text-yellow py-2 px-4 rounded-[32px]">
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M13 3L8 8M8 8L3 13M8 8L13 13M8 8L3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
               </svg>
               خروج
            </button>

            <div className="w-[298px] xs:w-80 p-12 bg-white text-primary rounded-[32px]">
               <div className="flex gap-3.5 items-center border-b border-primary pb-4 relative">
                  <img src={profileImg} alt="profile-image" />
                  <div>
                     <p className="text-sm mb-1">
                        {userData.name || userData.username || 'مشکلی در دریافت اطلاعات این کاربر رخ داده است!'}
                     </p>
                     <p className="font-Estedad-ExtraLight text-xs">{userData.email}</p>
                  </div>
               </div>

               <div className="flex items-center justify-between pt-6 text-[10px]">
                  {
                     isPending ? 'در حال دریافت...' : data?.is_active ?
                        <button
                           className="flex items-center gap-2 text-yellow"
                           onClick={() => setAction('disable')}
                        >
                           <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
                              <path d="M0.55 14.25C0.55 14.989 0.639073 15.5112 0.827777 15.8972C1.0063 16.2623 1.29658 16.5513 1.80489 16.7823C2.33117 17.0216 3.08077 17.1931 4.15005 17.3011C5.21406 17.4086 6.55697 17.45 8.25 17.45C9.94303 17.45 11.2859 17.4086 12.3499 17.3011C13.4192 17.1931 14.1688 17.0216 14.6951 16.7823C15.2034 16.5513 15.4937 16.2623 15.6722 15.8972C15.8609 15.5112 15.95 14.989 15.95 14.25C15.95 13.511 15.8609 12.9888 15.6722 12.6028C15.4937 12.2377 15.2034 11.9487 14.6951 11.7177C14.1688 11.4784 13.4192 11.3069 12.3499 11.1989C11.2859 11.0914 9.94303 11.05 8.25 11.05C6.55697 11.05 5.21406 11.0914 4.15005 11.1989C3.08077 11.3069 2.33117 11.4784 1.80489 11.7177C1.29658 11.9487 1.0063 12.2377 0.827777 12.6028C0.639073 12.9888 0.55 13.511 0.55 14.25Z" stroke="#FCC72C" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
                              <circle cx="4.5" cy="4.5" r="3.95" transform="matrix(-1 0 0 1 12.75 0)" stroke="#FCC72C" strokeWidth="1.1" />
                              <path fillRule="evenodd" clipRule="evenodd" d="M14.6115 8.61087C14.3967 8.82566 14.3966 9.17398 14.6113 9.38886C14.826 9.60375 15.1741 9.60383 15.3889 9.38904L16.5002 8.27778L17.6113 9.38887C17.8261 9.60366 18.1743 9.60366 18.3891 9.38887C18.6039 9.17408 18.6039 8.82584 18.3891 8.61105L17.278 7.49996L18.3889 6.38904C18.6037 6.17425 18.6038 5.82593 18.3891 5.61104C18.1744 5.39616 17.8263 5.39608 17.6115 5.61087L16.5002 6.72214L15.3891 5.61105C15.1743 5.39626 14.8261 5.39626 14.6113 5.61105C14.3965 5.82584 14.3965 6.17408 14.6113 6.38887L15.7224 7.49996L14.6115 8.61087Z" fill="#FCC72C" />
                           </svg>
                           غیر فعال کردن
                        </button> :
                        <button
                           className="flex items-center gap-2 text-secondary"
                           onClick={() => setAction('enable')}
                        >
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
                              <path d="M0.55 14.25C0.55 14.989 0.639073 15.5112 0.827777 15.8972C1.0063 16.2623 1.29658 16.5513 1.80489 16.7823C2.33117 17.0216 3.08077 17.1931 4.15005 17.3011C5.21406 17.4086 6.55697 17.45 8.25 17.45C9.94303 17.45 11.2859 17.4086 12.3499 17.3011C13.4192 17.1931 14.1688 17.0216 14.6951 16.7823C15.2034 16.5513 15.4937 16.2623 15.6722 15.8972C15.8609 15.5112 15.95 14.989 15.95 14.25C15.95 13.511 15.8609 12.9888 15.6722 12.6028C15.4937 12.2377 15.2034 11.9487 14.6951 11.7177C14.1688 11.4784 13.4192 11.3069 12.3499 11.1989C11.2859 11.0914 9.94303 11.05 8.25 11.05C6.55697 11.05 5.21406 11.0914 4.15005 11.1989C3.08077 11.3069 2.33117 11.4784 1.80489 11.7177C1.29658 11.9487 1.0063 12.2377 0.827777 12.6028C0.639073 12.9888 0.55 13.511 0.55 14.25Z" stroke="#4CB648" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
                              <circle cx="4.5" cy="4.5" r="3.95" transform="matrix(-1 0 0 1 12.75 0)" stroke="#4CB648" strokeWidth="1.1" />
                              <path d="M14.25 7.875L15.375 9L18.375 6" stroke="#4CB648" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
                           </svg>
                           فعال کردن
                        </button>
                  }
                  <button
                     className="flex items-center gap-2 text-red text-[10px]"
                     onClick={() => setAction('delete')}
                  >
                     حذف کردن
                     <svg xmlns="http://www.w3.org/2000/svg" width="15" height="18" viewBox="0 0 15 18" fill="none">
                        <path d="M0.832227 11.1306C0.877034 11.3321 0.920099 11.5272 0.9618 11.716C1.20251 12.8061 1.39772 13.6902 1.61971 14.4235C1.8792 15.2806 2.15719 15.8649 2.53224 16.2825C3.26109 17.0939 4.51798 17.45 7.5 17.45C10.482 17.45 11.7389 17.0939 12.4678 16.2825C12.8428 15.8649 13.1208 15.2806 13.3803 14.4235C13.6023 13.6902 13.7975 12.8061 14.0382 11.7161C14.0799 11.5272 14.123 11.3321 14.1678 11.1306C14.7557 8.48673 14.3886 7.07874 13.4245 6.27175C12.916 5.8461 12.1866 5.5354 11.189 5.33449C10.1929 5.13388 8.9671 5.05 7.5 5.05C6.0329 5.05 4.80707 5.13388 3.811 5.33449C2.81343 5.5354 2.08404 5.8461 1.57552 6.27175C0.611411 7.07874 0.244325 8.48673 0.832227 11.1306Z" stroke="#FF0000" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M7.5 9V13.5M4.5 9V13.5M10.5 9V13.5" stroke="#FF0000" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M9.00012 1.75346C11.7042 1.95132 13.5096 2.66239 14.5337 3.27876C14.794 3.4354 14.878 3.77336 14.7214 4.03361C14.5647 4.29387 14.2268 4.37787 13.9665 4.22124C12.9542 3.61195 10.8737 2.8 7.50012 2.8C4.11841 2.8 1.97779 3.61545 1.04725 4.21283C0.791634 4.37693 0.451388 4.30274 0.287289 4.04713C0.12319 3.79151 0.197379 3.45127 0.452995 3.28717C1.42907 2.66055 3.28449 1.95038 6.00012 1.75319V1C6.00012 0.447715 6.44784 0 7.00012 0H8.00012C8.55241 0 9.00012 0.447715 9.00012 1V1.75346Z" fill="#FF0000" />
                     </svg>
                  </button>
               </div>

               <p className="text-[10px] font-Estedad-ExtraLight mt-6 text-center">
                  تاریخ ایجاد کاربر:
                  {userData.datejoined && parseDate(userData.datejoined)}
               </p>
            </div>
         </div>
         {
            action && <ConfirmModal action={action} setAction={setAction} username={userData.username} />
         }
      </>
   )
}

export default UserModal