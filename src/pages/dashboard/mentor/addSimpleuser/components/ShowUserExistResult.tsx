import { UserExistRes } from "../../../../../api/mentor/mentorPUserExist";
import Status1 from "./Status1";
import Status2 from "./Status2";
import Status3 from "./Status3";

// 3 States to show, depends on user exist response,
// State 1: 'belongs another org' | 'not simpleuser' -> show only message,
// State 2: 'not exist' -> should show add simpleuser form,
// State 3: 'exist in list' | 'exist not in list' -> should go to next step,

type ShowUserExistResultProps = UserExistRes & { orgName: string }

function ShowUserExistResult({ status, username, orgName }: ShowUserExistResultProps) {
   if (!username) {
      return <div className="w-full">
         <Status1 />
      </div>
   }

   if (status === 'not exist') {
      return <div className="w-full">
         <Status2 username={username} orgName={orgName} />
      </div>
   }

   if (status === 'exist in list' || status === 'exist not in list') {
      return <div className="w-full">
         <Status3 username={username} orgName={orgName} status={status} />
      </div>
   }
}

export default ShowUserExistResult