import { PoseLandmarker } from "@mediapipe/tasks-vision";
import usePhotoStore from "../../../../store/photoStore";
import CameraLandmarks from "./CameraLandmarks";
import EditElem from "./EditElem";
import CameraSimple from "./CameraSimple";
import { dynamicEvaluationType } from "../../../../data/testsData/dynamicEvaluation";
import { staticEvaluationType } from "../../../../data/testsData/staticEvaluation";
import { useEffect } from "react";
import useAIStore from "../../../../store/AIStore";
import TipModal from "./camera/TipModal";

type CameraFirstLoadProps = {
   model: PoseLandmarker,
   activeTestData: dynamicEvaluationType[0] | staticEvaluationType[0]
}

function CameraFirstLoad({ model, activeTestData }: CameraFirstLoadProps) {
   const isTipShown = useAIStore(state => state.isTipShown);
   const { image, removePhoto } = usePhotoStore(state => ({ image: state.image, removePhoto: state.removePhoto }));

   const scrollHandler = () => {
      window.scrollTo(0, 0);
   }

   useEffect(() => {
      document.documentElement.style.overflow = "hidden";
      window.scrollTo(0, 0);
      window.addEventListener("scroll", scrollHandler);

      return () => {
         document.documentElement.style.overflow = "auto";
         window.removeEventListener("scroll", scrollHandler);
         removePhoto();
      }
   }, [])

   return (
      <div className="w-full fixed top-0 left-0 z-30 bg-primary/80">
         <div className="w-full px-4 sm:container">
            {
               !isTipShown && <TipModal />
            }
            {
               image
                  ?
                  <EditElem />
                  :
                  "src" in activeTestData.questions[0]
                     ?
                     <CameraLandmarks model={model} />
                     :
                     <CameraSimple model={model} />
            }
         </div>
      </div>
   );
};

export default CameraFirstLoad;