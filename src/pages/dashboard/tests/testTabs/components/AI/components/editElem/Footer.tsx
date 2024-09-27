import BottomBtns from "./footer/BottomBtns";
import EditBtns from "./footer/EditBtns";

type FooterProps = {
   selectedLandmark: number | null,
   setSelectedLandmark: React.Dispatch<React.SetStateAction<number | null>>,
}

function Footer({ selectedLandmark, setSelectedLandmark }: FooterProps) {
   return (
      <div className="w-full space-y-2 flex-shrink-0 text-sm lg:text-base">
         <EditBtns
            selectedLandmark={selectedLandmark}
            setSelectedLandmark={setSelectedLandmark}
         />

         <BottomBtns />
      </div>
   );
};

export default Footer;