import { useForm } from "react-hook-form";
import mentorPUserExist, { UserExistRes } from "../../../../../api/mentor/mentorPUserExist";
import validateUsername from "../../../../../utils/validateUsername";

type CheckUserExistElemProps = {
   orgName: string,
   setUserStatus: React.Dispatch<React.SetStateAction<UserExistRes | null>>
}

function CheckUserExistElem({ orgName, setUserStatus }: CheckUserExistElemProps) {
   const { handleSubmit, register, formState: { errors } } = useForm<{ username: string }>()
   const { mutateAsync } = mentorPUserExist();

   const submitHandler = (data: { username: string }) => {
      if (data.username) {
         mutateAsync({ orgName, username: data.username })
            .then(res => res.status && setUserStatus(res))
      }
   }

   return (
      <div>
         <p className="text-xs font-Estedad-ExtraLight text-center mx-auto mb-4 w-64">با نوشتن نام کاربری و کلیک روی دکمه زیر وضعیت نام کاربری وارد شده را مشاهده کنید</p>
         <form onSubmit={handleSubmit(submitHandler)} className="flex items-end gap-1">
            <input
               id="username"
               dir="ltr"
               className="w-full bg-transparent p-3.5 outline-none h-12 rounded-tr-full rounded-br-full border border-white placeholder:text-xs placeholder:text-end"
               type="text"
               placeholder="نام کاربری"
               {...register("username", { onChange: () => setUserStatus(null), required: true, validate: validateUsername })}
            />
            <button
               type="submit"
               className="flex items-center justify-center w-12 h-12 rounded-tl-full rounded-bl-full border border-white bg-secondary text-white"
            >
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-5">
                  <path d="M1.01272 11.9195L0.0190286 12.0317L1.01272 11.9195C1.02538 12.0317 1.04017 12.0984 1.10073 12.3524C2.75599 19.294 8.63623 21.9135 11.1562 22.7299C11.5879 22.8698 11.6901 22.9009 12 22.9009C12.3099 22.9009 12.4121 22.8698 12.8438 22.7299C15.3638 21.9135 21.244 19.294 22.8993 12.3524C22.9598 12.0984 22.9746 12.0317 22.9873 11.9195C22.9997 11.8098 23.0002 11.7239 22.9973 11.4102C22.9533 6.70449 22.3475 4.2723 20.9089 2.9142C19.4531 1.5397 16.8733 0.999999 12 0.999999C7.1267 0.999999 4.54693 1.53969 3.09106 2.9142C1.65255 4.2723 1.04666 6.70448 1.00268 11.4102C0.999753 11.7239 1.00034 11.8098 1.01272 11.9195Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path fillRule="evenodd" clipRule="evenodd" d="M16.7071 9.70711C17.0976 9.31658 17.0976 8.68342 16.7071 8.29289C16.3166 7.90237 15.6834 7.90237 15.2929 8.29289L11 12.5858L9.70711 11.2929C9.31658 10.9024 8.68342 10.9024 8.29289 11.2929C7.90237 11.6834 7.90237 12.3166 8.29289 12.7071L10.2929 14.7071C10.6834 15.0976 11.3166 15.0976 11.7071 14.7071L16.7071 9.70711Z" fill="currentColor" />
               </svg>
            </button>
         </form>
         {
            <span className="text-[10px] text-yellow mr-2 mt-2">
               {errors.username?.type === "validate" && 'باید فقط شامل حروف انگلیسی، اعداد یا "_" باشد!'}
            </span>
         }
      </div>
   )
}

export default CheckUserExistElem