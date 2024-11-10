import QuestionariesChart from "./components/QuestionaryChart";
import { questionariesAvgType } from "./questionariesAvg";

function questionariesAvgJsx(reportData: questionariesAvgType) {
   const generateStringValue = (value: number, isBad: boolean) => {
      if (Number.isNaN(value)) return '-';

      if (isBad) return 'بدتر از متوسط';
      return 'بهتر از متوسط';
   }

   const generateNumberValue = (value: number) => {
      if (Number.isNaN(value)) return 0;

      return value;
   }

   return (
      <div className="flex flex-wrap gap-y-4 gap-x-2 lg:gap-x-4 items-center">
         <QuestionariesChart
            title="سلامت عمومی"
            valueResult={generateStringValue(reportData.generalHealth, reportData.generalHealth > 23)}
            value={generateNumberValue(reportData.generalHealth)}
            valueMax={84}
         />
         <QuestionariesChart
            title="آمادگی بدنی ادراک شده"
            valueResult={generateStringValue(reportData.physicalReadiness, reportData.physicalReadiness < 24)}
            value={generateNumberValue(reportData.physicalReadiness)}
            valueMax={48}
         />
         <QuestionariesChart
            title="کیفیت زندگی (سلامت جسمی)"
            valueResult={generateStringValue(reportData.salamatJesmi, reportData.salamatJesmi < 50)}
            value={generateNumberValue(reportData.salamatJesmi)}
            valueMax={100}
         />
         <QuestionariesChart
            title="کیفیت زندگی (سلامت روانی)"
            valueResult={generateStringValue(reportData.salamatRavani, reportData.salamatRavani < 50)}
            value={generateNumberValue(reportData.salamatRavani)}
            valueMax={100}
         />
         <QuestionariesChart
            title="شادکامی"
            valueResult={generateStringValue(reportData.happinness, reportData.happinness < 43.5)}
            value={generateNumberValue(reportData.happinness)}
            valueMax={87}
         />
         <QuestionariesChart
            title="رضایت شغلی"
            valueResult={generateStringValue(reportData.jobSatisfaction, reportData.jobSatisfaction < 38)}
            value={generateNumberValue(reportData.jobSatisfaction)}
            valueMax={76}
         />
         <QuestionariesChart
            title="عملکرد شغلی"
            valueResult={generateStringValue(reportData.jobPerformance, reportData.jobPerformance < 22.5)}
            value={generateNumberValue(reportData.jobPerformance)}
            valueMax={45}
         />
      </div>
   )
}

export default questionariesAvgJsx;