function bodyCompositionData(fatPercentage: number, bestWeight: number, statusBody: any, gender: number) {
   const dataBodyComposition = {
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

   dataBodyComposition.availableFat = (fatPercentage / 100) * statusBody['وزن'];
   if (gender === 2) {
      dataBodyComposition.muscle = 0.45 * statusBody['وزن'];
   } else {
      dataBodyComposition.muscle = 0.36 * statusBody['وزن'];
   }
   if (gender === 2) {
      dataBodyComposition.essentialFat = 0.03 * statusBody['وزن'];
   } else {
      dataBodyComposition.essentialFat = 0.12 * statusBody['وزن'];
   }
   if (gender === 2) {
      dataBodyComposition.fatStorage = 0.12 * statusBody['وزن'];
   } else {
      dataBodyComposition.fatStorage = 0.15 * statusBody['وزن'];
   }
   if (gender === 2) {
      dataBodyComposition.bone = 0.15 * statusBody['وزن'];
   } else {
      dataBodyComposition.bone = 0.12 * statusBody['وزن'];
   }
   if (gender === 2) {
      dataBodyComposition.otherThings = 0.25 * statusBody['وزن'];
   } else {
      dataBodyComposition.otherThings = 0.25 * statusBody['وزن'];
   }
   dataBodyComposition.excessFat = dataBodyComposition.availableFat - dataBodyComposition.essentialFat - dataBodyComposition.fatStorage;
   if (gender === 2) {
      dataBodyComposition.muscleLack = 0.53 * dataBodyComposition.excessFat;
   } else {
      dataBodyComposition.muscleLack = 0.5 * dataBodyComposition.excessFat;
   }
   if (gender === 2) {
      dataBodyComposition.boneLack = 0.17 * dataBodyComposition.excessFat;
   } else {
      dataBodyComposition.boneLack = 0.16 * dataBodyComposition.excessFat;
   }
   if (gender === 2) {
      dataBodyComposition.otherThingsLack = 0.3 * dataBodyComposition.excessFat;
   } else {
      dataBodyComposition.otherThingsLack = 0.34 * dataBodyComposition.excessFat;
   }
   dataBodyComposition.availableMuscle = dataBodyComposition.muscle - dataBodyComposition.muscleLack;
   dataBodyComposition.availableBone = dataBodyComposition.bone - dataBodyComposition.boneLack;
   dataBodyComposition.availableOtherThings = dataBodyComposition.otherThings - dataBodyComposition.otherThingsLack;
   if (gender === 2) {
      dataBodyComposition.bestMuscle = 0.45 * bestWeight;
   } else {
      dataBodyComposition.bestMuscle = 0.36 * bestWeight;
   }
   if (gender === 2) {
      dataBodyComposition.bestFat = 0.03 * bestWeight;
   } else {
      dataBodyComposition.bestFat = 0.12 * bestWeight;
   }
   if (gender === 2) {
      dataBodyComposition.bestFatStorage = 0.12 * bestWeight;
   } else {
      dataBodyComposition.bestFatStorage = 0.15 * bestWeight;
   }
   if (gender === 2) {
      dataBodyComposition.bestBone = 0.15 * bestWeight;
   } else {
      dataBodyComposition.bestBone = 0.12 * bestWeight;
   }
   if (gender === 2) {
      dataBodyComposition.bestOtherThings = 0.25 * bestWeight;
   } else {
      dataBodyComposition.bestOtherThings = 0.25 * bestWeight;
   }
   dataBodyComposition.reduceBestMuscle = dataBodyComposition.availableMuscle - dataBodyComposition.bestMuscle;
   dataBodyComposition.reduceBestFat = dataBodyComposition.availableFat - dataBodyComposition.bestFat - dataBodyComposition.bestFatStorage;
   dataBodyComposition.reduceBestBone = dataBodyComposition.availableBone - dataBodyComposition.bestBone;
   dataBodyComposition.reduceBestOtherThings = dataBodyComposition.availableOtherThings - dataBodyComposition.bestOtherThings;

   return dataBodyComposition;
}

export type dataBodyCompositionType = ReturnType<typeof bodyCompositionData>;
export default bodyCompositionData;