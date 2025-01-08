import usePhotoStore from "../../../../../../../../../../store/photoStore";

const SCALE = 3;
const SIZE = 80 / SCALE;
const DOT_SIZE = 4 / SCALE;

function ZoomElem() {
   const isMovingLandmark = usePhotoStore(state => state.isMovingLandmark);

   if (isMovingLandmark) return (
      <div
         id="zoomElem"
         style={{ width: SIZE, height: SIZE, transform: `scale(${SCALE})` }}
         className={`absolute top-0 right-0 z-50 bg-primary bg-no-repeat flex items-center justify-center origin-top-right`}
      >
         <div
            style={{ width: DOT_SIZE, height: DOT_SIZE }}
            className="bg-secondary rounded-full"
         />
      </div>
   );
};

export default ZoomElem;