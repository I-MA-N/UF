import { questionariesType } from "./questionariesData"

function questionariesJsx(data: questionariesType) {
   return (
      <table className="w-full text-center border border-white" cellPadding="6px">
         <thead>
            <tr>
               <th>
                  پرسشنامه
                  <br />
                  (بازه نمره)
               </th>
               <th>
                  سلامت عمومی
                  <br />
                  (0-84)
               </th>
               <th>
                  آمادگی بدنی ادراک شده
                  <br />
                  (0-48)
               </th>
               <th>
                  کیفیت زندگی (سلامت جسمی)
                  <br />
                  (0-100)
               </th>
               <th>
                  کیفیت زندگی (سلامت روانی)
                  <br />
                  (0-100)
               </th>
               <th>
                  شادکامی
                  <br />
                  (0-87)
               </th>
               <th>
                  رضایت شغلی
                  <br />
                  (0-76)
               </th>
               <th>
                  عملکرد شغلی
                  <br />
                  (0-45)
               </th>
            </tr>
         </thead>
         <tbody>
            <tr>
               <td>نمره</td>
               <td>{data.generalHealth !== null ? data.generalHealth : '-'}</td>
               <td>{data.physicalReadiness !== null ? data.physicalReadiness : '-'}</td>
               <td>{data.salamatJesmi?.toFixed(2) || '-'}</td>
               <td>{data.salamatRavani?.toFixed(2) || '-'}</td>
               <td>{data.happinness !== null ? data.happinness : '-'}</td>
               <td>{data.jobSatisfaction !== null ? data.jobSatisfaction : '-'}</td>
               <td>{data.jobPerformance !== null ? data.jobPerformance : '-'}</td>
            </tr>
            <tr>
               <td>تفسیر</td>
               <td>{data.generalHealthResult || '-'}</td>
               <td>{data.physicalReadinessResult || '-'}</td>
               <td>{data.salamatJesmiResult || '-'}</td>
               <td>{data.salamatRavaniResult || '-'}</td>
               <td>{data.happinnessResult || '-'}</td>
               <td>{data.jobSatisfactionResult || '-'}</td>
               <td>{data.jobPerformanceResult || '-'}</td>
            </tr>
            <tr>
               <td>تذکر:</td>
               <td colSpan={7}>{data.activityReadinessResult}</td>
            </tr>
         </tbody>
      </table>
   )
}

export default questionariesJsx