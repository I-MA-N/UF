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
      <div key={state.name}>
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
         >
            {state.nameFA}
         </button>
         {
            AIData?.nameFromManualTab === state.name &&
            <ClickedStyle />
         }
      </div>
   );
};

export default ImageStateBtn;