function skeletalMuscleAbnormalityJsx(data: any) {
   return (
      <>
         <h2 className="mb-2 text-center">ناهنجاری اسکلتی -عضلانی</h2>
         <table className="w-full text-xs/6 text-center border border-white" cellPadding="6px">
            <thead>
               <tr>
                  <th rowSpan={2}>ناهنجاری</th>
                  <th rowSpan={2}>وضعیت شما</th>
                  <th colSpan={2}>تصویر</th>
               </tr>
               <tr>
                  <th>طبیعی</th>
                  <th>شدید</th>
               </tr>
            </thead>
            <tbody>
               {
                  data.map((problem: any, index: number) => (
                     <tr key={index} className={`${(index + 1) % 2 === 0 && 'bg-white text-primary'}`}>
                        <td>{problem.title}</td>
                        <td>{problem.status}</td>
                        <td className="w-[60px] lg:w-[80px] bg-[#fff]">
                           <img src={`/UF-Front/images/reportsImages/problems/${problem.title}1.png`} className="w-full" alt="report-img" />
                        </td>
                        <td className="w-[60px] lg:w-[80px] bg-[#fff]">
                           <img src={`/UF-Front/images/reportsImages/problems/${problem.title}2.png`} className="w-full" alt="report-img" />
                        </td>
                     </tr>
                  ))
               }
            </tbody>
         </table>
      </>
   )
}

export default skeletalMuscleAbnormalityJsx