import { LineChart } from "@mui/x-charts";

type DynamicChartPorps = {
   reportData: {
      name: string,
      src: string,
      value: number
   }[]
}

function DynamicChart({ reportData }: DynamicChartPorps) {
   return (
      <div className="w-[400px] h-[400px] lg:w-[600px] lg:h-[300px] mx-auto">
         <LineChart
            dataset={reportData}
            xAxis={[
               { 
                  scaleType: "band",
                  dataKey: "name",
                  tickLabelInterval: () => false,
                  disableTicks: true
               }
            ]}
            series={[
               { 
                  dataKey: "value",
                  color: "#4CB648",
                  label: 'میانگین',
                  // @ts-ignore
                  valueFormatter: (value, { dataIndex }) => {
                     const obj = reportData[dataIndex];
                     return (
                        <div className="flex flex-col items-center gap-1">
                           <span>{value}%</span>
                           <img
                              className="w-[120px]" 
                              src={`images/testsImages/dynamicEvaluation/${obj.src}`}
                           />
                        </div>
                     )
                  }
               },
            ]}
            yAxis={[
               {
                  max: 100,
                  valueFormatter: (value) => `${value}%`,
               },
            ]}
            slotProps={{
               legend: {
                  hidden: true
               }
            }}
            margin={{
               right: 0,
               bottom: 10,
               top: 10
            }}
         />
      </div>
   );
};

export default DynamicChart;