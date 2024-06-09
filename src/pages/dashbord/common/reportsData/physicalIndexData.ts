type PhysicalIndexPropsType = {
   data: any,
   gender: number
}

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
   'WHRPeriod': 0,
   'fatPercentage': 0,
   'fatPercentageResult': '',
   'fatPercentagePeriod': '',
   'availableFat': 0,
   'muscle': 0,
   'essentialFat': 0,
   'fatStorage': 0,
   'bone': 0,
   'otherThings': 0,
   'excessFat': 0,
   'muscleLack': 0,
   'boneLack': 0,
   'otherThingsLack': 0,
   'availableMuscle': 0,
   'availableBone': 0,
   'availableOtherThings': 0,
   'bestMuscle': 0,
   'bestFat': 0,
   'bestFatStorage': 0,
   'bestBone': 0,
   'bestOtherThings': 0,
   'reduceBestMuscle': 0,
   'reduceBestFat': 0,
   'reduceBestBone': 0,
   'reduceBestOtherThings': 0,
}

function physicalIndexData ({ data, gender }: PhysicalIndexPropsType) {
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
      dataPhysicalIndex.WHRPeriod = 0.95;
   } else {
      dataPhysicalIndex.WHRPeriod = 0.8;
   }

   if (gender === 2) {
      dataPhysicalIndex.fatPercentage = (495 / (1.0324 - 0.19077 * Math.log10(data['دور کمر'] - data['دور گردن']) + 0.15456 * Math.log10(data['قد']))) - 450;
   } else {
      dataPhysicalIndex.fatPercentage = (495 / (1.29579 - 0.35004 * Math.log10(data['دور کمر'] + data['دور باسن'] - data['دور گردن']) + 0.221 * Math.log10(data['قد']))) - 450;
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

   dataPhysicalIndex.availableFat = (dataPhysicalIndex.fatPercentage / 100) * data['وزن'];
   if (gender === 2) {
      dataPhysicalIndex.muscle = 0.45 * data['وزن'];
   } else {
      dataPhysicalIndex.muscle = 0.36 * data['وزن'];
   }
   if (gender === 2) {
      dataPhysicalIndex.essentialFat = 0.03 * data['وزن'];
   } else {
      dataPhysicalIndex.essentialFat = 0.12 * data['وزن'];
   }
   if (gender === 2) {
      dataPhysicalIndex.fatStorage = 0.12 * data['وزن'];
   } else {
      dataPhysicalIndex.fatStorage = 0.15 * data['وزن'];
   }
   if (gender === 2) {
      dataPhysicalIndex.bone = 0.15 * data['وزن'];
   } else {
      dataPhysicalIndex.bone = 0.12 * data['وزن'];
   }
   if (gender === 2) {
      dataPhysicalIndex.otherThings = 0.25 * data['وزن'];
   } else {
      dataPhysicalIndex.otherThings = 0.25 * data['وزن'];
   }
   dataPhysicalIndex.excessFat = dataPhysicalIndex.availableFat - dataPhysicalIndex.essentialFat - dataPhysicalIndex.fatStorage;
   if (gender === 2) {
      dataPhysicalIndex.muscleLack = 0.53 * dataPhysicalIndex.excessFat;
   } else {
      dataPhysicalIndex.muscleLack = 0.5 * dataPhysicalIndex.excessFat;
   }
   if (gender === 2) {
      dataPhysicalIndex.boneLack = 0.17 * dataPhysicalIndex.excessFat;
   } else {
      dataPhysicalIndex.boneLack = 0.16 * dataPhysicalIndex.excessFat;
   }
   if (gender === 2) {
      dataPhysicalIndex.otherThingsLack = 0.3 * dataPhysicalIndex.excessFat;
   } else {
      dataPhysicalIndex.otherThingsLack = 0.34 * dataPhysicalIndex.excessFat;
   }
   dataPhysicalIndex.availableMuscle = dataPhysicalIndex.muscle - dataPhysicalIndex.muscleLack;
   dataPhysicalIndex.availableBone = dataPhysicalIndex.bone - dataPhysicalIndex.boneLack;
   dataPhysicalIndex.availableOtherThings = dataPhysicalIndex.otherThings - dataPhysicalIndex.otherThingsLack;
   if (gender === 2) {
      dataPhysicalIndex.bestMuscle = 0.45 * dataPhysicalIndex.bestWeight;
   } else {
      dataPhysicalIndex.bestMuscle = 0.36 * dataPhysicalIndex.bestWeight;
   }
   if (gender === 2) {
      dataPhysicalIndex.bestFat = 0.03 * dataPhysicalIndex.bestWeight;
   } else {
      dataPhysicalIndex.bestFat = 0.12 * dataPhysicalIndex.bestWeight;
   }
   if (gender === 2) {
      dataPhysicalIndex.bestFatStorage = 0.12 * dataPhysicalIndex.bestWeight;
   } else {
      dataPhysicalIndex.bestFatStorage = 0.15 * dataPhysicalIndex.bestWeight;
   }
   if (gender === 2) {
      dataPhysicalIndex.bestBone = 0.15 * dataPhysicalIndex.bestWeight;
   } else {
      dataPhysicalIndex.bestBone = 0.12 * dataPhysicalIndex.bestWeight;
   }
   if (gender === 2) {
      dataPhysicalIndex.bestOtherThings = 0.25 * dataPhysicalIndex.bestWeight;
   } else {
      dataPhysicalIndex.bestOtherThings = 0.25 * dataPhysicalIndex.bestWeight;
   }
   dataPhysicalIndex.reduceBestMuscle = dataPhysicalIndex.availableMuscle - dataPhysicalIndex.bestMuscle;
   dataPhysicalIndex.reduceBestFat = dataPhysicalIndex.availableFat - dataPhysicalIndex.bestFat - dataPhysicalIndex.bestFatStorage;
   dataPhysicalIndex.reduceBestBone = dataPhysicalIndex.availableBone - dataPhysicalIndex.bestBone;
   dataPhysicalIndex.reduceBestOtherThings = dataPhysicalIndex.availableOtherThings - dataPhysicalIndex.bestOtherThings;

   return dataPhysicalIndex;
}

export type dataPhysicalIndexType = typeof dataPhysicalIndex;
export default physicalIndexData;