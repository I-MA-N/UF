import OrgMemberData from "../../../../../../../../types/OrgMemberData";
import calorieAmountAvg from "./calorieAmountAvg";
import calorieAmountAvgJsx from "./calorieAmountAvgJsx";

function calorieAmount(usersData: OrgMemberData[]) {
   const data = calorieAmountAvg(usersData);

   return calorieAmountAvgJsx(data);
}

export default calorieAmount;