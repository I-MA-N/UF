type ReportsMainInfoPropsType = { 
   isManager?: boolean,
   userData: any,
   statusBodyInfo: any 
}

function ReportsMainInfo({ isManager, userData, statusBodyInfo }: ReportsMainInfoPropsType) {
   return (
      <table className="text-[10px] sm:text-xs mx-auto border-separate border-spacing-2 text-center" cellPadding="8px">
         <tbody>
            <tr>
               {
                  !isManager &&
                  <td rowSpan={2}>
                     {userData.gender === 'male' ? 'جناب آقای ' : 'سرکار خانم '}
                     {userData.name}
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