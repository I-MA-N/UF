import FormDataType from "../../../../../../types/FormDataType";
import staticEvaluationData from "./staticEvaluationData";
import staticEvaluationJsx from "./staticEvaluationJsx";

function staticEvaluation(formData: FormDataType) {
   const data = staticEvaluationData(formData["ناهنجاری ها"]);

   return {
      jsx: staticEvaluationJsx(data),
      data
   }
}

export default staticEvaluation;