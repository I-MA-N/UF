import { useEffect } from "react";
import managerPDeleteMentor from "../../../../../../../api/manager/managerPDeleteMentor";
import { useQueryClient } from "@tanstack/react-query";

type DeleteMentorModalPropsType = {
   deleteUsername: any,
   setDeleteUsername: React.Dispatch<any>,
   setMentorData: React.Dispatch<any>
}

function DeleteMentorModal({ deleteUsername, setDeleteUsername, setMentorData }: DeleteMentorModalPropsType) {
   const { mutate, data } = managerPDeleteMentor();
   const queryClient = useQueryClient();

   useEffect(() => {
      if (data?.success) {
         setMentorData(null);
         queryClient.invalidateQueries({
            queryKey: ["managerG: mentors data"],
         })
         queryClient.invalidateQueries({
            queryKey: ["get: user data", ""],
         })
      }
   }, [data])

   return (
      <div className="w-72 absolute top-1/2 left-1/2 -translate-x-1/2 px-10 py-8 rounded-[32px] bg-primary text-white text-xs z-20">
         {
            data?.error &&
            <p className="text-yellow text-[10px] text-center mb-4">در انجام عملیات مشکلی پیش آمده!</p>
         }
         <p>
            آیا از حذف کردن این مربی اطمینان دارید؟
         </p>
         <div className="flex justify-between items-center mt-6 px-10">
            <button className="text-secondary" onClick={() => mutate(deleteUsername)}>
               بله
            </button>
            <button className="text-yellow" onClick={() => setDeleteUsername(null)}>
               خیر
            </button>
         </div>
      </div>
   )
}

export default DeleteMentorModal