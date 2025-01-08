import useAIStore from "../../../../../../../store/AIStore";

function ModelErrState() {
   const removeCurrentSection = useAIStore(state => state.removeCurrentSection);

   return (
      <div
         className="w-full fixed top-0 left-0 z-30 bg-primary/60 px-4"
         onClick={removeCurrentSection}
      >
         <div className="w-full min-h-dvh flex items-center justify-center">
            <p className="text-sm lg:text-base font-Estedad-Black text-red bg-white px-4 py-2 rounded-full mt-5">
               دانلود مدل هوش مصنوعی با مشکل مواجه شد!
            </p>
         </div>
      </div>
   );
};

export default ModelErrState;