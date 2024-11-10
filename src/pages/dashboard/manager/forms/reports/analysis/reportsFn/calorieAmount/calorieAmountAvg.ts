import OrgMemberData from "../../../../../../../../types/OrgMemberData";
import calorieAmountData from "../../../../../../reports/analysis/reportsFn/colarieAmount/calorieAmountData";

function calorieAmountAvg(usersData: OrgMemberData[]) {
   const activityRateCount = {
      id: 1,
      title: 'مقدار تحرک:',
      data: [
         { id: 1, value: 0, label: '1 - بدون تحرک', color: '#dc2626' },
         { id: 2, value: 0, label: '2 - کم تحرک', color: '#ef4444' },
         { id: 3, value: 0, label: '3 - نسبتا فعال', color: '#f87171' },
         { id: 4, value: 0, label: '4 - بسیار فعال', color: '#4CB648' },
         { id: 5, value: 0, label: '5 - بیش از حد فعال', color: '#facc15' },
      ],
      count: 0
   }

   const metaBolismTargetTextCount = {
      id: 2,
      title: 'میزان انرژی دریافتی پیشنهادی:',
      data: [
         { id: 1, value: 0, label: 'نیازی به افزایش یا کاهش کالری ندارید', color: '#4CB648' },
         { id: 2, value: 0, label: 'افزایش 1000 کیلوکالری', color: '#dc2626' },
         { id: 3, value: 0, label: 'کاهش 500 کیلوکالری', color: '#ca8a04' },
      ],
      count: 0
   }

   usersData.forEach(userData => {
      const statusBodyData = userData.formData["وضعیت بدنی"];
      const activityRateData = userData.formData["مقدار تحرک"];
      const userGender = userData.userData.gender === "male" ? 2 : 1;
      const calorieAmount = calorieAmountData(statusBodyData, activityRateData, userGender);

      const activityRate = Number(activityRateData?.["مقدار تحرک"]?.value);
      activityRateCount.data.forEach(part => {
         if (part.id === activityRate) {
            part.value++;
            activityRateCount.count++;
            return;
         }
      })

      const metaBolismTargetText = calorieAmount.metaBolismTargetText;
      if (metaBolismTargetText) {
         metaBolismTargetTextCount.data.forEach(part => {
            if (part.label === metaBolismTargetText) {
               part.value++;
               metaBolismTargetTextCount.count++;
               return;
            }
         })
      }
   })

   return {
      activityRateCount,
      metaBolismTargetTextCount
   };
}

export type calorieAmountAvgType = ReturnType<typeof calorieAmountAvg>;
export default calorieAmountAvg;