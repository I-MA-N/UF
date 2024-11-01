import FormDataType from "../../../../../../types/FormDataType";
import bodyCompositionData from "./bodyCompositionData";
import physicalIndexData from "./physicalIndexData";
import physicalIndexJsx from "./physicalIndexJsx";

function physicalIndex(formData: FormDataType, gender: number) {
   const statusBodyData = formData["وضعیت بدنی"];
   const physicalData = physicalIndexData(statusBodyData, gender);
   let compositionData = null;

   if (physicalData.fatPercentage !== null && physicalData.bestWeight !== null && statusBodyData?.["وزن"]?.value) {
      compositionData = bodyCompositionData(physicalData.fatPercentage, physicalData.bestWeight, Number(statusBodyData["وزن"].value), gender);
   }

   return {
      jsx: physicalIndexJsx(statusBodyData, physicalData, compositionData),
      data: {
         physicalIndexData: physicalData,
         bodyCompositionData: compositionData
      }
   }
}

export default physicalIndex;