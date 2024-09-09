import DynamicEvaluationReportObj from "../../../../../../../types/DynamicEvaluationReportObj";
import DynamicChart from "./components/DynamicChart";

function dynamicAvgJsx(reportData: DynamicEvaluationReportObj[]) {
   return (
      <div className="flex flex-col items-center gap-12">
         {
            reportData.map(report => (
               <div key={report.title}>
                  <h4 className="text-sm lg:text-lg">{report.title}:</h4>
                  <DynamicChart
                     key={report.title}
                     reportData={report.data}
                  />
               </div>
            ))
         }
      </div>
   );
};

export default dynamicAvgJsx;