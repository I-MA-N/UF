import OrgMemberData from "../../../../../../../../types/OrgMemberData";
import questionariesAvg from "./questionariesAvg";
import questionariesAvgJsx from "./questionariesAvgJsx";

function questionaries(usersData: OrgMemberData[]) {
   const data = questionariesAvg(usersData);

   return {
      jsx: questionariesAvgJsx(data),
      data
   }
}

export default questionaries;