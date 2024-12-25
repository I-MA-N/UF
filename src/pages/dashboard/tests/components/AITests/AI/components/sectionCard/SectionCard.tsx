import useAIStore from "../../../../../store/AIStore";
import { useEffect, useRef, useState } from "react";
import CardFooter from "./components/footer/CardFooter";
import CardBody from "./components/body/CardBody";
import SectionNames from "../../../../../../../../types/SectionNames";
import { useShallow } from "zustand/react/shallow";

type SectionCardProps = {
   sectionName: SectionNames,
   sectionNameFA: string
}

function SectionCard({ sectionName, sectionNameFA }: SectionCardProps) {
   const { nameFromManualTab, removeNameFromAITab } = useAIStore(useShallow(
      state => ({ nameFromManualTab: state.nameFromManualTab, removeNameFromAITab: state.removeNameFromAITab })
   ));

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
               sectionNameFA={sectionNameFA}
            />

            <CardFooter
               sectionName={sectionName}
               sectionNameFA={sectionNameFA}
            />
         </div>
      </>
   )
};

export default SectionCard;