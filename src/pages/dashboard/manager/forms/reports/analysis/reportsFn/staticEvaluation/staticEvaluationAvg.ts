import OrgMemberData from "../../../../../../../../types/OrgMemberData";
import staticEvaluation from "../../../../../../tests/data/testsData/staticEvaluation";

type StaticEvaluationReportObj = {
   serverID: string,
   title: string,
   count: number,
   five: number,
   three: number,
   one: number,
}

function staticEvaluationAvg(usersData: OrgMemberData[]) {
   const resultArr: StaticEvaluationReportObj[] = [];

   staticEvaluation.forEach(part => {
      part.forEach(section => {
         section.questions.forEach(input => {
            resultArr.push({
               serverID: input.serverID,
               title: input.title,
               count: 0,
               five: 0,
               three: 0,
               one: 0,
            })
         })
      })
   })

   usersData.forEach(userData => {
      const formData = userData.formData["ناهنجاری ها"];

      if (formData) {
         Object.entries(formData).forEach(([key, inputData]) => {
            const foundedKey = resultArr.findIndex(obj => obj.serverID === key);
            const value = inputData?.value;

            if (foundedKey > -1 && value) {
               resultArr[foundedKey].count++;

               if (value === "5") {
                  resultArr[foundedKey].five++;
               } else if (value === "3") {
                  resultArr[foundedKey].three++;
               } else if (value === "1") {
                  resultArr[foundedKey].one++;
               }
            }
         })
      }
   })

   return resultArr.map(obj => (
      {
         title: `${obj.title} (${obj.count})`,
         five: obj.count ? Number((obj.five / obj.count * 100).toFixed(2)) : 0,
         three: obj.count ? Number((obj.three / obj.count * 100).toFixed(2)) : 0,
         one: obj.count ? Number((obj.one / obj.count * 100).toFixed(2)) : 0,
      }
   ))
}

export type staticEvaluationAvgType = ReturnType<typeof staticEvaluationAvg>;
export default staticEvaluationAvg;