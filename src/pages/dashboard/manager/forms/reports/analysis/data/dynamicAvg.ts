import DynamicEvaluationReportObj from "../../../../../../../types/DynamicEvaluationReportObj";
import dynamicEvaluation from "../../../../../tests/data/testsData/dynamicEvaluation";

function dynamicAvg(usersData: any) {
   const resultArr: DynamicEvaluationReportObj[] = [];

   dynamicEvaluation.forEach(section => {
      resultArr.push({
         title: section.name,
         data: section.questions.map(question => ({
            name: question.title,
            src: question.src,
            value: 0
         }))
      })
   })

   usersData.forEach((userData: any) => {
      const userDynamicData = userData['ارزیابی پویا'];
      resultArr.forEach(section => {
         section.data.forEach(obj => {
            const foundedValue = userDynamicData[obj.name] as number;
            obj.value += foundedValue;
         })
      })
   })

   resultArr.forEach(section => section.data.forEach(
      obj => obj.value = Number((obj.value / usersData.length).toFixed(2)) * 100
   ))

   return resultArr;
}

export default dynamicAvg;