import ManualInput from "./ManualInput";
import ImageInput from "./ImageInput";
import { staticEvaluationType } from "../../../../../data/testsData/staticEvaluation";
import { dynamicEvaluationType } from "../../../../../data/testsData/dynamicEvaluation";
import useFormStore from "../../../../../store/formStore";

type SectionBodyProps = {
   section: staticEvaluationType[0] | dynamicEvaluationType[1]
}

function SectionBody({ section }: SectionBodyProps) {
   const { formData, setValue } = useFormStore(state => ({ formData: state.formData, setValue: state.setValue }));

   if (setValue) return (
      <div className="flex gap-x-8 gap-y-4 lg:gap-y-8 items-center justify-center flex-wrap">
         {
            section.questions.map(input => {
               const defaultValue = formData?.[input.title];

               if ("keys" in input) return (
                  <ManualInput
                     key={input.id + defaultValue}
                     title={input.title}
                     keys={input.keys}
                     values={input.values}
                     index={input.id}
                     setValue={setValue}
                     defaultValue={Number(defaultValue)}
                  />
               )

               return (
                  <ImageInput
                     key={input.id + defaultValue}
                     title={input.title}
                     image={input.src}
                     direction={input.direction}
                     setValue={setValue}
                     defaultValue={defaultValue}
                  />
               )
            })
         }
      </div>
   );
};

export default SectionBody;