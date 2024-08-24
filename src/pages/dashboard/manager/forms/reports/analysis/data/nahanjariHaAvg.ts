import NahanjariReportObj from "../../../../../../../types/NahanjariReportObj";
import nahanjariHa from "../../../../../tests/data/testsData/nahanjariHa";

function nahanjariHaAvg(usersData: any) {
   const resultArr: NahanjariReportObj[] = [];

   nahanjariHa.forEach(nahanjariSection => {
      nahanjariSection.sectionQuestions.forEach(nahanjari => {
         resultArr.push({
            name: nahanjari.title,
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

export default nahanjariHaAvg;