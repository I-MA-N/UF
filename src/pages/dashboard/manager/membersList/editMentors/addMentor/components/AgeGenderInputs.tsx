import { FieldErrors, FieldValues, UseFormRegister, UseFormSetValue } from "react-hook-form";
import Input from "../../../../../../common/Input";
import { NewMentorData } from "../context/NewMentorContextProvider";
import GenderInput from "../../../../../common/components/GenderInput";

type AgeGenderInputsProps = {
   register: UseFormRegister<FieldValues>,
   mentorData: NewMentorData,
   setValue: UseFormSetValue<FieldValues>,
   errors: FieldErrors<FieldValues>
}

function AgeGenderInputs({ register, mentorData, setValue, errors }: AgeGenderInputsProps) {
   return (
      <div className="flex items-center gap-x-5">
         <Input
            direction="ltr"
            name="age"
            text="سن"
            placeholder=""
            register={register}
            divClassName="w-1/2"
            isNumberType={true}
            defaultValue={mentorData.data.age}
         />
         <GenderInput<FieldValues>
            register={register}
            setValue={setValue}
            errors={errors}
            defaultValue={mentorData.data.gender}
         />
      </div>
   );
};

export default AgeGenderInputs;