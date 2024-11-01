import FormDataType from "../../../../../../types/FormDataType";

function calorieAmountData(statusBodyData: FormDataType[""], activityRateData: FormDataType[""], gender: number) {
   const calorieAmount = {
      'metabolismBasic': null as number | null,
      'BMI': null as number | null,
      'BMIResult': null as string | null,
      'matabolismNeeded': null as number | null,
      'metaBolismTarget': null as number | null,
      'metaBolismTargetText': null as string | null,
      'breakFast': null as number | null,
      'lunch': null as number | null,
      'dinner': null as number | null,
      'snack': null as number | null,
      'carbohydrateTotal': null as number | null,
      'carbohydrateBreakFast': null as number | null,
      'carbohydrateLunch': null as number | null,
      'carbohydrateDinner': null as number | null,
      'carbohydrateSnack': null as number | null,
      'proteinTotal': null as number | null,
      'proteinBreakFast': null as number | null,
      'proteinLunch': null as number | null,
      'proteinDinner': null as number | null,
      'proteinSnack': null as number | null,
      'fatTotal': null as number | null,
      'fatBreakFast': null as number | null,
      'fatLunch': null as number | null,
      'fatDinner': null as number | null,
      'fatSnack': null as number | null,
   }
   
   const weight = Number(statusBodyData?.['وزن']?.value);
   const height = Number(statusBodyData?.['قد']?.value);
   const age = Number(statusBodyData?.['سن']?.value);
   const activityRate = Number(activityRateData?.["مقدار تحرک"]?.value);

   if (weight && height && age) {
      calorieAmount.metabolismBasic = 9.247 * weight + 3.098 * height - 4.33 * age + 447.593;
      if (gender === 2) {
         calorieAmount.metabolismBasic = 13.397 * weight + 4.799 * height - 5.677 * age + 88.362;
      }
      calorieAmount.BMI = weight / Math.pow(height / 100, 2);

      if (activityRate) {
         if (activityRate == 1) {
            calorieAmount.matabolismNeeded = calorieAmount.metabolismBasic * 1.2;
         } else if (activityRate == 2) {
            calorieAmount.matabolismNeeded = calorieAmount.metabolismBasic * 1.375;
         } else if (activityRate == 3) {
            calorieAmount.matabolismNeeded = calorieAmount.metabolismBasic * 1.55;
         } else if (activityRate == 4) {
            calorieAmount.matabolismNeeded = calorieAmount.metabolismBasic * 1.725;
         } else {
            calorieAmount.matabolismNeeded = calorieAmount.metabolismBasic * 1.9;
         }
   
         if (calorieAmount.BMI < 16) {
            calorieAmount.BMIResult = 'لاغر شدید';
         } else if (calorieAmount.BMI < 17) {
            calorieAmount.BMIResult = 'لاغر خفیف';
         } else if (calorieAmount.BMI < 18.5) {
            calorieAmount.BMIResult = 'لاغر متوسط';
         } else if (calorieAmount.BMI < 25) {
            calorieAmount.BMIResult = 'طبیعی';
         } else if (calorieAmount.BMI < 30) {
            calorieAmount.BMIResult = 'اضافه وزن';
         } else if (calorieAmount.BMI < 35) {
            calorieAmount.BMIResult = 'چاق';
         } else {
            calorieAmount.BMIResult = 'خیلی چاق';
         }
   
         if (calorieAmount.BMIResult === "لاغر شدید") {
            calorieAmount.metaBolismTargetText = "افزایش 1000 کیلوکالری";
         } else if (calorieAmount.BMIResult === "لاغر متوسط") {
            calorieAmount.metaBolismTargetText = "افزایش 1000 کیلوکالری";
         } else if (calorieAmount.BMIResult === "لاغر خفیف") {
            calorieAmount.metaBolismTargetText = "افزایش 1000 کیلوکالری";
         } else if (calorieAmount.BMIResult === "طبیعی") {
            calorieAmount.metaBolismTargetText = "نیازی به افزایش یا کاهش کالری ندارید";
         } else if (calorieAmount.BMIResult === "اضافه وزن") {
            calorieAmount.metaBolismTargetText = "کاهش 500 کیلوکالری";
         } else if (calorieAmount.BMIResult === "چاق") {
            calorieAmount.metaBolismTargetText = "کاهش 500 کیلوکالری";
         } else {
            calorieAmount.metaBolismTargetText = "کاهش 500 کیلوکالری";
         }
   
         if (calorieAmount.metaBolismTargetText === "افزایش 1000 کیلوکالری") {
            calorieAmount.metaBolismTarget = calorieAmount.matabolismNeeded + 1000;
         } else if (calorieAmount.metaBolismTargetText === "نیازی به افزایش یا کاهش کالری ندارید") {
            calorieAmount.metaBolismTarget = calorieAmount.matabolismNeeded;
         } else {
            calorieAmount.metaBolismTarget = calorieAmount.matabolismNeeded - 500;
         }
      
         calorieAmount.breakFast = calorieAmount.metaBolismTarget * 0.25;
         calorieAmount.lunch = calorieAmount.metaBolismTarget * 0.35;
         calorieAmount.dinner = calorieAmount.metaBolismTarget * 0.275;
         calorieAmount.snack = calorieAmount.metaBolismTarget * 0.125;
      
         calorieAmount.carbohydrateTotal = (calorieAmount.metaBolismTarget * 0.6) / 4;
         calorieAmount.carbohydrateBreakFast = calorieAmount.carbohydrateTotal * 0.25;
         calorieAmount.carbohydrateLunch = calorieAmount.carbohydrateTotal * 0.35;
         calorieAmount.carbohydrateDinner = calorieAmount.carbohydrateTotal * 0.275;
         calorieAmount.carbohydrateSnack = calorieAmount.carbohydrateTotal * 0.125;
      
         calorieAmount.proteinTotal = (calorieAmount.metaBolismTarget * 0.15) / 4;
         calorieAmount.proteinBreakFast = calorieAmount.proteinTotal * 0.25;
         calorieAmount.proteinLunch = calorieAmount.proteinTotal * 0.35;
         calorieAmount.proteinDinner = calorieAmount.proteinTotal * 0.275;
         calorieAmount.proteinSnack = calorieAmount.proteinTotal * 0.125;
      
         calorieAmount.fatTotal = (calorieAmount.metaBolismTarget * 0.25) / 9;
         calorieAmount.fatBreakFast = calorieAmount.fatTotal * 0.25;
         calorieAmount.fatLunch = calorieAmount.fatTotal * 0.35;
         calorieAmount.fatDinner = calorieAmount.fatTotal * 0.275;
         calorieAmount.fatSnack = calorieAmount.fatTotal * 0.125;
      }
   }

   return calorieAmount;
}

export type colarieAmountType = ReturnType<typeof calorieAmountData>;
export default calorieAmountData;