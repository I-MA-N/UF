import { FieldValues, UseFormRegister } from "react-hook-form";
import Input from "../../../../../../../../common/Input";

type AgeJobInputsProps = {
   register: UseFormRegister<FieldValues>,
}

function AgeJobInputs({ register }: AgeJobInputsProps) {
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
         />
         <Input
            direction="rtl"
            name="job"
            text="تخصص"
            placeholder="کامل و دقیق"
            register={register}
         />
      </div>
   );
};

export default AgeJobInputs;