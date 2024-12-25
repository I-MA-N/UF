import { memo } from "react";
import useFormDataStore from "../../../../store/formDataStore";

type RadioInputProps = {
   id: number,
   text1: string,
   text2: string,
   isChecked: boolean
}

function RadioInput({ id, text1, text2, isChecked }: RadioInputProps) {
   const setInputValue = useFormDataStore(state => state.setInputValue);

   return (
      <label
         key={id} 
         htmlFor={id.toString()}
         className="flex items-center gap-1 text-sm/6 lg:text-base/8"
      >
         <p>
            <span className="font-Estedad-Black">{id}- {text1}: </span>
            <span>{text2}</span>
         </p>

         <input
            type="radio"
            name="مقدار تحرک"
            id={id.toString()}
            value={id}
            checked={isChecked}
            onChange={e => setInputValue("مقدار تحرک", e.currentTarget.value)}
         />
      </label>
   );
};

export default memo(RadioInput);