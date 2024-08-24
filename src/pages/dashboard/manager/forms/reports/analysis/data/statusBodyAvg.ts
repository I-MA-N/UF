import bodyStatus from "../../../../../tests/data/testsData/bodyStatus";

type ResultObj = {
   [key: string]: number
}

function statusBodyAvg(usersData: any) {
   const keys = Object.keys(bodyStatus);
   const resultObj: ResultObj = {};

   keys.forEach(key => {
      // Rewrite type undefined to nubmer
      resultObj[key as keyof typeof resultObj] = 0;

      usersData.forEach((userData: any) => {
         resultObj[key as keyof typeof resultObj] += Number(userData['وضعیت بدنی'][key]);
      })
   })

   Object.entries(resultObj).forEach(pairs => {
      const key = pairs[0];
      const value = pairs[1];
      resultObj[key as keyof typeof resultObj] = value / usersData.length;
   })

   return resultObj
}

export default statusBodyAvg;