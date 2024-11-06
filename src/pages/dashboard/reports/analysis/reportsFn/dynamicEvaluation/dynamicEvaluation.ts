import FormDataType from "../../../../../../types/FormDataType";
import dynamicEvaluationJsx from "./dynamicEvaluationJsx";

function dynamicEvaluation(formData: FormDataType) {
   const data = formData['ارزیابی پویا'];

   return dynamicEvaluationJsx(data);
}

export default dynamicEvaluation;