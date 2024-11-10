import GaugeChart from "./GaugeChart";

type QuestionariesChartProps = {
   title: string,
   valueResult: 'بدتر از متوسط' | 'بهتر از متوسط' | '-',
   value: number,
   valueMax: number,
}

function QuestionariesChart({ title, valueResult, value, valueMax }: QuestionariesChartProps) {
   return (
      <div className="flex flex-col items-center">
         <div className="w-[180px] lg:w-[200px] h-[100px]">
            <GaugeChart
               value={value}
               valueMax={valueMax}
            />
         </div>

         <span className="text-sm lg:text-base mb-1">{title}</span>

         <span
            className={`
               text-xs lg:text-sm 
               ${valueResult === 'بدتر از متوسط' ? 'text-yellow' :
                  valueResult === 'بهتر از متوسط' ? 'text-secondary' :
                     'text-white'
               }
            `}
         >
            {valueResult}
         </span>
      </div>
   )
}

export default QuestionariesChart;