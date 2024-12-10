import useAIStore from "../../../../../store/AIStore";
import { dynamicEvaluationType } from "../../../../../data/testsData/dynamicEvaluation";
import { staticEvaluationType } from "../../../../../data/testsData/staticEvaluation";
import { useEffect, useMemo, useRef, useState } from "react";
import CardFooter from "./components/footer/CardFooter";
import CardBody from "./components/body/CardBody";

type SectionCardProps = {
   section: dynamicEvaluationType[0][0] | staticEvaluationType[0][0]
}

function SectionCard({ section }: SectionCardProps) {
   const { nameFromManualTab, removeNameFromAITab } = useAIStore(state => ({ nameFromManualTab: state.nameFromManualTab, removeNameFromAITab: state.removeNameFromAITab }));
   const sectionName = useMemo(() => section.name, [section.name]);

   const divRef = useRef<HTMLDivElement>(null);
   const [isClicked, setIsClicked] = useState(false);

   useEffect(() => {
      const top = divRef.current?.offsetTop;
      if (nameFromManualTab === sectionName && top !== undefined) {
         window.scrollTo(0, top - 100);

         setIsClicked(true);
         setTimeout(() => {
            setIsClicked(false);
            removeNameFromAITab();
         }, 1500);
      }
   }, [nameFromManualTab, sectionName])

   return (
      <>
         <div
            ref={divRef}
            className={`
               w-[47%] md:w-[31%] lg:w-[25%] xl:w-[20%]
               flex flex-col items-center ${isClicked ? "clicked-animation" : "text-white"}
            `}
         >
            <CardBody
               sectionName={sectionName}
               sectionNameFA={section.nameFA}
            />

            <CardFooter
               sectionName={sectionName}
               sectionNameFA={section.nameFA}
            />
         </div>
      </>
   )
};

export default SectionCard;