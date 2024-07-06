function ReportsMainInfo({ userData, statusBodyInfo }: { userData: any, statusBodyInfo: any }) {
   return (
      <table className="text-[10px] sm:text-xs lg:text-sm mx-auto border-separate border-spacing-2 text-center" cellPadding="8px">
         <tbody>
            <tr>
               {
                  userData.name ?
                  <td rowSpan={2}>
                     {userData.gender === 'male' ? 'جناب آقای ' : 'سرکار خانم '}
                     {userData.name}
                  </td> : <td rowSpan={2}>
                     اطلاعات پروفایل شما ناقص است.
                  </td>
               }
               {
                  statusBodyInfo &&
                  <>
                     <td>سن (سال)</td>
                     <td>قد (cm)</td>
                     <td>وزن (kg)</td>
                  </>
               }
            </tr>
            {
               statusBodyInfo &&
               <tr className="text-xs">
                  <td>{statusBodyInfo['سن']}</td>
                  <td>{statusBodyInfo['قد']}</td>
                  <td>{statusBodyInfo['وزن']}</td>
               </tr>
            }
         </tbody>
      </table>
   )
}

export default ReportsMainInfo