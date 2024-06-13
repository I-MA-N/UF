import { useMemo, useState } from "react"
import Btn from "../../../common/Btn"
import Container from "../../../common/Container"
import splitArr from "../../../../utils/splitArr";
import Link from "../../../common/Link";
import { Link as RouterLink } from "react-router-dom";
import UserModal from "./modals/UserModal";
import MentorModal from "./modals/MentorModal";
import managerGMentorUsers from "../../../../api/manager/managerGMentorUsers";
import { useUserDataContext } from "../../../authentication/UserDataProvider";

function MembersList() {
   const userData = useUserDataContext();
   const mentorNames = useMemo(() => splitArr(userData.subusers), []);
   console.log(mentorNames)

   const [mentorSelected, setMentorSelected] = useState(mentorNames[0]);
   const [mentorModal, setMentorModal] = useState(false);

   const { data, isError, isPending } = managerGMentorUsers(mentorSelected);

   // Username for User Modal
   const [simpleUserData, setSimpleUserData] = useState<any>(null);

   if (isPending) return <h1>Loading...</h1>

   return (
      <Container>
         <RouterLink
            to="/manager/dashboard"
            className="btn px-4 py-3.5 gap-3 w-fit mx-auto"
         >
            برگشت
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="11" viewBox="0 0 16 11" fill="none">
               <path d="M5.375 9.75L1 5.375M1 5.375L15 5.375M1 5.375L5.375 1" stroke="#083C5A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
         </RouterLink>
         <h2 className="text-center text-sm my-4">
            مربی مورد نظر خود را انتخاب کرده و کاربران مربوط به آن
            <br />
            را در لیست زیر میتوانید مشاهده کنید.
         </h2>

         {
            isError &&
            <p className="text-yellow text-xs mb-4">مشکلی در دریافت اطلاعات کاربران این سازمان بوجود آمده!</p>
         }

         <Btn
            text={mentorSelected}
            type="button"
            icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 8" fill="none" className="w-4">
               <path d="M13 1L7 7L1 1" stroke="#E4F4FD" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>}
            className="w-[300px]"
            onClick={() => setMentorModal(true)}
         />

         <ul className="w-64 max-h-[304px] divide-y divide-primary mt-0.5 rounded-b-[18px] overflow-y-auto">
            {
               data?.map((user: any) => (
                  <li
                     key={user.username}
                     className="flex items-center justify-between h-9 text-[10px] bg-white text-primary cursor-pointer"
                     onClick={() => setSimpleUserData(user)}
                  >
                     <div className="flex justify-between items-center px-1.5 flex-grow">
                        <p className="line-clamp-1 mx-auto">{user.name || user.email}</p>
                        <p className="text-xs">|</p>
                        <p className="line-clamp-1 mx-auto">{user.username}</p>
                     </div>
                     <div className="w-px bg-primary h-full" />
                     <div className="flex justify-center items-center gap-1.5 px-2.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none" className={user.age && user.name && user.phone && 'text-secondary'}>
                           <path d="M0.5 9.5C0.5 9.98492 0.558599 10.3097 0.67083 10.5406C0.773806 10.7525 0.940969 10.9245 1.25323 11.0673C1.58195 11.2176 2.06134 11.33 2.76424 11.4014C3.46237 11.4724 4.34682 11.5 5.46746 11.5C6.58809 11.5 7.47254 11.4724 8.17067 11.4014C8.87357 11.33 9.35296 11.2176 9.68168 11.0673C9.99394 10.9245 10.1611 10.7525 10.2641 10.5406C10.3763 10.3097 10.4349 9.98492 10.4349 9.5C10.4349 9.01508 10.3763 8.69032 10.2641 8.45941C10.1611 8.24754 9.99394 8.07547 9.68168 7.93269C9.35296 7.78238 8.87357 7.66998 8.17067 7.59855C7.47254 7.52761 6.58809 7.5 5.46746 7.5C4.34682 7.5 3.46237 7.52761 2.76424 7.59855C2.06134 7.66998 1.58195 7.78238 1.25323 7.93269C0.940969 8.07547 0.773806 8.24754 0.67083 8.45941C0.558599 8.69032 0.5 9.01508 0.5 9.5Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                           <path d="M2.98521 3C2.98521 4.38351 4.09934 5.5 5.46746 5.5C6.83557 5.5 7.94971 4.38351 7.94971 3C7.94971 1.61649 6.83557 0.5 5.46746 0.5C4.09934 0.5 2.98521 1.61649 2.98521 3Z" stroke="currentColor" />
                           <path d="M9.44385 5.25L10.1894 6L12.1776 4" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                     </div>
                  </li>
               ))
            }
         </ul>

         <Link
            text="ویرایش مربی ها"
            icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 14" fill="none" className="w-4.5">
               <path d="M0.55 11.0833C0.55 11.6483 0.622235 12.0281 0.762591 12.3002C0.89294 12.5529 1.10838 12.7634 1.51183 12.9373C1.93191 13.1183 2.53743 13.2508 3.41224 13.3345C4.28169 13.4178 5.38077 13.45 6.76923 13.45C8.15769 13.45 9.25677 13.4178 10.1262 13.3345C11.001 13.2508 11.6066 13.1183 12.0266 12.9373C12.4301 12.7634 12.6455 12.5529 12.7759 12.3002C12.9162 12.0281 12.9885 11.6483 12.9885 11.0833C12.9885 10.5184 12.9162 10.1386 12.7759 9.86644C12.6455 9.61372 12.4301 9.40324 12.0266 9.2294C11.6066 9.0484 11.001 8.9159 10.1262 8.83213C9.25677 8.74887 8.15769 8.71667 6.76923 8.71667C5.38077 8.71667 4.28169 8.74887 3.41224 8.83213C2.53743 8.9159 1.93191 9.0484 1.51183 9.2294C1.10838 9.40324 0.89294 9.61372 0.762591 9.86644C0.622235 10.1386 0.55 10.5184 0.55 11.0833Z" stroke="#E4F4FD" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
               <path d="M3.62693 3.5C3.62693 5.10189 5.0057 6.45 6.76924 6.45C8.53278 6.45 9.91155 5.10189 9.91155 3.5C9.91155 1.89811 8.53278 0.55 6.76924 0.55C5.0057 0.55 3.62693 1.89811 3.62693 3.5Z" stroke="#E4F4FD" strokeWidth="1.1" />
               <path d="M13.5384 4.08325V5.83325M13.5384 7.58325V5.83325M13.5384 5.83325H15.3846H11.6923" stroke="#E4F4FD" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
            </svg>}
            className="mt-0.5"
            url="/manager/dashboard/memberslist/editmentors"
         />

         {
            mentorModal &&
            <MentorModal mentorSelected={mentorSelected} setMentorSelected={setMentorSelected} setMentorModal={setMentorModal} mentorNames={mentorNames} />
         }

         {
            simpleUserData &&
            <UserModal userData={simpleUserData} setUserData={setSimpleUserData} mentorSelected={mentorSelected} />
         }
      </Container>
   )
}

export default MembersList