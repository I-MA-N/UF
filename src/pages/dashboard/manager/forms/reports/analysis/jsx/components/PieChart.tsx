import { PieChart as Pie } from '@mui/x-charts/PieChart';

type PieChartProps = {
   chart: {
      title: string;
      key: string;
      data: {
         id: number;
         value: number;
         label: string;
      }[];
   }
}

function PieChart({ chart }: PieChartProps) {
   return (
      <div className="w-[150px] h-[150px] flex flex-col items-center gap-1.5">
         <span>{chart.title}</span>

         <Pie
            series={[
               {
                  data: chart.data,
                  cornerRadius: 5,
               }
            ]}
            slotProps={{
               legend: {
                  hidden: true
               }
            }}
            margin={{
               bottom: 0,
               top: 0,
               right: 0,
               left: 0,
            }}
         />
      </div>
   );
};

export default PieChart;