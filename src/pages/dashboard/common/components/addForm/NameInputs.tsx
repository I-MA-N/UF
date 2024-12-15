import { FieldValues, UseFormRegister } from "react-hook-form";
import Input from "../../../../common/Input";

type NameInputsProps<T extends FieldValues> = {
   register: UseFormRegister<T>,
}

function NameInputs<T extends FieldValues>({ register }: NameInputsProps<T>) {
   return (
      <div className="flex items-center gap-x-5">
         <Input
            direction="rtl"
            name="firstname"
            text="نام"
            placeholder=""
            register={register}
            divClassName="w-1/2"
         />
         <Input
            direction="rtl"
            name="lastname"
            text="نام خانوادگی"
            placeholder=""
            register={register}
            divClassName="w-1/2"
         />
      </div>
   );
};

export default NameInputs;