import ManualInput from "./ManualInput";
import { dynamicEvaluationType } from "../../../../data/testsData/dynamicEvaluation";
import { staticEvaluationType } from "../../../../data/testsData/staticEvaluation";
import ImageInput from "./ImageInput";
import ImageElemFirstLoad from "./sectionImage/ImageElemFirstLoad";
import useFormStore from "../../../../store/formStore";

type SectionElemProps = {
   setIsAIMethod: React.Dispatch<React.SetStateAction<boolean>>,
   section: staticEvaluationType[0] | dynamicEvaluationType[0],
}

function SectionElem({ setIsAIMethod, section }: SectionElemProps) {
   const { formData, setValue } = useFormStore(state => ({ formData: state.formData, setValue: state.setValue }))

   return (
      <div className="py-10" key={section.name}>
         <h3 className="mb-3 text-center text-sm lg:text-base">{section.nameFA}</h3>

         <ImageElemFirstLoad
            key={section.name}
            setIsAIMethod={setIsAIMethod}
            sectionName={section.name}
         />

         {
            setValue &&
            <div className="flex gap-x-8 gap-y-4 lg:gap-y-8 items-center justify-center flex-wrap">
               {
                  section.questions.map(input => {
                     const defaultValue = formData?.[input.title];

                     if ("keys" in input) return (
                        <ManualInput
                           key={input.title}
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
                           key={input.id}
                           title={input.title}
                           image={input.src}
                           direction={input.direction}
                           setValue={setValue}
                           defaultValue={Number(defaultValue) || 0}
                        />
                     )
                  })
               }
            </div>
         }
      </div>
   );
};

export default SectionElem;