import PhysicalIndexMainTable from "../../../../../common/analysis/jsx/components/PhysicalIndexMainTable";
import { dataPhysicalIndexChartType } from "../data/physicalIndexChartData";
import PieChart from "./components/PieChart";

function physicalIndexAvgJsx(data: any, statusBody: any, chartData: dataPhysicalIndexChartType) {
   return (
      <div>
         <h2 className="mb-2 text-center text-sm lg:text-lg">شاخص های بدنی</h2>

         <div className="flex gap-4">
            <PhysicalIndexMainTable statusBody={statusBody} />

            <div className="w-full flex flex-col gap-2">
               <table className="w-full h-full text-center border border-white" cellPadding="6px">
                  <thead>
                     <tr>
                        <th>نوع شاخص </th>
                        <th> جواب </th>
                        <th> دامنه طبیعی </th>
                     </tr>
                  </thead>
                  <tbody>
                     <tr>
                        <td>BMI </td>
                        <td>{data.BMI.toFixed(2)} </td>
                        <td>{data.minBMI.toFixed(2)} _ {data.maxBMI.toFixed(2)} </td>
                     </tr>
                     <tr>
                        <td>وزن ایده آل </td>
                        <td>{data.bestWeight.toFixed(2)} </td>
                        <td>{data.minWeightPeriod.toFixed(2)} _ {data.maxWeightPeriod.toFixed(2)} </td>
                     </tr>
                     <tr>
                        <td>WHR </td>
                        <td>{data.WHR.toFixed(2)} </td>
                        <td> {data.WHRPeriod} </td>
                     </tr>
                     <tr>
                        <td>درصد چربی</td>
                        <td>{data.fatPercentage.toFixed(2)} </td>
                        <td>{data.fatPercentagePeriod} </td>
                     </tr>
                  </tbody>
               </table>
               <p className="text-[10px] lg:text-xs leading-4 text-yellow">
                  BMI = نسبت کمر به لگن |
                  WHR = شاخص توده بدن
               </p>
            </div>
         </div>

         <div className="flex items-center justify-center gap-8 mt-8">
            {
               chartData.map(chart => (
                  <PieChart
                     key={chart.key}
                     chart={chart}
                  />
               ))
            }
         </div>
      </div>
   )
}

export default physicalIndexAvgJsx;