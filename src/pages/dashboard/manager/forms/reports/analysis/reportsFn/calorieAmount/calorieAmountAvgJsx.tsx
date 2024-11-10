import PieChart from "../physicalIndex/components/PieChart";
import { calorieAmountAvgType } from "./calorieAmountAvg";

function calorieAmountAvgJsx(data: calorieAmountAvgType) {
   return (
      <div className="flex gap-12 justify-center pb-10">
         <PieChart
            key={data.activityRateCount.id}
            data={{
               count: data.activityRateCount.count,
               title: data.activityRateCount.title,
               data: data.activityRateCount.data
            }}
         />

         <PieChart
            key={data.metaBolismTargetTextCount.id}
            data={{
               count: data.metaBolismTargetTextCount.count,
               title: data.metaBolismTargetTextCount.title,
               data: data.metaBolismTargetTextCount.data
            }}
         />
      </div>
   )
}

export default calorieAmountAvgJsx;