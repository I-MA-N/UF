function physicalIndexData(data: any, gender: number) {
   const dataPhysicalIndex = {
      'BMI': 0,
      'BMIResult': '',
      'minBMI': 0,
      'maxBMI': 0,
      'inchHeight': 0,
      'bestWeight': 0,
      'weightMinusBestWeight': 0,
      'weightMinusBestWeightResult': '',
      'maxWeightPeriod': 0,
      'minWeightPeriod': 0,
      'WHR': 0,
      'WHRResult': '',
      'WHRPeriod': '',
      'fatPercentage': 0,
      'fatPercentageResult': '',
      'fatPercentagePeriod': '',
   }

   dataPhysicalIndex.BMI = data['وزن'] / Math.pow(data['قد'] / 100, 2);
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

   dataPhysicalIndex.inchHeight = data['قد'] * 0.393701;
   if (gender === 2) {
      dataPhysicalIndex.bestWeight = 52 + (1.9 * (dataPhysicalIndex.inchHeight - 60));
   } else {
      dataPhysicalIndex.bestWeight = 49 + (1.7 * (dataPhysicalIndex.inchHeight - 60));
   }
   dataPhysicalIndex.weightMinusBestWeight = data['وزن'] - dataPhysicalIndex.bestWeight;
   if (dataPhysicalIndex.weightMinusBestWeight < 0) {
      dataPhysicalIndex.weightMinusBestWeightResult = 'کمبود وزن';
   } else if (dataPhysicalIndex.weightMinusBestWeight == 0) {
      dataPhysicalIndex.weightMinusBestWeightResult = 'طبیعی';
   } else {
      dataPhysicalIndex.weightMinusBestWeightResult = 'اضافه وزن';
   }

   dataPhysicalIndex.maxWeightPeriod = dataPhysicalIndex.maxBMI * Math.pow(data['قد'] / 100, 2);
   dataPhysicalIndex.minWeightPeriod = dataPhysicalIndex.minBMI * Math.pow(data['قد'] / 100, 2);

   dataPhysicalIndex.WHR = data['دور کمر'] / data['دور باسن'];
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
      const log10 = Math.log10(Number(data['دور کمر']) - Number(data['دور گردن']));
      dataPhysicalIndex.fatPercentage = (495 / (1.0324 - 0.19077 * log10 + 0.15456 * Math.log10(data['قد']))) - 450;
   } else {
      const log10 = Math.log10(Number(data['دور کمر'] )+ Number(data['دور باسن']) - Number(data['دور گردن']))
      dataPhysicalIndex.fatPercentage = (495 / (1.29579 - 0.35004 * log10 + 0.221 * Math.log10(data['قد']))) - 450;
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

   return dataPhysicalIndex;
}

export type dataPhysicalIndexType = ReturnType<typeof physicalIndexData>;
export default physicalIndexData;