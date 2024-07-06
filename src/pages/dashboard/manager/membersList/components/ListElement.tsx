import UserListElem from "../../../common/components/members/UserListItem";

type ListElemntProps = {
   users: any,
   setSimpleUserData: React.Dispatch<any>
}

function ListElement({ users, setSimpleUserData }: ListElemntProps) {
   return (
      users?.map((user: any) => (
         <UserListElem
            key={user.username}
            user={user}
            setState={setSimpleUserData}
            setStateValue={user}
         />
      ))
   );
};

export default ListElement;