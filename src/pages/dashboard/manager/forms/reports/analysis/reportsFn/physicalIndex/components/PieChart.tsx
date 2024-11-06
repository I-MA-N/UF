import { PieChart as Pie } from '@mui/x-charts/PieChart';
import { MakeOptional } from '@mui/x-charts/internals';
import { PieValueType } from '@mui/x-charts';

type PieChartProps = {
   data: {
      title: string,
      count: number,
      data: MakeOptional<PieValueType, "id">[]
   }
}

function PieChart({ data }: PieChartProps) {
   return (
      <div className="flex flex-col items-center gap-1.5 lg:gap-3">
         <span>{data.title} ({data.count})</span>

         <div className='w-[120px] lg:w-[150px] h-[100px] lg:h-[120px]'>
            <Pie
               series={[
                  {
                     data: data.data,
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
      </div>
   );
};

export default PieChart;