import OrgMemberData from "../../../../../../../../types/OrgMemberData";
import dynamicEvaluationAvgJsx from "./dynamicEvaluationAvgJsx";

function dynamicEvaluation(usersData: OrgMemberData[]) {
   return {
      jsx: dynamicEvaluationAvgJsx(usersData),
   }
}

export default dynamicEvaluation;