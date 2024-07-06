import { UserData2 } from "../../../../../types/UserData"
import UserListElem from "../../../common/components/members/UserListItem"

type MembersListElemProps = {
   selectedUsers: UserData2[],
   setUsername: React.Dispatch<React.SetStateAction<string | null>>
}

function MembersListElem({ selectedUsers, setUsername }: MembersListElemProps) {
   return (
      selectedUsers.map(user => (
         <UserListElem
            key={user.username}
            user={user}
            setState={setUsername}
            setStateValue={user.username}
         />
      ))
   )
}

export default MembersListElem