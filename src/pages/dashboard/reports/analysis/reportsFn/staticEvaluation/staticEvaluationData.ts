import FormDataType from "../../../../../../types/FormDataType";
import ProblemType from "../../../../../../types/ProblemType";

function staticEvaluationData(formData: FormDataType[""]) {
   if (formData) {
      const problemsArr: ProblemType[] = Object.entries(formData).map(item => {
         const title = item[0];
         const value = item[1]?.value;
         const isLastValueByAI = item[1]?.isLastValueByAI;

         return {
            title,
            status: value === '5' ? 0 : value === '3' ? 1 : 2,
            isLastValueByAI
         }
      });

      return problemsArr;
   }

   return null;
}

export type staticEvaluationType = ReturnType<typeof staticEvaluationData>;
export default staticEvaluationData;