import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";

type GaugeChartProps = {
   value: number,
   valueMax: number
}

function GaugeChart({ value, valueMax }: GaugeChartProps) {
   return (
      <Gauge
         value={value}
         valueMax={valueMax}
         text={`${valueMax} / ${value.toFixed(2)}`}
         startAngle={-90}
         endAngle={90}
         innerRadius={60}
         cornerRadius={5}
         sx={{
            [`& .${gaugeClasses.valueText}`]: {
               fontSize: 17,
               transform: 'translate(0px, -10px)',
            },
            [`& .${gaugeClasses.valueArc}`]: {
               fill: '#4CB648',
            },
            [`& .${gaugeClasses.referenceArc}`]: {
               fill: '#E4F4FD',
            },
            '@media (min-width: 1024px)': {
               [`& .${gaugeClasses.valueText}`]: {
                  fontSize: 19,
                  transform: 'translate(0px, -10px)',
               },
            }
         }}
      />
   );
};

export default GaugeChart;