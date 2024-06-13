import img1 from "/images/reportsImages/dynamic/squat1.png";
import img2 from "/images/reportsImages/dynamic/squat2.png";
import img3 from "/images/reportsImages/dynamic/squat3.png";

function squatJsx(data: { [k: string]: string }) {
   return (
      <div>
         <h2 className="mb-2 text-center">ارزیابی عملکردی در نشستن و بلند شدن (اسکات)</h2>
         <table className="w-full text-xs/6 text-center border border-white" cellPadding="6px">
            <tr>
               <th>حرکت جبرانی</th>
               <th>نتیجه</th>
               <th rowSpan={5} className="w-[100px] bg-[#fff] border-b-primary">
                  <img src={img1} className="w-full" alt="report-img" />
               </th>
            </tr>
            {
               Object.entries(data).map((row, index) => (
                  <tr key={index}>
                     <td>{row[0]}</td>
                     <td>{row[1]}</td>
                     {
                        index === 4 && <td rowSpan={4} className="w-[100px] bg-[#fff] border-b-primary">
                           <img src={img2} className="w-full" alt="report-img" />
                        </td>
                     }
                     {
                        index === 8 && <th rowSpan={3} className="w-[100px] bg-[#fff]">
                           <img src={img3} className="w-full" alt="report-img" />
                        </th>
                     }
                  </tr>
               ))
            }
         </table>
      </div>
   )
}

export default squatJsx