import { TestObj } from "../types/TestsTypes";

function replaceTestNames(testsArr: TestObj[]) {
   const bodyStatusIndex = testsArr.findIndex(test => test.testName === "وضعیت بدنی");
   const activityRateIndex = testsArr.findIndex(test => test.testName === "مقدار تحرک");
   const firstTest = testsArr?.[0];
   if (firstTest) {
      if (bodyStatusIndex >= 0) {
         testsArr[0] = testsArr[bodyStatusIndex];
         testsArr[bodyStatusIndex] = firstTest;
         const secondTest = testsArr?.[1];
         if (secondTest && activityRateIndex >= 0) {
            testsArr[1] = testsArr[activityRateIndex];
            testsArr[activityRateIndex] = secondTest;
         }
      } else if (activityRateIndex >= 0) {
         testsArr[0] = testsArr[activityRateIndex];
         testsArr[activityRateIndex] = firstTest;
      }
   }
}

export default replaceTestNames;