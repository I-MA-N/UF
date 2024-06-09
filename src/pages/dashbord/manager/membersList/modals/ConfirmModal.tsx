import { useEffect } from "react";
import managerPManageSimpleuser from "../../../../../api/manager/managerPManageSimpleuser"

type ConfirmModalPropsType = {
   action: string,
   setAction: React.Dispatch<React.SetStateAction<string | null>>,
   username: string
}

function ConfirmModal({ action, setAction, username }: ConfirmModalPropsType) {
   const { mutate, data } = managerPManageSimpleuser(username);

   useEffect(() => {
      if (data) {
         setAction(null);
      }
   }, [data])

   return (
      <div className="w-72 absolute top-1/2 left-1/2 -translate-x-1/2 px-10 py-4 rounded-[32px] bg-primary text-white text-xs z-20">
         <p>
            آیا از 
            <span>
               {
                  action === 'enable' ? ' فعال کردن ' : action === 'disable' ? ' غیر فعال کردن ' : ' حذف کردن '
               }
            </span>
            این کاربر اطمینان دارید؟
         </p>
         <div className="flex justify-between items-center mt-4 px-10">
            <button className="text-secondary" onClick={() => mutate(action)}>
               بله
            </button>
            <button className="text-yellow" onClick={() => setAction(null)}>
               خیر
            </button>
         </div>
      </div>
   )
}

export default ConfirmModal