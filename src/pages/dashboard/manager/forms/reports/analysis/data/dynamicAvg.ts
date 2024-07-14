import DynamicReportObj from "../../../../../../../types/DynamicReportObj";
import dynamic from "../../../../../common/tests/testsData/dynamic";

function dynamicAvg(usersData: any) {
   const resultArr: DynamicReportObj[] = [];

   dynamic.forEach(section => {
      resultArr.push({
         title: section.sectionTitle,
         data: section.sectionQuestions.map(question => ({
            name: question.text,
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