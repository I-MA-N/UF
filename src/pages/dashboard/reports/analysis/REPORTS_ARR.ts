import calorieAmount from "./reportsFn/colarieAmount/calorieAmount";
import dynamicEvaluation from "./reportsFn/dynamicEvaluation/dynamicEvaluation";
import FMS from "./reportsFn/FMS/FMS";
import physicalIndex from "./reportsFn/physicalIndex/physicalIndex";
import questionaries from "./reportsFn/questionaries/questionaries";
import staticEvaluation from "./reportsFn/staticEvaluation/staticEvaluation";

const REPORTS_ARR = [
   {
      id: 1,
      name: 'شاخص های بدنی',
      testNamesNeeded: ['وضعیت بدنی'],
      generateReport: physicalIndex,
   },
   {
      id: 2,
      name: 'میزان کالری',
      testNamesNeeded: ['وضعیت بدنی', 'مقدار تحرک'],
      generateReport: calorieAmount,
   },
   {
      id: 3,
      name: 'تفسیر پرسشنامه ها',
      testNamesNeeded: ['سلامت عمومی', 'آمادگی فعالیت', 'آمادگی بدنی', 'کیفیت زندگی', 'شادکامی', 'رضایت شغلی', 'عملکرد شغلی'],
      generateReport: questionaries,
   },
   {
      id: 4,
      name: 'ناهنجاری اسکلتی - عضلانی',
      testNamesNeeded: ['ناهنجاری ها'],
      generateReport: staticEvaluation,
   },
   {
      id: 5,
      name: 'ارزیابی عملکردی',
      testNamesNeeded: ['ارزیابی پویا'],
      generateReport: dynamicEvaluation,
   },
   {
      id: 6,
      name: 'عملکردی وضعیت بدنی',
      testNamesNeeded: ['عملکردی وضعیت بدنی'],
      generateReport: FMS,
   },
]

export type REPORTS_ARR_Type = typeof REPORTS_ARR;
export default REPORTS_ARR;