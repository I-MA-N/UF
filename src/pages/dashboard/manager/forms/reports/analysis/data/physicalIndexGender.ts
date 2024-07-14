function physicalIndexGender(data: any, gender: number) {
   const dataPhysicalIndex = {
      'BMI': 0,
      'minBMI': 0,
      'maxBMI': 0,
      'inchHeight': 0,
      'bestWeight': 0,
      'weightMinusBestWeight': 0,
      'maxWeightPeriod': 0,
      'minWeightPeriod': 0,
      'WHR': 0,
      'WHRPeriod': 0,
      'fatPercentage': 0,
      'fatPercentagePeriod': '',
   }

   dataPhysicalIndex.BMI = data['وزن'] / Math.pow(data['قد'] / 100, 2);

   dataPhysicalIndex.minBMI = 18.5;
   dataPhysicalIndex.maxBMI = 25;

   dataPhysicalIndex.inchHeight = data['قد'] * 0.393701;
   if (gender === 2) {
      dataPhysicalIndex.bestWeight = 52 + (1.9 * (dataPhysicalIndex.inchHeight - 60));
   } else {
      dataPhysicalIndex.bestWeight = 49 + (1.7 * (dataPhysicalIndex.inchHeight - 60));
   }
   dataPhysicalIndex.weightMinusBestWeight = data['وزن'] - dataPhysicalIndex.bestWeight;

   dataPhysicalIndex.maxWeightPeriod = dataPhysicalIndex.maxBMI * Math.pow(data['قد'] / 100, 2);
   dataPhysicalIndex.minWeightPeriod = dataPhysicalIndex.minBMI * Math.pow(data['قد'] / 100, 2);

   dataPhysicalIndex.WHR = data['دور کمر'] / data['دور باسن'];

   if (gender === 2) {
      dataPhysicalIndex.WHRPeriod = 0.95;
   } else {
      dataPhysicalIndex.WHRPeriod = 0.8;
   }

   if (gender === 2) {
      const log10 = Math.log10(Number(data['دور کمر']) - Number(data['دور گردن']));
      dataPhysicalIndex.fatPercentage = (495 / (1.0324 - 0.19077 * log10 + 0.15456 * Math.log10(data['قد']))) - 450;
   } else {
      const log10 = Math.log10(Number(data['دور کمر']) + Number(data['دور باسن']) - Number(data['دور گردن']))
      dataPhysicalIndex.fatPercentage = (495 / (1.29579 - 0.35004 * log10 + 0.221 * Math.log10(data['قد']))) - 450;
   }
   
   if (gender === 2) {
      dataPhysicalIndex.fatPercentagePeriod = '25_6';
   } else {
      dataPhysicalIndex.fatPercentagePeriod = '32_14';
   }

   return dataPhysicalIndex;
}

export default physicalIndexGender;