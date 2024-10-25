import { useMemo } from "react";
import useFormDataStore from "../../store/formDataStore";

type ChoiceInputProps = {
   index: number,
   title: string,
   value: string | undefined,
   keys: number[],
   values: string[],
}

function ChoiceInput({ index, title, value, keys, values }: ChoiceInputProps) {   
   const setInputValue = useFormDataStore(state => state.setInputValue);

   const btnWidth = useMemo(() => {  
      const screenWidth = document.body.clientWidth;
      return (screenWidth < 380 ? 284 : screenWidth < 1024 ? 326 : 396) / keys.length
   }, [keys]);

   const right = useMemo(() => {
      if (value) {
         const valueIndex = keys.indexOf(Number(value));
         if (valueIndex > -1) return valueIndex * btnWidth + 2;
      }

      return 0;
   }, [value, keys, btnWidth])

   return (
      <div className="flex flex-col justify-between bg-white text-primary rounded-[18px] w-72 xs:w-[330px] lg:w-[400px] h-40">
         <p className="h-full flex justify-center items-center px-4 text-sm text-center leading-7">
            {index}- {title}
         </p>

         <div className="rounded-3xl relative h-9 z-0 inner-shadow p-0.5 flex-shrink-0">
            <div
               className="absolute top-0 z-10 bg-secondary rounded-3xl h-8 mt-0.5 transition-all duration-200 outer-shadow"
               style={{ width: right > 0 ? btnWidth : 0, right: right + 'px' }}
            />
            <div className="flex items-center h-full relative z-20 p-0.5">
               {
                  keys.map((key, index) => (
                     <button
                        key={key}
                        type="button"
                        className={`text-[8px] lg:text-[10px]/[17px] lg:text-balance transition-colors duration-200 whitespace-nowrap overflow-x-auto ${value === key.toString() ? 'text-white' : ''}`}
                        style={{ width: btnWidth }}
                        onClick={() => setInputValue(title, key.toString())}
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

export default ChoiceInput