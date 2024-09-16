import useAIStore from "../../../../../../store/AIStore";
import SectionNames from "../../../../../../../../../types/SectionNames";

type CardBtnProps = {
   sectionName: SectionNames
}

function CardBtn({ sectionName }: CardBtnProps) {
   const setCurrentSection = useAIStore(state => state.setCurrentSection);

   return (
      <button
         type="button"
         onClick={() => setCurrentSection(sectionName)}
         className="size-full flex items-center justify-center border-4 lg:border-[5px] border-dashed rounded-3xl lg:rounded-[48px]"
      >
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 4" fill="none" className="w-10 lg:w-14 absolute">
            <line x1="2" y1="2" x2="38" y2="2" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
         </svg>
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 4" fill="none" className="w-10 lg:w-14 absolute rotate-90">
            <line x1="2" y1="2" x2="38" y2="2" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
         </svg>
      </button>
   )
};

export default CardBtn;