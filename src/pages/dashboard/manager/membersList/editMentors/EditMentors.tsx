import { useEffect, useState } from "react"
import Container from "../../../../common/Container"
import MentorDataModal from "./components/modals/MentorDataModal";
import { MentorData } from "../../../../../types/UserData";
import SearchElement from "../../../common/components/members/SearchElement";
import ListElement from "./components/ListElement";
import Btn from "../../../../common/Btn";
import BottomBtns from "./components/BottomBtns";

type EditMentorsProps = {
   mentors: MentorData[]
}

function EditMentors({ mentors }: EditMentorsProps) {
   const [mentorData, setMentorData] = useState<MentorData | null>(null);
   const [selectedMentors, setSelectedMentors] = useState(mentors);

   useEffect(() => {
      setSelectedMentors(mentors);
   }, [mentors])

   return (
      <Container>
         <h2 className="text-center text-sm lg:text-base mb-4">
            برای مشاهده اطلاعات هر مربی روی نامش
            <br />
            کلیک کنید.
         </h2>
         
         <Btn
            text="مربی های سازمان من"
            type="button"
            icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 21" fill="none" className="w-6 lg:w-8 mb-1.5 mr-1.5">
               <path d="M5.55 17.6667C5.55 18.3276 5.61544 18.7966 5.75333 19.1413C5.88237 19.4639 6.08251 19.6976 6.41423 19.8819C6.76583 20.0773 7.28081 20.2249 8.04541 20.3193C8.8056 20.4132 9.77144 20.45 11 20.45C12.2286 20.45 13.1944 20.4132 13.9546 20.3193C14.7192 20.2249 15.2342 20.0773 15.5858 19.8819C15.9175 19.6976 16.1176 19.4639 16.2467 19.1413C16.3846 18.7966 16.45 18.3276 16.45 17.6667C16.45 17.0057 16.3846 16.5368 16.2467 16.1921C16.1176 15.8695 15.9175 15.6357 15.5858 15.4514C15.2342 15.2561 14.7192 15.1084 13.9546 15.014C13.1944 14.9201 12.2286 14.8833 11 14.8833C9.77144 14.8833 8.8056 14.9201 8.04541 15.014C7.28081 15.1084 6.76583 15.2561 6.41423 15.4514C6.08251 15.6357 5.88237 15.8695 5.75333 16.1921C5.61544 16.5368 5.55 17.0057 5.55 17.6667Z" stroke="#E4F4FD" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
               <path d="M7.55 9C7.55 10.9054 9.09462 12.45 11 12.45C12.9054 12.45 14.45 10.9054 14.45 9C14.45 7.09462 12.9054 5.55 11 5.55C9.09462 5.55 7.55 7.09462 7.55 9Z" stroke="#E4F4FD" strokeWidth="1.1" />
               <path d="M16.3333 7C17.9333 7 19 8.33333 19 9.66667C19 11 17.9333 12.3333 16.3333 12.3333" stroke="#E4F4FD" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
               <path d="M19.0887 18.9999C21.5776 18.9999 22.9998 18.6666 22.9998 16.6666C22.9998 14.6666 21.5776 14.3333 17.6665 14.3333" stroke="#E4F4FD" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
            </svg>}
            className="w-[300px] lg:w-96"
         />

         <ul className="w-64 lg:w-80 max-h-[220px] lg:max-h-[260px] divide-y divide-primary mt-0.5 rounded-b-[18px] overflow-y-auto">
            <SearchElement setSelectedUsers={setSelectedMentors} users={mentors} />
            <ListElement mentors={selectedMentors} setMentorData={setMentorData} />
         </ul>

         <BottomBtns />

         {
            mentorData && <MentorDataModal mentorData={mentorData} setMentorData={setMentorData} />
         }
      </Container>
   )
}

export default EditMentors