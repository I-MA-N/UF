import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useNewMentorContext } from "./context/NewMentorContextProvider";
import Container from "../../../../../common/Container";
import PrevBtn from "../../../../../common/PrevBtn";
import Input from "../../../../../login/components/Input";
import GenderInput from "./GenderInput";
import Btn from "../../../../../common/Btn";
import managerPAddMentor from "../../../../../../api/manager/managerPAddMentor";

function AddMentor2() {
   const { handleSubmit, register, setValue, getValues, formState: { errors } } = useForm();
   const { mentorData, setMentorData } = useNewMentorContext();
   const { mutate, data } = managerPAddMentor();
   const navigate = useNavigate();
   console.log(mentorData);


   if (!mentorData.username) return <Container>
      <h1>اطلاعات کاربری ناقص است!</h1>
      <PrevBtn type="button" onClick={() => navigate("/manager/memberslist/editmentors/addmentor", { replace: true })} className="mx-auto mt-8" />
   </Container>

   const submitHandler = (data: any) => {
      mutate({
         ...mentorData,
         data: data 
      })
   }

   return (
      <Container>
         <p className="text-xs text-center text-yellow mb-6 min-h-4">
            {data?.error === 'some datas are empty or invalid.' && 'اطلاعات وارد شده کامل نیست!'}
            {data?.error === 'user already exists.' && 'نام کاربری از قبل وجود داشته است!'}
            {data?.success && 'مربی با موفقیت اضافه شد!'}
         </p>
         <form onSubmit={handleSubmit(submitHandler)} className="w-64">
            <div className="space-y-4 text-sm">
               <div className="flex items-center gap-x-5">
                  <Input
                     direction="rtl"
                     name="firstName"
                     text="نام"
                     placeholder=""
                     register={register}
                     divClassName="w-[115px]"
                     defaultValue={mentorData.data.firstName}
                  />
                  <Input
                     direction="rtl"
                     name="lastName"
                     text="نام خانوادگی"
                     placeholder=""
                     register={register}
                     divClassName="w-[115px]"
                     defaultValue={mentorData.data.lastName}
                  />
               </div>
               <Input
                  direction="rtl"
                  name="city"
                  text="استان / شهر"
                  placeholder="نمونه: اصفهان / خمینی شهر"
                  register={register}
                  defaultValue={mentorData.data.city}
               />
               <Input
                  direction="rtl"
                  name="job"
                  text="تخصص"
                  placeholder="کامل و دقیق"
                  register={register}
                  defaultValue={mentorData.data.job}
               />
               <Input
                  direction="ltr"
                  name="phone"
                  text="شماره موبایل"
                  placeholder="مثال: 09123456789"
                  register={register}
                  registerOptions={{ pattern: /^.{10}$/ }}
                  render={() => (
                     <span className="text-[10px] text-yellow mr-5 mt-2">
                        {errors.phone?.type === "pattern" && "شماره موبایل باید شامل 10 کاراکتر باشد!"}
                     </span>
                  )}
                  isNumberType={true}
                  defaultValue={mentorData.data.phone}
               />
               <div className="flex items-center gap-x-5">
                  <Input
                     direction="ltr"
                     name="age"
                     text="سن"
                     placeholder=""
                     register={register}
                     divClassName="w-[115px]"
                     isNumberType={true}
                     defaultValue={mentorData.data.age}
                  />
                  <GenderInput
                     register={register}
                     setValue={setValue}
                     errors={errors}
                     defaultValue={mentorData.data.gender}
                  />
               </div>
            </div>

            <div className="flex gap-4 items-center mt-12">
               <Btn
                  text="ثبت نام مربی"
                  type="submit"
                  icon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="11" viewBox="0 0 16 11" fill="none">
                     <path d="M10.625 1L15 5.375M15 5.375H1M15 5.375L10.625 9.75" stroke="#E4F4FD" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>}
                  className="pr-3"
               />
               <PrevBtn type="button" onClick={() => {
                  setMentorData(prevValue => {
                     return {
                        data: getValues() as any,
                        username: prevValue.username,
                        password: prevValue.password,
                        email: prevValue.email,
                     }
                  })
                  navigate("/manager/memberslist/editmentors/addmentor")
               }} />
            </div>
         </form>
      </Container>
   )
}

export default AddMentor2