import { useCallback } from "react";
import FormDataType from "../../../../../../types/FormDataType";
import img from "/images/reportsImages/physicalndex/mainInfo.png"

type PhysicalIndexMainTableProps = {
   statusBody: FormDataType[""]
}

function PhysicalIndexMainTable({ statusBody }: PhysicalIndexMainTableProps) {
   const generateValue = useCallback((value: string | undefined) => {
      if (value) return Number(value);
      return '-';
   }, [])

   return (
      <table className="w-full text-center border border-white" cellPadding="6px">
         <tbody>
            <tr>
               <th colSpan={2}>سن</th>
               <td>{generateValue(statusBody?.['سن']?.value)}</td>
            </tr>
            <tr>
               <th colSpan={2}>قد</th>
               <td>{generateValue(statusBody?.['قد']?.value)}</td>
            </tr>
            <tr>
               <th colSpan={2}>وزن</th>
               <td>{generateValue(statusBody?.['وزن']?.value)}</td>
            </tr>
            <tr>
               <th>دور گردن</th>
               <td>{generateValue(statusBody?.['دور گردن']?.value)}</td>
               <td rowSpan={8} className="w-[180px] p-0.5 bg-[#fff]">
                  <img src={img} className="w-full" alt="report-img" />
               </td>
            </tr>
            <tr>
               <th>عرض شانه</th>
               <td>{generateValue(statusBody?.['عرض شانه']?.value)}</td>
            </tr>
            <tr>
               <th>دور سینه</th>
               <td>{generateValue(statusBody?.['دور سینه']?.value)}</td>
            </tr>
            <tr>
               <th>دور کمر</th>
               <td>{generateValue(statusBody?.['دور کمر']?.value)}</td>
            </tr>
            <tr>
               <th>دور باسن</th>
               <td>{generateValue(statusBody?.['دور باسن']?.value)}</td>
            </tr>
            <tr>
               <th>دور بازو</th>
               <td>{generateValue(statusBody?.['دور بازو']?.value)}</td>
            </tr>
            <tr>
               <th>دور ران</th>
               <td>{generateValue(statusBody?.['دور ران']?.value)}</td>
            </tr>
         </tbody>
      </table>
   );
};

export default PhysicalIndexMainTable;