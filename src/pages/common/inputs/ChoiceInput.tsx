import { useEffect, useMemo, useState } from "react";
import { FieldValues, UseFormRegister, UseFormSetValue } from "react-hook-form";

type ChoiceInputProps = {
   register: UseFormRegister<FieldValues>,
   setValue: UseFormSetValue<FieldValues>,
   title: string,
   keys: number[],
   values: string[],
   index: number,
   defaultValue: number
}

function ChoiceInput({ register, setValue: setInputValue, title, keys, values, index, defaultValue }: ChoiceInputProps) {
   const btnWidth = useMemo(() => {  
      const screenWidth = document.body.clientWidth;
      return (screenWidth < 380 ? 284 : 326) / keys.length
   }, [keys]);
   const [value, setValue] = useState(defaultValue);

   useEffect(() => {
      setInputValue(title, keys[value])
   }, [value, title, keys])

   return (
      <div className="bg-white text-primary rounded-[18px] w-72 xs:w-[330px]">
         <p className="pt-4 pb-6 px-4 text-sm text-center leading-7">
            {index}- {title}
         </p>
         <div className="rounded-3xl relative h-9 z-0 inner-shadow p-0.5">
            <div
               className="absolute top-0 z-10 bg-secondary rounded-3xl h-8 mt-0.5 transition-all duration-200 outer-shadow"
               style={{ width: btnWidth, right: value * btnWidth + 2 + 'px' }}
            ></div>
            <div className="flex items-center h-full relative z-20 p-0.5">
               {
                  keys.map((key, index) => (
                     <button
                        key={key}
                        type="button"
                        className={`text-[8px] transition-colors duration-200 whitespace-nowrap overflow-x-auto ${value === index ? 'text-white' : ''}`}
                        style={{ width: btnWidth }}
                        onClick={() => setValue(index)}
                     >
                        {values[index]}
                     </button>
                  ))
               }
            </div>
            <input
               type="text"
               hidden
               {...register(title, { validate: value => keys.indexOf(value) === -1 ? false : true })}
            />
         </div>
      </div>
   )
}

export default ChoiceInput