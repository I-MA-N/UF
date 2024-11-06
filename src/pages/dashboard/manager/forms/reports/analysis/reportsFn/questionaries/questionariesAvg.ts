import OrgMemberData from "../../../../../../../../types/OrgMemberData";
import questionariesData from "../../../../../../reports/analysis/reportsFn/questionaries/questionariesData";

function questionariesAvg(usersData: OrgMemberData[]) {
   const resultObj = {
      'generalHealth': 0,
      'physicalReadiness': 0,
      'salamatJesmi': 0,
      'salamatRavani': 0,
      'happinness': 0,
      'jobSatisfaction': 0,
      'jobPerformance': 0,
   }

   usersData.forEach(userData => {
      const formData = userData.formData;
      const analysedData = questionariesData(formData);

      Object.keys(resultObj).forEach(key => {
         const value = analysedData[key as keyof typeof analysedData];
         
         if (typeof value === "number") {
            resultObj[key as keyof typeof resultObj] += value;
         }
      })
   })

   Object.keys(resultObj).forEach(key => {
      resultObj[key as keyof typeof resultObj] /= usersData.length
   })

   return resultObj
}

export type questionariesAvgType = ReturnType<typeof questionariesAvg>;
export default questionariesAvg;