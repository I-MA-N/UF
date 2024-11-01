import FormDataType from "../../../../../../types/FormDataType"
import PhysicalIndexMainTable from "../../../../common/analysis/jsx/components/PhysicalIndexMainTable"
import { bodyCompositionType } from "./bodyCompositionData"
import BodyCompositionJsx from "./BodyCompositionTable"
import { physicalIndexType } from "./physicalIndexData"

function physicalIndexJsx(statusBody: FormDataType[""], physicalData: physicalIndexType, compositionData: bodyCompositionType | null) {
   return (
      <>
         <div>
            <h2 className="mb-2 text-center text-sm lg:text-lg">شاخص های بدنی</h2>
            <div className="w-full flex gap-6">
               <PhysicalIndexMainTable statusBody={statusBody} />

               <div className="w-full flex flex-col gap-2">
                  <table className="w-full h-full text-center border border-white" cellPadding="6px">
                     <thead>
                        <tr>
                           <th>نوع شاخص </th>
                           <th> جواب </th>
                           <th> نتیجه </th>
                           <th> دامنه طبیعی </th>
                        </tr>
                     </thead>
                     <tbody dir="ltr">
                        <tr>
                           <td>BMI </td>
                           <td>{physicalData.BMI?.toFixed(2) || '-'} </td>
                           <td>{physicalData.BMIResult || '-'} </td>
                           <td>{
                              (physicalData.minBMI && physicalData.maxBMI)
                                 ?
                                 `${physicalData.minBMI.toFixed(2)} _ ${physicalData.maxBMI.toFixed(2)}`
                                 :
                                 '-'
                           }</td>
                        </tr>
                        <tr>
                           <td>وزن ایده آل </td>
                           <td>{physicalData.bestWeight?.toFixed(2) || '-'} </td>
                           <td>{physicalData.weightMinusBestWeightResult || '-'} </td>
                           <td>{
                              (physicalData.minWeightPeriod && physicalData.maxWeightPeriod)
                                 ?
                                 `${physicalData.minWeightPeriod.toFixed(2)} _ ${physicalData.maxWeightPeriod.toFixed(2)}`
                                 :
                                 '-'
                           }</td>
                        </tr>
                        <tr>
                           <td>WHR </td>
                           <td>{physicalData.WHR?.toFixed(2) || '-'} </td>
                           <td>{physicalData.WHRResult || '-'} </td>
                           <td> {physicalData.WHRPeriod || '-'} </td>
                        </tr>
                        <tr>
                           <td>درصد چربی</td>
                           <td>{physicalData.fatPercentage?.toFixed(2) || '-'} </td>
                           <td>{physicalData.fatPercentageResult || '-'} </td>
                           <td>{physicalData.fatPercentagePeriod || '-'} </td>
                        </tr>
                     </tbody>
                  </table>
                  <p className="text-[10px] lg:text-xs leading-4 text-yellow">
                     BMI = نسبت کمر به لگن |
                     WHR = شاخص توده بدن
                  </p>
               </div>
            </div>
         </div>

         <BodyCompositionJsx data={compositionData} />
      </>
   )
}

export default physicalIndexJsx