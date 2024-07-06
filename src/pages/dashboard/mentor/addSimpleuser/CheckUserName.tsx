import Container from "../../../common/Container"
import CheckUserExistElem from "./components/CheckUserExistElem"
import { UserExistRes } from "../../../../api/mentor/mentorPUserExist";
import { useState } from "react";
import UserExistResult from "./components/ShowUserExistResult";

type CheckUserNameProps = {
   orgName: string
}

function CheckUserName({ orgName }: CheckUserNameProps) {
   const [userStatus, setUserStatus] = useState<UserExistRes | null>(null);

   return (
      <Container>
         <div className="w-64 xs:w-[300px] lg:w-80">
            <CheckUserExistElem orgName={orgName} setUserStatus={setUserStatus} />
            {
               userStatus?.status &&
               <UserExistResult status={userStatus?.status} username={userStatus?.username} orgName={orgName} />
            }
         </div>
      </Container>
   )
}

export default CheckUserName