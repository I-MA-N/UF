import { QuestionariesAvgType } from "../data/questionariesAvg";
import QuestionariesChart from "./components/QuestionaryChart";

function questionariesAvgJsx(reportData: QuestionariesAvgType) {
   return (
      <div className="flex flex-wrap gap-y-4 gap-x-2 lg:gap-x-4 items-center">
         <QuestionariesChart
            title="سلامت عمومی"
            valueResult={reportData.generalHealth > 23 ? 'بدتر از متوسط' : 'بهتر از متوسط'}
            value={reportData.generalHealth}
            valueMax={84}
         />
         <QuestionariesChart
            title="آمادگی بدنی ادراک شده"
            valueResult={reportData.activityRate < 24 ? 'بدتر از متوسط' : 'بهتر از متوسط'}
            value={reportData.activityRate}
            valueMax={48}
         />
         <QuestionariesChart
            title="کیفیت زندگی (سلامت جسمی)"
            valueResult={reportData.salamatJesmi < 50 ? 'بدتر از متوسط' : 'بهتر از متوسط'}
            value={reportData.salamatJesmi}
            valueMax={100}
         />
         <QuestionariesChart
            title="کیفیت زندگی (سلامت روانی)"
            valueResult={reportData.salamatRavani < 50 ? 'بدتر از متوسط' : 'بهتر از متوسط'}
            value={reportData.salamatRavani}
            valueMax={100}
         />
         <QuestionariesChart
            title="شادکامی"
            valueResult={reportData.happinness < 43.5 ? 'بدتر از متوسط' : 'بهتر از متوسط'}
            value={reportData.happinness}
            valueMax={87}
         />
         <QuestionariesChart
            title="رضایت شغلی"
            valueResult={reportData.jobSatisfaction < 38 ? 'بدتر از متوسط' : 'بهتر از متوسط'}
            value={reportData.jobSatisfaction}
            valueMax={76}
         />
         <QuestionariesChart
            title="عملکرد شغلی"
            valueResult={reportData.jobPerformance < 22.5 ? 'بدتر از متوسط' : 'بهتر از متوسط'}
            value={reportData.jobPerformance}
            valueMax={45}
         />
      </div>
   )
}

export default questionariesAvgJsx;