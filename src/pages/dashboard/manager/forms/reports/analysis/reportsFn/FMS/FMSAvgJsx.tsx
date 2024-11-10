import { BarChart } from "@mui/x-charts/BarChart";
import { FMSAvgType } from "./FMSAvg";

function FMSAvgJsx(data: FMSAvgType) {
   return (
      <div>
         <div className="w-[600px] h-[400px] mx-auto p-8 lg:p-0">
            <BarChart
               dataset={data}
               xAxis={[
                  {
                     scaleType: "band",
                     dataKey: "id",
                     tickPlacement: "middle",
                     valueFormatter: (value, { location }) => {
                        if (location === "tooltip") {
                           const obj = data.find(result => result.id === value);
                           if (obj) return `${obj.name} (${obj.count})`;
   
                           return value;
                        }

                        return value;
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
                        const obj = data[dataIndex];
                        return (
                           <div className="flex flex-col items-center gap-1">
                              <span>{value}</span>

                              <img
                                 alt={`${obj.name} image`}
                                 className="w-[120px]"
                                 src={`/images/testsImages/${obj.image}`}
                              />
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

         {/* <p className="text-sm lg:text-base mx-auto">نمره میانگین آزمون عملکردی وضعیت بدنی = {data.finalScore.toFixed(2)}</p> */}
      </div>
   );
};

export default FMSAvgJsx;