import { useForm } from "react-hook-form";
import mentorPAddSimpleuser from "../../../../../api/mentor/mentorPAddSimpleuser";
import AddSimpleuserFormFields from "../../../../../types/AddSimpleuserFormFields";
import Input from "../../../../common/Input";
import Btn from "../../../../common/Btn";
import { useLocation, useNavigate } from "react-router-dom";

type FormFields = Omit<AddSimpleuserFormFields, "username">

type Status2Props = {
   username: string,
   orgName: string
}

function Status2({ username, orgName }: Status2Props) {
   const {
      register,
      handleSubmit,
      formState: { errors }
   } = useForm<Omit<FormFields, "username">>();
   const { mutateAsync, isError } = mentorPAddSimpleuser();
   const { pathname } = useLocation();
   const navigate = useNavigate();

   const submitHandler = (data: FormFields) => {
      if (!data.email || !data.password) {
         data.email = 'email@example.com';
         data.password = '1234example'
      }
      mutateAsync({
         username: username,
         password: data.password,
         email: data.email,
         orgName
      })
         .then(res => res?.success && navigate(`${pathname}/${username}`))
   }

   return (
      <>
         <p className="text-xs lg:text-sm mx-auto text-center text-yellow">
            نام کاربری در سازمان وجود ندارد! می توانید کاربر جدیدی اضافه کنید.
         </p>
         {
            isError &&
            <p className="text-xs lg:text-sm text-center text-red min-h-4 my-4">
               مشکلی در اضافه کردن کاربر به وجود آمده است!
            </p>
         }
         <form onSubmit={handleSubmit(submitHandler)} className="mt-4">
            <div className="space-y-4">
               <Input
                  direction="ltr"
                  name="email"
                  text="ایمیل"
                  placeholder="فرمت صحیح: ufit@example.com"
                  register={register}
                  registerOptions={{ required: true, pattern: /\w+[@]\w+[.]\w+/ }}
                  render={() => (
                     <span className="text-[10px] text-yellow mr-5 mt-2">
                        {errors.email?.type === "required" && "پر کردن این فیلد الزامی است!"}
                        {errors.email?.type === "pattern" && "فرمت صحیح ایمیل رعایت نشده است!"}
                     </span>
                  )}
               />
               <Input
                  direction="ltr"
                  name="password"
                  text="رمز عبور"
                  placeholder="ترجیحا کد ملی"
                  register={register}
                  registerOptions={{ required: true, minLength: 6 }}
                  render={() => (
                     <span className="text-[10px] text-yellow mr-5 mt-2">
                        {errors.password?.type === "required" && "پر کردن این فیلد الزامی است!"}
                        {errors.password?.type === "minLength" && 'رمز عبور حداقل باید حاوی 6 کاراکتر باشد!'}
                     </span>
                  )}
               />
            </div>

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
               />
            </div>
            <p className="text-xs lg:text-sm text-center mt-4 font-Estedad-ExtraLight">
               <span className="text-yellow">توجه: </span>
               این اطلاعات برای ایجاد کاربر و ارتباط مجدد با او ضروری است
            </p>
         </form>
      </>
   )
}

export default Status2