import OrgMemberData from "../../../../../../../../types/OrgMemberData";
import FMSAvg from "./FMSAvg";
import FMSAvgJsx from "./FMSAvgJsx";

function FMS(usersData: OrgMemberData[]) {
   const data = FMSAvg(usersData);

   return {
      jsx: FMSAvgJsx(data),
      data
   }
}

export default FMS;