import { dynamicEvaluationType } from "../../../../../data/testsData/dynamicEvaluation";
import { staticEvaluationType } from "../../../../../data/testsData/staticEvaluation";
import SectionCard from "./components/SectionCard";

type CardsListProps = {
   activeTestData: staticEvaluationType | dynamicEvaluationType
}

function CardsList({ activeTestData }: CardsListProps) {

   return (
      <div className="grid grid-cols-1 divide-y-2 divide-secondary">
         {
            activeTestData.map((part, index) => (
               <div
                  key={index}
                  className="flex flex-wrap justify-center gap-x-5 lg:gap-x-12 gap-y-6 py-10"
               >
                  {
                     part.map(section => (
                        <SectionCard
                           key={section.name}
                           sectionName={section.name}
                           sectionNameFA={section.nameFA}
                        />
                     ))
                  }
               </div>
            ))
         }
      </div>
   );
};

export default CardsList;