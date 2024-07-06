import { MentorData } from "../../../../../../types/UserData";
import UserListElem from "../../../../common/components/members/UserListItem";

type ListElementProps = {
   mentors: MentorData[],
   setMentorData: React.Dispatch<React.SetStateAction<MentorData | null>>
}

function ListElement({ mentors, setMentorData }: ListElementProps) {
   return mentors.map(mentor => (
      <UserListElem
         key={mentor.username}
         user={mentor}
         setState={setMentorData}
         setStateValue={mentor}
      />
   ))
};

export default ListElement;