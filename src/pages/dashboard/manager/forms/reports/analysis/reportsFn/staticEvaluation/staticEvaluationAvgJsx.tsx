import { BarChart } from "@mui/x-charts/BarChart";
import { axisClasses } from "@mui/x-charts";
import { staticEvaluationAvgType } from "./staticEvaluationAvg";

function staticEvaluationAvgJsx(reportData: staticEvaluationAvgType) {
   return (
      <div className="w-[500px] h-[1100px] lg:w-[600px] lg:h-[1200px] mx-auto pb-8">
         <BarChart
            dataset={reportData}
            yAxis={[
               { scaleType: "band", dataKey: "name", tickSize: 10 }
            ]}
            series={[
               { dataKey: "five", color: "#4CB648", label: 'طبیعی' },
               { dataKey: "three", color: "#FCC72C", label: 'خفیف' },
               { dataKey: "one", color: "#FF0000", label: 'شدید' }
            ]}
            xAxis={[
               {
                  max: 100,
                  valueFormatter: (value) => `${value}%`,
                  reverse: true,
               },
            ]}
            layout="horizontal"
            sx={{
               [`& .${axisClasses.directionY} .${axisClasses.tickLabel}`]: {
                  direction: "ltr"
               },
            }}
            slotProps={{
               legend: {
                  labelStyle: {
                     fontSize: 13
                  }
               }
            }}
            margin={{
               right: 0,
            }}
         />
      </div>
   );
};

export default staticEvaluationAvgJsx;