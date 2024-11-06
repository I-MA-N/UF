import OrgMemberData from "../../../../../../../../types/OrgMemberData";
import dynamicEvaluation from "../../../../../../tests/data/testsData/dynamicEvaluation";
import DynamicChart from "./components/DynamicChart";
import generateReportData from "./generateReportData";

function dynamicEvaluationAvgJsx(usersData: OrgMemberData[]) {
   return (
      <div className="grid grid-cols-1 divide-y-2 divide-secondary">
         {
            dynamicEvaluation.map((part, index) => (
               <div key={index} className="space-y-12 pt-8 mt-8 first:pt-0 first:mt-0">
                  {
                     part.map(section => {
                        const resultArr = generateReportData(usersData, section);

                        return (
                           <div key={section.name}>
                              <div className="flex justify-center mb-2">
                                 <span className="text-sm lg:text-lg border-b pb-1">{section.nameFA}:</span>
                              </div>

                              <DynamicChart
                                 key={section.name}
                                 reportData={resultArr}
                              />
                           </div>
                        )
                     })
                  }
               </div>
            ))
         }
      </div>
   );
};

export default dynamicEvaluationAvgJsx;