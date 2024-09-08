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
         className="size-full flex items-center justify-center border-4 border-dashed rounded-3xl"
      >
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 4 40" fill="none" className="w-1 absolute">
            <line x1="2" y1="38" x2="2" y2="2" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
         </svg>
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 4" fill="none" className="w-10 absolute">
            <line x1="2" y1="2" x2="38" y2="2" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
         </svg>
      </button>
   )
};

export default CardBtn;