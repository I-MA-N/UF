import StaticEvaluationReportObj from "../../../../../../../types/StaticEvaluationReportObj";
import staticEvaluation from "../../../../../tests/data/testsData/staticEvaluation";

function staticEvaluationAvg(usersData: any) {
   const resultArr: StaticEvaluationReportObj[] = [];

   staticEvaluation.forEach(section => {
      section.questions.forEach(input => {
         resultArr.push({
            name: input.title,
            five: 0,
            three: 0,
            one: 0,
         })
      });
   })

   usersData.forEach((userData: any) => {
      Object.entries(userData['ناهنجاری ها']).forEach(([key, value]) => {
         const foundedKey = resultArr.findIndex(obj => obj.name === key);
         if (value === 5) {
            resultArr[foundedKey].five++;
         } else if (value === 3) {
            resultArr[foundedKey].three++;
         } else if (value === 1) {
            resultArr[foundedKey].one++;
         }
      })
   })

   return resultArr.map(obj => (
      {
         ...obj,
         five: Number((obj.five / usersData.length * 100).toFixed(2)),
         three: Number((obj.three / usersData.length * 100).toFixed(2)),
         one: Number((obj.one / usersData.length * 100).toFixed(2)),
      }
   ))
}

export default staticEvaluationAvg;