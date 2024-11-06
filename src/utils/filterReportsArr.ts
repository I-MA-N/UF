import REPORTS_ARR_SIMPLEUSER from "../pages/dashboard/reports/analysis/REPORTS_ARR";
import REPORTS_ARR_MANAGER from "../pages/dashboard/manager/forms/reports/analysis/REPORTS_ARR";
import { FormObj } from "../types/TestsTypes";

function filterReportsArr(
   formNames: FormObj[],
   formname: string | undefined | null,
   isManagerReport?: boolean
) {
   const formObj = formNames?.find(form => form.formName === formname);
   if (formObj) {
      let reportsArr = REPORTS_ARR_SIMPLEUSER;
      if (isManagerReport) reportsArr = REPORTS_ARR_MANAGER;

      const filteredArr = reportsArr.filter(report => {
         const testNamesFound = report.testNamesNeeded.filter(testName => {
            const foundTest = formObj.formTests.findIndex(test => test.testName === testName);

            if (foundTest === -1) return false;

            return true;
         })

         return testNamesFound.length === report.testNamesNeeded.length;
      })

      return filteredArr;
   }

   return null;
}

export default filterReportsArr;