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
                  evaluateFn: state.AI.evaluateFn,
                  sampleImageLandmarks: state.AI.sampleImageLandmarks,
                  sampleImageSrc: state.AI.sampleImageSrc,
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