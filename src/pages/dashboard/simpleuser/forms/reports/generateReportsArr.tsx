import calorieAmountData from "../../../common/reportsData/calorieAmountData";
import calorieAmountJsx from "../../../common/reportsJsx/calorieAmountJsx";
import questionariesData from "../../../common/reportsData/questionariesData";
import questionariesJsx from "../../../common/reportsJsx/questionariesJsx";
import physicalIndexData from "../../../common/reportsData/physicalIndexData";
import physicalIndexJsx from "../../../common/reportsJsx/physicalIndexJsx";
import skeletalMuscleAbnormalityJsx from "../../../common/reportsJsx/skeletalMuscleAbnormalityJsx";
import walkingData from "../../../common/reportsData/dynamic/walkingData";
import squatOneData from "../../../common/reportsData/dynamic/squatOneData";
import squatData from "../../../common/reportsData/dynamic/squatData";
import handsRotationData from "../../../common/reportsData/dynamic/handsRotationData";
import swimData from "../../../common/reportsData/dynamic/swimData";
import handsAwayData from "../../../common/reportsData/dynamic/handsAwayData";
import handsBendingData from "../../../common/reportsData/dynamic/handsBendingData";
import walkingJsx from "../../../common/reportsJsx/dynamic/walkingJsx";
import squatOneJsx from "../../../common/reportsJsx/dynamic/squatOneJsx";
import squatJsx from "../../../common/reportsJsx/dynamic/squatJsx";
import handsRotationJsx from "../../../common/reportsJsx/dynamic/handsRotationJsx";
import handsBendingJsx from "../../../common/reportsJsx/dynamic/handsBendingJsx";
import handsAwayJsx from "../../../common/reportsJsx/dynamic/handsAwayJsx";
import swimJsx from "../../../common/reportsJsx/dynamic/swimJsx";
import FMSJsx from "../../../common/reportsJsx/FMSJsx";

function generateReportsArr(formData: any, gender: string) {
   if (gender) {
      const reportsArr = [];

      if (formData['وضعیت بدنی'] && !Object.values(formData['وضعیت بدنی']).filter(value => value === "").length) {
         const reportData = physicalIndexData({ 
            data: formData['وضعیت بدنی'], 
            gender: gender === 'male' ? 2 : 1 
         });
         const reportJsx = physicalIndexJsx(reportData, formData['وضعیت بدنی'])
         reportsArr.push({
            reportName: 'شاخص های بدنی',
            reportJsx,
         });
      }

      if (formData['وضعیت بدنی'] && formData['مقدار تحرک']) {
         const reportData = calorieAmountData({ 
            data: {
               'قد': formData['وضعیت بدنی']['قد'],
               'وزن': formData['وضعیت بدنی']['وزن'],
               'سن': formData['وضعیت بدنی']['سن'],
               'میزان فعالیت': formData['مقدار تحرک']['مقدار تحرک'],
            },
            gender: gender === 'male' ? 2 : 1
         });
         const reportJsx = calorieAmountJsx(reportData)
         reportsArr.push({
            reportName: 'میزان کالری روزانه',
            reportJsx,
         });
      }

      if (formData['سلامت عمومی'] && formData['آمادگی فعالیت'] && formData['آمادگی بدنی'] && formData['کیفیت زندگی'] && formData['شادکامی'] && formData['رضایت شغلی'] && formData['عملکرد شغلی']) {
         const reportData = questionariesData({ data: formData });
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
         const reportJsx = skeletalMuscleAbnormalityJsx(reportData)
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
   
   return false;
}

export default generateReportsArr