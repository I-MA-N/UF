import { useForm } from "react-hook-form";
import PChangePass from "../../../api/common/password/PChangePass";
import Btn from "../../common/Btn";
import { useUserDataContext } from "../../authentication/UserDataProvider";

type ChangePassModalProps = {
   setPassModal: React.Dispatch<React.SetStateAction<boolean>>
}

function ChangePassModal({ setPassModal }: ChangePassModalProps) {
   const {
      register,
      handleSubmit,
      formState: { errors }
   } = useForm();
   const { mutate, data, isPending } = PChangePass();
   const userData = useUserDataContext();

   const submitHandler = (data: any) => {
      data.username = userData.username;
      mutate(data)
   }

   return (
      <div className="modal">
         <button onClick={() => setPassModal(false)} className="flex gap-0.5 items-center mb-4.5 bg-primary text-yellow py-2 px-4 rounded-[32px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
               <path d="M13 3L8 8M8 8L3 13M8 8L13 13M8 8L3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            خروج
         </button>
         <form onSubmit={handleSubmit(submitHandler)} className="flex flex-col items-center gap-6 w-[298px] xs:w-80 bg-white text-primary rounded-[32px] py-12">
            <p className="text-xs text-center text-red mt-4">
               {
                  data?.access === 'false' ?
                     'رمز عبور قبلی درست نمی باشد!' : data?.access === 'true' &&
                     'رمز عبور شما با موفقیت تغییر یافت!'
               }
            </p>
            <div>
               <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="mx-auto mb-1">
                  <path fillRule="evenodd" clipRule="evenodd" d="M6.36333 7.41287C6.26643 7.4982 6.13926 7.54995 6 7.54995C5.92723 7.54995 5.85776 7.53582 5.79419 7.51015C4.48351 7.76027 3.58636 8.12655 2.95425 8.60064C1.65529 9.57486 1.1 11.3036 1.1 15C1.1 18.6963 1.65529 20.425 2.95425 21.3993C3.64 21.9136 4.63768 22.301 6.13689 22.5509C7.63458 22.8006 9.54786 22.9 12 22.9C14.4521 22.9 16.3654 22.8006 17.8631 22.5509C19.3623 22.301 20.36 21.9136 21.0457 21.3993C22.3447 20.425 22.9 18.6963 22.9 15C22.9 11.3036 22.3447 9.57486 21.0457 8.60064C20.4136 8.12656 19.5165 7.76027 18.2058 7.51015C18.1422 7.53582 18.0728 7.54995 18 7.54995C17.8607 7.54995 17.7336 7.4982 17.6367 7.41287C16.1739 7.18971 14.3303 7.09995 12 7.09995C9.66975 7.09995 7.82613 7.18971 6.36333 7.41287ZM5.468 6.45305C5.59374 4.56873 6.36947 3.10232 7.5096 2.08888C8.74764 0.988395 10.3828 0.449951 12 0.449951C13.6172 0.449951 15.2524 0.988395 16.4904 2.08888C17.6305 3.10232 18.4063 4.56873 18.532 6.45305C22.8907 7.32225 24 9.6362 24 15C24 22.4114 21.882 24 12 24C2.118 24 0 22.4114 0 15C0 9.6362 1.1093 7.32225 5.468 6.45305ZM17.4125 6.27004C17.2562 4.78979 16.6247 3.67999 15.7596 2.91103C14.7476 2.01151 13.3828 1.54995 12 1.54995C10.6172 1.54995 9.25236 2.01151 8.2404 2.91103C7.37532 3.67999 6.74382 4.78979 6.58754 6.27004C8.06198 6.07538 9.84666 5.99995 12 5.99995C14.1533 5.99995 15.938 6.07538 17.4125 6.27004Z" fill="#083C5A" />
                  <circle cx="3" cy="3" r="2.45" transform="matrix(-1 0 0 1 15 12)" stroke="#083C5A" strokeWidth="1.1" />
               </svg>
               <span className="text-sm">تغییر رمز عبور</span>
            </div>
            <div className="space-y-4">
               <div className="flex flex-col">
                  <label htmlFor="oldpassword" className="text-xs font-Estedad-ExtraLight">رمز عبور قبلی</label>
                  <input
                     type="text"
                     id="oldpassword"
                     dir="ltr"
                     className="bg-transparent outline-none border-b border-b-primary/50 text-sm my-1"
                     {...register('oldpassword', { required: true, minLength: 6 })}
                  />
                  <span className="text-[10px] text-red inline-block">
                     {errors.oldpassword?.type === "required" && "پر کردن این فیلد الزامی است!"}
                     {errors.oldpassword?.type === "minLength" && 'رمز عبور حداقل باید حاوی 6 کاراکتر باشد!'}
                  </span>
               </div>
               <div className="flex flex-col">
                  <label htmlFor="newpassword" className="text-xs font-Estedad-ExtraLight">رمز عبور جدید</label>
                  <input
                     type="text"
                     id="newpassword"
                     dir="ltr"
                     className="bg-transparent outline-none border-b border-b-primary/50 text-sm my-1"
                     {...register('newpassword', { required: true, minLength: 6 })}
                  />
                  <span className="text-[10px] text-red inline-block">
                     {errors.newpassword?.type === "required" && "پر کردن این فیلد الزامی است!"}
                     {errors.newpassword?.type === "minLength" && 'رمز عبور حداقل باید حاوی 6 کاراکتر باشد!'}
                  </span>
               </div>
            </div>
            <Btn
               text={isPending ? 'در حال تغییر' : 'تایید'}
               type="submit"
               className="w-28 h-auto bg-secondary text-white text-sm py-2"
               isDisabled={isPending}
            />
         </form>
      </div>
   )
}

export default ChangePassModal