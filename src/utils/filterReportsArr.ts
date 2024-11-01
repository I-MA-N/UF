import REPORTS_ARR from "../pages/dashboard/reports/analysis/REPORTS_ARR";
import { FormObj } from "../types/TestsTypes";

function filterReportsArr(formNames: FormObj[], formname: string | undefined) {
   const formObj = formNames?.find(form => form.formName === formname);
   if (formObj) {
      const filteredArr = REPORTS_ARR.filter(report => {
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