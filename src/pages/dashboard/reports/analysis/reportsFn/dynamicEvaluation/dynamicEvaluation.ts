import FormDataType from "../../../../../../types/FormDataType";
import dynamicEvaluationJsx from "./dynamicEvaluationJsx";

function dynamicEvaluation(formData: FormDataType) {
   const data = formData['ارزیابی پویا'];

   return {
      jsx: dynamicEvaluationJsx(data),
      data
   }
}

export default dynamicEvaluation;