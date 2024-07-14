import { BarChart } from "@mui/x-charts/BarChart";
import { dataFMSAvgType } from "../data/FMSAvg";

function FMSAvgJsx(data: dataFMSAvgType) {
   return (
      <div>
         <div className="w-[600px] h-[400px] mx-auto p-8 lg:p-0">
            <BarChart
               dataset={data.resultArr}
               xAxis={[
                  {
                     scaleType: "band",
                     dataKey: "shortName",
                     tickPlacement: "middle",
                     valueFormatter: (value, context) => {
                        if (context.location === "tick") {
                           return value;
                        }

                        const obj = data.resultArr.find(result => result.shortName === value);
                        return obj?.name;
                     }
                  }
               ]}
               series={[
                  {
                     dataKey: "value",
                     color: "#4CB648",
                     label: 'میانگین',
                     // @ts-ignore
                     valueFormatter: (value, { dataIndex }) => {
                        const obj = data.resultArr[dataIndex];
                        return (
                           <div className="flex flex-col items-center gap-1">
                              <span>{value}</span>
                              <img className="w-[120px]" src={obj.src} alt={`${obj.name} image`} />
                           </div>
                        )
                     }
                  },
               ]}
               yAxis={[
                  {
                     max: 3,
                  },
               ]}
               slotProps={{
                  legend: {
                     hidden: true
                  },
               }}
               margin={{
                  right: 0,
                  top: 10,
               }}
            />
         </div>

         <p className="text-sm lg:text-base mx-auto">نمره میانگین آزمون عملکردی وضعیت بدنی = {data.finalScore.toFixed(2)}</p>
      </div>
   );
};

export default FMSAvgJsx;