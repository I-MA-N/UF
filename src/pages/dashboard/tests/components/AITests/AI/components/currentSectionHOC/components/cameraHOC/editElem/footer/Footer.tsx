import usePhotoStore from "../../../../../../../../../store/photoStore";
import BottomBtns from "./components/BottomBtns";
import EditBtns from "./components/EditBtns";


type FooterProps = {
   selectedLandmark: number | null,
   setSelectedLandmark: React.Dispatch<React.SetStateAction<number | null>>,
}

function Footer({ selectedLandmark, setSelectedLandmark }: FooterProps) {
   const landmarks = usePhotoStore(state => state.landmarks);

   return (
      <div className="w-full space-y-2 flex-shrink-0 text-sm lg:text-base">
         {
            landmarks?.length &&
            <EditBtns
               selectedLandmark={selectedLandmark}
               setSelectedLandmark={setSelectedLandmark}
            />
         }
         
         <BottomBtns
            selectedLandmark={selectedLandmark}
         />
      </div>
   );
};

export default Footer;