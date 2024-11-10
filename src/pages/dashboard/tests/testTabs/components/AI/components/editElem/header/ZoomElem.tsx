import usePhotoStore from "../../../../../../store/photoStore";

function ZoomElem() {
   const isMovingLandmark = usePhotoStore(state => state.isMovingLandmark);

   if (isMovingLandmark) return (
      <div
         id="zoomElem"
         className="absolute top-0 right-0 z-50 size-[80px] bg-primary
         bg-no-repeat flex items-center justify-center border border-white"
      >
         <div className="size-[5px] bg-secondary rounded-full" />
      </div>
   );
};

export default ZoomElem;