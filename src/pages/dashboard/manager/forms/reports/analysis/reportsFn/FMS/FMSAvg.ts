import OrgMemberData from "../../../../../../../../types/OrgMemberData";
import FMSData from "../../../../../../tests/data/testsData/FMSData";

function FMSAvg(usersData: OrgMemberData[]) {
   const resultArr = FMSData.map(input => {
      let count = 0;
      let sum = 0;

      usersData.forEach(userData => {
         const formData = userData.formData["عملکردی وضعیت بدنی"];
         const value = formData?.[input.title]?.value;

         if (formData && value) {
            count++;
            sum += Number(value);
         }
      })

      const value = count ? sum / count : 0;

      return {
         id: input.id.toString(),
         name: input.title,
         shortName: 'شنای...',
         count,
         value,
         image: input.images[0],
      }
   })

   return resultArr;
}

export type FMSAvgType = ReturnType<typeof FMSAvg>;
export default FMSAvg;