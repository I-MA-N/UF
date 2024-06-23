import Btn from "../../../../common/Btn";

type BtnOrMessageProps = {
   mentorNames: string[],
   mentorSelected: string,
   setMentorModal: React.Dispatch<React.SetStateAction<boolean>>
}

function BtnOrMessage({ mentorNames, mentorSelected, setMentorModal }: BtnOrMessageProps) {
   return mentorNames.length > 0 ?
      <Btn
         text={mentorSelected}
         type="button"
         icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 8" fill="none" className="w-4">
            <path d="M13 1L7 7L1 1" stroke="#E4F4FD" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
         </svg>}
         className="w-[300px]"
         onClick={() => setMentorModal(true)}
      />
      :
      <div className="text-center text-sm mb-10">
         <span className="flex gap-2 items-center justify-center text-yellow mb-2">
            کاربری در سازمان شما وجود ندارد!
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="size-8">
               <path d="M1 12C1 14.4477 1.13246 16.3463 1.46153 17.827C1.78807 19.2963 2.29478 20.2921 3.00136 20.9986C3.70794 21.7052 4.70365 22.2119 6.17298 22.5385C7.65366 22.8675 9.55232 23 12 23C14.4477 23 16.3463 22.8675 17.827 22.5385C19.2963 22.2119 20.2921 21.7052 20.9986 20.9986C21.7052 20.2921 22.2119 19.2963 22.5385 17.827C22.8675 16.3463 23 14.4477 23 12C23 9.55232 22.8675 7.65366 22.5385 6.17298C22.2119 4.70365 21.7052 3.70794 20.9986 3.00136C20.2921 2.29478 19.2963 1.78807 17.827 1.46153C16.3463 1.13246 14.4477 1 12 1C9.55232 1 7.65366 1.13246 6.17298 1.46153C4.70365 1.78807 3.70794 2.29478 3.00136 3.00136C2.29478 3.70794 1.78807 4.70365 1.46153 6.17298C1.13246 7.65366 1 9.55232 1 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
               <path d="M15.5493 8.47826C14.6434 7.56533 13.3877 7 12 7C9.23858 7 7 9.23858 7 12C7 13.3877 7.56533 14.6434 8.47826 15.5493M15.5493 8.47826C16.446 9.38197 17 10.6263 17 12C17 14.7614 14.7614 17 12 17C10.6263 17 9.38197 16.446 8.47826 15.5493M15.5493 8.47826L8.47826 15.5493" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
         </span>
         <span>با استفاده از دکمه زیر لیست مربی ها را مشاهده کنید.</span>
      </div>
};

export default BtnOrMessage;