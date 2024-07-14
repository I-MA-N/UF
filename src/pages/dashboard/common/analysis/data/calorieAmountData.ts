type PhysicalIndexPropsType = {
   data: {
      'قد': number,
      'وزن': number,
      'سن': number,
      'میزان فعالیت': number,
      'متابولیسم پایه': number
   },
}

const dataCalorieAmount = {
   'BMI': 0,
   'metabolismBasic': 0,
   'matabolismNeeded': 0,
   'BMIResult': '',
   'metaBolismTargetText': '',
   'metaBolismTarget': 0,
   'breakFast': 0,
   'lunch': 0,
   'dinner': 0,
   'snack': 0,
   'carbohydrateTotal': 0,
   'carbohydrateBreakFast': 0,
   'carbohydrateLunch': 0,
   'carbohydrateDinner': 0,
   'carbohydrateSnack': 0,
   'proteinTotal': 0,
   'proteinBreakFast': 0,
   'proteinLunch': 0,
   'proteinDinner': 0,
   'proteinSnack': 0,
   'fatTotal': 0,
   'fatBreakFast': 0,
   'fatLunch': 0,
   'fatDinner': 0,
   'fatSnack': 0,
}

function calorieAmountData({ data }: PhysicalIndexPropsType) {
   dataCalorieAmount.BMI = data['وزن'] / Math.pow(data['قد'] / 100, 2);
   dataCalorieAmount.metabolismBasic = data['متابولیسم پایه'];
   
   dataCalorieAmount.matabolismNeeded;
   if (data['میزان فعالیت'] == 1) {
      dataCalorieAmount.matabolismNeeded = dataCalorieAmount.metabolismBasic * 1.2;
   } else if (data['میزان فعالیت'] == 2) {
      dataCalorieAmount.matabolismNeeded = dataCalorieAmount.metabolismBasic * 1.375;
   } else if (data['میزان فعالیت'] == 3) {
      dataCalorieAmount.matabolismNeeded = dataCalorieAmount.metabolismBasic * 1.55;
   } else if (data['میزان فعالیت'] == 4) {
      dataCalorieAmount.matabolismNeeded = dataCalorieAmount.metabolismBasic * 1.725;
   } else {
      dataCalorieAmount.matabolismNeeded = dataCalorieAmount.metabolismBasic * 1.9;
   }
   dataCalorieAmount.BMIResult = '';
   if (dataCalorieAmount.BMI < 16) {
      dataCalorieAmount.BMIResult = 'لاغر شدید';
   } else if (dataCalorieAmount.BMI < 17) {
      dataCalorieAmount.BMIResult = 'لاغر خفیف';
   } else if (dataCalorieAmount.BMI < 18.5) {
      dataCalorieAmount.BMIResult = 'لاغر متوسط';
   } else if (dataCalorieAmount.BMI < 25) {
      dataCalorieAmount.BMIResult = 'طبیعی';
   } else if (dataCalorieAmount.BMI < 30) {
      dataCalorieAmount.BMIResult = 'اضافه وزن';
   } else if (dataCalorieAmount.BMI < 35) {
      dataCalorieAmount.BMIResult = 'چاق';
   } else {
      dataCalorieAmount.BMIResult = 'خیلی چاق';
   }
   dataCalorieAmount.metaBolismTargetText;
   if (dataCalorieAmount.BMIResult === "لاغر شدید") {
      dataCalorieAmount.metaBolismTargetText = "افزایش 1000 کیلوکالری";
   } else if (dataCalorieAmount.BMIResult === "لاغر متوسط") {
      dataCalorieAmount.metaBolismTargetText = "افزایش 1000 کیلوکالری";
   } else if (dataCalorieAmount.BMIResult === "لاغر خفیف") {
      dataCalorieAmount.metaBolismTargetText = "افزایش 1000 کیلوکالری";
   } else if (dataCalorieAmount.BMIResult === "طبیعی") {
      dataCalorieAmount.metaBolismTargetText = "نیازی به افزایش یا کاهش کالری ندارید";
   } else if (dataCalorieAmount.BMIResult === "اضافه وزن") {
      dataCalorieAmount.metaBolismTargetText = "کاهش 500 کیلوکالری";
   } else if (dataCalorieAmount.BMIResult === "چاق") {
      dataCalorieAmount.metaBolismTargetText = "کاهش 500 کیلوکالری";
   } else {
      dataCalorieAmount.metaBolismTargetText = "کاهش 500 کیلوکالری";
   }
   dataCalorieAmount.metaBolismTarget;
   if (dataCalorieAmount.metaBolismTargetText === "افزایش 1000 کیلوکالری") {
      dataCalorieAmount.metaBolismTarget = dataCalorieAmount.matabolismNeeded + 1000;
   } else if (dataCalorieAmount.metaBolismTargetText === "نیازی به افزایش یا کاهش کالری ندارید") {
      dataCalorieAmount.metaBolismTarget = dataCalorieAmount.matabolismNeeded;
   } else {
      dataCalorieAmount.metaBolismTarget = dataCalorieAmount.matabolismNeeded - 500;
   }

   dataCalorieAmount.breakFast = dataCalorieAmount.metaBolismTarget * 0.25;
   dataCalorieAmount.lunch = dataCalorieAmount.metaBolismTarget * 0.35;
   dataCalorieAmount.dinner = dataCalorieAmount.metaBolismTarget * 0.275;
   dataCalorieAmount.snack = dataCalorieAmount.metaBolismTarget * 0.125;

   dataCalorieAmount.carbohydrateTotal = (dataCalorieAmount.metaBolismTarget * 0.6) / 4;
   dataCalorieAmount.carbohydrateBreakFast = dataCalorieAmount.carbohydrateTotal * 0.25;
   dataCalorieAmount.carbohydrateLunch = dataCalorieAmount.carbohydrateTotal * 0.35;
   dataCalorieAmount.carbohydrateDinner = dataCalorieAmount.carbohydrateTotal * 0.275;
   dataCalorieAmount.carbohydrateSnack = dataCalorieAmount.carbohydrateTotal * 0.125;

   dataCalorieAmount.proteinTotal = (dataCalorieAmount.metaBolismTarget * 0.15) / 4;
   dataCalorieAmount.proteinBreakFast = dataCalorieAmount.proteinTotal * 0.25;
   dataCalorieAmount.proteinLunch = dataCalorieAmount.proteinTotal * 0.35;
   dataCalorieAmount.proteinDinner = dataCalorieAmount.proteinTotal * 0.275;
   dataCalorieAmount.proteinSnack = dataCalorieAmount.proteinTotal * 0.125;

   dataCalorieAmount.fatTotal = (dataCalorieAmount.metaBolismTarget * 0.25) / 9;
   dataCalorieAmount.fatBreakFast = dataCalorieAmount.fatTotal * 0.25;
   dataCalorieAmount.fatLunch = dataCalorieAmount.fatTotal * 0.35;
   dataCalorieAmount.fatDinner = dataCalorieAmount.fatTotal * 0.275;
   dataCalorieAmount.fatSnack = dataCalorieAmount.fatTotal * 0.125;

   return dataCalorieAmount;
}

export type dataCalorieAmountType = typeof dataCalorieAmount;
export default calorieAmountData;