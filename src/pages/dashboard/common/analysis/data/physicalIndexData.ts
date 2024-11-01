import FormDataType from "../../../../../types/FormDataType";

function physicalIndexData(data: FormDataType[""], gender: number) {
   const dataPhysicalIndex = {
      'BMI': null as number | null,
      'BMIResult': '',
      'minBMI': null as number | null,
      'maxBMI': null as number | null,
      'inchHeight': null as number | null,
      'bestWeight': null as number | null,
      'weightMinusBestWeight': null as number | null,
      'weightMinusBestWeightResult': '',
      'maxWeightPeriod': null as number | null,
      'minWeightPeriod': null as number | null,
      'WHR': null as number | null,
      'WHRResult': '',
      'WHRPeriod': '',
      'fatPercentage': null as number | null,
      'fatPercentageResult': '',
      'fatPercentagePeriod': '',
   }

   const weight = Number(data?.['وزن']?.value);
   const height = Number(data?.['وزن']?.value);

   if (weight && height) {
      dataPhysicalIndex.BMI = weight / Math.pow(height / 100, 2);
      if (dataPhysicalIndex.BMI < 16) {
         dataPhysicalIndex.BMIResult = 'لاغر شدید';
      } else if (dataPhysicalIndex.BMI < 17) {
         dataPhysicalIndex.BMIResult = 'لاغر خفیف';
      } else if (dataPhysicalIndex.BMI < 18.5) {
         dataPhysicalIndex.BMIResult = 'لاغر متوسط';
      } else if (dataPhysicalIndex.BMI < 25) {
         dataPhysicalIndex.BMIResult = 'طبیعی';
      } else if (dataPhysicalIndex.BMI < 30) {
         dataPhysicalIndex.BMIResult = 'اضافه وزن';
      } else if (dataPhysicalIndex.BMI < 35) {
         dataPhysicalIndex.BMIResult = 'چاق';
      } else {
         dataPhysicalIndex.BMIResult = 'خیلی چاق';
      }
      dataPhysicalIndex.minBMI = 18.5;
      dataPhysicalIndex.maxBMI = 25;

      dataPhysicalIndex.inchHeight = height * 0.393701;
      if (gender === 2) {
         dataPhysicalIndex.bestWeight = 52 + (1.9 * (dataPhysicalIndex.inchHeight - 60));
      } else {
         dataPhysicalIndex.bestWeight = 49 + (1.7 * (dataPhysicalIndex.inchHeight - 60));
      }
      dataPhysicalIndex.weightMinusBestWeight = weight - dataPhysicalIndex.bestWeight;
      if (dataPhysicalIndex.weightMinusBestWeight < 0) {
         dataPhysicalIndex.weightMinusBestWeightResult = 'کمبود وزن';
      } else if (dataPhysicalIndex.weightMinusBestWeight == 0) {
         dataPhysicalIndex.weightMinusBestWeightResult = 'طبیعی';
      } else {
         dataPhysicalIndex.weightMinusBestWeightResult = 'اضافه وزن';
      }
   
      dataPhysicalIndex.maxWeightPeriod = dataPhysicalIndex.maxBMI * Math.pow(height / 100, 2);
      dataPhysicalIndex.minWeightPeriod = dataPhysicalIndex.minBMI * Math.pow(height / 100, 2);
   }

   const dourCamar = Number(data?.['دور کمر']?.value);
   const dourBasan = Number(data?.['دور کمر']?.value);
   const dourGardan = Number(data?.['دور گردن']?.value);

   if (dourCamar && dourBasan && dourGardan) {
      dataPhysicalIndex.WHR = dourCamar / dourBasan;
      if (gender === 2) {
         if (dataPhysicalIndex.WHR <= 0.95) {
            dataPhysicalIndex.WHRResult = 'کم';
         } else if (dataPhysicalIndex.WHR <= 1) {
            dataPhysicalIndex.WHRResult = 'متوسط';
         } else {
            dataPhysicalIndex.WHRResult = 'زیاد';
         }
      } else {
         if (dataPhysicalIndex.WHR <= 0.8) {
            dataPhysicalIndex.WHRResult = 'کم';
         } else if (dataPhysicalIndex.WHR <= 0.85) {
            dataPhysicalIndex.WHRResult = 'متوسط';
         } else {
            dataPhysicalIndex.WHRResult = 'زیاد';
         }
      }
   
      if (gender === 2) {
         dataPhysicalIndex.WHRPeriod = 'کم تر از ' + 0.95;
      } else {
         dataPhysicalIndex.WHRPeriod = 'کم تر از ' + 0.8;
      }
   
      if (gender === 2) {
         const log10 = Math.log10(Number(dourCamar) - Number(dourGardan));
         dataPhysicalIndex.fatPercentage = (495 / (1.0324 - 0.19077 * log10 + 0.15456 * Math.log10(height))) - 450;
      } else {
         const log10 = Math.log10(Number(dourCamar )+ Number(dourBasan) - Number(dourGardan))
         dataPhysicalIndex.fatPercentage = (495 / (1.29579 - 0.35004 * log10 + 0.221 * Math.log10(height))) - 450;
      }
      if (gender === 2) {
         if (dataPhysicalIndex.fatPercentage < 2) {
            dataPhysicalIndex.fatPercentageResult = 'بسیار پایین';
         } else if (dataPhysicalIndex.fatPercentage < 5) {
            dataPhysicalIndex.fatPercentageResult = 'ضروری';
         } else if (dataPhysicalIndex.fatPercentage < 14) {
            dataPhysicalIndex.fatPercentageResult = 'ورزشکار';
         } else if (dataPhysicalIndex.fatPercentage < 18) {
            dataPhysicalIndex.fatPercentageResult = 'تناسب اندام';
         } else if (dataPhysicalIndex.fatPercentage < 25) {
            dataPhysicalIndex.fatPercentageResult = 'میانگین';
         } else {
            dataPhysicalIndex.fatPercentageResult = 'چاق';
         }
      } else {
         if (dataPhysicalIndex.fatPercentage < 10) {
            dataPhysicalIndex.fatPercentageResult = 'بسیار پایین';
         } else if (dataPhysicalIndex.fatPercentage < 14) {
            dataPhysicalIndex.fatPercentageResult = 'ضروری';
         } else if (dataPhysicalIndex.fatPercentage < 21) {
            dataPhysicalIndex.fatPercentageResult = 'ورزشکار';
         } else if (dataPhysicalIndex.fatPercentage < 25) {
            dataPhysicalIndex.fatPercentageResult = 'تناسب اندام';
         } else if (dataPhysicalIndex.fatPercentage < 32) {
            dataPhysicalIndex.fatPercentageResult = 'میانگین';
         } else {
            dataPhysicalIndex.fatPercentageResult = 'چاق';
         }
      }
      if (gender === 2) {
         dataPhysicalIndex.fatPercentagePeriod = '25_6';
      } else {
         dataPhysicalIndex.fatPercentagePeriod = '32_14';
      }
   }

   return dataPhysicalIndex;
}

export type dataPhysicalIndexType = ReturnType<typeof physicalIndexData>;
export default physicalIndexData;