import FormDataType from "../../../../../../types/FormDataType";
import staticEvaluationJsx from "./staticEvaluationJsx";

function staticEvaluation(formData: FormDataType) {
   const data = formData["ناهنجاری ها"];

   return staticEvaluationJsx(data);
}

export default staticEvaluation;