import FormDataType from "../../../../../../types/FormDataType";
import questionariesData from "./questionariesData";
import questionariesJsx from "./questionariesJsx";

function questionaries(formData: FormDataType) {
   const data = questionariesData(formData);

   return {
      jsx: questionariesJsx(data),
      data
   }
}

export default questionaries;