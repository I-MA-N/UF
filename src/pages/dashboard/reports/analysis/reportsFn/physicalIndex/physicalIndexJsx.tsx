import FormDataType from "../../../../../../types/FormDataType"
import { bodyCompositionType } from "./bodyCompositionData"
import BodyCompositionTable from "./components/BodyCompositionTable"
import StatusBodyTable from "./components/StatusBodyTable"
import { physicalIndexType } from "./physicalIndexData"

function physicalIndexJsx(statusBody: FormDataType[""], physicalData: physicalIndexType, compositionData: bodyCompositionType | null) {
   return (
      <>
         <div className="mb-8">
            <h2 className="mb-2 text-center text-sm lg:text-lg">شاخص های بدنی</h2>
            <div className="w-full flex gap-6">
               <StatusBodyTable statusBody={statusBody} />

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
                     WHR = نسبت کمر به لگن |
                     درصد چربی = شاخص توده بدن
                  </p>
               </div>
            </div>
         </div>

         <BodyCompositionTable data={compositionData} />
      </>
   )
}

export default physicalIndexJsx