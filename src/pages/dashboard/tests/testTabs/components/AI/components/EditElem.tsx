import { useRef } from "react";
import CanvasElem from "./editElem/body/CanvasElem";
import EditCursor from "./editElem/body/EditCursor";
import usePhotoStore from "../../../../store/photoStore";

type EditElemProps = {
   selectedLandmark: number | null,
   setSelectedLandmark: React.Dispatch<React.SetStateAction<number | null>>
}

function EditElem({ selectedLandmark, setSelectedLandmark }: EditElemProps) {
   const { image, landmarks, videoSize } = usePhotoStore(state => ({ image: state.image, landmarks: state.landmarks, videoSize: state.videoSize }));
   const canvasRef = useRef<HTMLCanvasElement | null>(null);
   // console.log(image);
   // console.log(landmarks);

   return (
      <>
         <div className="relative">
            <img src={image!} width={videoSize?.width} height={videoSize?.height} />

            {
               landmarks?.length &&
               <CanvasElem
                  canvasRef={canvasRef}
                  selectedLandmark={selectedLandmark}
                  setSelectedLandmark={setSelectedLandmark}
               />
            }

            <EditCursor />

            {!landmarks?.length &&
               <span className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 min-w-52 text-center text-sm lg:text-base font-Estedad-Black text-red bg-white px-4 py-2 rounded-full">
                  نقطه ای در عکس یافت نشد!
               </span>
            }
         </div>

      </>
   );
};

export default EditElem;