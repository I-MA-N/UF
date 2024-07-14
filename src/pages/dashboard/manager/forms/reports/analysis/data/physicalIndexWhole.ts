function physicalIndexWhole(statusBodyAvg: any, usersData: any) {
   let dataPhysicalIndex = {
      'BMI': 0,
      'minBMI': 0,
      'maxBMI': 0,
      'bestWeight': 0,
      'weightMinusBestWeight': 0,
      'maxWeightPeriod': 0,
      'minWeightPeriod': 0,
      'WHR': 0,
      'WHRPeriod': 'بستگی به جنسیت دارد',
      'fatPercentage': 0,
      'fatPercentagePeriod': 'بستگی به جنسیت دارد',
   }

   dataPhysicalIndex.BMI = statusBodyAvg['وزن'] / Math.pow(statusBodyAvg['قد'] / 100, 2);
   dataPhysicalIndex.minBMI = 18.5;
   dataPhysicalIndex.maxBMI = 25;

   usersData.forEach((userData: any) => {
      const gender = userData['gender'];
      const inchHeight = userData['وضعیت بدنی']['قد'] * 0.393701;
      if (gender === 'male') {
         dataPhysicalIndex.bestWeight += 52 + (1.9 * (inchHeight - 60));
      } else {
         dataPhysicalIndex.bestWeight += 49 + (1.7 * (inchHeight - 60));
      }
   })
   dataPhysicalIndex.bestWeight = dataPhysicalIndex.bestWeight / usersData.length

   dataPhysicalIndex.weightMinusBestWeight = statusBodyAvg['وزن'] - dataPhysicalIndex.bestWeight;

   dataPhysicalIndex.maxWeightPeriod = dataPhysicalIndex.maxBMI * Math.pow(statusBodyAvg['قد'] / 100, 2);
   dataPhysicalIndex.minWeightPeriod = dataPhysicalIndex.minBMI * Math.pow(statusBodyAvg['قد'] / 100, 2);

   dataPhysicalIndex.WHR = statusBodyAvg['دور کمر'] / statusBodyAvg['دور باسن'];

   usersData.forEach((userData: any) => {
      const gender = userData['gender'];
      const formData = userData['وضعیت بدنی']
      if (gender === 'male') {
         const log10 = Math.log10(Number(formData['دور کمر']) - Number(formData['دور گردن']))
         dataPhysicalIndex.fatPercentage += (495 / (1.0324 - 0.19077 * log10 + 0.15456 * Math.log10(formData['قد']))) - 450;
      } else {
         const log10 = Math.log10(Number(formData['دور کمر']) + Number(formData['دور باسن']) - Number(formData['دور گردن']));
         dataPhysicalIndex.fatPercentage += (495 / (1.29579 - 0.35004 * log10 + 0.221 * Math.log10(formData['قد']))) - 450;
      }
   })
   dataPhysicalIndex.fatPercentage = dataPhysicalIndex.fatPercentage / usersData.length;

   return dataPhysicalIndex
}

export default physicalIndexWhole;