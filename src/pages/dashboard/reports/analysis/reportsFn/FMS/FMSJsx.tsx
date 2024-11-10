import FormDataType from "../../../../../../types/FormDataType"
import { FMSDataType } from "./FMSData"
import img from "/images/reportsImages/FMS/index.png"

function FMSJsx(FMSData: FormDataType[""], data: FMSDataType) {
   const generateResult = (inputData: string | number | undefined) => {
      let value: string | undefined = undefined;

      if (typeof inputData === "number") {
         value = Number.isNaN(inputData) ? undefined : inputData.toString();
      } else {
         value = inputData;
      }

      let text = 'شدید';
      let color = 'red';
      if (value === undefined) {
         text = '-';
         color = 'white';
      }
      if (value === "3") {
         text = 'طبیعی';
         color = 'secondary';
      }
      if (value === "2") {
         text = 'خفیف';
         color = 'yellow';
      }

      return (
         <td className={`text-${color}`}>{text}</td>
      )
   }

   return (
      <>
         <h2 className="mb-2 text-center text-sm lg:text-lg">وضعیت عملکرد بدن در شرایط مختلف</h2>
         <div className="w-full flex gap-6">
            <table className="w-full text-center border border-white" cellPadding="6px">
               <thead>
                  <tr>
                     <th></th>
                     <th>نوع وضعیت</th>
                     <th>نتیجه</th>
                  </tr>
               </thead>

               <tbody>
                  <tr>
                     <td rowSpan={8} className="w-[250px] p-0.5 bg-[#fff]">
                        <img src={img} className="w-full" alt="report-img" />
                     </td>
                     <td>1. اسکات کامل</td>
                     {generateResult(FMSData?.['اسکات کامل']?.value)}
                  </tr>

                  <tr>
                     <td>2. عبور از مانع</td>
                     {
                        generateResult(Math.min(
                           Number(FMSData?.['عبور از مانع راست']?.value),
                           Number(FMSData?.['عبور از مانع چپ']?.value)
                        ))
                     }
                  </tr>

                  <tr>
                     <td>3. لانچ خطی</td>
                     {
                        generateResult(Math.min(
                           Number(FMSData?.['لانچ خطی راست']?.value),
                           Number(FMSData?.['لانچ خطی چپ']?.value)
                        ))
                     }
                  </tr>

                  <tr>
                     <td>4. تحرک پذیری شانه ها</td>
                     {
                        generateResult(Math.min(
                           Number(FMSData?.['تحرک پذیری شانه ها راست']?.value),
                           Number(FMSData?.['تحرک پذیری شانه ها چپ']?.value)
                        ))
                     }
                  </tr>

                  <tr>
                     <td>5. بالا آوردن فعال پا</td>
                     {
                        generateResult(Math.min(
                           Number(FMSData?.['بالا آوردن فعال پا راست']?.value),
                           Number(FMSData?.['بالا آوردن فعال پا چپ']?.value)
                        ))
                     }
                  </tr>

                  <tr>
                     <td>6. شنای سوئدی</td>
                     {generateResult(FMSData?.['شنای سوئدی']?.value)}
                  </tr>

                  <tr>
                     <td>7. ثبات چرخشی</td>
                     {
                        generateResult(Math.min(
                           Number(FMSData?.['ثبات چرخشی راست']?.value),
                           Number(FMSData?.['ثبات چرخشی چپ']?.value)
                        ))
                     }
                  </tr>
               </tbody>

               <tfoot>
                  <tr>
                     <td className={`text-${data.scoreResultColor}`}>
                        نمره آزمون:
                        <br />
                        {data?.score === null ? "-" : data.score}
                     </td>
                     <td colSpan={2}>
                        {data?.scoreResult === null ? "-" : data.scoreResult}
                     </td>
                  </tr>
               </tfoot>
            </table>
         </div>

         <h2 className="mb-2 mt-8 text-center text-sm lg:text-lg">ارزیابی انعطاف بالا تنه و پایین تنه</h2>
         <div className="w-full flex gap-6">
            <table className="w-full text-center border border-white" cellPadding="6px">
               <thead>
                  <tr>
                     <th rowSpan={2}>محدودیت یا کوتاهی</th>
                     <th colSpan={2}>وضعیت شما</th>
                  </tr>
                  <tr>
                     <th>راست</th>
                     <th>چپ</th>
                  </tr>
               </thead>
               <tbody>
                  <tr>
                     <td>پایین تنه (پاها)</td>
                     {generateResult(FMSData?.['بالا آوردن فعال پا راست']?.value)}
                     {generateResult(FMSData?.['بالا آوردن فعال پا چپ']?.value)}
                  </tr>
                  <tr>
                     <td>بالا تنه (دست ها)</td>
                     {generateResult(FMSData?.['تحرک پذیری شانه ها راست']?.value)}
                     {generateResult(FMSData?.['تحرک پذیری شانه ها چپ']?.value)}
                  </tr>
               </tbody>
            </table>
         </div>
      </>
   )
}

export default FMSJsx