import { useEffect } from "react";
import managerPAddMentor from "../../../../../../../../api/manager/managerPAddMentor";
import { MentorData } from "../../../../../../../../types/UserData";
import Btn from "../../../../../../../common/Btn";
import MentorInfoElem from "./status4/MentorInfoElem";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

type Status4Props = {
   mentorData: {
      status: string;
   } & Omit<MentorData, "superusers">
}

function Status4({ mentorData }: Status4Props) {
   const { mutate, isPending, isError, isSuccess } = managerPAddMentor();
   const queryClient = useQueryClient();
   const navigate = useNavigate();

   const clickHandler = () => {
      mutate({
         username: mentorData.username,
         email: 'test1234@example.com',
         password: 'examplePass1234',
      })
   }

   useEffect(() => {
      if (isSuccess) {
         queryClient.invalidateQueries({
            queryKey: ["get: user data", ""],
         })
         queryClient.invalidateQueries({
            queryKey: ["managerG: mentors data"],
         })
         navigate("/manager/dashboard/memberslist/editmentors", { replace: true });
      }
   }, [isSuccess])

   return (
      <>
         {
            isError &&
            <p className="text-xs lg:text-sm text-center text-red min-h-4 my-4">
               اضافه کردن مربی با مشکل مواجه شد!
            </p>
         }

         <MentorInfoElem
            mentorData={mentorData}
         />

         <Btn
            text="اضافه کردن مربی"
            type="button"
            icon={
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 11" fill="none" className="w-4.5 lg:w-5">
                  <path d="M10.625 1L15 5.375M15 5.375H1M15 5.375L10.625 9.75" stroke="#E4F4FD" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
               </svg>
            }
            onClick={clickHandler}
            className="mx-auto mt-8"
            isDisabled={isPending}
         />
      </>
   )
}

export default Status4