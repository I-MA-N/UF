import Container from "../../../../../common/Container";
import CheckMentorExistElem from "./components/CheckMentorExistElem";
import { useState } from "react";
import { MentorExistRes } from "../../../../../../api/manager/mangaerPMentorExist";
import MentorExistResult from "./components/MentorExistResult";

function AddMentor() {
   const [mentorStatus, setMentorStatus] = useState<MentorExistRes | null>(null);

   return (
      <Container>
         <div className="w-64 xs:w-[300px] lg:w-80">
            <CheckMentorExistElem
               setMentorStatus={setMentorStatus}
            />

            {
               mentorStatus?.status &&
               <MentorExistResult
                  mentorStatus={mentorStatus}
               />
            }
         </div>
      </Container>
   )
}

export default AddMentor