import { MentorExistRes } from "../../../../../../../api/manager/mangaerPMentorExist";
import Status1 from "./statuses/Status1";
import Status2 from "./statuses/Status2";
import Status3 from "./statuses/Status3";
import Status4 from "./statuses/Status4";

// 4 States to show, depends on mentor exist response,
// State 1: 'cannot add' | 'not mentor' -> show only message,
// State 2: 'exist in list' -> show only message,
// State 3: 'not exist' -> should show add mentor form,
// State 4: 'belongs another org' | 'exist not in list' -> should show only button to add,

type MentorExistResultProps = {
   mentorStatus: MentorExistRes
}

function MentorExistResult({ mentorStatus }: MentorExistResultProps) {
   if (mentorStatus.status === 'cannot add' || mentorStatus.status === 'not mentor') {
      return <div className="w-full">
         <Status1 />
      </div>
   }

   if (mentorStatus.status === 'exist in list') {
      return <div className="w-full">
         <Status2 />
      </div>
   }

   if ("username" in mentorStatus && mentorStatus.status === 'not exist') {
      return <div className="w-full">
         <Status3 username={mentorStatus.username} />
      </div>
   }

   if ("name" in mentorStatus) {
      return <div className="w-full">
         <Status4 mentorData={mentorStatus} />
      </div>
   }
}

export default MentorExistResult