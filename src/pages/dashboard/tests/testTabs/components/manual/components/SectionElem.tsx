import { dynamicEvaluationType } from "../../../../data/testsData/dynamicEvaluation";
import { staticEvaluationType } from "../../../../data/testsData/staticEvaluation";
import SectionHeader from "./header/SectionHeader";
import SectionBody from "./body/SectionBody";

type SectionElemProps = {
   setIsAIMethod: React.Dispatch<React.SetStateAction<boolean>>,
   section: staticEvaluationType[0][0] | dynamicEvaluationType[0][0],
}

function SectionElem({ setIsAIMethod, section }: SectionElemProps) {
   return (
      <div className="py-10" key={section.name}>
         <h3 className="mb-4 text-center text-sm lg:text-lg">{section.nameFA}</h3>
         <SectionHeader
            key={section.name}
            setIsAIMethod={setIsAIMethod}
            sectionName={section.name}
         />

         <SectionBody
            section={section}
         />
      </div>
   );
};

export default SectionElem;