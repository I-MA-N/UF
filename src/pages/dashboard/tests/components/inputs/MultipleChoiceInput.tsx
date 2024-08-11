import { FieldValues, UseFormRegister } from "react-hook-form";

type MultipleChoiceInputProps = {
   register: UseFormRegister<FieldValues>,
   title: string,
   defaultValue: boolean,
   index: number,
   divClassName?: string
}

function MultipleChoiceInput({ register, title, defaultValue, index, divClassName }: MultipleChoiceInputProps) {
   return (
      <div
         className={`flex justify-between md:justify-start items-center gap-1 md:gap-4 ${divClassName || ''}`}
      >
         <label htmlFor={title} className="text-sm/6 lg:text-base/8">{index}- {title}</label>
         <input type="checkbox" defaultChecked={defaultValue} {...register(title)} id={title} />
      </div>
   )
}

export default MultipleChoiceInput