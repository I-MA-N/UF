import statusBodyAvg from "../analysis/data/statusBodyAvg";

type ReportsMainInfoPropsType = {
   usersData: any
}

function ReportsMainInfo({ usersData }: ReportsMainInfoPropsType) {
   const statusBodyInfo = statusBodyAvg(usersData);

   return (
      <div className="mt-6 lg:mt-4 mb-6">
         <h1 className="text-center mb-4 lg:text-lg text-yellow">
            اطلاعات اصلی میانگین
            (تعداد افراد: {usersData.length})
         </h1>
         <div className="flex flex-wrap gap-x-8 gap-y-4 justify-center text-sm lg:text-base">
            <div className="flex gap-2 border-b border-white pb-1">
               <span>سن (سال):</span>
               <span>{statusBodyInfo['سن'].toFixed(2)}</span>
            </div>
            <div className="flex gap-2 border-b border-white pb-1">
               <span>قد (cm):</span>
               <span>{statusBodyInfo['قد'].toFixed(2)}</span>
            </div>
            <div className="flex gap-2 border-b border-white pb-1">
               <span>وزن (kg):</span>
               <span>{statusBodyInfo['وزن'].toFixed(2)}</span>
            </div>
         </div>
      </div>
   )
}

export default ReportsMainInfo