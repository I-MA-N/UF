import { useParams } from "react-router-dom"
import PResetPass from "../../api/common/password/PResetPass";
import Container from "../common/Container";
import Input from "./components/Input";
import { useForm } from "react-hook-form";
import Btn from "../common/Btn";

function ResetPass() {
   const { token } = useParams();
   const {
      register,
      handleSubmit,
      formState: { errors },
      watch
   } = useForm();
   const { mutate, data: res, error, isPending } = PResetPass();

   const submitHandler = (data: any) => {
      mutate({
         password: data.password,
         token,
      })
   }

   const passIsEqual = (val: string) => {
      if (watch('password') !== val) {
         return "Your passwords do no match";
      }
   }

   return (
      <Container>
         <p className="text-xs text-yellow mb-8 md:mb-16">
            {res?.success && 'رمز عبور با موفقیت تغییر یافت!'}
            {res?.error && 'اطلاعات وارد شده صحیح نمی باشد!'}
            {error && 'تغییر رمز با مشکل مواجه شد.'}
         </p>

         <h2 className="text-2xl md:text-4xl text-center font-Estedad-Black mb-8">تغییر رمز عبور</h2>

         <form onSubmit={handleSubmit(submitHandler)}>
            <div className="flex flex-col gap-y-3.5 w-64 md:w-80">
               <Input
                  direction="ltr"
                  name="password"
                  text="رمز عبور"
                  placeholder="مثال: ufit.1234"
                  register={register}
                  registerOptions={{ required: true, minLength: 6 }}
                  render={() => (
                     <span className="text-xs text-yellow mr-5 mt-2">
                        {errors.password?.type === "required" && 'پر کردن این فیلد الزامی است!'}
                        {errors.password?.type === "minLength" && 'رمز عبور حداقل باید حاوی 6 کاراکتر باشد!'}
                     </span>
                  )}
               />

               <Input
                  direction="ltr"
                  name="confirmpass"
                  text="تکرار رمز عبور"
                  placeholder="مثال: ufit.1234"
                  register={register}
                  registerOptions={{ required: true, minLength: 6, validate: passIsEqual }}
                  render={() => (
                     <span className="text-xs text-yellow mr-5 mt-2">
                        {errors.confirmpass?.type === "required" && "پر کردن این فیلد الزامی است!"}
                        {errors.confirmpass?.type === "minLength" && 'رمز عبور حداقل باید حاوی 6 کاراکتر باشد!'}
                        {errors.confirmpass?.type === "validate" && 'با رمز عبور بالا مطابقت ندارد!'}
                     </span>
                  )}
               />
            </div>

            <Btn
               text={isPending ? 'در حال تغییر' : 'تغییر رمز'}
               type="submit"
               className="w-full mt-16"
            />
         </form>
      </Container>
   )
}

export default ResetPass