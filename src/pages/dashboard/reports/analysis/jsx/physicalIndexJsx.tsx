import { dataPhysicalIndexType } from "../../../common/analysis/data/physicalIndexData"
import PhysicalIndexMainTable from "../../../common/analysis/jsx/components/PhysicalIndexMainTable"

function physicalIndexJsx(data: dataPhysicalIndexType, statusBody: any) {
   return (
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
                  <tbody>
                     <tr>
                        <td>BMI </td>
                        <td>{data.BMI.toFixed(2)} </td>
                        <td>{data.BMIResult} </td>
                        <td>{data.minBMI.toFixed(2)} _ {data.maxBMI.toFixed(2)} </td>
                     </tr>
                     <tr>
                        <td>وزن ایده آل </td>
                        <td>{data.bestWeight.toFixed(2)} </td>
                        <td>{data.weightMinusBestWeightResult} </td>
                        <td>{data.minWeightPeriod.toFixed(2)} _ {data.maxWeightPeriod.toFixed(2)} </td>
                     </tr>
                     <tr>
                        <td>WHR </td>
                        <td>{data.WHR.toFixed(2)} </td>
                        <td>{data.WHRResult} </td>
                        <td> {data.WHRPeriod} </td>
                     </tr>
                     <tr>
                        <td>درصد چربی</td>
                        <td>{data.fatPercentage.toFixed(2)} </td>
                        <td>{data.fatPercentageResult} </td>
                        <td>{data.fatPercentagePeriod} </td>
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
   )
}

export default physicalIndexJsx