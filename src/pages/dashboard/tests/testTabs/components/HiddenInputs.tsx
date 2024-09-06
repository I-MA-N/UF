import testsData from "../../data/testsData";
import useFormStore from "../../store/formStore";

type HiddenInputsProps = {
   testName: 'ناهنجاری ها' | 'ارزیابی پویا',
}

function HiddenInputs({ testName }: HiddenInputsProps) {
   const { register, formData } = useFormStore(state => ({ register: state.register, formData: state.formData }));

   if (register) return (
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
                        defaultValue={formData?.[input.title]}
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
                        defaultValue={formData?.[input.title]}
                        hidden
                     />
                  ))
               ))
         }
      </div>
   );
};

export default HiddenInputs;