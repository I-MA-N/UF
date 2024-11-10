function bodyCompositionData(fatPercentage: number, bestWeight: number, weight: number, gender: number) {
   const bodyComposition = {
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

   bodyComposition.availableFat = (fatPercentage / 100) * weight;
   if (gender === 2) {
      bodyComposition.muscle = 0.45 * weight;
   } else {
      bodyComposition.muscle = 0.36 * weight;
   }
   if (gender === 2) {
      bodyComposition.essentialFat = 0.03 * weight;
   } else {
      bodyComposition.essentialFat = 0.12 * weight;
   }
   if (gender === 2) {
      bodyComposition.fatStorage = 0.12 * weight;
   } else {
      bodyComposition.fatStorage = 0.15 * weight;
   }
   if (gender === 2) {
      bodyComposition.bone = 0.15 * weight;
   } else {
      bodyComposition.bone = 0.12 * weight;
   }
   if (gender === 2) {
      bodyComposition.otherThings = 0.25 * weight;
   } else {
      bodyComposition.otherThings = 0.25 * weight;
   }
   bodyComposition.excessFat = bodyComposition.availableFat - bodyComposition.essentialFat - bodyComposition.fatStorage;
   if (gender === 2) {
      bodyComposition.muscleLack = 0.53 * bodyComposition.excessFat;
   } else {
      bodyComposition.muscleLack = 0.5 * bodyComposition.excessFat;
   }
   if (gender === 2) {
      bodyComposition.boneLack = 0.17 * bodyComposition.excessFat;
   } else {
      bodyComposition.boneLack = 0.16 * bodyComposition.excessFat;
   }
   if (gender === 2) {
      bodyComposition.otherThingsLack = 0.3 * bodyComposition.excessFat;
   } else {
      bodyComposition.otherThingsLack = 0.34 * bodyComposition.excessFat;
   }
   bodyComposition.availableMuscle = bodyComposition.muscle - bodyComposition.muscleLack;
   bodyComposition.availableBone = bodyComposition.bone - bodyComposition.boneLack;
   bodyComposition.availableOtherThings = bodyComposition.otherThings - bodyComposition.otherThingsLack;
   if (gender === 2) {
      bodyComposition.bestMuscle = 0.45 * bestWeight;
   } else {
      bodyComposition.bestMuscle = 0.36 * bestWeight;
   }
   if (gender === 2) {
      bodyComposition.bestFat = 0.03 * bestWeight;
   } else {
      bodyComposition.bestFat = 0.12 * bestWeight;
   }
   if (gender === 2) {
      bodyComposition.bestFatStorage = 0.12 * bestWeight;
   } else {
      bodyComposition.bestFatStorage = 0.15 * bestWeight;
   }
   if (gender === 2) {
      bodyComposition.bestBone = 0.15 * bestWeight;
   } else {
      bodyComposition.bestBone = 0.12 * bestWeight;
   }
   if (gender === 2) {
      bodyComposition.bestOtherThings = 0.25 * bestWeight;
   } else {
      bodyComposition.bestOtherThings = 0.25 * bestWeight;
   }
   bodyComposition.reduceBestMuscle = bodyComposition.availableMuscle - bodyComposition.bestMuscle;
   bodyComposition.reduceBestFat = bodyComposition.availableFat - bodyComposition.bestFat - bodyComposition.bestFatStorage;
   bodyComposition.reduceBestBone = bodyComposition.availableBone - bodyComposition.bestBone;
   bodyComposition.reduceBestOtherThings = bodyComposition.availableOtherThings - bodyComposition.bestOtherThings;

   return bodyComposition;
}

export type bodyCompositionType = ReturnType<typeof bodyCompositionData>;
export default bodyCompositionData;