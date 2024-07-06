import { useEffect, useMemo, useState } from "react";
import { FieldValues, UseFormRegister, UseFormSetValue } from "react-hook-form";

type ChoiceInputProps = {
   register: UseFormRegister<FieldValues>,
   setValue: UseFormSetValue<FieldValues>,
   title: string,
   imgAddress: string,
   imgSize: string,
   keys: number[],
   values: string[],
   index: number,
   defaultValue: number
}

function ChoiceImage({ register, setValue: setInputValue, title, imgAddress, imgSize, keys, values, index, defaultValue }: ChoiceInputProps) {
   const btnWidth = useMemo(() => {
      const screenWidth = document.body.clientWidth;
      return (screenWidth < 380 ? 284 : screenWidth < 1024 ? 326 : 396) / keys.length
   }, [keys]);
   const [value, setValue] = useState(defaultValue);

   useEffect(() => {
      setInputValue(title, keys[value])
   }, [value, title, keys])

   return (
      <div className="flex flex-col justify-between bg-white text-primary rounded-[18px] w-72 xs:w-[330px] lg:w-[400px] min-h-72">
         <div className="pt-4 pb-2.5 px-4 text-sm text-center leading-7">
            <p className="mb-2">
               {index}- {title}
            </p>
            <img 
               src={imgAddress} 
               className={`${imgSize === "sm" ? 'w-[150px]' : 'w-[170px]'} mx-auto`}
               alt="test-img" 
            />
         </div>
         <div className="rounded-3xl relative h-9 lg:h-10 z-0 inner-shadow p-0.5">
            <div
               className="absolute top-0 z-10 bg-secondary rounded-3xl h-8 lg:h-9 mt-0.5 transition-all duration-200 outer-shadow"
               style={{ width: btnWidth, right: value * btnWidth + 2 + 'px' }}
            ></div>
            <div className="flex items-center h-full relative z-20 p-0.5">
               {
                  keys.map((key, index) => (
                     <button
                        key={key}
                        type="button"
                        className={`h-full text-xs lg:text-base transition-colors duration-200 whitespace-nowrap overflow-x-auto ${value === index ? 'text-white' : ''}`}
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

export default ChoiceImage