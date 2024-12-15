import { MentorData } from "../../../../../../../../../types/UserData";
import InfoRow from "./InfoRow";

type MentorInfoElemProps = {
   mentorData: {
      status: string;
   } & Omit<MentorData, "superusers">
}

function MentorInfoElem({ mentorData }: MentorInfoElemProps) {
   const genderString = true ? 'جنسیت انتخاب نشده' : mentorData.gender === 'male' ? 'آقا' : 'خانم';

   return (
      <div className="flex flex-col items-center gap-2">
         <p className="text-xs lg:text-sm text-yellow text-center">
            اطلاعات مربی مورد نظر در پایین آمده است. در صورت تایید، مربی را به سازمان خود اضافه کنید!
         </p>

         <div className="flex flex-col gap-4">
            <InfoRow
               icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" fill="none" className="flex-shrink-0 w-4.5 lg:w-6">
                  <path d="M0.55 9C0.55 10.8403 0.649326 12.2816 0.900908 13.4137C1.1511 14.5394 1.5445 15.3253 2.1096 15.8904C2.67469 16.4555 3.46057 16.8489 4.58635 17.0991C5.71836 17.3507 7.15968 17.45 9 17.45C10.8403 17.45 12.2816 17.3507 13.4137 17.0991C14.5394 16.8489 15.3253 16.4555 15.8904 15.8904C16.4555 15.3253 16.8489 14.5394 17.0991 13.4137C17.3507 12.2816 17.45 10.8403 17.45 9C17.45 7.15968 17.3507 5.71836 17.0991 4.58635C16.8489 3.46057 16.4555 2.67469 15.8904 2.1096C15.3253 1.5445 14.5394 1.1511 13.4137 0.900909C12.2816 0.649326 10.8403 0.549999 9 0.549999C7.15968 0.549999 5.71836 0.649326 4.58635 0.900909C3.46057 1.1511 2.67469 1.5445 2.1096 2.1096C1.5445 2.67469 1.1511 3.46057 0.900908 4.58635C0.649326 5.71836 0.55 7.15968 0.55 9Z" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="3" cy="3" r="2.45" transform="matrix(-1 0 0 1 15 6)" stroke="currentColor" strokeWidth="1.1" />
                  <path d="M3.75 7.5H6.75M3.75 10.5H6.75" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
               </svg>}
               text="نام و نام خانوداگی:"
               info={`${mentorData.name || '-'} (${genderString})`}
            />
            <InfoRow
               icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" fill="none" className="w-4.5 lg:w-6">
                  <path d="M12 7.5L8.25 11.25L6.75 9.75" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M7.64314 1.42397C8.32453 0.525342 9.67547 0.525342 10.3569 1.42397L11.2079 2.5463C11.3938 2.79146 11.6975 2.91726 12.0023 2.87535L13.3976 2.6835C14.5149 2.52988 15.4701 3.48514 15.3165 4.60239L15.1247 5.99774C15.0827 6.30254 15.2085 6.60624 15.4537 6.79214L16.576 7.64314C17.4747 8.32453 17.4747 9.67547 16.576 10.3569L15.4537 11.2079C15.2085 11.3938 15.0827 11.6975 15.1247 12.0023L15.3165 13.3976C15.4701 14.5149 14.5149 15.4701 13.3976 15.3165L12.0023 15.1247C11.6975 15.0827 11.3938 15.2085 11.2079 15.4537L10.3569 16.576C9.67547 17.4747 8.32453 17.4747 7.64314 16.576L6.79214 15.4537C6.60624 15.2085 6.30254 15.0827 5.99774 15.1247L4.60238 15.3165C3.48514 15.4701 2.52988 14.5149 2.6835 13.3976L2.87535 12.0023C2.91726 11.6975 2.79146 11.3938 2.5463 11.2079L1.42397 10.3569C0.525342 9.67547 0.525342 8.32453 1.42397 7.64314L2.5463 6.79214C2.79146 6.60624 2.91726 6.30254 2.87535 5.99774L2.6835 4.60238C2.52988 3.48514 3.48514 2.52988 4.60239 2.6835L5.99774 2.87535C6.30254 2.91726 6.60624 2.79146 6.79214 2.5463L7.64314 1.42397Z" stroke="currentColor" strokeWidth="1.1" />
               </svg>}
               text="تخصص:"
               info={JSON.parse(mentorData.info).job || '-'}
            />
            <InfoRow
               icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" fill="none" className="w-4.5 lg:w-6">
                  <path d="M0.670921 8.89365C1.06117 10.8737 2.25745 12.5466 3.67275 13.891C5.08591 15.2334 6.68285 16.2151 7.80479 16.8141C8.55792 17.2162 9.44209 17.2162 10.1952 16.8141C11.3172 16.2151 12.9141 15.2334 14.3273 13.891C15.7426 12.5466 16.9389 10.8737 17.3291 8.89365C17.6703 7.16212 17.3071 5.07792 16.0174 3.43311C14.7408 1.80491 12.51 0.549999 9 0.549999C5.49001 0.549999 3.25918 1.80491 1.98255 3.43311C0.692887 5.07792 0.32965 7.16212 0.670921 8.89365Z" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="3" cy="3" r="2.45" transform="matrix(-1 0 0 1 12 4.5)" stroke="currentColor" strokeWidth="1.1" />
               </svg>}
               text="شهر/استان:"
               info={JSON.parse(mentorData.info).city || '-'}
            />
         </div>
      </div>
   );
};

export default MentorInfoElem;