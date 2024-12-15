import { FieldErrors, FieldValues, UseFormRegister, UseFormSetValue } from "react-hook-form";
import Input from "../../../../../../../../common/Input";
import AgeJobInputs from "./AgeJobInputs";
import NameInputs from "../../../../../../../common/components/addForm/NameInputs";
import { useState } from "react";
import GenderInput from "../../../../../../../common/components/addForm/GenderInput";
import ToggleInputsBtn from "../../../../../../../common/components/addForm/ToggleInputsBtn";

type MentorInputsProps = {
   register: UseFormRegister<FieldValues>,
   errors: FieldErrors<FieldValues>,
   setValue: UseFormSetValue<FieldValues>,
}

function MentorInputs({ register, errors, setValue }: MentorInputsProps) {
   const [isInputsVisible, setIsInputsVisible] = useState(false);

   return (
      <div>
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

            <div className="mt-7">
               <label htmlFor="gender" className="mr-5 text-sm lg:text-base">جنسیت</label>
               <GenderInput<FieldValues>
                  register={register}
                  errors={errors}
                  defaultValue="male"
                  setValue={setValue}
               />
            </div>
         </div>

         <ToggleInputsBtn
            isInputsVisible={isInputsVisible}
            setIsInputsVisible={setIsInputsVisible}
         />

         <div className={`${isInputsVisible ? "block" : "hidden"} transition-all space-y-4`}>
            <NameInputs<FieldValues>
               register={register}
            />

            <Input
               direction="rtl"
               name="city"
               text="استان / شهر"
               placeholder="نمونه: اصفهان / خمینی شهر"
               register={register}
            />
            <Input
               direction="ltr"
               name="phone"
               text="شماره موبایل"
               placeholder="مثال: 09123456789"
               register={register}
               registerOptions={{ pattern: /^09\d{9}$/ }}
               render={() => (
                  <span className="text-[10px] lg:text-xs text-yellow mr-5 mt-2">
                     {errors.phone?.type === "pattern" && "شماره موبایل باید با صفر شروع، بدون اسپیس و 11 عدد باشد."}
                  </span>
               )}
               isNumberType={true}
            />

            <AgeJobInputs register={register} />
         </div>

      </div>
   );
};

export default MentorInputs;