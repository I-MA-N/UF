import FormDataType from "../../../../../../../types/FormDataType";
import bodyStatusData from "../../../../../tests/data/testsData/bodyStatusData";

type StatusBodyTableProps = {
   statusBody: FormDataType[""]
}

function StatusBodyTable({ statusBody }: StatusBodyTableProps) {
   return (
      <table className="w-full text-center border border-white" cellPadding="6px">
         <tbody>
            {
               Object.keys(bodyStatusData).map((key, index) => (
                  <tr key={key}>
                     <th>{key}</th>
                     <td>{statusBody?.[key as keyof typeof statusBody]?.value || '-'}</td>
                     {
                        index === 0 &&
                        <td rowSpan={8} className="w-[100px] p-0.5 bg-[#fff]">
                           <img src="/images/reportsImages/physicalndex/mainInfo.png" className="w-full" alt="report-img" />
                        </td>
                     }
                  </tr>
               ))
            }
         </tbody>
      </table>
   );
};

export default StatusBodyTable;