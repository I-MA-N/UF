import { testPatternTypes } from "../components/NoAITests/utils/generateTestInputs";
import activityRateData from "./testsData/activityRateData";
import activityReadinessData from "./testsData/activityReadinessData";
import bodyStatusData from "./testsData/bodyStatusData";
import diseaseBackgroundData from "./testsData/diseaseBackgroundData";
import dynamicEvaluation from "./testsData/dynamicEvaluation";
import FMSData from "./testsData/FMSData";
import generalHealthData from "./testsData/generalHealthData";
import happinessData from "./testsData/happinessData";
import hasPainData from "./testsData/hasPainData";
import jobPerformanceData from "./testsData/jobPerformanceData";
import jobSatisfactionData from "./testsData/jobSatisfactionData";
import lifeQualityData from "./testsData/lifeQualityData";
import staticEvaluation from "./testsData/staticEvaluation";
import physicalReadinessData from "./testsData/physicalReadinessData";

const testsData = {
   'مقدار تحرک': {
      testSubTitle: '',
      testPattern: "Radio" as testPatternTypes,
      testData: activityRateData,
      testClassName: 'grid grid-cols-1 gap-8'
   },
   'کیفیت زندگی': {
      testSubTitle: '',
      testPattern: "ChoiceWithDivide" as testPatternTypes,
      testData: lifeQualityData,
      testClassName: 'flex flex-col gap-8 lg:gap-10'
   },
   'سابقه بیماری': {
      testSubTitle: 'آیا سابقه بیماری دارید؟',
      testPattern: "CheckBox" as testPatternTypes,
      testData: diseaseBackgroundData,
      testClassName: 'grid grid-cols-3 lg:grid-cols-4 gap-6'
   },
   'درد و اختلال': {
      testSubTitle: 'آیا در یک سال گذشته درد و اختلالی در بدن خود داشته اید؟',
      testPattern: "CheckBox" as testPatternTypes,
      testData: hasPainData,
      testClassName: 'grid grid-cols-3 lg:grid-cols-4 gap-6'
   },
   'آمادگی فعالیت': {
      testSubTitle: '',
      testPattern: "CheckBox" as testPatternTypes,
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
      testData: physicalReadinessData,
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
      testData: jobPerformanceData,
      testClassName: 'flex gap-x-8 gap-y-4 lg:gap-y-8 items-center justify-center flex-wrap'
   },
   'وضعیت بدنی': {
      testSubTitle: '',
      testPattern: "Text" as testPatternTypes,
      testData: bodyStatusData,
      testClassName: 'flex gap-4 lg:gap-8 items-center justify-center flex-wrap'
   },
   'ناهنجاری ها': {
      testSubTitle: '',
      testPattern: "Choice" as testPatternTypes,
      testData: staticEvaluation,
      testClassName: 'grid grid-cols-1 justify-center divide-y divide-y-white'
   },
   'ارزیابی پویا': {
      testSubTitle: '',
      testPattern: "ImageWithDivide" as testPatternTypes,
      testData: dynamicEvaluation,
      testClassName: 'grid grid-cols-1 justify-center divide-y divide-y-white'
   },
   'عملکردی وضعیت بدنی': {
      testSubTitle: '',
      testPattern: "ChoiceImage" as testPatternTypes,
      testData: FMSData,
      testClassName: 'flex gap-x-8 gap-y-4 lg:gap-y-8 items-center justify-center flex-wrap'
   },
}

export default testsData;