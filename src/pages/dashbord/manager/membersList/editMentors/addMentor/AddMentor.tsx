import { useForm } from "react-hook-form"
import { useNewMentorContext } from "./context/NewMentorContextProvider";
import { useNavigate } from "react-router-dom";
import validateUsername from "../../../../../../utils/validateUsername";
import Container from "../../../../../common/Container";
import Input from "../../../../../login/components/Input";
import Btn from "../../../../../common/Btn";
import PrevBtn from "../../../../../common/PrevBtn";

function AddMentor() {
   const { handleSubmit, register, formState: { errors } } = useForm();
   const { mentorData, setMentorData } = useNewMentorContext();

   const navigate = useNavigate();

   const submitHandler = (data: any) => {
      setMentorData(prevValue => {
         return {
            ...prevValue,
            ...data
         }
      })
      navigate('/manager/memberslist/editmentors/addmentor2')
   }

   return (
      <Container>
         <form onSubmit={handleSubmit(submitHandler)} className="w-64">
            <div className="space-y-4 ">
               <Input
                  direction="ltr"
                  name="username"
                  text="نام کاربری"
                  placeholder="کد ملی"
                  register={register}
                  registerOptions={{ required: true, validate: validateUsername }}
                  render={() => <span className="text-[10px] text-yellow mr-5 mt-2">
                     {errors.username?.type === "required" && "پر کردن این فیلد الزامی است!"}
                     {errors.username?.type === "validate" && 'باید فقط شامل حروف انگلیسی، اعداد یا "_" باشد!'}
                  </span>}
                  defaultValue={mentorData.username}
               />
               <Input
                  direction="ltr"
                  name="email"
                  text="ایمیل"
                  placeholder="فرمت صحیح: ufit@example.com"
                  register={register}
                  registerOptions={{ required: true, pattern: /\w+[@]\w+[.]\w+/ }}
                  render={() => <span className="text-[10px] text-yellow mr-5 mt-2">
                     {errors.email?.type === "required" && "پر کردن این فیلد الزامی است!"}
                     {errors.email?.type === "pattern" && "فرمت صحیح ایمیل رعایت نشده است!"}
                  </span>}
                  defaultValue={mentorData.email}
               />
               <Input
                  direction="ltr"
                  name="password"
                  text="رمز عبور"
                  placeholder="مثال: ufit.1234"
                  register={register}
                  registerOptions={{ required: true, minLength: 6 }}
                  render={() => (
                     <span className="text-[10px] text-yellow mr-5 mt-2">
                        {errors.password?.type === "required" && "پر کردن این فیلد الزامی است!"}
                        {errors.password?.type === "minLength" && 'رمز عبور حداقل باید حاوی 6 کاراکتر باشد!'}
                     </span>
                  )}
                  defaultValue={mentorData.password}
               />
            </div>

            <div className="flex gap-4 items-center mt-12">
               <Btn
                  text="مرحله بعد"
                  type="submit"
                  icon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="11" viewBox="0 0 16 11" fill="none">
                     <path d="M10.625 1L15 5.375M15 5.375H1M15 5.375L10.625 9.75" stroke="#E4F4FD" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>}
                  className="pr-3"
               />
               <PrevBtn type="button" onClick={() => navigate("/manager/memberslist/editmentors", { replace: true })} />
            </div>
         </form>
      </Container>
   )
}

export default AddMentor