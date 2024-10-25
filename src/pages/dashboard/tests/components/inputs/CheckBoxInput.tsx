import useFormDataStore from "../../store/formDataStore";

type CheckBoxInputProps = {
   index: number,
   title: string,
   value: string | undefined,
}

function CheckBoxInput({ index, title, value }: CheckBoxInputProps) {
   const setInputValue = useFormDataStore(state => state.setInputValue);

   const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.currentTarget.checked ? "1" : "0";
      setInputValue(title, newValue);
   }

   return (
      <div
         className="flex justify-between md:justify-start items-center gap-1 md:gap-4"
      >
         <label htmlFor={title} className="text-sm/6 lg:text-base/8">{index}- {title}</label>
         <input type="checkbox" id={title} checked={value === "1" ? true : false} onChange={changeHandler} />
      </div>
   )
}

export default CheckBoxInput;