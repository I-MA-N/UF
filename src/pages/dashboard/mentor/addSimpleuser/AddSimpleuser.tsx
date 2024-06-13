import { useForm } from "react-hook-form";
import { useMemo } from "react";
import { useMentoringContext } from "../context/MentoringContextProvider";
import mentorPUserExist from "../../../../api/mentor/mentorPUserExist";
import mentorPAddSimpleuser from "../../../../api/mentor/mentorPAddSimpleuser";
import Container from "../../../common/Container";
import Input from "../../../common/Input";
import ErrorElem from "../components/ErrorElem";
import BtnsDescription from "./components/BtnsDescription";
import CheckUsernameInput from "./components/CheckUsernameInput";
// Handle login for input checking in distinct component
// Don't post user when user belongs to another org

const messages = {
   'not exist': 'نام کاربری در سازمان وجود ندارد! با رفتن به مرحله بعد کاربر جدیدی را اضافه کنید.',
   'exist in list': 'نام کاربری در لیست کاربران شما وجود دارد! با رفتن به مرحله بعد ارزیابی را میتوانید انجام دهید.',
   'exist not in list': 'نام کاربری از قبل در سازمان وجود دارد! در صورت رفتن به مرحله بعد به کاربران شما اضافه خواهد شد.',
   'belongs another org': 'نام کاربری متعلق به سازمان دیگری است!',
   'not simpleuser': 'نام کاربری متعلق به کاربر عادی نمی باشد!',
}

function AddSimpleuser() {
   const {
      register,
      handleSubmit,
      formState: { errors }
   } = useForm();
   const { mentoringData } = useMentoringContext();

   const { mutate: checkUserExists, data: userStatus, isError: userExistErr } = mentorPUserExist();
   const { mutateAsync: postUser, isError: mentorPAddSimpleuserErr } = mentorPAddSimpleuser();
   const userExist = useMemo(() => {
      return userStatus?.status !== 'not exist';
   }, [userStatus]);
   const message = useMemo(() => {
      if (userExistErr)
         return 'مشکلی رخ داده است!'
      return messages[userStatus?.status as keyof typeof messages];
   }, [userStatus, userExistErr]);

   const submitHandler = (data: any) => {
      if (!data.email || !data.password) {
         data.email = 'email@example.com';
         data.password = '1234example'
      }
      postUser({
         ...data,
         orgName: mentoringData.orgName
      })
   }

   if (!mentoringData.orgName) return <ErrorElem />

   return (
      <Container>
         <p className="text-xs/5 text-center text-yellow mb-2 min-h-10 w-80">
            {message || ''}
         </p>
         <p className="text-xs text-center text-yellow mb-8 min-h-4">
            {mentorPAddSimpleuserErr && 'مشکلی در اضافه کردن کاربر به وجود آمده!'}
         </p>
         <form onSubmit={handleSubmit(submitHandler)} className="w-64">
            <div className="space-y-4">
               <CheckUsernameInput checkUserExists={checkUserExists} mentoringData={mentoringData} register={register} errors={errors} />
               <Input
                  direction="ltr"
                  name="email"
                  text="ایمیل"
                  placeholder="فرمت صحیح: ufit@example.com"
                  register={register}
                  registerOptions={{ required: !userExist, pattern: /\w+[@]\w+[.]\w+/, disabled: userExist }}
                  render={() => (
                     <span className="text-[10px] text-yellow mr-5 mt-2">
                        {errors.email?.type === "required" && "پر کردن این فیلد الزامی است!"}
                        {errors.email?.type === "pattern" && "فرمت صحیح ایمیل رعایت نشده است!"}
                     </span>
                  )}
                  isDisabled={userExist}
               />
               <Input
                  direction="ltr"
                  name="password"
                  text="رمز عبور"
                  placeholder="ترجیحا کد ملی"
                  register={register}
                  registerOptions={{ required: !userExist, minLength: 6, disabled: userExist }}
                  render={() => (
                     <span className="text-[10px] text-yellow mr-5 mt-2">
                        {errors.password?.type === "required" && "پر کردن این فیلد الزامی است!"}
                        {errors.password?.type === "minLength" && 'رمز عبور حداقل باید حاوی 6 کاراکتر باشد!'}
                     </span>
                  )}
                  isDisabled={userExist}
               />
            </div>

            <BtnsDescription userStatus={userStatus} />
         </form>
      </Container>
   )
}

export default AddSimpleuser