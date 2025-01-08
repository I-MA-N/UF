import useBooleansStore from "../../../../../store/booleansStore";
import useModelStore from "../../../../../store/modelStore";
import CameraHOC from "./components/cameraHOC/CameraHOC";
import CameraListModal from "./components/cameraListModal/CameraListModal";
import HeightInputModal from "./components/heightInputModal/HeightInputModal";
import ModelErrState from "./components/modelModals/ModelErrState";
import ModelLoadingState from "./components/modelModals/ModelLoadingState";
import TipModal from "./components/tipModal/TipModal";

function CurrentSectionHOC() {
   const { isInputHeightNeeded, isCameraListShown, isTipShown } = useBooleansStore(state => ({ isInputHeightNeeded: state.isInputHeightNeeded, isCameraListShown: state.isCameraListShown, isTipShown: state.isTipShown }));
   const model = useModelStore(state => state.model);

   if (!isCameraListShown) return (
      <CameraListModal />
   )

   if (!isTipShown) return (
      <TipModal />
   )

   if (isInputHeightNeeded) return (
      <HeightInputModal />
   )

   if (model === null) return (
      <ModelErrState />
   )

   if (model === undefined) return (
      <ModelLoadingState />
   )

   return (
      <CameraHOC />
   )
};

export default CurrentSectionHOC;