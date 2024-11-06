import FormDataType from "../../../../../../types/FormDataType";
import FMSData from "./FMSData";
import FMSJsx from "./FMSJsx";

function FMS(formData: FormDataType) {
   const testData = formData['عملکردی وضعیت بدنی'];
   const data = FMSData(testData);

   return FMSJsx(testData, data);
}

export default FMS;