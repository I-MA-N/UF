import { testPatternTypes } from "../../common/tests/generateTestInputs";
import activityRate from "../../common/tests/testsData/activityRate";
import activityReadinessData from "../../common/tests/testsData/activityReadinessData";
import bodyStatus from "../../common/tests/testsData/bodyStatus";
import diseaseBackgroundData from "../../common/tests/testsData/diseaseBackgroundData";
import dynamic from "../../common/tests/testsData/dynamic";
import FMS from "../../common/tests/testsData/FMS";
import generalHealthData from "../../common/tests/testsData/generalHealthData";
import happinessData from "../../common/tests/testsData/happinessData";
import hasPainData from "../../common/tests/testsData/hasPainData";
import jobPerformance from "../../common/tests/testsData/jobPerformance";
import jobSatisfactionData from "../../common/tests/testsData/jobSatisfactionData";
import lifeQuality from "../../common/tests/testsData/lifeQuality";
import nahanjariHa from "../../common/tests/testsData/nahanjariHa";
import physicalPreparationData from "../../common/tests/testsData/physicalPreparationData";

const testsData = {
   'مقدار تحرک': {
      testSubTitle: '',
      testPattern: "Radio" as testPatternTypes,
      testData: activityRate,
      testClassName: 'grid grid-cols-1 gap-8'
   },
   'کیفیت زندگی': {
      testSubTitle: '',
      testPattern: "ChoiceWithDivide" as testPatternTypes,
      testData: lifeQuality,
      testClassName: 'flex flex-col gap-8 lg:gap-10'
   },
   'سابقه بیماری': {
      testSubTitle: 'آیا سابقه بیماری دارید؟',
      testPattern: "MultipleChoice" as testPatternTypes,
      testData: diseaseBackgroundData,
      testClassName: 'grid grid-cols-3 lg:grid-cols-4 gap-6'
   },
   'درد و اختلال': {
      testSubTitle: 'آیا در یک سال گذشته درد و اختلالی در بدن خود داشته اید؟',
      testPattern: "MultipleChoice" as testPatternTypes,
      testData: hasPainData,
      testClassName: 'grid grid-cols-3 lg:grid-cols-4 gap-6'
   },
   'آمادگی فعالیت': {
      testSubTitle: '',
      testPattern: "MultipleChoice" as testPatternTypes,
      testData: activityReadinessData,
      testClassName: 'grid grid-cols-1 gap-8'
   },
   'رضایت شغلی': {
      testSubTitle: '',
      testPattern: "Choice" as testPatternTypes,
      testData: jobSatisfactionData,
      testClassName: 'flex gap-x-8 gap-y-4 lg:gap-y-8 items-center justify-center flex-wrap'
   },
   'سلامت عمومی': {
      testSubTitle: '',
      testPattern: "Choice" as testPatternTypes,
      testData: generalHealthData,
      testClassName: 'flex gap-x-8 gap-y-4 lg:gap-y-8 items-center justify-center flex-wrap'
   },
   'آمادگی بدنی': {
      testSubTitle: '',
      testPattern: "Choice" as testPatternTypes,
      testData: physicalPreparationData,
      testClassName: 'flex gap-x-8 gap-y-4 lg:gap-y-8 items-center justify-center flex-wrap'
   },
   'شادکامی': {
      testSubTitle: '',
      testPattern: "Choice" as testPatternTypes,
      testData: happinessData,
      testClassName: 'flex gap-x-8 gap-y-4 lg:gap-y-8 items-center justify-center flex-wrap'
   },
   'عملکرد شغلی': {
      testSubTitle: '',
      testPattern: "Choice" as testPatternTypes,
      testData: jobPerformance,
      testClassName: 'flex gap-x-8 gap-y-4 lg:gap-y-8 items-center justify-center flex-wrap'
   },
   'وضعیت بدنی': {
      testSubTitle: '',
      testPattern: "Text" as testPatternTypes,
      testData: bodyStatus,
      testClassName: 'flex gap-4 lg:gap-8 items-center justify-center flex-wrap'
   },
   'ناهنجاری ها': {
      testSubTitle: '',
      testPattern: "Choice" as testPatternTypes,
      testData: nahanjariHa,
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