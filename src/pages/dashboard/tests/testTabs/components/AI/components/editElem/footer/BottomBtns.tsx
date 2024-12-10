import BackBtn from "./bottomBtns/BackBtn";
import NextBtn from "./bottomBtns/NextBtn";
import LANDMARKS_NAMES from "./editBtns/LandmarksNames";

type BottomBtnsProps = {
   selectedLandmark: number | null
}

function BottomBtns({ selectedLandmark }: BottomBtnsProps) {
   return (
      <div className="flex items-center justify-between w-full h-12 lg:h-14">
         <BackBtn />
         <span className="text-center px-1">
            {selectedLandmark !== null && LANDMARKS_NAMES[selectedLandmark]}
         </span>
         <NextBtn />
      </div>
   );
};

export default BottomBtns;