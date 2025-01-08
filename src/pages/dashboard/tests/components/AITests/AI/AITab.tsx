import useAIStore from "../../../store/AIStore";
import CardsList from "./components/cardsList/CardsList";
import CurrentSectionHOC from "./components/currentSectionHOC/CurrentSectionHOC";

function AITab() {
   const { currentSection, activeTestData } = useAIStore(state => ({ currentSection: state.currentSection, activeTestData: state.activeTestData }));

   if (activeTestData) return (
      <>
         <CardsList activeTestData={activeTestData} />

         {
            currentSection &&
            <CurrentSectionHOC />
         }
      </>
   );
};

export default AITab;