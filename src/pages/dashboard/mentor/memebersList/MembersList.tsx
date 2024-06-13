import { useMemo, useState } from "react"
import { useNavigate } from "react-router-dom";
import UserModal from "./modals/user/UserModal";
import OrgModal from "./modals/OrgModal";
import SearchElement from "./components/SearchElement";
import { useUserDataContext } from "../../../authentication/UserDataProvider";
import splitArr from "../../../../utils/splitArr";
import mentorGSimpleusersData from "../../../../api/mentor/mentorGSimpleusersData";
import { useMentoringContext } from "../context/MentoringContextProvider";
import Container from "../../../common/Container";
import Btn from "../../../common/Btn";
import ListElement from "./components/ListElement";

function MembersList() {
   const userData = useUserDataContext();
   const orgsName = useMemo(() => splitArr(userData.orgNames), []);
   const [orgSelected, setOrgSelected] = useState(orgsName[0]);
   const [orgModal, setOrgModal] = useState(false);

   const { data, isError, isPending } = mentorGSimpleusersData(orgSelected);
   const [selectedUsers, setSelectedUsers] = useState<any>(data);

   // Forms Context
   const { setMentoringData } = useMentoringContext();

   // Data for User Modal
   const [username, setUsername] = useState<string | null>(null);
   const navigate = useNavigate();

   if (isPending) return <h1>Loading...</h1>

   return (
      <Container>
         <h2 className="text-center text-sm mb-4">
            با انتخاب نام سازمان و استفاده از گزینه "اضافه کردن
            <br />
            کاربر" یک نفر را در سازمان مد نظرتان ثبت نام کنید.
            <br />
         </h2>

         {
            isError &&
            <p className="text-yellow text-xs mb-4">مشکلی در دریافت اطلاعات کاربران این سازمان بوجود آمده!</p>
         }

         <Btn
            text={orgSelected}
            type="button"
            icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 8" fill="none" className="w-4">
               <path d="M13 1L7 7L1 1" stroke="#E4F4FD" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>}
            className="w-[300px]"
            onClick={() => setOrgModal(true)}
         />

         <ul className="w-64 max-h-[304px] divide-y divide-primary mt-0.5 rounded-b-[18px] overflow-y-auto">
            <SearchElement setSelectedUsers={setSelectedUsers} data={data} />
            <ListElement selectedUsers={selectedUsers} data={data} setUsername={setUsername} />
         </ul>

         <Btn
            text="اضافه کردن کاربر"
            type="button"
            icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 14" fill="none" className="w-4.5">
               <path d="M0.55 11.0833C0.55 11.6483 0.622235 12.0281 0.762591 12.3002C0.89294 12.5529 1.10838 12.7634 1.51183 12.9373C1.93191 13.1183 2.53743 13.2508 3.41224 13.3345C4.28169 13.4178 5.38077 13.45 6.76923 13.45C8.15769 13.45 9.25677 13.4178 10.1262 13.3345C11.001 13.2508 11.6066 13.1183 12.0266 12.9373C12.4301 12.7634 12.6455 12.5529 12.7759 12.3002C12.9162 12.0281 12.9885 11.6483 12.9885 11.0833C12.9885 10.5184 12.9162 10.1386 12.7759 9.86644C12.6455 9.61372 12.4301 9.40324 12.0266 9.2294C11.6066 9.0484 11.001 8.9159 10.1262 8.83213C9.25677 8.74887 8.15769 8.71667 6.76923 8.71667C5.38077 8.71667 4.28169 8.74887 3.41224 8.83213C2.53743 8.9159 1.93191 9.0484 1.51183 9.2294C1.10838 9.40324 0.89294 9.61372 0.762591 9.86644C0.622235 10.1386 0.55 10.5184 0.55 11.0833Z" stroke="#E4F4FD" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
               <path d="M3.62693 3.5C3.62693 5.10189 5.0057 6.45 6.76924 6.45C8.53278 6.45 9.91155 5.10189 9.91155 3.5C9.91155 1.89811 8.53278 0.55 6.76924 0.55C5.0057 0.55 3.62693 1.89811 3.62693 3.5Z" stroke="#E4F4FD" strokeWidth="1.1" />
               <path d="M13.5384 4.08325V5.83325M13.5384 7.58325V5.83325M13.5384 5.83325H15.3846H11.6923" stroke="#E4F4FD" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
            </svg>}
            className="mt-0.5"
            onClick={() => {
               setMentoringData!(prevValue => {
                  return {
                     ...prevValue,
                     orgName: orgSelected
                  }
               })
               navigate('/mentor/dashboard/addsimpleuser')
            }}
         />
         <h3 className="text-center text-xs font-Estedad-ExtraLight mt-4">
            با کلیک روی هر کاربر، علاوه بر دیدن اطلاعات،
            <br />
            ارزیابی آن کاربر را نیز می توانید انجام دهید.
         </h3>

         {
            orgModal &&
            <OrgModal orgSelected={orgSelected} setOrgSelected={setOrgSelected} setOrgModal={setOrgModal} orgsName={orgsName} />
         }
         {
            username &&
            <UserModal username={username} setUsername={setUsername} />
         }
      </Container>
   )
}

export default MembersList