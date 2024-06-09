const dataQuestionaries = {
   'activityReadiness': 0,
   'activityReadinessResult': '',
   'generalHealth': 0,
   'generalHealthResult': '',
   'activityRate': 0,
   'activityRateResult': '',
   'karcardJesmi': 0,
   'ekhtelalNaghshJesmi': 0,
   'ekhtelalNaghshHayajani': 0,
   'energiKhastegi': 0,
   'dardP': 0,
   'salamatOmomi': 0,
   'salamatJesmi': 0,
   'salamatRavani': 0,
   'salamatJesmiResult': '',
   'salamatRavaniResult': '',
   'happinness': 0,
   'happinnessResult': '',
   'jobSatisfaction': 0,
   'jobSatisfactionResult': '',
   'jobPerformance': 0,
   'jobPerformanceResult': '',
};

function questionariesData({ data }: { data: any }) {
   dataQuestionaries.activityReadiness = Object.values(data['آمادگی فعالیت']).reduce((total: number, item: any) => {
      item ? total++ : total;
      return total;
   }, 0);
   dataQuestionaries.activityReadinessResult = 'شما آمادگی لازم برای فعالیت بدنی را دارید.';
   if (dataQuestionaries.activityReadiness > 0) {
      dataQuestionaries.activityReadinessResult = 'باید قبل از اینکه فعالیت بدنی خود را شروع کنید با پزشک مشورت کنید.';
   }

   dataQuestionaries.generalHealth = Object.values(data['سلامت عمومی']).reduce((total: number, item: any) => {
      return total + item;
   }, 0);
   dataQuestionaries.generalHealthResult = 'بهتر از متوسط';
   if (dataQuestionaries.generalHealth > 23) {
      dataQuestionaries.generalHealthResult = 'بدتر از متوسط';
   }

   dataQuestionaries.activityRate = Object.values(data['آمادگی بدنی']).reduce((total: number, item: any) => {
      return total + item;
   }, 0);
   dataQuestionaries.activityRateResult = 'بهتر از متوسط';
   if (dataQuestionaries.activityRate < 24) {
      dataQuestionaries.activityRateResult = 'بدتر از متوسط';
   }

   // Names written in Finglish
   const values: number[] = Object.values(data['کیفیت زندگی']);
   values.unshift(0);
   dataQuestionaries.karcardJesmi = values.slice(3, 13).reduce((total: number, item: any) => total + item, 0) / 10;
   dataQuestionaries.ekhtelalNaghshJesmi = values.slice(13, 17).reduce((total: number, item: any) => total + item, 0) / 4;
   dataQuestionaries.ekhtelalNaghshHayajani = values.slice(17, 20).reduce((total: number, item: any) => total + item, 0) / 3;
   dataQuestionaries.energiKhastegi = (values[23] + values[27] + values[29] + values[31]) / 4;
   dataQuestionaries.dardP = (values[21] + values[22]) / 2;
   dataQuestionaries.salamatOmomi = (values[1] + values[33] + values[34] + values[35] + values[36]) / 5;
   dataQuestionaries.salamatJesmi = (dataQuestionaries.karcardJesmi + dataQuestionaries.ekhtelalNaghshJesmi + dataQuestionaries.dardP + dataQuestionaries.salamatOmomi) / 4;
   dataQuestionaries.salamatRavani = (dataQuestionaries.karcardJesmi + dataQuestionaries.ekhtelalNaghshJesmi + dataQuestionaries.ekhtelalNaghshHayajani + dataQuestionaries.energiKhastegi) / 4;
   dataQuestionaries.salamatJesmiResult = 'بهتر از متوسط';
   if (dataQuestionaries.salamatJesmi < 50) {
      dataQuestionaries.salamatJesmiResult = 'بدتر از متوسط';
   }
   dataQuestionaries.salamatRavaniResult = 'بهتر از متوسط';
   if (dataQuestionaries.salamatRavani < 50) {
      dataQuestionaries.salamatRavaniResult = 'بدتر از متوسط';
   }

   dataQuestionaries.happinness = Object.values(data['شادکامی']).reduce((total: number, item: any) => {
      return total + item;
   }, 0);
   dataQuestionaries.happinnessResult = 'بهتر از متوسط';
   if (dataQuestionaries.happinness < 43.5) {
      dataQuestionaries.happinnessResult = 'بدتر از متوسط';
   }

   dataQuestionaries.jobSatisfaction = Object.values(data['رضایت شغلی']).reduce((total: number, item: any) => {
      return total + item;
   }, 0);
   dataQuestionaries.jobSatisfactionResult = 'بهتر از متوسط';
   if (dataQuestionaries.jobSatisfaction < 38) {
      dataQuestionaries.jobSatisfactionResult = 'بدتر از متوسط';
   }

   dataQuestionaries.jobPerformance = Object.values(data['عملکرد شغلی']).reduce((total: number, item: any) => {
      return total + item;
   }, 0);
   dataQuestionaries.jobPerformanceResult = 'بهتر از متوسط';
   if (dataQuestionaries.jobPerformance < 22.5) {
      dataQuestionaries.jobPerformanceResult = 'بدتر از متوسط';
   }

   return dataQuestionaries;
}

export type dataQuestionariesType = typeof dataQuestionaries;

export default questionariesData;