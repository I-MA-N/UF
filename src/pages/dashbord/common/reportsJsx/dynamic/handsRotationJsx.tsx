import img from "../reportsImages/dynamic/handsRotation.png";

function handsRotationJsx(data: { [k: string]: string }) {
   return (
      <div>
         <h2 className="mb-2 text-center">ارزیابی عملکردی در دامنه حرکتی چرخش دست ها</h2>
         <table className="w-full text-xs/6 text-center border border-white" cellPadding="6px">
            <tr>
               <th>حرکت جبرانی</th>
               <th>نتیجه</th>
               <th rowSpan={Object.keys(data).length + 1} className="w-[100px] bg-[#fff]">
                  <img src={img} className="w-full" alt="report-img" />
               </th>
            </tr>
            {
               Object.entries(data).map((row, index) => (
                  <tr key={index}>
                     <td>{row[0]}</td>
                     <td>{row[1]}</td>
                  </tr>
               ))
            }
         </table>
      </div>
   )
}

export default handsRotationJsx