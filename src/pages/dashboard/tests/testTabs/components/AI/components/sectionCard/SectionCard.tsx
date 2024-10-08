import { useParams } from "react-router-dom";
import useAIStore from "../../../../../store/AIStore";
import GImage from "../../../../../../../../api/common/GImage";
import { dynamicEvaluationType } from "../../../../../data/testsData/dynamicEvaluation";
import { staticEvaluationType } from "../../../../../data/testsData/staticEvaluation";
import { useEffect, useMemo, useRef, useState } from "react";
import Loading from "../../../../../../../common/Loading";
import CardBtn from "./components/CardBtn";
import CardImageFirstLoad from "./components/CardImageFirstLoad";
import { FMSType } from "../../../../../data/testsData/FMS";

type SectionCardProps = {
   section: dynamicEvaluationType[0][0] | staticEvaluationType[0][0] | FMSType[0][0]
}

function SectionCard({ section }: SectionCardProps) {
   const { getOrSetZipFile, nameFromManualTab, removeNameFromAITab } = useAIStore(state => ({ getOrSetZipFile: state.getOrSetZipFile, nameFromManualTab: state.nameFromManualTab, removeNameFromAITab: state.removeNameFromAITab }));
   const sectionName = useMemo(() => section.name, [section.name]);

   const divRef = useRef<HTMLDivElement>(null);
   const [isClicked, setIsClicked] = useState(false);

   const { formname, username } = useParams();
   const { mutate, data, isPending } = GImage(username, formname, sectionName);

   const zipFile = useMemo(() => (
      getOrSetZipFile(sectionName, data ? (data?.result || null) : undefined)
   ), [getOrSetZipFile, sectionName, data])

   useEffect(() => {
      if (zipFile === undefined) mutate();
   }, [zipFile])

   useEffect(() => {
      const top = divRef.current?.offsetTop;
      if (nameFromManualTab === section.name && top !== undefined) {
         window.scrollTo(0, top - 100);
         
         setIsClicked(true);
         setTimeout(() => {
            setIsClicked(false);
            removeNameFromAITab();
         }, 1500);
      }
   }, [nameFromManualTab, section.name])

   if (isPending || zipFile === undefined) return (
      <div className="pb-8">
         <Loading fullHeight={false} />
      </div>
   )

   return (
      <div
         ref={divRef}
         className={`
            w-[47%] md:w-[31%] lg:w-[25%] xl:w-[20%]
            flex flex-col items-center ${isClicked ? "clicked-animation" : "text-white"}
         `}
      >
         <div className="size-full min-h-80 md:min-h-[23rem] lg:min-h-96">
            {
               zipFile === null
                  ?
                  <CardBtn sectionName={section.name} />
                  :
                  <CardImageFirstLoad
                     sectionName={section.name}
                     sectionNameFA={section.nameFA}
                     fileContent={zipFile}
                  />
            }
         </div>

         <span className="text-sm lg:text-base mt-4">{section.nameFA}</span>
      </div>
   )
};

export default SectionCard;