import { useCallback } from "react";
import FormDataType, { FormDataInputType } from "../../../../../../types/FormDataType";

type PhysicalIndexMainTableProps = {
   statusBody: FormDataType[""]
}

function PhysicalIndexMainTable({ statusBody }: PhysicalIndexMainTableProps) {
   const generateValue = useCallback((inputData: FormDataInputType) => {
      const value = inputData?.value;

      if (value) return Number(value);
      return '-';
   }, [])

   return (
      <table className="w-full text-center border border-white" cellPadding="6px">
         <tbody>
            <tr>
               <th colSpan={2}>سن</th>
               <td>{generateValue(statusBody?.['سن'])}</td>
            </tr>
            <tr>
               <th colSpan={2}>قد</th>
               <td>{generateValue(statusBody?.['قد'])}</td>
            </tr>
            <tr>
               <th colSpan={2}>وزن</th>
               <td>{generateValue(statusBody?.['وزن'])}</td>
            </tr>
            <tr>
               <th>دور گردن</th>
               <td>{generateValue(statusBody?.['دور گردن'])}</td>
               <td rowSpan={8} className="w-[180px] p-0.5 bg-[#fff]">
                  <img src="/images/reportsImages/physicalndex/mainInfo.png" className="w-full" alt="report-img" />
               </td>
            </tr>
            <tr>
               <th>عرض شانه</th>
               <td>{generateValue(statusBody?.['عرض شانه'])}</td>
            </tr>
            <tr>
               <th>دور سینه</th>
               <td>{generateValue(statusBody?.['دور سینه'])}</td>
            </tr>
            <tr>
               <th>دور کمر</th>
               <td>{generateValue(statusBody?.['دور کمر'])}</td>
            </tr>
            <tr>
               <th>دور باسن</th>
               <td>{generateValue(statusBody?.['دور باسن'])}</td>
            </tr>
            <tr>
               <th>دور بازو</th>
               <td>{generateValue(statusBody?.['دور بازو'])}</td>
            </tr>
            <tr>
               <th>دور ران</th>
               <td>{generateValue(statusBody?.['دور ران'])}</td>
            </tr>
         </tbody>
      </table>
   );
};

export default PhysicalIndexMainTable;