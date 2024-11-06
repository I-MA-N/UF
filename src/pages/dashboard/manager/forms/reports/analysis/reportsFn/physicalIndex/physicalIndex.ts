import OrgMemberData from "../../../../../../../../types/OrgMemberData";
import bodyCompositionAvg from "./bodyCompositionAvg";
import bodyStatusAvg from "./bodyStatusAvg";
import physicalIndexAvg from "./physicalIndexAvg";
import physicalIndexAvgJsx from "./physicalIndexAvgJsx";

function physicalIndex(usersData: OrgMemberData[]) {
   const bodyStatus = bodyStatusAvg(usersData);
   const physicalIndex = physicalIndexAvg(usersData);
   const bodyComposition = bodyCompositionAvg(usersData);

   return (
      physicalIndexAvgJsx(bodyStatus, physicalIndex, bodyComposition)
   );
}

export default physicalIndex;