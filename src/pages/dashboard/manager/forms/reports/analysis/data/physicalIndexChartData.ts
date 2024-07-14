import physicalIndexData from "../../../../../common/analysis/data/physicalIndexData";

function physicalIndexChartData(usersData: any) {
   const dataPhysicalIndexChart = [
      {
         title: 'نتیجه BMI:',
         key: 'BMIResult',
         data: [
            { id: 1, value: 0, label: 'لاغر شدید', color: '#dc2626' },
            { id: 2, value: 0, label: 'لاغر خفیف', color: '#ef4444' },
            { id: 3, value: 0, label: 'لاغر متوسط', color: '#f87171' },
            { id: 4, value: 0, label: 'طبیعی', color: '#4CB648' },
            { id: 5, value: 0, label: 'اضافه وزن', color: '#facc15' },
            { id: 6, value: 0, label: 'چاق', color: '#eab308' },
            { id: 7, value: 0, label: 'خیلی چاق', color: '#ca8a04' },
         ]
      },
      {
         title: 'نتیجه وزن ایده آل:',
         key: 'weightMinusBestWeightResult',
         data: [
            { id: 1, value: 0, label: 'کمبود وزن', color: '#dc2626' },
            { id: 2, value: 0, label: 'طبیعی', color: '#4CB648' },
            { id: 3, value: 0, label: 'اضافه وزن', color: '#ca8a04' },
         ]
      },
      {
         title: 'نتیجه WHR:',
         key: 'WHRResult',
         data: [
            { id: 1, value: 0, label: 'کم', color: '#dc2626' },
            { id: 2, value: 0, label: 'متوسط', color: '#4CB648' },
            { id: 3, value: 0, label: 'زیاد', color: '#ca8a04' },
         ]
      },
      {
         title: 'نتیجه درصد چربی:',
         key: 'fatPercentageResult',
         data: [
            { id: 1, value: 0, label: 'بسیار پایین', color: '#ef4444' },
            { id: 2, value: 0, label: 'ضروری', color: '#f87171' },
            { id: 3, value: 0, label: 'ورزشکار', color: '#4CB648' },
            { id: 4, value: 0, label: 'تناسب اندام', color: '#6fc46c' },
            { id: 5, value: 0, label: 'میانگین', color: '#facc15' },
            { id: 6, value: 0, label: 'چاق', color: '#eab308' },
         ]
      },
   ]

   usersData.forEach((userData: any) => {
      const analysedData = physicalIndexData(userData['وضعیت بدنی'], userData['gender'] === 'male' ? 2 : 1);

      dataPhysicalIndexChart.forEach(obj => {
         const analysedValue = analysedData[obj.key as keyof typeof analysedData];
         const foundedIndex = obj.data.findIndex(chartObj => chartObj.label === analysedValue);
         obj.data[foundedIndex].value++;
      })
   })

   return dataPhysicalIndexChart;
}

export type dataPhysicalIndexChartType = ReturnType<typeof physicalIndexChartData>;
export default physicalIndexChartData;