import FormDataType from "../../../../../../types/FormDataType";
import dynamicEvaluationData from "../../../../tests/data/testsData/dynamicEvaluation";
import ImageCell from "../staticEvaluation/components/ImageCell";
import SampleImageModal from "./components/SampleImageModal";
import TableRow from "./components/TableRow";

function dynamicEvaluationJsx(data: FormDataType[""]) {
   return (
      <div className="grid grid-cols-1 divide-y-2 divide-secondary">
         {
            dynamicEvaluationData.map((part, index) => (
               <div key={index} className="space-y-8 pt-8 mt-8 first:pt-0 first:mt-0">
                  {
                     part.map(section => (
                        <table
                           key={section.name}
                           className="w-full text-center border border-white"
                        >
                           <thead>
                              <tr>
                                 <th colSpan={4} className="py-4 text-sm lg:text-lg bg-white text-primary relative">
                                    {section.nameFA}

                                    <SampleImageModal
                                       sectionName={section.name}
                                       sectionNameFA={section.nameFA}
                                    />
                                 </th>
                              </tr>
                              <tr>
                                 <th className="py-3">حرکت</th>
                                 <th className="py-3">نتیجه</th>
                                 <th className="py-3">تصویر ناهنجاری</th>
                                 <th rowSpan={2}>تصویر گرفته شده</th>
                              </tr>
                           </thead>
                           <tbody>
                              {
                                 section.questions.map((input, index) => {
                                    const inputData = data?.[input.serverID];
                                    
                                    return (
                                       <tr key={input.serverID}>
                                          <TableRow
                                             title={input.title}
                                             image={input.src}
                                             imgDirection={input.direction}
                                             description={input.problemDescription}
                                             inputData={inputData}
                                          />
                                          {index === 0 &&
                                             <ImageCell sectionName={section.name} />
                                          }
                                       </tr>
                                    )
                                 })
                              }
                           </tbody>
                        </table>
                     ))
                  }
               </div>
            ))
         }
      </div>
   );
};

export default dynamicEvaluationJsx;