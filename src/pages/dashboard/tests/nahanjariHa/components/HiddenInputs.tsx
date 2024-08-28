import { FieldValues, UseFormRegister } from "react-hook-form";
import testsData from "../../data/testsData";

type HiddenInputsProps = {
   testName: 'ناهنجاری ها' | 'ارزیابی پویا',
   initialData: any,
   register: UseFormRegister<FieldValues>
}

function HiddenInputs({ testName, initialData, register }: HiddenInputsProps) {
   return (
      <div className="hidden">
         {
            testName === 'ناهنجاری ها' ?
               testsData["ناهنجاری ها"].testData.map(section => (
                  section.questions.map(input => (
                     <input
                        type="text"
                        key={input.id + input.title}
                        {...register(input.title, {
                           validate: value => input.keys.indexOf(Number(value)) === -1 ? false : true
                        })}
                        defaultValue={initialData?.[input.title]}
                        hidden
                     />
                  ))
               )) :
               testsData["ارزیابی پویا"].testData.map(section => (
                  section.questions.map(input => (
                     <input
                        type="text"
                        key={input.id + input.title}
                        {...register(input.title, {
                           validate: value => Number(value) === 1 || Number(value) === 0
                        })}
                        defaultValue={initialData?.[input.title]}
                        hidden
                     />
                  ))
               ))
         }
      </div>
   );
};

export default HiddenInputs;