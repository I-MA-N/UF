import { useEffect } from "react";
import managerPDeleteMentor from "../../../../../../../api/manager/managerPDeleteMentor";
import { useQueryClient } from "@tanstack/react-query";
import Modal from "../../../../../../common/Modal";

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
      <Modal>
         <Modal.Header>
            <Modal.CloseBtn clickHandler={() => setDeleteUsername(null)} />
         </Modal.Header>
         <Modal.Body>
            {
               data?.error &&
               <p className="text-yellow text-[10px] lg:text-xs mb-4">در انجام عملیات مشکلی پیش آمده است!</p>
            }
            <p>
               آیا از حذف کردن این مربی اطمینان دارید؟
            </p>

            <div className="flex justify-between items-center mt-4 px-10">
               <button
                  className="text-secondary underline underline-offset-[6px]"
                  onClick={() => mutate(deleteUsername)}
               >
                  بله
               </button>
               <button
                  className="text-red underline underline-offset-[6px]"
                  onClick={() => setDeleteUsername(null)}
               >
                  خیر
               </button>
            </div>
         </Modal.Body>
      </Modal>
   )
}

export default DeleteMentorModal