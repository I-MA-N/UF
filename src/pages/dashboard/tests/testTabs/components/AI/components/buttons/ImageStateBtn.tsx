import { useAIContext } from "../../../../../context/AIContextProvider";
import { dynamicType } from "../../../../../data/testsData/dynamic";
import { nahanjariHaType } from "../../../../../data/testsData/nahanjariHa";
import ClickedStyle from "./ClickedStyle";

type ImageStateBtnProps = {
   state: nahanjariHaType[0] | dynamicType[0]
}

function ImageStateBtn({ state }: ImageStateBtnProps) {
   const [AIData, setAIData] = useAIContext();

   return (
      <div
         className="w-full flex flex-col items-center"
         key={state.name}
      >
         <button
            type="button"
            onClick={() => setAIData(prevValue => ({
               ...prevValue,
               imageState: {
                  name: state.name,
                  nameFA: state.nameFA,
                  sampleImageLandmarks: state.AI.sampleImageLandmarks,
                  sampleImageSrc: state.AI.sampleImageSrc,
                  photoFn: state.AI.photoFn,
                  videoFn: "videoFn" in state.AI ? state.AI.videoFn : undefined
               }
            }))}
            className="w-full h-64 flex items-center justify-center border-4 border-dashed rounded-3xl"
         >
            <div
               className="absolute w-10 h-1 bg-white rounded-full"
            />
            <div
               className="absolute h-10 w-1 bg-white rounded-full"
            />
         </button>
         <span className="text-sm mt-4">{state.nameFA}</span>
         {
            AIData?.nameFromManualTab === state.name &&
            <ClickedStyle />
         }
      </div>
   );
};

export default ImageStateBtn;