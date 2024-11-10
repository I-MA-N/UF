import OrgMemberData from "../../../../../../../../types/OrgMemberData";
import bodyCompositionData from "../../../../../../reports/analysis/reportsFn/physicalIndex/bodyCompositionData";
import physicalIndexData from "../../../../../../reports/analysis/reportsFn/physicalIndex/physicalIndexData";

function bodyCompositionAvg(usersData: OrgMemberData[]) {
   let fatPercentage: number = 0;
   let bestWeight: number = 0;
   let bestWeightCount = 0;

   usersData.forEach(userData => {
      const gender = userData.userData.gender === "male" ? 2 : 1;
      const statusBody = userData.formData?.["وضعیت بدنی"];

      if (statusBody) {
         const physicalIndex = physicalIndexData(statusBody, gender);

         if (physicalIndex.fatPercentage !== null && physicalIndex.bestWeight !== null) {
            bestWeightCount++;

            fatPercentage += physicalIndex.fatPercentage;
            bestWeight += physicalIndex.bestWeight;
         }
      }
   })

   if (fatPercentage && bestWeight && bestWeightCount) {
      fatPercentage /= bestWeightCount;
      bestWeight /= bestWeightCount;

      const result = {
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
      let count = 0;
      
      usersData.forEach(userData => {
         const statusBody = userData.formData?.["وضعیت بدنی"];
         const weight = statusBody?.["وزن"]?.value;
         const userGender = userData.userData.gender === "male" ? 2 : 1;
   
         if (statusBody && weight) {
            count++;
            const bodyComposition = bodyCompositionData(fatPercentage, bestWeight, Number(weight), userGender);
   
            Object.entries(bodyComposition).forEach(([key, value]) => {
               result[key as keyof typeof result] += value;
            })
         }
      });
   
      Object.keys(result).forEach(key => {
         result[key as keyof typeof result] /= count;
      })

      return {
         result,
         count
      };
   }

   return null;
}

export type bodyCompositionAvgType = ReturnType<typeof bodyCompositionAvg>;
export default bodyCompositionAvg;