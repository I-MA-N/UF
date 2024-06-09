import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";
import validateUsername from "../../../../../../utils/validateUsername";
import { UseMutateFunction } from "@tanstack/react-query";
import Input from "../../../../../login/components/Input";

type CheckUsernameInputPropsType = {
   checkUserExists: UseMutateFunction<any, Error, {
      username: string;
      orgName: string;
   }, unknown>,
   mentoringData: {
      username: string;
      orgName: string;
      formName: string;
      data: any;
   },
   register: UseFormRegister<FieldValues>,
   errors: FieldErrors<FieldValues>,
}

function CheckUsernameInput({ checkUserExists, mentoringData, register, errors }: CheckUsernameInputPropsType) {
   const checkUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = (e.target as HTMLInputElement).value;
      if (value !== '') {
         checkUserExists({
            username: value,
            orgName: mentoringData?.orgName!
         })
      }
   }

   return (
      <Input
         direction="ltr"
         name="username"
         text="نام کاربری"
         placeholder="کد ملی"
         register={register}
         registerOptions={{ onChange: checkUsername, required: true, validate: validateUsername }}
         render={() => (
            <span className="text-[10px] text-yellow mr-5 mt-2">
               {errors.username?.type === "required" && "پر کردن این فیلد الزامی است!"}
               {errors.username?.type === "validate" && 'باید فقط شامل حروف انگلیسی، اعداد یا "_" باشد!'}
            </span>
         )}
      />
   )
}

export default CheckUsernameInput