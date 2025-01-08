import { useForm } from "react-hook-form"
import UserData from '../../../../../../../types/UserData';
import PUserData from '../../../../../../../api/common/PUserData';
import ModalItem from '../../../../../../common/ModalItem';
import Btn from '../../../../../../common/Btn';
import Modal from '../../../../../../common/Modal';

type UserChangeModalProps = {
   userData: UserData,
   setShowChangeModal: React.Dispatch<React.SetStateAction<boolean>>
}

function UserChangeModal({ userData, setShowChangeModal }: UserChangeModalProps) {
   const {
      register,
      handleSubmit,
      formState: { errors }
   } = useForm();
   const { mutate, isError, isSuccess, isPending } = PUserData();

   const submitHandler = (data: any) => {
      mutate({ ...data, for: userData.username });
   }

   return (
      <Modal>
         <Modal.Header>
            <Modal.CloseBtn clickHandler={() => setShowChangeModal(false)} />
            <Modal.Title text='ویرایش کاربر' />
         </Modal.Header>
         <Modal.Body className='!p-0'>
            <form
               onSubmit={(handleSubmit(submitHandler))}
               className="w-[298px] xs:w-80 lg:w-[424px] p-12 rounded-[32px]"
            >
               <div className="flex gap-3.5 items-center border-b border-white pb-4 relative">
                  <img src="/images/profile-img.png" alt="profile-image" className='lg:hidden' />
                  <img src="/images/profile-img-desktop.png" alt="profile-image" className='hidden lg:block' />
                  <div>
                     <p className="text-sm lg:text-lg">{userData.username}</p>
                     <p className="font-Estedad-ExtraLight text-xs lg:text-base">{userData.email}</p>
                  </div>
               </div>

               <div className="flex flex-col gap-3 lg:gap-5 pt-6 p-4">
                  <ModalItem
                     icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" fill="none" className="flex-shrink-0 w-4.5 lg:w-6">
                        <path d="M0.55 9C0.55 10.8403 0.649326 12.2816 0.900908 13.4137C1.1511 14.5394 1.5445 15.3253 2.1096 15.8904C2.67469 16.4555 3.46057 16.8489 4.58635 17.0991C5.71836 17.3507 7.15968 17.45 9 17.45C10.8403 17.45 12.2816 17.3507 13.4137 17.0991C14.5394 16.8489 15.3253 16.4555 15.8904 15.8904C16.4555 15.3253 16.8489 14.5394 17.0991 13.4137C17.3507 12.2816 17.45 10.8403 17.45 9C17.45 7.15968 17.3507 5.71836 17.0991 4.58635C16.8489 3.46057 16.4555 2.67469 15.8904 2.1096C15.3253 1.5445 14.5394 1.1511 13.4137 0.900909C12.2816 0.649326 10.8403 0.549999 9 0.549999C7.15968 0.549999 5.71836 0.649326 4.58635 0.900909C3.46057 1.1511 2.67469 1.5445 2.1096 2.1096C1.5445 2.67469 1.1511 3.46057 0.900908 4.58635C0.649326 5.71836 0.55 7.15968 0.55 9Z" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="3" cy="3" r="2.45" transform="matrix(-1 0 0 1 15 6)" stroke="currentColor" strokeWidth="1.1" />
                        <path d="M3.75 7.5H6.75M3.75 10.5H6.75" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
                     </svg>}
                     text="نام:"
                     elem={
                        <input
                           type="text"
                           id="firstname"
                           defaultValue={userData.firstname}
                           className="bg-transparent outline-none border-b border-b-white/50 my-1 w-full"
                           {...register('firstname')}
                        />
                     }
                  />
                  <ModalItem
                     icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" fill="none" className="flex-shrink-0 w-4.5 lg:w-6">
                        <path d="M0.55 9C0.55 10.8403 0.649326 12.2816 0.900908 13.4137C1.1511 14.5394 1.5445 15.3253 2.1096 15.8904C2.67469 16.4555 3.46057 16.8489 4.58635 17.0991C5.71836 17.3507 7.15968 17.45 9 17.45C10.8403 17.45 12.2816 17.3507 13.4137 17.0991C14.5394 16.8489 15.3253 16.4555 15.8904 15.8904C16.4555 15.3253 16.8489 14.5394 17.0991 13.4137C17.3507 12.2816 17.45 10.8403 17.45 9C17.45 7.15968 17.3507 5.71836 17.0991 4.58635C16.8489 3.46057 16.4555 2.67469 15.8904 2.1096C15.3253 1.5445 14.5394 1.1511 13.4137 0.900909C12.2816 0.649326 10.8403 0.549999 9 0.549999C7.15968 0.549999 5.71836 0.649326 4.58635 0.900909C3.46057 1.1511 2.67469 1.5445 2.1096 2.1096C1.5445 2.67469 1.1511 3.46057 0.900908 4.58635C0.649326 5.71836 0.55 7.15968 0.55 9Z" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="3" cy="3" r="2.45" transform="matrix(-1 0 0 1 15 6)" stroke="currentColor" strokeWidth="1.1" />
                        <path d="M3.75 7.5H6.75M3.75 10.5H6.75" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
                     </svg>}
                     text="نام خانوداگی:"
                     elem={
                        <input
                           type="text"
                           id="lastname"
                           defaultValue={userData.lastname}
                           className="bg-transparent outline-none border-b border-b-white/50 my-1 w-full"
                           {...register('lastname')}
                        />
                     }
                  />
                  <ModalItem
                     icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 17" fill="none" className="flex-shrink-0 w-4.5 lg:w-6">
                        <mask id="path-1-inside-1_370_1853" fill="white">
                           <path d="M0 8.25C0 15.0439 1.5885 16.5 9 16.5C16.4115 16.5 18 15.0439 18 8.25C18 1.45613 16.4115 0 9 0C4.1213 0 1.76575 0.630949 0.725543 3C0.185514 4.2299 0 5.92827 0 8.25Z" />
                        </mask>
                        <path d="M16.8299 2.64505C17.0259 2.41302 17.3729 2.38383 17.6049 2.57987C17.837 2.7759 17.8662 3.12292 17.6701 3.35495L16.8299 2.64505ZM9 8.25L9.00074 8.8L9 8.25ZM0.305715 3.35531C0.109483 3.12345 0.138369 2.77641 0.370233 2.58017C0.602097 2.38394 0.949138 2.41283 1.14537 2.64469L0.305715 3.35531ZM17.25 3C17.6701 3.35495 17.67 3.35506 17.6699 3.35518C17.6699 3.35525 17.6698 3.3554 17.6696 3.35554C17.6694 3.35581 17.6691 3.35617 17.6687 3.3566C17.668 3.35748 17.667 3.35866 17.6657 3.36016C17.6632 3.36316 17.6595 3.3674 17.6549 3.37285C17.6455 3.38374 17.632 3.39946 17.6144 3.41969C17.5793 3.46014 17.5279 3.51863 17.4616 3.59258C17.329 3.74045 17.1363 3.95038 16.8935 4.20173C16.4086 4.70374 15.7202 5.37442 14.9077 6.0468C14.0969 6.71786 13.1516 7.39965 12.1527 7.91609C11.158 8.43039 10.0759 8.79856 9.00074 8.8L8.99926 7.7C9.83355 7.69888 10.7374 7.40952 11.6475 6.93896C12.5535 6.47055 13.4321 5.84016 14.2064 5.19937C14.9791 4.55988 15.6372 3.91902 16.1024 3.43746C16.3347 3.19702 16.518 2.99716 16.6427 2.85817C16.705 2.7887 16.7526 2.7345 16.7842 2.69812C16.8 2.67993 16.8118 2.6662 16.8195 2.65725C16.8233 2.65277 16.8261 2.64949 16.8278 2.64744C16.8287 2.64642 16.8293 2.64571 16.8297 2.64531C16.8298 2.64511 16.8299 2.64498 16.83 2.64494C16.83 2.64492 16.83 2.64495 16.83 2.64494C16.8299 2.64498 16.8299 2.64505 17.25 3ZM9.00074 8.8C7.92329 8.80144 6.83835 8.43461 5.84079 7.9208C4.83908 7.40486 3.89094 6.72273 3.07748 6.05102C2.26243 5.378 1.57171 4.70636 1.08506 4.20354C0.841397 3.95179 0.648062 3.74149 0.514986 3.59337C0.448429 3.51928 0.39689 3.46069 0.36161 3.42017C0.343968 3.3999 0.330387 3.38415 0.321021 3.37324C0.316337 3.36778 0.312708 3.36353 0.31015 3.36053C0.308872 3.35903 0.307861 3.35784 0.307121 3.35697C0.306751 3.35653 0.306449 3.35618 0.306215 3.3559C0.306097 3.35576 0.305973 3.35561 0.305914 3.35554C0.305806 3.35542 0.305715 3.35531 0.725543 3C1.14537 2.64469 1.14531 2.64462 1.14527 2.64458C1.14528 2.64459 1.14526 2.64456 1.14528 2.64458C1.14531 2.64462 1.14542 2.64475 1.14559 2.64495C1.14593 2.64535 1.14654 2.64606 1.14741 2.64709C1.14916 2.64914 1.15197 2.65243 1.15582 2.65691C1.16351 2.66588 1.17537 2.67964 1.19124 2.69787C1.22298 2.73432 1.27073 2.78863 1.33326 2.85823C1.45836 2.99747 1.64238 3.19769 1.87548 3.43853C2.34233 3.92089 3.00267 4.5627 3.77788 5.20282C4.55467 5.84425 5.43595 6.47495 6.34448 6.9429C7.25716 7.41299 8.16325 7.70112 8.99926 7.7L9.00074 8.8ZM0.725543 3L-0.281645 2.55776H-0.281644L0.725543 3ZM1.1 8.25C1.1 11.6767 1.53344 13.2588 2.46398 14.1118C2.92893 14.538 3.61222 14.8696 4.68661 15.0885C5.76854 15.3089 7.16993 15.4 9 15.4V17.6C7.12432 17.6 5.54783 17.5091 4.24744 17.2442C2.9395 16.9777 1.83601 16.5206 0.97739 15.7336C-0.739189 14.16 -1.1 11.6172 -1.1 8.25H1.1ZM9 15.4C10.8301 15.4 12.2315 15.3089 13.3134 15.0885C14.3878 14.8696 15.0711 14.538 15.536 14.1118C16.4666 13.2588 16.9 11.6767 16.9 8.25H19.1C19.1 11.6172 18.7392 14.16 17.0226 15.7336C16.164 16.5206 15.0605 16.9777 13.7526 17.2442C12.4522 17.5091 10.8757 17.6 9 17.6V15.4ZM16.9 8.25C16.9 4.82332 16.4666 3.24117 15.536 2.38817C15.0711 1.96197 14.3878 1.63041 13.3134 1.41153C12.2315 1.19112 10.8301 1.1 9 1.1V-1.1C10.8757 -1.1 12.4522 -1.00911 13.7526 -0.744186C15.0605 -0.477732 16.164 -0.0206394 17.0226 0.766427C18.7392 2.33996 19.1 4.8828 19.1 8.25H16.9ZM9 1.1C6.57478 1.1 4.92337 1.26163 3.7789 1.65256C2.71262 2.01677 2.11722 2.56656 1.73273 3.44224L-0.281644 2.55776C0.37407 1.06438 1.47655 0.11418 3.06777 -0.429344C4.58081 -0.946157 6.54652 -1.1 9 -1.1V1.1ZM1.73273 3.44224C1.29156 4.447 1.1 5.94511 1.1 8.25H-1.1C-1.1 5.91142 -0.920529 4.01281 -0.281645 2.55776L1.73273 3.44224Z" fill="currentColor" mask="url(#path-1-inside-1_370_1853)" />
                     </svg>}
                     text="ایمیل:"
                     elem={
                        <>
                           <input
                              type="text"
                              id="email"
                              dir="ltr"
                              defaultValue={userData.email}
                              className="bg-transparent outline-none border-b border-b-white/50 my-1 w-full"
                              {...register('email', { required: true, pattern: /\w+[@]\w+[.]\w+/ })}
                           />
                           <span className="text-[10px] text-red inline-block">
                              {errors.email?.type === "required" && "پر کردن این فیلد الزامی است!"}
                              {errors.email?.type === "pattern" && "فرمت صحیح ایمیل رعایت نشده است!"}
                           </span>
                        </>
                     }
                  />
                  <ModalItem
                     icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" fill="none" className="flex-shrink-0 w-4.5 lg:w-6">
                        <path d="M0.55 9C0.55 10.8403 0.649326 12.2816 0.900908 13.4137C1.1511 14.5394 1.5445 15.3253 2.1096 15.8904C2.67469 16.4555 3.46057 16.8489 4.58635 17.0991C5.71836 17.3507 7.15968 17.45 9 17.45C10.8403 17.45 12.2816 17.3507 13.4137 17.0991C14.5394 16.8489 15.3253 16.4555 15.8904 15.8904C16.4555 15.3253 16.8489 14.5394 17.0991 13.4137C17.3507 12.2816 17.45 10.8403 17.45 9C17.45 7.15968 17.3507 5.71836 17.0991 4.58635C16.8489 3.46057 16.4555 2.67469 15.8904 2.1096C15.3253 1.5445 14.5394 1.1511 13.4137 0.900909C12.2816 0.649326 10.8403 0.549999 9 0.549999C7.15968 0.549999 5.71836 0.649326 4.58635 0.900909C3.46057 1.1511 2.67469 1.5445 2.1096 2.1096C1.5445 2.67469 1.1511 3.46057 0.900908 4.58635C0.649326 5.71836 0.55 7.15968 0.55 9Z" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M6.75 14.25H11.25" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M5.25 0.5H12.75C12.75 1.74264 11.7426 2.75 10.5 2.75H7.5C6.25736 2.75 5.25 1.74264 5.25 0.5Z" fill="currentColor" />
                     </svg>}
                     text="شماره تلفن:"
                     elem={
                        <>
                           <input
                              type="number"
                              id="phone"
                              dir="ltr"
                              defaultValue={userData.phone}
                              className="bg-transparent outline-none border-b border-b-white/50 my-1 w-full"
                              {...register('phone', { pattern: /^09\d{9}$/ })}
                           />
                           <span className="text-[10px] text-red inline-block">
                              {errors.phone?.type === "pattern" && "شماره موبایل باید با صفر شروع، بدون اسپیس و 11 عدد باشد."}
                           </span>
                        </>
                     }
                  />
                  <ModalItem
                     icon={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="flex-shrink-0 w-4.5 lg:w-6">
                        <path d="M16 16.0861C15.0866 16.7642 13.7991 17.5861 12 17.5861C10.2009 17.5861 8.91341 16.7642 8 16.0861" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M2.00129 15.0114C1.96476 14.4752 1.52548 14.0504 0.988034 14.0504C0.420441 14.0504 -0.0354561 14.5258 0.00217362 15.0921C0.427057 21.4868 2.51371 23.5735 8.90838 23.9984C9.47472 24.036 9.9501 23.5801 9.9501 23.0125C9.9501 22.475 9.52533 22.0358 8.98913 21.9992C7.95281 21.9286 7.07422 21.8134 6.32548 21.647C4.96932 21.3456 4.16478 20.9037 3.63082 20.3697C3.09686 19.8357 2.65495 19.0312 2.35355 17.6751C2.18715 16.9263 2.07189 16.0477 2.00129 15.0114ZM21.9133 15.0114C21.9499 14.4752 22.3891 14.0504 22.9266 14.0504C23.4942 14.0504 23.9501 14.5258 23.9125 15.0921C23.4876 21.4868 21.4009 23.5735 15.0062 23.9984C14.4399 24.036 13.9645 23.5801 13.9645 23.0125C13.9645 22.475 14.3893 22.0358 14.9255 21.9992C15.9618 21.9286 16.8404 21.8134 17.5892 21.647C18.9453 21.3456 19.7498 20.9037 20.2838 20.3697C20.8178 19.8357 21.2597 19.0312 21.5611 17.6751C21.7275 16.9263 21.8427 16.0477 21.9133 15.0114ZM24.0005 12.0892C24.0005 12.0739 24.0005 12.0585 24.0005 12.0432C24.0005 12.0279 24.0005 12.0126 24.0005 11.9973V12.0892ZM23.9125 8.9943C23.9501 9.56065 23.4942 10.036 22.9266 10.036C22.3891 10.036 21.9499 9.61125 21.9133 9.07505C21.8427 8.03872 21.7275 7.16013 21.5611 6.41138C21.2597 5.05522 20.8178 4.25068 20.2838 3.71672C19.7498 3.18277 18.9453 2.74085 17.5892 2.43946C16.8404 2.27305 15.9618 2.15779 14.9255 2.08719C14.3893 2.05066 13.9645 1.61138 13.9645 1.07394C13.9645 0.506343 14.4399 0.0504463 15.0062 0.0880757C21.4009 0.512957 23.4876 2.59961 23.9125 8.9943ZM2.00129 9.07505C1.96476 9.61125 1.52548 10.036 0.988034 10.036C0.420441 10.036 -0.0354562 9.56065 0.00217351 8.9943C0.427057 2.59962 2.51371 0.512964 8.90838 0.0880779C9.47472 0.0504479 9.9501 0.506345 9.9501 1.07394C9.9501 1.61138 9.52533 2.05066 8.98913 2.08719C7.95281 2.15779 7.07422 2.27305 6.32548 2.43946C4.96932 2.74085 4.16478 3.18277 3.63082 3.71672C3.09686 4.25068 2.65495 5.05522 2.35355 6.41138C2.18715 7.16013 2.07189 8.03872 2.00129 9.07505ZM11.9573 0L11.9762 2.58535e-06H11.9384L11.9573 0Z" fill="currentColor" />
                        <path d="M12 10.9141V13.9141" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M15 7.91406V8.91406" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M9 7.91406V8.91406" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                     </svg>}
                     text="جنسیت:"
                     elem={
                        <select
                           className="bg-transparent w-full border-b border-white/50 mt-1 outline-none"
                           defaultValue={userData.gender || "male"}
                           {...register('gender')}
                        >
                           <option value="male" className="text-primary">آقا</option>
                           <option value="female" className="text-primary">خانم</option>
                        </select>
                     }
                  />
               </div>
               {
                  isError &&
                  <span className="block text-xs text-center text-red mt-3">مشکلی در تغییر اطلاعات بوجود آمده است!</span>
               }
               {
                  isSuccess &&
                  <span className="block text-xs text-center text-secondary mt-3">تغییرات با موفقیت انجام شد!</span>
               }

               <Btn
                  text="تایید"
                  type="submit"
                  className="w-20 lg:w-24 h-9 lg:h-11 bg-secondary text-white text-sm lg:text-base mx-auto mt-6"
                  isDisabled={isPending}
               />
            </form>
         </Modal.Body>
      </Modal>
   )
}

export default UserChangeModal