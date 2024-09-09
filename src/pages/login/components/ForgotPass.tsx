import { useForm } from "react-hook-form"
import Container from "../../common/Container"
import Input from "../../common/Input";
import Btn from "../../common/Btn";
import validateUsername from "../../../utils/validateUsername";
import PForgotPass from "../../../api/common/password/PForgotPass";
import { useNavigate } from "react-router-dom";

function ForgotPass() {
   const {
      register,
      handleSubmit,
      formState: { errors }
   } = useForm();
   const { mutate, data: res, isPending, error } = PForgotPass();
   const navigate = useNavigate();

   const submitHandler = (data: any) => {
      mutate(data)
   }

   return (
      <Container>
         <p className="text-xs text-yellow mb-8 lg:mb-10">
            {res?.success && 'ایمیل با موفقیت ارسال شد!'}
            {res?.error && 'اطلاعات وارد شده صحیح نمی باشد!'}
            {error && 'مشکلی رخ داده است!'}
         </p>
         <h2 className="text-2xl lg:text-3xl text-center font-Estedad-Black mb-8">فراموشی رمز عبور</h2>
         <form onSubmit={handleSubmit(submitHandler)}>
            <div className="flex flex-col gap-y-3.5 w-64 md:w-80">
               <Input
                  direction="ltr"
                  name="username"
                  text="نام کاربری"
                  placeholder="مثال: 123456789"
                  register={register}
                  registerOptions={{ required: true, validate: validateUsername }}
                  render={() => (
                     <span className="text-xs text-yellow mr-5 mt-2">
                        {errors.username?.type === "required" && 'پر کردن این فیلد الزامی است!'}
                        {errors.username?.type === "validate" && 'باید فقط شامل حروف، اعداد یا "_" باشد!'}
                     </span>
                  )}
               />

               <Input
                  direction="ltr"
                  name="email"
                  text="ایمیل"
                  placeholder="فرمت صحیح: ufit@example.com"
                  register={register}
                  registerOptions={{ required: true, pattern: /\w+[@]\w+[.]\w+/ }}
                  render={() => (
                     <span className="text-xs text-yellow mr-5 mt-2">
                        {errors.email?.type === "required" && "پر کردن این فیلد الزامی است!"}
                        {errors.email?.type === "pattern" && "فرمت صحیح ایمیل رعایت نشده است!"}
                     </span>
                  )}
               />

               <p className="text-xs lg:text-sm font-Estedad-ExtraLight text-center opacity-70">لینکی به ایمیل شما برای تغییر رمز فرستاده خواهد شد.</p>

               <Btn
                  text={isPending ? 'در حال ارسال ایمیل' : 'ارسال ایمیل'}
                  type="submit"
                  className="w-full mt-16"
               />
               <button className="w-full h-12 lg:h-14 mx-auto mt-4 relative border-2 border-white rounded-[48px]" onClick={() => navigate("/login", { replace: true })}>
                  <span className="text-yellow text-sm lg:text-lg">برگشت</span>
                  <span className="absolute top-1/2 -translate-y-1/2 left-6">
                     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 12" fill="none" className="w-4 lg:w-4.5">
                        <path d="M6 1L1 6M1 6H17M1 6L6 11" stroke="#E4F4FD" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                     </svg>
                  </span>
               </button>
            </div>

         </form>
      </Container>
   )
}

export default ForgotPass