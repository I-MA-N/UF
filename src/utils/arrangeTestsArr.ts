import { TestObj } from "../types/TestsTypes";

function arrangeTestsArr(testsArr: TestObj[]) {
   console.log(testsArr);
   const oneTwo = testsArr.filter(test => test.testName === 'مقدار تحرک' || test.testName === 'وضعیت بدنی');
   if (oneTwo.length < 2) {
      const otherTests = testsArr.filter(test => test.testName !== 'ارزیابی پویا' && test.testName !== 'عملکردی وضعیت بدنی' && test.testName !== 'ناهنجاری ها' && test.testName !== 'مقدار تحرک' && test.testName !== 'وضعیت بدنی');
      if (oneTwo.length === 1 && otherTests[0]) oneTwo.push(otherTests[0]);
      if (oneTwo.length === 0 && otherTests[0] && otherTests[1]) oneTwo.push(otherTests[0], otherTests[1]);
   }

   const threeFourFive = testsArr.filter(test => test.testName === 'ارزیابی پویا' || test.testName === 'عملکردی وضعیت بدنی' || test.testName === 'ناهنجاری ها');
   
   console.log(oneTwo);
   console.log(threeFourFive);
   const arrangedTests = [...oneTwo, ...threeFourFive];
   const remainedTests = [...testsArr];

   arrangedTests.forEach(test => {
      const index = remainedTests.findIndex(t => t.id === test?.id);
      remainedTests.splice(index, 1);
   })

   return [...arrangedTests, ...remainedTests]
}

export default arrangeTestsArr;