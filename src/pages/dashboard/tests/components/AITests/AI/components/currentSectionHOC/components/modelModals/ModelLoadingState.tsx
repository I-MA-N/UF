import Loading from "../../../../../../../../../common/Loading";
import useAIStore from "../../../../../../../store/AIStore";

function ModelLoadingState() {
   const removeCurrentSection = useAIStore(state => state.removeCurrentSection);

   return (
      <div
         className="w-full fixed top-0 left-0 z-30 bg-primary/60 px-4"
         onClick={removeCurrentSection}
      >
         <div className="w-full min-h-dvh flex items-center justify-center">
            <Loading />
         </div>
      </div>
   );
};

export default ModelLoadingState;