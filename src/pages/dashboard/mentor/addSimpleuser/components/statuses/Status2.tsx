import { useForm } from "react-hook-form";
import mentorPAddSimpleuser from "../../../../../../api/mentor/mentorPAddSimpleuser";
import Btn from "../../../../../common/Btn";
import { useLocation, useNavigate } from "react-router-dom";
import PUserData from "../../../../../../api/common/PUserData";
import { useEffect } from "react";
import { useQueryClient } from "@tanstack/react-query";
import SimpleUserInputs from "./status2/SimpleUserInputs";
import TopElems from "./status2/TopElems";
import { FormFields } from "../../../../../../types/AddSimpleuserFormFields";

type Status2Props = {
   username: string,
   orgName: string
}

function Status2({ username, orgName }: Status2Props) {
   const { register, handleSubmit, setValue, getValues, formState: { errors } } = useForm<FormFields>();

   const { mutate: addUser, isPending: addUserPending, isError: addUserError, isSuccess: addUserSuccess } = mentorPAddSimpleuser();
   const { mutate: setInfo, isPending: setInfoPending, isError: setInfoError, isSuccess: setInfoSuccess } = PUserData();
   const queryClient = useQueryClient();

   const { pathname } = useLocation();
   const navigate = useNavigate();

   const submitHandler = (data: FormFields) => {
      addUser({
         username,
         password: data.password,
         orgName: orgName,
         email: data.email,
      })
   }

   useEffect(() => {
      if (addUserSuccess) {
         queryClient.invalidateQueries({
            queryKey: ["mentorG: users data", orgName]
         })

         const data = getValues();
         setInfo({
            for: username,
            firstname: data.firstname,
            lastname: data.lastname,
            age: data.age,
            gender: data.gender,
            phone: data.phone,
         })
      }
   }, [addUserSuccess])

   useEffect(() => {
      if (setInfoSuccess) navigate(`${pathname}/${username}`);
   }, [setInfoSuccess])

   return (
      <>
         <TopElems addUserError={addUserError} setInfoError={setInfoError} />

         <form onSubmit={handleSubmit(submitHandler)} className="mt-4">
            <SimpleUserInputs
               register={register}
               errors={errors}
               setValue={setValue}
            />

            <div className="flex gap-4 items-center mt-12">
               <Btn
                  text="اضافه کردن کاربر"
                  type="submit"
                  icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 14" fill="none" className="w-4.5 lg:w-5">
                     <path d="M0.55 11.0833C0.55 11.6483 0.622235 12.0281 0.762591 12.3002C0.89294 12.5529 1.10838 12.7634 1.51183 12.9373C1.93191 13.1183 2.53743 13.2508 3.41224 13.3345C4.28169 13.4178 5.38077 13.45 6.76923 13.45C8.15769 13.45 9.25677 13.4178 10.1262 13.3345C11.001 13.2508 11.6066 13.1183 12.0266 12.9373C12.4301 12.7634 12.6455 12.5529 12.7759 12.3002C12.9162 12.0281 12.9885 11.6483 12.9885 11.0833C12.9885 10.5184 12.9162 10.1386 12.7759 9.86644C12.6455 9.61372 12.4301 9.40324 12.0266 9.2294C11.6066 9.0484 11.001 8.9159 10.1262 8.83213C9.25677 8.74887 8.15769 8.71667 6.76923 8.71667C5.38077 8.71667 4.28169 8.74887 3.41224 8.83213C2.53743 8.9159 1.93191 9.0484 1.51183 9.2294C1.10838 9.40324 0.89294 9.61372 0.762591 9.86644C0.622235 10.1386 0.55 10.5184 0.55 11.0833Z" stroke="#E4F4FD" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
                     <path d="M3.62693 3.5C3.62693 5.10189 5.0057 6.45 6.76924 6.45C8.53278 6.45 9.91155 5.10189 9.91155 3.5C9.91155 1.89811 8.53278 0.55 6.76924 0.55C5.0057 0.55 3.62693 1.89811 3.62693 3.5Z" stroke="#E4F4FD" strokeWidth="1.1" />
                     <path d="M13.5384 4.08325V5.83325M13.5384 7.58325V5.83325M13.5384 5.83325H15.3846H11.6923" stroke="#E4F4FD" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>}
                  className="w-full pr-3"
                  isDisabled={addUserPending || setInfoPending}
               />
            </div>
         </form>
      </>
   )
}

export default Status2