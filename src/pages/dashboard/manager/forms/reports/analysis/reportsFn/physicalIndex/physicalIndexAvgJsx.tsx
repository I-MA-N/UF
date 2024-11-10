import BodyCompositionTable from "../../../../../../reports/analysis/reportsFn/physicalIndex/components/BodyCompositionTable";
import { bodyCompositionAvgType } from "./bodyCompositionAvg";
import { bodyStatusAvgType } from "./bodyStatusAvg";
import PieChart from "./components/PieChart";
import StatusBodyTableAvg from "./components/StatusBodyTableAvg";
import { physicalIndexAvgType } from "./physicalIndexAvg";

function physicalIndexAvgJsx(statusBody: bodyStatusAvgType, physicalIndex: physicalIndexAvgType, bodyComposition: bodyCompositionAvgType) {
   return (
      <div>
         <StatusBodyTableAvg statusBody={statusBody} />

         <div className="my-8">
            <h2 className="text-center text-sm lg:text-lg">شاخص های بدنی</h2>

            <div className="flex flex-wrap items-center justify-center gap-8 my-4">
               {
                  physicalIndex.map(chart => (
                     <PieChart
                        key={chart.id}
                        data={{
                           title: chart.title,
                           count: chart.count,
                           data: chart.data
                        }}
                     />
                  ))
               }
            </div>

            <p className="text-[10px] lg:text-xs text-center leading-4 text-yellow">
               WHR = نسبت کمر به لگن |
               درصد چربی = شاخص توده بدن
            </p>
         </div>

         <BodyCompositionTable data={bodyComposition?.result} />
      </div>
   )
}

export default physicalIndexAvgJsx;