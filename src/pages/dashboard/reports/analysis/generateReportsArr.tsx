import physicalIndexJsx from "./jsx/physicalIndexJsx";
import nahanjariHaJsx from "./jsx/nahanjariHaJsx";
import walkingData from "./data/dynamic/walkingData";
import squatOneData from "./data/dynamic/squatOneData";
import squatData from "./data/dynamic/squatData";
import handsRotationData from "./data/dynamic/handsRotationData";
import swimData from "./data/dynamic/swimData";
import handsAwayData from "./data/dynamic/handsAwayData";
import handsBendingData from "./data/dynamic/handsBendingData";
import walkingJsx from "./jsx/dynamic/walkingJsx";
import squatOneJsx from "./jsx/dynamic/squatOneJsx";
import squatJsx from "./jsx/dynamic/squatJsx";
import handsRotationJsx from "./jsx/dynamic/handsRotationJsx";
import handsBendingJsx from "./jsx/dynamic/handsBendingJsx";
import handsAwayJsx from "./jsx/dynamic/handsAwayJsx";
import swimJsx from "./jsx/dynamic/swimJsx";
import FMSJsx from "./jsx/FMSJsx";
import physicalIndexData from "../../common/analysis/data/physicalIndexData";
import bodyCompositionData from "../../common/analysis/data/bodyCompositionData";
import bodyCompositionJsx from "../../common/analysis/jsx/bodyCompositionJsx";
import calorieAmountData from "../../common/analysis/data/calorieAmountData";
import calorieAmountJsx from "../../common/analysis/jsx/calorieAmountJsx";
import questionariesData from "../../common/analysis/data/questionariesData";
import questionariesJsx from "./jsx/questionariesJsx";

function generateReportsArr(formData: any, gender: string) {
   const reportsArr = [];

   if (formData['وضعیت بدنی'] && !Object.values(formData['وضعیت بدنی']).filter(value => value === "").length) {
      const reportData = physicalIndexData(formData['وضعیت بدنی'], gender === 'male' ? 2 : 1);
      const reportJsx = physicalIndexJsx(reportData, formData['وضعیت بدنی'])

      const reportData2 = bodyCompositionData(reportData.fatPercentage, reportData.bestWeight, formData['وضعیت بدنی'], gender === 'male' ? 2 : 1)
      const reportJsx2 = bodyCompositionJsx(reportData2);

      const finalJsx = (
         <div className="space-y-8">
            {reportJsx}
            {reportJsx2}
         </div>
      )
      reportsArr.push({
         reportName: 'شاخص های بدنی',
         reportJsx: finalJsx,
      });
   }

   if (formData['وضعیت بدنی'] && formData['مقدار تحرک']) {
      let metabolismBasic = 9.247 * formData['وضعیت بدنی']['وزن'] + 3.098 * formData['وضعیت بدنی']['قد'] - 4.33 * formData['وضعیت بدنی']['سن'] + 447.593;
      if (gender === 'male') {
         metabolismBasic = 13.397 * formData['وضعیت بدنی']['وزن'] + 4.799 * formData['وضعیت بدنی']['قد'] - 5.677 * formData['وضعیت بدنی']['سن'] + 88.362;
      }
      const reportData = calorieAmountData({
         data: {
            'قد': formData['وضعیت بدنی']['قد'],
            'وزن': formData['وضعیت بدنی']['وزن'],
            'سن': formData['وضعیت بدنی']['سن'],
            'میزان فعالیت': formData['مقدار تحرک']['مقدار تحرک'],
            'متابولیسم پایه': metabolismBasic
         },
      });
      const reportJsx = calorieAmountJsx(reportData)
      reportsArr.push({
         reportName: 'میزان کالری روزانه',
         reportJsx,
      });
   }

   if (formData['سلامت عمومی'] && formData['آمادگی فعالیت'] && formData['آمادگی بدنی'] && formData['کیفیت زندگی'] && formData['شادکامی'] && formData['رضایت شغلی'] && formData['عملکرد شغلی']) {
      const reportData = questionariesData(formData);
      const reportJsx = questionariesJsx(reportData)
      reportsArr.push({
         reportName: 'تفسیر پرسشنامه ها',
         reportJsx,
      });
   }

   if (formData['ناهنجاری ها']) {
      const reportData = Object.entries(formData['ناهنجاری ها']).map((item: any) => {
         return {
            title: item[0],
            status: item[1] === 5 ? 'طبیعی' : item[1] === 3 ? 'خفیف' : 'شدید',
         }
      });
      const reportJsx = nahanjariHaJsx(reportData)
      reportsArr.push({
         reportName: 'ناهنجاری اسکلتی - عضلانی',
         reportJsx,
      });
   }

   if (formData['ارزیابی پویا']) {
      const reportData1 = walkingData(formData['ارزیابی پویا']);
      const reportJsx1 = walkingJsx(reportData1)

      const reportData2 = swimData(formData['ارزیابی پویا']);
      const reportJsx2 = swimJsx(reportData2);

      const reportData3 = squatOneData(formData['ارزیابی پویا']);
      const reportJsx3 = squatOneJsx(reportData3);

      const reportData4 = squatData(formData['ارزیابی پویا']);
      const reportJsx4 = squatJsx(reportData4);

      const reportData5 = handsRotationData(formData['ارزیابی پویا']);
      const reportJsx5 = handsRotationJsx(reportData5);

      const reportData6 = handsBendingData(formData['ارزیابی پویا']);
      const reportJsx6 = handsBendingJsx(reportData6);

      const reportData7 = handsAwayData(formData['ارزیابی پویا']);
      const reportJsx7 = handsAwayJsx(reportData7);

      const finalJsx = (
         <div className="flex flex-col gap-8">
            {reportJsx1}
            {reportJsx2}
            {reportJsx3}
            {reportJsx4}
            {reportJsx5}
            {reportJsx6}
            {reportJsx7}
         </div>
      )
      reportsArr.push({
         reportName: 'ارزیابی عملکردی',
         reportJsx: finalJsx,
      });
   }

   if (formData['عملکردی وضعیت بدنی']) {
      const reportJsx = FMSJsx(formData['عملکردی وضعیت بدنی'])
      reportsArr.push({
         reportName: 'عملکردی وضعیت بدنی',
         reportJsx,
      });
   }

   return reportsArr;
}

export default generateReportsArr