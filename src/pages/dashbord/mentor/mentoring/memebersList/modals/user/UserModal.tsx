import profileImg from '../../../../../../../assets/images/profile-img.png'
import { useState } from "react"
import UserChangeModal from "./UserChangeModal"
import { useNavigate } from 'react-router-dom'
import { useMentoringContext } from '../../../../context/MentoringContextProvider'
import GUserData from '../../../../../../../api/common/GUserData'
import Btn from '../../../../../../common/Btn'
import parseDate from '../../../../../../../utils/parseDate'

type UserModalProps = {
   username: string,
   setUsername: React.Dispatch<React.SetStateAction<string | null>>
}

function UserModal({ username, setUsername }: UserModalProps) {
   const [changeModalUsername, setChangeModalUsername] = useState<string | null>(null);
   const { setMentoringData } = useMentoringContext();
   const { data } = GUserData(username);
   const navigate = useNavigate();

   const clickHandler = () => {
      setMentoringData(prevValue => {
         return {
            ...prevValue,
            username: data.username,
            orgName: data.orgNames.split(';')[0],
         }
      })

      navigate("/mentor/mentoring/forms");
   }

   return (
      <>
         <div className="modal">
            <button onClick={() => setUsername(null)} className="flex gap-0.5 items-center mb-4.5 bg-primary text-yellow py-2 px-4 rounded-[32px]">
               <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M13 3L8 8M8 8L3 13M8 8L13 13M8 8L3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
               </svg>
               خروج
            </button>

            <div className="w-[298px] xs:w-80 p-12 bg-white text-primary rounded-[32px]">
               <div className="flex gap-3.5 items-center border-b border-primary pb-4 relative">
                  <img src={profileImg} alt="profile-image" />
                  <div>
                     <p className={`text-sm mb-1 ${data?.username ? 'w-32' : ''}`}>
                        {data?.name || data?.username || 'مشکلی در دریافت اطلاعات این کاربر رخ داده است!'}
                     </p>
                     <p className="font-Estedad-ExtraLight text-xs">{data?.email}</p>
                  </div>
               </div>

               <div className='flex items-center justify-center gap-4 my-6'>
                  {
                     data?.username &&
                     <>
                        <Btn
                           text='ارزیابی'
                           type='button'
                           className='bg-secondary text-white w-auto h-8 px-6'
                           onClick={clickHandler}
                        />
                        <Btn
                           text='ویرایش'
                           type='button'
                           className='bg-secondary text-white w-auto h-8 px-6'
                           onClick={() => setChangeModalUsername(data?.username)}
                        />
                     </>
                  }
               </div>

               <p className="text-[10px] font-Estedad-ExtraLight text-center">
                  تاریخ ایجاد کاربر:
                  {data?.datejoined && parseDate(data.datejoined)}
               </p>

               {/* <div className="flex flex-col gap-4 pt-6">
                  <ModalStatusItem
                     icon={<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" className="w-[25px]">
                        <path d="M10.5 5.25H12.75" stroke="#083C5A" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M5.25 9H12.75" stroke="#083C5A" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M0.55 9C0.55 10.8403 0.649326 12.2816 0.900908 13.4137C1.1511 14.5394 1.5445 15.3253 2.1096 15.8904C2.67469 16.4555 3.46057 16.8489 4.58635 17.0991C5.71836 17.3507 7.15968 17.45 9 17.45C9.81106 17.45 10.5467 17.4308 11.2142 17.3872C13.5894 17.2323 15.0076 16.7732 15.8904 15.8904C16.7732 15.0076 17.2323 13.5894 17.3872 11.2142C17.4308 10.5467 17.45 9.81106 17.45 9C17.45 7.15968 17.3507 5.71836 17.0991 4.58635C16.8489 3.46057 16.4555 2.67469 15.8904 2.1096C15.3253 1.5445 14.5394 1.1511 13.4137 0.900909C12.2816 0.649326 10.8403 0.549999 9 0.549999C7.15968 0.549999 5.71836 0.649326 4.58635 0.900909C3.46057 1.1511 2.67469 1.5445 2.1096 2.1096C1.5445 2.67469 1.1511 3.46057 0.900908 4.58635C0.649326 5.71836 0.55 7.15968 0.55 9Z" stroke="#083C5A" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
                     </svg>}
                     text="وضعیت پرسشنامه:"
                     isCompleted={data?.questionary}
                     eyeIcon={false}
                  />
                  <ModalStatusItem
                     icon={<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" className="w-[25px]">
                        <path d="M0.55 9C0.55 10.8403 0.649326 12.2816 0.900908 13.4137C1.1511 14.5394 1.5445 15.3253 2.1096 15.8904C2.67469 16.4555 3.46057 16.8489 4.58635 17.0991C5.71836 17.3507 7.15968 17.45 9 17.45C10.8403 17.45 12.2816 17.3507 13.4137 17.0991C14.5394 16.8489 15.3253 16.4555 15.8904 15.8904C16.4555 15.3253 16.8489 14.5394 17.0991 13.4137C17.3507 12.2816 17.45 10.8403 17.45 9C17.45 7.15968 17.3507 5.71836 17.0991 4.58635C16.8489 3.46057 16.4555 2.67469 15.8904 2.1096C15.3253 1.5445 14.5394 1.1511 13.4137 0.900909C12.2816 0.649326 10.8403 0.549999 9 0.549999C7.15968 0.549999 5.71836 0.649326 4.58635 0.900909C3.46057 1.1511 2.67469 1.5445 2.1096 2.1096C1.5445 2.67469 1.1511 3.46057 0.900908 4.58635C0.649326 5.71836 0.55 7.15968 0.55 9Z" stroke="#083C5A" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9 5.25V12.75M12.75 8.25V12.75M5.25 9.75V12.75" stroke="#083C5A" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
                     </svg>}
                     text="وضعیت برنامه ورزشی:"
                     isCompleted={data?.program}
                     eyeIcon={false}
                  />
                  <ModalStatusItem
                     icon={<svg xmlns="http://www.w3.org/2000/svg" width="25" height="18" viewBox="0 0 25 18" fill="none">
                        <path fillRule="evenodd" clipRule="evenodd" d="M8.34545 0.268188C4.82409 0.268188 1.90454 2.94372 1.90454 6.32155C1.90454 6.6774 1.9261 7.02477 1.96716 7.36364H3.07677C3.02943 7.025 3.00454 6.67763 3.00454 6.32155C3.00454 3.62054 5.35989 1.36819 8.34545 1.36819C9.67162 1.36819 10.9258 2.04523 11.9199 2.87649L12.2727 3.17148L12.6255 2.87649C13.6197 2.04523 14.8738 1.36819 16.2 1.36819C19.1855 1.36819 21.5409 3.62067 21.5409 6.32169C21.5409 6.67773 21.516 7.02504 21.4687 7.36364H22.5783C22.6194 7.02482 22.6409 6.6775 22.6409 6.32169C22.6409 2.94388 19.7214 0.268188 16.2 0.268188C14.6844 0.268188 13.3236 0.952996 12.2727 1.75127C11.2218 0.952996 9.86109 0.268188 8.34545 0.268188ZM21.5045 10.6364H20.227C19.6214 11.5889 18.8521 12.4384 18.0178 13.1849C16.0841 14.9153 13.8658 16.0326 12.7604 16.5272C12.4486 16.6667 12.0969 16.6667 11.785 16.5272C10.6797 16.0326 8.46135 14.9153 6.52764 13.1848C5.69342 12.4383 4.92407 11.5889 4.31854 10.6364H3.04102C3.76032 11.9468 4.74936 13.0696 5.7941 14.0046C7.84892 15.8434 10.1835 17.0157 11.3358 17.5313C11.9334 17.7987 12.612 17.7987 13.2097 17.5313C14.3619 17.0157 16.6965 15.8434 18.7513 14.0046C19.7961 13.0697 20.7852 11.9469 21.5045 10.6364Z" fill="#083C5A" />
                        <path d="M0.818237 9.00002H7.36369L9.00006 5.72729L12.2728 11.4546L15.5455 7.36366L17.1819 9.00002H23.7273" stroke="#083C5A" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
                     </svg>}
                     text="وضعیت ارزیابی:"
                     isCompleted={data?.program}
                     eyeIcon={true}
                  />
               </div> */}
            </div>
         </div>
         {
            changeModalUsername &&
            <UserChangeModal username={changeModalUsername} setUsername={setChangeModalUsername} />
         }
      </>
   )
}

export default UserModal