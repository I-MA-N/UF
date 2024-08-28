import { useEffect, useState } from "react";
import { FieldValues, UseFormSetValue } from "react-hook-form";

type ImageInputProps = {
   setValue: UseFormSetValue<FieldValues>,
   title: string,
   image: string,
   direction: string,
   defaultValue: number
}

function ImageInput({ setValue: setInputValue, title, image, direction, defaultValue }: ImageInputProps) {
   const [value, setValue] = useState(defaultValue);

   useEffect(() => {
      setValue(defaultValue)
   }, [defaultValue])

   useEffect(() => {
      setInputValue(title, value);
   }, [value])

   return (
      <div
         className={`flex flex-col gap-1 lg:gap-2 items-center text-center
            ${direction === "vertical" ? 'w-[100px] lg:w-32' : 'w-[158px] lg:w-48'}
         `}
         onClick={() => setValue(prevValue => prevValue === 0 ? 1 : 0)}
      >
         <div className="relative w-full">
            <img
               src={image}
               className="rounded-2xl w-full"
            />
            {
               value === 1 &&
               <div className="absolute top-0 left-0 flex justify-center items-center bg-yellow/50 rounded-2xl w-full h-full">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-6 lg:w-8">
                     <path fillRule="evenodd" clipRule="evenodd" d="M16.7071 9.70711C17.0976 9.31658 17.0976 8.68342 16.7071 8.29289C16.3166 7.90237 15.6834 7.90237 15.2929 8.29289L11 12.5858L9.20711 10.7929C8.81658 10.4024 8.18342 10.4024 7.79289 10.7929C7.40237 11.1834 7.40237 11.8166 7.79289 12.2071L10.2929 14.7071C10.6834 15.0976 11.3166 15.0976 11.7071 14.7071L16.7071 9.70711Z" fill="#083C5A" />
                     <path d="M1 12C1 14.4477 1.13246 16.3463 1.46153 17.827C1.78807 19.2963 2.29478 20.2921 3.00136 20.9986C3.70794 21.7052 4.70365 22.2119 6.17298 22.5385C7.65366 22.8675 9.55232 23 12 23C14.4477 23 16.3463 22.8675 17.827 22.5385C19.2963 22.2119 20.2921 21.7052 20.9986 20.9986C21.7052 20.2921 22.2119 19.2963 22.5385 17.827C22.8675 16.3463 23 14.4477 23 12C23 9.55232 22.8675 7.65366 22.5385 6.17298C22.2119 4.70365 21.7052 3.70794 20.9986 3.00136C20.2921 2.29478 19.2963 1.78807 17.827 1.46153C16.3463 1.13246 14.4477 1 12 1C9.55232 1 7.65366 1.13246 6.17298 1.46153C4.70365 1.78807 3.70794 2.29478 3.00136 3.00136C2.29478 3.70794 1.78807 4.70365 1.46153 6.17298C1.13246 7.65366 1 9.55232 1 12Z" stroke="#083C5A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
               </div>
            }
         </div>
         <p className="text-[10px] lg:text-sm">{title}</p>
      </div>
   )
}

export default ImageInput