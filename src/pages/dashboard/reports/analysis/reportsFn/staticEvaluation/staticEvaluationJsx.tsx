import staticEvaluationData from "../../../../tests/data/testsData/staticEvaluation";
import ImageCell from "./components/ImageCell";
import TableRow from "./components/TableRow";
import { staticEvaluationType } from "./staticEvaluationData";

function staticEvaluationJsx(data: staticEvaluationType) {
   return (
      <div className="grid grid-cols-1 divide-y-2 divide-secondary">
         {
            staticEvaluationData.map((part, index) => (
               <div key={index} className="space-y-8">
                  {
                     part.map(section => (
                        <table
                           key={section.name}
                           className="w-full min-w-[600px] text-center border border-white"
                        >
                           <thead>
                              <tr>
                                 <th colSpan={4} className="py-4 text-sm lg:text-lg bg-white text-primary">{section.nameFA}</th>
                                 <th rowSpan={2}>تصویر گرفته شده</th>
                              </tr>
                              <tr>
                                 <th className="py-3">ناهنجاری</th>
                                 <th className="py-3 text-secondary">طبیعی</th>
                                 <th className="py-3 text-yellow">خفیف</th>
                                 <th className="py-3 text-red">شدید</th>
                              </tr>
                           </thead>
                           <tbody>
                              {
                                 section.questions.map((input, index) => {
                                    const foundProblem = data?.find(problem => problem.title === input.title);
                                    return (
                                       <tr key={input.id}>
                                          <TableRow
                                             title={input.title}
                                             images={input.images}
                                             imgDirection={input.direction}
                                             problem={foundProblem}
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
   )
}

export default staticEvaluationJsx;