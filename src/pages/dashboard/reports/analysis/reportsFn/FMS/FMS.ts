import FormDataType from "../../../../../../types/FormDataType";
import FMSData from "./FMSData";
import FMSJsx from "./FMSJsx";

function FMS(formData: FormDataType) {
   const testData = formData['عملکردی وضعیت بدنی'];
   const data = FMSData(testData);

   return {
      jsx: FMSJsx(testData, data),
      data
   }
}

export default FMS;