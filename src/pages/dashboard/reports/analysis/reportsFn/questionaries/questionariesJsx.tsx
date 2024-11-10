import { questionariesType } from "./questionariesData"

function questionariesJsx(data: questionariesType) {
   const generateClassName = (value: string | null) => {
      if (value) {
         if (value.includes("بهتر")) return "text-secondary";
         return "text-red";
      }

      return ""
   }

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
               <td className={generateClassName(data.generalHealthResult)}>{data.generalHealthResult || '-'}</td>
               <td className={generateClassName(data.physicalReadinessResult)}>{data.physicalReadinessResult || '-'}</td>
               <td className={generateClassName(data.salamatJesmiResult)}>{data.salamatJesmiResult || '-'}</td>
               <td className={generateClassName(data.salamatRavaniResult)}>{data.salamatRavaniResult || '-'}</td>
               <td className={generateClassName(data.happinnessResult)}>{data.happinnessResult || '-'}</td>
               <td className={generateClassName(data.jobSatisfactionResult)}>{data.jobSatisfactionResult || '-'}</td>
               <td className={generateClassName(data.jobPerformanceResult)}>{data.jobPerformanceResult || '-'}</td>
            </tr>
            <tr>
               <td>تذکر:</td>
               <td colSpan={7}>{data.activityReadinessResult || '-'}</td>
            </tr>
         </tbody>
      </table>
   )
}

export default questionariesJsx