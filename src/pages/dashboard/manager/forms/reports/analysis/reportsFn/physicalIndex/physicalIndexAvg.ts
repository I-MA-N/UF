import OrgMemberData from "../../../../../../../../types/OrgMemberData";
import physicalIndexData from "../../../../../../reports/analysis/reportsFn/physicalIndex/physicalIndexData";

function physicalIndexAvg(usersData: OrgMemberData[]) {
   const resultObj = [
      {
         id: 1,
         title: 'BMI:',
         key: 'BMIResult',
         data: [
            { id: 1, value: 0, label: 'لاغر شدید', color: '#dc2626' },
            { id: 2, value: 0, label: 'لاغر خفیف', color: '#ef4444' },
            { id: 3, value: 0, label: 'لاغر متوسط', color: '#f87171' },
            { id: 4, value: 0, label: 'طبیعی', color: '#4CB648' },
            { id: 5, value: 0, label: 'اضافه وزن', color: '#facc15' },
            { id: 6, value: 0, label: 'چاق', color: '#eab308' },
            { id: 7, value: 0, label: 'خیلی چاق', color: '#ca8a04' },
         ],
         count: 0
      },
      {
         id: 2,
         title: 'وزن ایده آل:',
         key: 'weightMinusBestWeightResult',
         data: [
            { id: 1, value: 0, label: 'کمبود وزن', color: '#dc2626' },
            { id: 2, value: 0, label: 'طبیعی', color: '#4CB648' },
            { id: 3, value: 0, label: 'اضافه وزن', color: '#ca8a04' },
         ],
         count: 0
      },
      {
         id: 3,
         title: 'WHR:',
         key: 'WHRResult',
         data: [
            { id: 1, value: 0, label: 'کم', color: '#dc2626' },
            { id: 2, value: 0, label: 'متوسط', color: '#4CB648' },
            { id: 3, value: 0, label: 'زیاد', color: '#ca8a04' },
         ],
         count: 0
      },
      {
         id: 4,
         title: 'درصد چربی:',
         key: 'fatPercentageResult',
         data: [
            { id: 1, value: 0, label: 'بسیار پایین', color: '#ef4444' },
            { id: 2, value: 0, label: 'ضروری', color: '#f87171' },
            { id: 3, value: 0, label: 'ورزشکار', color: '#4CB648' },
            { id: 4, value: 0, label: 'تناسب اندام', color: '#6fc46c' },
            { id: 5, value: 0, label: 'میانگین', color: '#facc15' },
            { id: 6, value: 0, label: 'چاق', color: '#eab308' },
         ],
         count: 0
      },
   ]

   usersData.forEach(userData => {
      const statusBodyData = userData.formData?.["وضعیت بدنی"];
      const userGender = userData.userData.gender === 'male' ? 2 : 1;

      const physicalIndex = physicalIndexData(statusBodyData, userGender);

      resultObj.forEach(result => {
         const value = physicalIndex[result.key as keyof typeof physicalIndex];

         if (typeof value === "string") {
            const foundLable = result.data.findIndex(obj => obj.label === value);
            if (foundLable > -1) {
               result.count++;
               result.data[foundLable].value++;
            }
         }
      })
   })

   return resultObj;
}

export type physicalIndexAvgType = ReturnType<typeof physicalIndexAvg>
export default physicalIndexAvg;