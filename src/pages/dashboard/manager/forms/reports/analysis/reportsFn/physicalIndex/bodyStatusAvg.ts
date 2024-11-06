import OrgMemberData from "../../../../../../../../types/OrgMemberData";
import bodyStatusData from "../../../../../../tests/data/testsData/bodyStatusData";

function bodyStatusAvg(usersData: OrgMemberData[]) {
   const resultArr = Object.keys(bodyStatusData).map(key => {
      let sum = 0;
      let count = 0;

      usersData.forEach(userData => {
         const formData = userData.formData["وضعیت بدنی"];
         const value = formData?.[key as keyof typeof formData]?.value;

         if (formData && value) {
            sum += Number(value);
            count++;
         }
      })

      return {
         title: key,
         value: count ? (sum / count).toFixed(2) : '-',
         count: count
      };
   })

   return resultArr;
}

export type bodyStatusAvgType = ReturnType<typeof bodyStatusAvg>;
export default bodyStatusAvg;