import { testPatternTypes } from "../../../../common/tests/generateTestInputs";
import FMS from "../../../../common/tests/testsData/FMS";
import bodyStatus from "../../../../common/tests/testsData/bodyStatus";
import dynamic from "../../../../common/tests/testsData/dynamic";
import problems from "../../../../common/tests/testsData/problems";
import simpleuserTestsData from "../../../../simpleuser/forms/tests/data/testsData";

const testsData = {
   ...simpleuserTestsData,
   'وضعیت بدنی': {
      testSubTitle: '',
      testPattern: "Text" as testPatternTypes,
      testData: bodyStatus,
      testClassName: 'flex gap-4 lg:gap-8 items-center justify-center flex-wrap'
   },
   'ناهنجاری ها': {
      testSubTitle: '',
      testPattern: "Choice" as testPatternTypes,
      testData: problems,
      testClassName: 'flex gap-x-8 gap-y-4 lg:gap-y-8 items-center justify-center flex-wrap'
   },
   'ارزیابی پویا': {
      testSubTitle: '',
      testPattern: "ImageWithDivide" as testPatternTypes,
      testData: dynamic,
      testClassName: 'grid grid-cols-1 justify-center divide-y divide-y-white'
   },
   'عملکردی وضعیت بدنی': {
      testSubTitle: '',
      testPattern: "ChoiceImage" as testPatternTypes,
      testData: FMS,
      testClassName: 'flex gap-x-8 gap-y-4 lg:gap-y-8 items-center justify-center flex-wrap'
   },
}

const testsNames = Object.keys(testsData);
const emptyTestsObj: any = {};
testsNames.map(testName => emptyTestsObj[testName as keyof typeof emptyTestsObj] = {});

export default testsData;
export { emptyTestsObj };