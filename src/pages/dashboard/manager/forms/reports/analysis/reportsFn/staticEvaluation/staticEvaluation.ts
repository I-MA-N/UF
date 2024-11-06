import OrgMemberData from "../../../../../../../../types/OrgMemberData";
import staticEvaluationAvg from "./staticEvaluationAvg";
import staticEvaluationAvgJsx from "./staticEvaluationAvgJsx";

function staticEvaluation(usersData: OrgMemberData[]) {
   const data = staticEvaluationAvg(usersData);

   return staticEvaluationAvgJsx(data);
}

export default staticEvaluation;