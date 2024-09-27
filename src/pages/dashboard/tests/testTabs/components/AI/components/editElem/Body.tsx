import { useRef } from "react";
import CanvasElem from "./body/CanvasElem";
import usePhotoStore from "../../../../../store/photoStore";

type BodyProps = {
   selectedLandmark: number | null,
   selectedPalette: string[]
}

function Body({ selectedLandmark, selectedPalette }: BodyProps) {
   const { image, landmarks, videoSize } = usePhotoStore(state => ({ image: state.image, landmarks: state.landmarks, videoSize: state.videoSize }));
   const canvasRef = useRef<HTMLCanvasElement | null>(null);

   return (
      <div className="relative">
         <img id="editImage" src={image!} width={videoSize?.width} height={videoSize?.height} />

         {
            landmarks?.length > 0 &&
            <CanvasElem
               canvasRef={canvasRef}
               selectedLandmark={selectedLandmark}
               selectedPalette={selectedPalette}
            />
         }

         {landmarks?.length === undefined &&
            <span className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 min-w-52 text-center text-sm lg:text-base font-Estedad-Black text-red bg-white px-4 py-2 rounded-full">
               نقطه ای در عکس یافت نشد!
            </span>
         }
      </div>
   );
};

export default Body;