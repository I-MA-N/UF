import questionariesData from "../../../../../common/analysis/data/questionariesData"

function questionariesAvg(usersData: any) {
   const resultObj = {
      'activityReadiness': 0,
      'generalHealth': 0,
      'activityRate': 0,
      'karcardJesmi': 0,
      'ekhtelalNaghshJesmi': 0,
      'ekhtelalNaghshHayajani': 0,
      'energiKhastegi': 0,
      'dardP': 0,
      'salamatOmomi': 0,
      'salamatJesmi': 0,
      'salamatRavani': 0,
      'happinness': 0,
      'jobSatisfaction': 0,
      'jobPerformance': 0,
   }

   usersData.forEach((userData: any) => {
      const analysedData = questionariesData(userData);
      Object.entries(analysedData).forEach(([key, value]) => {
         if (typeof value === "number") {
            resultObj[key as keyof typeof resultObj] += value;
         }
      })
   })

   Object.keys(resultObj).forEach(key => {
      const value: string | number = resultObj[key as keyof typeof resultObj];
      if (typeof value === "number") {
         resultObj[key as keyof typeof resultObj] /= usersData.length
      }
   })

   return resultObj
}

export type QuestionariesAvgType = ReturnType<typeof questionariesAvg>;
export default questionariesAvg;