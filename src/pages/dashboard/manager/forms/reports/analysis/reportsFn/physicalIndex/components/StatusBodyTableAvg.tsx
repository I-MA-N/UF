import { bodyStatusAvgType } from "../bodyStatusAvg";

type StatusBodyTableAvgProps = {
   statusBody: bodyStatusAvgType
}

function StatusBodyTableAvg({ statusBody }: StatusBodyTableAvgProps) {
   return (
      <table className="w-full text-center border border-white" cellPadding="6px">
         <thead>
            <tr>
               <th colSpan={3} className="text-sm lg:text-lg">میانگین وضعیت بدنی</th>
            </tr>
         </thead>
         
         <tbody>
            {
               statusBody.map((status, index) => (
                  <tr key={status.title}>
                     {
                        index === 0 &&
                        <td rowSpan={20} className="w-[150px] p-0.5 bg-[#fff]">
                           <img src="/images/reportsImages/physicalndex/mainInfo.png" className="w-full" alt="report-img" />
                        </td>
                     }
                     <th>{status.title} ({status.count})</th>
                     <td>{status.value}</td>
                  </tr>
               ))
            }
         </tbody>
      </table>
   );
};

export default StatusBodyTableAvg;