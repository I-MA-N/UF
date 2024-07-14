import img from "/images/reportsImages/FMS/index.png"

function FMSJsx(data: { [k: string]: number }) {
   const generateResult = (value: number) => {
      if (value === 3)
         return 'طبیعی'
      if (value === 2)
         return 'خفیف'

      return 'شدید'
   }
   
   const score = data['اسکات کامل'] + data['شنای سوئدی'] +
      Math.min(data['عبور از مانع راست'], data['عبور از مانع چپ']) +
      Math.min(data['لانچ خطی راست'], data['لانچ خطی چپ']) +
      Math.min(data['تحرک پذیری شانه ها راست'], data['تحرک پذیری شانه ها چپ']) +
      Math.min(data['بالا آوردن فعال پا راست'], data['بالا آوردن فعال پا چپ']) +
      Math.min(data['ثبات چرخشی راست'], data['ثبات چرخشی چپ']);

   let scoreResult = "";
   if (score >= 16) {
      scoreResult = "وضعیت عملکردی سیستم اسکلتی عضلانی طبیعی";
   } else if (score >= 12 && score <= 15) {
      scoreResult = "وضعیت عملکردی سیستم اسکلتی عضلانی تا حدی طبیعی و بهتر است الگوهای حرکتی اصلاح گردد";
   } else {
      scoreResult = "وضعیت عملکردی سیستم اسکلتی عضلانی دچار مشکل و می بایست تمرینات اصلاحی و الگوهای حرکتی اصلاح گردد";
   }

   return (
      <>
         <h2 className="mb-2 text-center text-sm lg:text-lg">وضعیت عملکرد بدن در شرایط مختلف</h2>
         <div className="w-full flex gap-6">
            <table className="w-full text-center border border-white" cellPadding="6px">
               <tr>
                  <th rowSpan={8} className="w-[250px] p-0.5 bg-[#fff]">
                     <img src={img} className="w-full" alt="report-img" />
                  </th>
                  <th>نوع وضعیت</th>
                  <th>نتیجه</th>
               </tr>

               <tr>
                  <td>اسکات کامل</td>
                  <td>{generateResult(data['اسکات کامل'])}</td>
               </tr>
               <tr>
                  <td>عبور از مانع</td>
                  <td>{generateResult(Math.min(data['عبور از مانع راست'], data['عبور از مانع چپ']))}</td>
               </tr>
               <tr>
                  <td>لانچ خطی</td>
                  <td>{generateResult(Math.min(data['لانچ خطی راست'], data['لانچ خطی چپ']))}</td>
               </tr>
               <tr>
                  <td>تحرک پذیری شانه ها</td>
                  <td>{generateResult(Math.min(data['تحرک پذیری شانه ها راست'], data['تحرک پذیری شانه ها چپ']))}</td>
               </tr>
               <tr>
                  <td>بالا آوردن فعال پا</td>
                  <td>{generateResult(Math.min(data['بالا آوردن فعال پا راست'], data['بالا آوردن فعال پا چپ']))}</td>
               </tr>
               <tr>
                  <td>شنای سوئدی</td>
                  <td>{generateResult(data['شنای سوئدی'])}</td>
               </tr>
               <tr>
                  <td>ثبات چرخشی</td>
                  <td>{generateResult(Math.min(data['ثبات چرخشی راست'], data['ثبات چرخشی چپ']))}</td>
               </tr>

               <tfoot>
                  <tr>
                     <td>
                        نمره آزمون عملکردی وضعیت بدنی = {score}
                     </td>
                     <td colSpan={2}>{scoreResult}</td>
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
                     <td>{generateResult(data['بالا آوردن فعال پا راست'])}</td>
                     <td>{generateResult(data['بالا آوردن فعال پا چپ'])}</td>
                  </tr>
                  <tr>
                     <td>بالا تنه (دست ها)</td>
                     <td>{generateResult(data['تحرک پذیری شانه ها راست'])}</td>
                     <td>{generateResult(data['تحرک پذیری شانه ها چپ'])}</td>
                  </tr>
               </tbody>
            </table>
         </div>
      </>
   )
}

export default FMSJsx