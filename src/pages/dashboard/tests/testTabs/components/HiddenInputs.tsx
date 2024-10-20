import useAIStore from "../../store/AIStore";
import useFormStore from "../../store/formStore";

function HiddenInputs() {
   const activeTestData = useAIStore(state => state.activeTestData);
   const { register, formData } = useFormStore(state => ({ register: state.register, formData: state.formData }));

   if (register) return (
      <div className="hidden">
         {
            activeTestData?.map(part => (
               part.map(section => (
                  section.questions.map(input => {
                     const isDynamicEvaluationData = "src" in input;
                     if (isDynamicEvaluationData) return (
                        <input
                           type="text"
                           key={input.id + input.title}
                           {...register(input.title, {
                              validate: value => value == 1 || value == 0
                           })}
                           defaultValue={formData?.[input.title]}
                           hidden
                        />
                     )

                     return (
                        <input
                           type="text"
                           key={input.id + input.title}
                           {...register(input.title, {
                              validate: value => input.keys.indexOf(Number(value)) === -1 ? false : true
                           })}
                           defaultValue={formData?.[input.title]}
                           hidden
                        />
                     )
                  })
               ))
            ))
         }
      </div>
   );
};

export default HiddenInputs;