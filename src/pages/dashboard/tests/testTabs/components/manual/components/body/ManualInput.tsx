import { useEffect, useMemo, useState } from "react";
import { FieldValues, UseFormSetValue } from "react-hook-form";

type ManualInputProps = {
   id: number,
   title: string,
   keys: number[],
   values: string[] | number[],
   images: string[],
   direction: string,
   setValue: UseFormSetValue<FieldValues>,
   defaultValue: number
}

function ManualInput({ id, title, keys, values, images, direction, setValue: setInputValue, defaultValue }: ManualInputProps) {
   const btnWidth = useMemo(() => {
      const screenWidth = document.body.clientWidth;
      return (screenWidth < 380 ? 284 : screenWidth < 1024 ? 326 : 396) / keys.length
   }, [keys]);
   const [value, setValue] = useState(defaultValue);

   useEffect(() => {
      setValue(defaultValue)
   }, [defaultValue])

   useEffect(() => {
      setInputValue(title, value);
   }, [value])

   return (
      <div className="flex flex-col justify-between bg-white text-primary rounded-[18px] w-72 xs:w-[330px] lg:w-[400px] h-56">
         <div className="py-3 px-4 h-full flex flex-col items-center gap-4">
            <p className={`text-sm leading-7 ${keys.indexOf(value) === -1 ? "text-red" : "text-primary"}`}>
               {id}- {title}
            </p>
            <div className="w-full flex justify-around">
               {
                  images.map((image, index) => (
                     <img
                        key={index}
                        src={`/images/testsImages/${image}`}
                        className={
                           direction === 'vertical' 
                           ? 'w-[60px] lg:w-[80px] h-[100px] lg:h-[116px]'
                           : 'w-[100px] lg:w-[116px] h-[60px] lg:h-[80px]'
                        }
                        alt={title + 'image'}
                     />
                  ))
               }
            </div>
         </div>
         <div className="rounded-3xl relative h-9 z-0 inner-shadow p-0.5 flex-shrink-0">
            <div
               className="absolute top-0 z-10 bg-secondary rounded-3xl h-8 mt-0.5 transition-all duration-200 outer-shadow"
               style={{
                  width: value ? btnWidth : 0,
                  right: value ? (keys.indexOf(value) * btnWidth + 2 + 'px') : 0
               }}
            />
            <div className="flex items-center h-full relative z-20 p-0.5">
               {
                  keys.map((key, index) => (
                     <button
                        key={key}
                        type="button"
                        className={`text-[8px] lg:text-[10px]/[17px] lg:text-balance transition-colors duration-200 whitespace-nowrap overflow-x-auto ${value === key ? 'text-white' : ''}`}
                        style={{ width: btnWidth }}
                        onClick={() => setValue(key)}
                     >
                        {values[index]}
                     </button>
                  ))
               }
            </div>
         </div>
      </div>
   )
}

export default ManualInput;