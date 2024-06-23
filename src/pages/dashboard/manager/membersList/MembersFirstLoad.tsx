import { useMemo } from "react";
import splitArr from "../../../../utils/splitArr";
import { useUserDataContext } from "../../../authentication/UserDataProvider";
import Members from "./Members";
import NoMembersElem from "./components/NoMembersElem";

function MembersFirstLoad() {
   const userData = useUserDataContext();
   const mentorNames = useMemo(() => splitArr(userData.subusers), []);

   if (mentorNames.length > 0) {
      return (
         <Members mentorNames={mentorNames} />
      );
   }

   return <NoMembersElem />;
};

export default MembersFirstLoad;