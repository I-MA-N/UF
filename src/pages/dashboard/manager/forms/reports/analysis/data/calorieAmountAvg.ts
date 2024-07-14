import GenderStrings from "../../../../../../../types/GenderStrings";
import calorieAmountData from "../../../../../common/analysis/data/calorieAmountData";

function calorieAmountAvg(usersData: any, statusBodyAvg: any, gender: GenderStrings) {
   let activityAmountSum = usersData.reduce((sum: number, userData: any) => {
      return sum + Number(userData['مقدار تحرک']['مقدار تحرک']);
   }, 0)
   const activityAmountAvg = Math.round(activityAmountSum / usersData.length);

   let metabolismBasic = 0;
   if (gender === "whole") {
      let metabolismBasicSum = usersData.reduce((sum: number, userData: any) => {
         let metabolismBasicUser = 9.247 * userData['وضعیت بدنی']['وزن'] + 3.098 * userData['وضعیت بدنی']['قد'] - 4.33 * userData['وضعیت بدنی']['سن'] + 447.593;
         if (userData.gender === 'male') {
            metabolismBasicUser = 13.397 * userData['وضعیت بدنی']['وزن'] + 4.799 * userData['وضعیت بدنی']['قد'] - 5.677 * userData['وضعیت بدنی']['سن'] + 88.362;
         }
         return sum + metabolismBasicUser;
      }, 0)
      metabolismBasic = metabolismBasicSum / usersData.length;
   } else {
      metabolismBasic = 9.247 * statusBodyAvg['وزن'] + 3.098 * statusBodyAvg['قد'] - 4.33 * statusBodyAvg['سن'] + 447.593;
      if (gender === 'male') {
         metabolismBasic = 13.397 * statusBodyAvg['وزن'] + 4.799 * statusBodyAvg['قد'] - 5.677 * statusBodyAvg['سن'] + 88.362;
      }
   }

   const reportData = calorieAmountData({
      data: {
         'سن': statusBodyAvg['سن'],
         'قد': statusBodyAvg['قد'],
         'وزن': statusBodyAvg['وزن'],
         'میزان فعالیت': activityAmountAvg,
         'متابولیسم پایه': metabolismBasic
      },
   });

   return reportData;
}

export default calorieAmountAvg;