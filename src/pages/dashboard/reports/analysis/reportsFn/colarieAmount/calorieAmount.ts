import FormDataType from "../../../../../../types/FormDataType";
import calorieAmountData from "./calorieAmountData";
import calorieAmountJsx from "./calorieAmountJsx";

function calorieAmount(formData: FormDataType, gender: number) {
   const data = calorieAmountData(
      formData["وضعیت بدنی"],
      formData["مقدار تحرک"],
      gender
   );

   return calorieAmountJsx(data);
}

export default calorieAmount;