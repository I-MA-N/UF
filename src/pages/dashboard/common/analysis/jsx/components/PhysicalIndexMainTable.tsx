import img from "/images/reportsImages/physicalndex/mainInfo.png"

type PhysicalIndexMainTableProps = {
   statusBody: any
}

function PhysicalIndexMainTable({ statusBody }: PhysicalIndexMainTableProps) {
   return (
      <table className="w-full text-center border border-white" cellPadding="6px">
         <tbody>
            <tr>
               <td>دور گردن</td>
               <td>{Number(statusBody['دور گردن']).toFixed(2)}</td>
               <th rowSpan={8} className="w-[180px] p-0.5 bg-[#fff]">
                  <img src={img} className="w-full" alt="report-img" />
               </th>
            </tr>
            <tr>
               <td>عرض شانه</td>
               <td>{Number(statusBody['عرض شانه']).toFixed(2)}</td>
            </tr>
            <tr>
               <td>دور سینه</td>
               <td>{Number(statusBody['دور سینه']).toFixed(2)}</td>
            </tr>
            <tr>
               <td>دور کمر</td>
               <td>{Number(statusBody['دور کمر']).toFixed(2)}</td>
            </tr>
            <tr>
               <td>دور باسن</td>
               <td>{Number(statusBody['دور باسن']).toFixed(2)}</td>
            </tr>
            <tr>
               <td>دور بازو</td>
               <td>{Number(statusBody['دور بازو']).toFixed(2)}</td>
            </tr>
            <tr>
               <td>دور ران</td>
               <td>{Number(statusBody['دور ران']).toFixed(2)}</td>
            </tr>
         </tbody>
      </table>
   );
};

export default PhysicalIndexMainTable;