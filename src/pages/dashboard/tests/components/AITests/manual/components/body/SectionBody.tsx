import ChoiceInputWithImage from "../../../../NoAITests/components/inputs/ChoiceInputWithImage";
import ImageInput from "../../../../NoAITests/components/inputs/ImageInput";
import { staticEvaluationType } from "../../../../../data/testsData/staticEvaluation";
import { dynamicEvaluationType } from "../../../../../data/testsData/dynamicEvaluation";
import useFormDataStore from "../../../../../store/formDataStore";

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
               const inputData = data?.[currentTestName!]?.[input.serverID];
               
               if (isDynamicEvaluation) return (
                  <ImageInput
                     key={input.serverID}
                     number={input.number}
                     serverID={input.serverID}
                     title={input.title}
                     image={input.src}
                     direction={input.direction}
                     value={inputData?.value}
                     isLastValueByAI={inputData?.isLastValueByAI}
                  />
               )

               return (
                  <ChoiceInputWithImage
                     key={input.serverID}
                     number={input.number}
                     serverID={input.serverID}
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