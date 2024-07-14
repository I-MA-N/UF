import GenderStrings from "../../../../../../types/GenderStrings";
import bodyCompositionData, { dataBodyCompositionType } from "../../../../common/analysis/data/bodyCompositionData";
import physicalIndexData from "../../../../common/analysis/data/physicalIndexData";
import bodyCompositionJsx from "../../../../common/analysis/jsx/bodyCompositionJsx";
import calorieAmountJsx from "../../../../common/analysis/jsx/calorieAmountJsx";
import bodyCompositionWhole from "./data/bodyCompositionWhole";
import calorieAmountAvg from "./data/calorieAmountAvg";
import dynamicAvg from "./data/dynamicAvg";
import FMSAvg from "./data/FMSAvg";
import nahanjariHaAvg from "./data/nahanjariHaAvg";
import physicalIndexChartData from "./data/physicalIndexChartData";
import physicalIndexWhole from "./data/physicalIndexWhole";
import questionariesAvg from "./data/questionariesAvg";
import statusBodyAvg from "./data/statusBodyAvg";
import dynamicAvgJsx from "./jsx/dynamicAvgJsx";
import FMSAvgJsx from "./jsx/FMSAvgJsx";
import nahanjariHaAvgJsx from "./jsx/nahanjariHaAvgJsx";
import physicalIndexAvgJsx from "./jsx/physicalIndexAvgJsx";
import questionariesAvgJsx from "./jsx/questionariesAvgJsx";

type ReportType = {
   reportName: string,
   reportJsx: JSX.Element,
}

function generateReportsArr(usersData: any, gender: GenderStrings) {
   const reportsArr: ReportType[] = [];
   const statusBodyObj = statusBodyAvg(usersData);

   {
      let reportData: any;
      let reportData2: dataBodyCompositionType;
      // For 'whole' we get average of values so we need seperate function
      // But for 'male' or 'female' we get values based on gender
      if (gender === "whole") {
         reportData = physicalIndexWhole(statusBodyObj, usersData);
         reportData2 = bodyCompositionWhole(reportData.fatPercentage, reportData.bestWeight, usersData);
      } else {
         reportData = physicalIndexData(statusBodyObj, gender === 'male' ? 2 : 1);
         reportData2 = bodyCompositionData(reportData.fatPercentage, reportData.bestWeight, statusBodyObj, gender === 'male' ? 2 : 1);
      }

      // For 'pie' charts, we count number of specific result values
      // So it doesn't depend on gender
      const chartData = physicalIndexChartData(usersData);

      const reportJsx = physicalIndexAvgJsx(reportData, statusBodyObj, chartData);
      const reportJsx2 = bodyCompositionJsx(reportData2);

      const finalJsx = (
         <div className="space-y-12">
            {reportJsx}
            {reportJsx2}
         </div>
      )

      reportsArr.push({
         reportName: 'شاخص های بدنی',
         reportJsx: finalJsx,
      });
   }

   {
      const reportData = calorieAmountAvg(usersData, statusBodyObj, gender);
      const reportJsx = calorieAmountJsx(reportData)
      reportsArr.push({
         reportName: 'میزان کالری روزانه',
         reportJsx,
      });
   }

   {
      const reportData = questionariesAvg(usersData);
      const reportJsx = questionariesAvgJsx(reportData)
      reportsArr.push({
         reportName: 'تفسیر پرسشنامه ها',
         reportJsx,
      });
   }

   {
      const reportData = nahanjariHaAvg(usersData);
      const reportJsx = nahanjariHaAvgJsx(reportData)
      reportsArr.push({
         reportName: 'ناهنجاری اسکلتی - عضلانی',
         reportJsx,
      });
   }

   {
      const reportData = dynamicAvg(usersData);
      const reportJsx = dynamicAvgJsx(reportData)
      reportsArr.push({
         reportName: 'ارزیابی عملکردی',
         reportJsx,
      });
   }

   {
      const reportData = FMSAvg(usersData);
      const reportJsx = FMSAvgJsx(reportData);
      reportsArr.push({
         reportName: 'عملکردی وضعیت بدنی',
         reportJsx,
      });
   }

   return reportsArr;
}

export default generateReportsArr;