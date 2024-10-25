import ChoiceInputWithImage from "../../../../../components/inputs/ChoiceInputWithImage";
import ImageInput from "../../../../../components/inputs/ImageInput";
import { staticEvaluationType } from "../../../../../data/testsData/staticEvaluation";
import { dynamicEvaluationType } from "../../../../../data/testsData/dynamicEvaluation";
import useFormDataStore from "../../../../../store/formDataStore";
import getInputKey from "../../../../../../../../utils/getInputKey";

type SectionBodyProps = {
   section: staticEvaluationType[0][0] | dynamicEvaluationType[0][0]
}

function SectionBody({ section }: SectionBodyProps) {
   const { data, currentTestName } = useFormDataStore(state => ({ data: state.data, currentTestName: state.currentTestName }));

   return (
      <div className="flex gap-x-8 gap-y-4 lg:gap-y-8 items-center justify-center flex-wrap">
         {
            section.questions.map(input => {
               const isDynamicEvaluation = "src" in input;
               const inputKey = getInputKey(isDynamicEvaluation, section.nameFA, input.title);
               const inputData = data?.[currentTestName!]?.[inputKey];

               if (isDynamicEvaluation) return (
                  <ImageInput
                     key={input.id}
                     id={input.id}
                     title={input.title}
                     image={input.src}
                     direction={input.direction}
                     value={inputData?.value}
                     isLastValueByAI={inputData?.isLastValueByAI}
                     inputKey={inputKey}
                  />
               )

               return (
                  <ChoiceInputWithImage
                     key={input.id}
                     id={input.id}
                     title={input.title}
                     keys={input.keys}
                     values={input.values}
                     images={input.images}
                     direction={input.direction}
                     value={inputData?.value}
                     isLastValueByAI={inputData?.isLastValueByAI}
                  />
               )
            })
         }
      </div>
   );
};

export default SectionBody;