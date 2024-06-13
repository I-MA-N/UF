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

function generateReportsArr(testsData: any, gender: string) {
   if (gender) {
      const reportsArr = [];

      if (testsData['وضعیت بدنی'] && !Object.values(testsData['وضعیت بدنی']).filter(value => value === "").length) {
         const reportData = physicalIndexData({ 
            data: testsData['وضعیت بدنی'], 
            gender: gender === 'male' ? 2 : 1 
         });
         const reportJsx = physicalIndexJsx(reportData, testsData['وضعیت بدنی'])
         reportsArr.push({
            reportName: 'شاخص های بدنی',
            reportJsx,
         });
      }

      if (testsData['وضعیت بدنی'] && testsData['مقدار تحرک']) {
         const reportData = calorieAmountData({ 
            data: {
               'قد': testsData['وضعیت بدنی']['قد'],
               'وزن': testsData['وضعیت بدنی']['وزن'],
               'سن': testsData['وضعیت بدنی']['سن'],
               'میزان فعالیت': testsData['مقدار تحرک']['مقدار تحرک'],
            },
            gender: gender === 'male' ? 2 : 1
         });
         const reportJsx = calorieAmountJsx(reportData)
         reportsArr.push({
            reportName: 'میزان کالری روزانه',
            reportJsx,
         });
      }

      if (testsData['سلامت عمومی'] && testsData['آمادگی فعالیت'] && testsData['آمادگی بدنی'] && testsData['کیفیت زندگی'] && testsData['شادکامی'] && testsData['رضایت شغلی'] && testsData['عملکرد شغلی']) {
         const reportData = questionariesData({ data: testsData });
         const reportJsx = questionariesJsx(reportData)
         reportsArr.push({
            reportName: 'تفسیر پرسشنامه ها',
            reportJsx,
         });
      }

      if (testsData['ناهنجاری ها']) {
         const reportData = Object.entries(testsData['ناهنجاری ها']).map((item: any) => {
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
      
      if (testsData['ارزیابی پویا']) {
         const reportData1 = walkingData(testsData['ارزیابی پویا']);
         const reportJsx1 = walkingJsx(reportData1)

         const reportData2 = swimData(testsData['ارزیابی پویا']);
         const reportJsx2 = swimJsx(reportData2);
         
         const reportData3 = squatOneData(testsData['ارزیابی پویا']);
         const reportJsx3 = squatOneJsx(reportData3);

         const reportData4 = squatData(testsData['ارزیابی پویا']);
         const reportJsx4 = squatJsx(reportData4);

         const reportData5 = handsRotationData(testsData['ارزیابی پویا']);
         const reportJsx5 = handsRotationJsx(reportData5);

         const reportData6 = handsBendingData(testsData['ارزیابی پویا']);
         const reportJsx6 = handsBendingJsx(reportData6);
         
         const reportData7 = handsAwayData(testsData['ارزیابی پویا']);
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

      if (testsData['عملکردی وضعیت بدنی']) {
         const reportJsx = FMSJsx(testsData['عملکردی وضعیت بدنی'])
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