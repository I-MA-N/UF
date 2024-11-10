import FormDataType from "../../../../../../types/FormDataType";
import generalHealthData from "../../../../tests/data/testsData/generalHealthData";
import happinessData from "../../../../tests/data/testsData/happinessData";
import jobPerformanceData from "../../../../tests/data/testsData/jobPerformanceData";
import jobSatisfactionData from "../../../../tests/data/testsData/jobSatisfactionData";
import lifeQualityData from "../../../../tests/data/testsData/lifeQualityData";
import physicalReadinessData from "../../../../tests/data/testsData/physicalReadinessData";

function questionariesData(data: FormDataType) {
   const questionaries = {
      'activityReadiness': null as number | null,
      'activityReadinessResult': null as string | null,
      'generalHealth': null as number | null,
      'generalHealthResult': null as string | null,
      'physicalReadiness': null as number | null,
      'physicalReadinessResult': null as string | null,
      'karcardJesmi': null as number | null,
      'ekhtelalNaghshJesmi': null as number | null,
      'ekhtelalNaghshHayajani': null as number | null,
      'energiKhastegi': null as number | null,
      'dardP': null as number | null,
      'salamatOmomi': null as number | null,
      'salamatJesmi': null as number | null,
      'salamatRavani': null as number | null,
      'salamatJesmiResult': null as string | null,
      'salamatRavaniResult': null as string | null,
      'happinness': null as number | null,
      'happinnessResult': null as string | null,
      'jobSatisfaction': null as number | null,
      'jobSatisfactionResult': null as string | null,
      'jobPerformance': null as number | null,
      'jobPerformanceResult': null as string | null,
   };

   const activityReadiness = data?.['آمادگی فعالیت'];
   if (activityReadiness) {
      questionaries.activityReadiness = Object.values(activityReadiness).reduce((total: number, item) => {
         Number(item?.value) ? total++ : total;
         return total;
      }, 0);
      questionaries.activityReadinessResult = 'شما آمادگی لازم برای فعالیت بدنی را دارید.';
      if (questionaries.activityReadiness > 0) {
         questionaries.activityReadinessResult = 'باید قبل از اینکه فعالیت بدنی خود را شروع کنید با پزشک مشورت کنید.';
      }
   }

   const generalHealth = data?.['سلامت عمومی'];
   if (generalHealth && Object.values(generalHealth).length === generalHealthData.length) {
      questionaries.generalHealth = Object.values(generalHealth).reduce((total: number, item) => {
         if (item?.value !== undefined) {
            total += Number(item.value);
         }
         return total;
      }, 0);
      questionaries.generalHealthResult = 'بهتر از متوسط';
      if (questionaries.generalHealth > 23) {
         questionaries.generalHealthResult = 'بدتر از متوسط';
      }
   }

   const physicalReadiness = data?.['آمادگی بدنی'];
   if (physicalReadiness && Object.values(physicalReadiness).length === physicalReadinessData.length) {
      questionaries.physicalReadiness = Object.values(physicalReadiness).reduce((total: number, item) => {
         if (item?.value !== undefined) {
            total += Number(item.value);
         }
         return total;
      }, 0);
      questionaries.physicalReadinessResult = 'بهتر از متوسط';
      if (questionaries.physicalReadiness < 24) {
         questionaries.physicalReadinessResult = 'بدتر از متوسط';
      }
   }

   const happinness = data?.['شادکامی'];
   if (happinness && Object.values(happinness).length === happinessData.length) {
      questionaries.happinness = Object.values(happinness).reduce((total: number, item) => {
         if (item?.value !== undefined) {
            total += Number(item.value);
         }
         return total;
      }, 0);
      questionaries.happinnessResult = 'بهتر از متوسط';
      if (questionaries.happinness < 43.5) {
         questionaries.happinnessResult = 'بدتر از متوسط';
      }
   }

   const jobSatisfaction = data?.['رضایت شغلی'];
   if (jobSatisfaction && Object.values(jobSatisfaction).length === jobSatisfactionData.length) {
      questionaries.jobSatisfaction = Object.values(jobSatisfaction).reduce((total: number, item) => {
         if (item?.value !== undefined) {
            total += Number(item.value);
         }
         return total;
      }, 0);
      questionaries.jobSatisfactionResult = 'بهتر از متوسط';
      if (questionaries.jobSatisfaction < 38) {
         questionaries.jobSatisfactionResult = 'بدتر از متوسط';
      }
   }

   const jobPerformance = data?.['عملکرد شغلی'];
   if (jobPerformance && Object.values(jobPerformance).length === jobPerformanceData.length) {
      questionaries.jobPerformance = Object.values(jobPerformance).reduce((total: number, item) => {
         if (item?.value !== undefined) {
            total += Number(item.value);
         }
         return total;
      }, 0);
      questionaries.jobPerformanceResult = 'بهتر از متوسط';
      if (questionaries.jobPerformance < 22.5) {
         questionaries.jobPerformanceResult = 'بدتر از متوسط';
      }
   }

   const lifeQuality = data?.['کیفیت زندگی'];
   let lifeQualityDataLength = 0;
   lifeQualityData.forEach(section => section.sectionQuestions.forEach(() => lifeQualityDataLength++));
   if (lifeQuality && Object.values(lifeQuality).length === lifeQualityDataLength) {
      {
         if (questionaries.karcardJesmi === null) questionaries.karcardJesmi = 0;
         const start = 3;
         const end = 12;
         for (let i = start; i <= end; i++) {
            const value = lifeQuality[i]!.value!;
            questionaries.karcardJesmi += Number(value);
         }
         questionaries.karcardJesmi /= end - start + 1;
      }

      {
         if (questionaries.ekhtelalNaghshJesmi === null) questionaries.ekhtelalNaghshJesmi = 0;
         const start = 13;
         const end = 16;
         for (let i = start; i <= end; i++) {
            const value = lifeQuality[i]!.value!;
            questionaries.ekhtelalNaghshJesmi += Number(value);
         }
         questionaries.ekhtelalNaghshJesmi /= end - start + 1;
      }

      {
         if (questionaries.ekhtelalNaghshHayajani === null) questionaries.ekhtelalNaghshHayajani = 0;
         const start = 17;
         const end = 19;
         for (let i = start; i <= end; i++) {
            const value = lifeQuality[i]!.value!;
            questionaries.ekhtelalNaghshHayajani += Number(value);
         }
         questionaries.ekhtelalNaghshHayajani /= end - start + 1;
      }

      {
         if (questionaries.energiKhastegi === null) questionaries.energiKhastegi = 0;
         const indexes = [23, 27, 29, 31];
         for (let i = 0; i < indexes.length; i++) {
            const index = indexes[i];
            const value = lifeQuality[index]!.value!;
            questionaries.energiKhastegi += Number(value);
         }
         questionaries.energiKhastegi /= indexes.length;
      }

      {
         if (questionaries.dardP === null) questionaries.dardP = 0;
         const indexes = [21, 22];
         for (let i = 0; i < indexes.length; i++) {
            const index = indexes[i];
            const value = lifeQuality[index]!.value!;
            questionaries.dardP += Number(value);
         }
         questionaries.dardP /= indexes.length;
      }

      {
         if (questionaries.salamatOmomi === null) questionaries.salamatOmomi = 0;
         const indexes = [1, 33, 34, 35, 36];
         for (let i = 0; i < indexes.length; i++) {
            const index = indexes[i];
            const value = lifeQuality[index]!.value!;
            questionaries.salamatOmomi += Number(value);
         }
         questionaries.salamatOmomi /= indexes.length;
      }

      questionaries.salamatJesmi = (questionaries.karcardJesmi + questionaries.ekhtelalNaghshJesmi + questionaries.dardP + questionaries.salamatOmomi) / 4;
      questionaries.salamatJesmiResult = 'بهتر از متوسط';
      if (questionaries.salamatJesmi < 50) {
         questionaries.salamatJesmiResult = 'بدتر از متوسط';
      }
      questionaries.salamatRavani = (questionaries.karcardJesmi + questionaries.ekhtelalNaghshJesmi + questionaries.ekhtelalNaghshHayajani + questionaries.energiKhastegi) / 4;
      questionaries.salamatRavaniResult = 'بهتر از متوسط';
      if (questionaries.salamatRavani < 50) {
         questionaries.salamatRavaniResult = 'بدتر از متوسط';
      }
   }

   return questionaries;
}

export type questionariesType = ReturnType<typeof questionariesData>;

export default questionariesData;