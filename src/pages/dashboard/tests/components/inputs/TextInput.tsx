import useFormDataStore from "../../store/formDataStore";

type TextInputProps = {
   title: string,
   placeholder: string,
   value: string | undefined
}

function TextInput({ title, placeholder, value }: TextInputProps) {
   const setInputValue = useFormDataStore(state => state.setInputValue);

   return (
      <div className="flex flex-col items-center w-[125px] lg:w-40">
         <label htmlFor={title} className="text-sm lg:text-base">{title}</label>
         <input
            type="number"
            dir="ltr"
            id={title}
            placeholder={placeholder}
            value={value}
            className="custom-input text-center placeholder:text-center w-full"
            onChange={e => setInputValue(title, e.currentTarget.value)}
         />
      </div>
   );
};

export default TextInput;