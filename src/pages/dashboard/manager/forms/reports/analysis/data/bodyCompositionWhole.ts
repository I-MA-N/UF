import bodyCompositionData from "../../../../../common/analysis/data/bodyCompositionData";

function bodyCompositionWhole(fatPercentage: number, bestWeight: number, usersData: any) {
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

   usersData.forEach((userData: any) => {
      const analysedData = bodyCompositionData(fatPercentage, bestWeight, userData['وضعیت بدنی'], userData['gender'] === 'male' ? 2 : 1);

      Object.keys(dataBodyComposition).forEach(key => {
         dataBodyComposition[key as keyof typeof dataBodyComposition] += analysedData[key as keyof typeof analysedData];
      })
   });

   Object.keys(dataBodyComposition).forEach(key => {
      dataBodyComposition[key as keyof typeof dataBodyComposition] /= usersData.length;
   })

   return dataBodyComposition;
}

export default bodyCompositionWhole;