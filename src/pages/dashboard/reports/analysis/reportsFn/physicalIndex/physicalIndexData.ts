import FormDataType from "../../../../../../types/FormDataType";

function physicalIndexData(data: FormDataType[""], gender: number) {
   const physicalIndex = {
      'BMI': null as number | null,
      'BMIResult': null as string | null,
      'minBMI': null as number | null,
      'maxBMI': null as number | null,
      'inchHeight': null as number | null,
      'bestWeight': null as number | null,
      'weightMinusBestWeight': null as number | null,
      'weightMinusBestWeightResult': null as string | null,
      'maxWeightPeriod': null as number | null,
      'minWeightPeriod': null as number | null,
      'WHR': null as number | null,
      'WHRResult': null as string | null,
      'WHRPeriod': null as string | null,
      'fatPercentage': null as number | null,
      'fatPercentageResult': null as string | null,
      'fatPercentagePeriod': null as string | null,
   }

   const weight = Number(data?.['وزن']?.value);
   const height = Number(data?.['قد']?.value);

   if (weight && height) {
      physicalIndex.BMI = weight / Math.pow(height / 100, 2);
      if (physicalIndex.BMI < 16) {
         physicalIndex.BMIResult = 'لاغر شدید';
      } else if (physicalIndex.BMI < 17) {
         physicalIndex.BMIResult = 'لاغر خفیف';
      } else if (physicalIndex.BMI < 18.5) {
         physicalIndex.BMIResult = 'لاغر متوسط';
      } else if (physicalIndex.BMI < 25) {
         physicalIndex.BMIResult = 'طبیعی';
      } else if (physicalIndex.BMI < 30) {
         physicalIndex.BMIResult = 'اضافه وزن';
      } else if (physicalIndex.BMI < 35) {
         physicalIndex.BMIResult = 'چاق';
      } else {
         physicalIndex.BMIResult = 'خیلی چاق';
      }
      physicalIndex.minBMI = 18.5;
      physicalIndex.maxBMI = 25;

      physicalIndex.inchHeight = height * 0.393701;
      if (gender === 2) {
         physicalIndex.bestWeight = 52 + (1.9 * (physicalIndex.inchHeight - 60));
      } else {
         physicalIndex.bestWeight = 49 + (1.7 * (physicalIndex.inchHeight - 60));
      }
      physicalIndex.weightMinusBestWeight = weight - physicalIndex.bestWeight;
      if (physicalIndex.weightMinusBestWeight < 0) {
         physicalIndex.weightMinusBestWeightResult = 'کمبود وزن';
      } else if (physicalIndex.weightMinusBestWeight == 0) {
         physicalIndex.weightMinusBestWeightResult = 'طبیعی';
      } else {
         physicalIndex.weightMinusBestWeightResult = 'اضافه وزن';
      }
   
      physicalIndex.maxWeightPeriod = physicalIndex.maxBMI * Math.pow(height / 100, 2);
      physicalIndex.minWeightPeriod = physicalIndex.minBMI * Math.pow(height / 100, 2);
   }

   const dourCamar = Number(data?.['دور کمر']?.value);
   const dourBasan = Number(data?.['دور باسن']?.value);
   const dourGardan = Number(data?.['دور گردن']?.value);

   if (dourCamar && dourBasan && dourGardan) {
      physicalIndex.WHR = dourCamar / dourBasan;
      if (gender === 2) {
         if (physicalIndex.WHR <= 0.95) {
            physicalIndex.WHRResult = 'کم';
         } else if (physicalIndex.WHR <= 1) {
            physicalIndex.WHRResult = 'متوسط';
         } else {
            physicalIndex.WHRResult = 'زیاد';
         }
      } else {
         if (physicalIndex.WHR <= 0.8) {
            physicalIndex.WHRResult = 'کم';
         } else if (physicalIndex.WHR <= 0.85) {
            physicalIndex.WHRResult = 'متوسط';
         } else {
            physicalIndex.WHRResult = 'زیاد';
         }
      }
   
      if (gender === 2) {
         physicalIndex.WHRPeriod = 'کم تر از ' + 0.95;
      } else {
         physicalIndex.WHRPeriod = 'کم تر از ' + 0.8;
      }
   
      if (gender === 2) {
         const log10 = Math.log10(dourCamar - dourGardan);
         physicalIndex.fatPercentage = (495 / (1.0324 - 0.19077 * log10 + 0.15456 * Math.log10(height))) - 450;
      } else {
         const log10 = Math.log10(dourCamar + dourBasan - dourGardan)
         physicalIndex.fatPercentage = (495 / (1.29579 - 0.35004 * log10 + 0.221 * Math.log10(height))) - 450;
      }
      if (gender === 2) {
         if (physicalIndex.fatPercentage < 2) {
            physicalIndex.fatPercentageResult = 'بسیار پایین';
         } else if (physicalIndex.fatPercentage < 5) {
            physicalIndex.fatPercentageResult = 'ضروری';
         } else if (physicalIndex.fatPercentage < 14) {
            physicalIndex.fatPercentageResult = 'ورزشکار';
         } else if (physicalIndex.fatPercentage < 18) {
            physicalIndex.fatPercentageResult = 'تناسب اندام';
         } else if (physicalIndex.fatPercentage < 25) {
            physicalIndex.fatPercentageResult = 'میانگین';
         } else {
            physicalIndex.fatPercentageResult = 'چاق';
         }
      } else {
         if (physicalIndex.fatPercentage < 10) {
            physicalIndex.fatPercentageResult = 'بسیار پایین';
         } else if (physicalIndex.fatPercentage < 14) {
            physicalIndex.fatPercentageResult = 'ضروری';
         } else if (physicalIndex.fatPercentage < 21) {
            physicalIndex.fatPercentageResult = 'ورزشکار';
         } else if (physicalIndex.fatPercentage < 25) {
            physicalIndex.fatPercentageResult = 'تناسب اندام';
         } else if (physicalIndex.fatPercentage < 32) {
            physicalIndex.fatPercentageResult = 'میانگین';
         } else {
            physicalIndex.fatPercentageResult = 'چاق';
         }
      }
      if (gender === 2) {
         physicalIndex.fatPercentagePeriod = '25_6';
      } else {
         physicalIndex.fatPercentagePeriod = '32_14';
      }
   }

   return physicalIndex;
}

export type physicalIndexType = ReturnType<typeof physicalIndexData>;
export default physicalIndexData;