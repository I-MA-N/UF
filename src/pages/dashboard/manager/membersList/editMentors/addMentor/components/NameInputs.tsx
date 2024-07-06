import { FieldValues, UseFormRegister } from "react-hook-form";
import Input from "../../../../../../common/Input";
import { NewMentorData } from "../context/NewMentorContextProvider";

type NameInputsProps = {
   register: UseFormRegister<FieldValues>,
   mentorData: NewMentorData
}

function NameInputs({ register, mentorData }: NameInputsProps) {
   return (
      <div className="flex items-center gap-x-5">
         <Input
            direction="rtl"
            name="firstName"
            text="نام"
            placeholder=""
            register={register}
            divClassName="w-1/2"
            defaultValue={mentorData.data.firstName}
         />
         <Input
            direction="rtl"
            name="lastName"
            text="نام خانوادگی"
            placeholder=""
            register={register}
            divClassName="w-1/2"
            defaultValue={mentorData.data.lastName}
         />
      </div>
   );
};

export default NameInputs;