import BackBtn from "./footerButtons/BackBtn";
import NextBtn from "./footerButtons/NextBtn";
import SelectedLandmarkBtns from "./footerButtons/SelectedLandmarkBtns";

type FooterProps = {
   selectedLandmark: number | null,
   setSelectedLandmark: React.Dispatch<React.SetStateAction<number | null>>
}

function Footer({ selectedLandmark, setSelectedLandmark }: FooterProps) {
   return (
      <div className="flex items-center justify-between w-full h-12 lg:h-14 text-sm lg:text-base">
         <BackBtn />

         <SelectedLandmarkBtns
            selectedLandmark={selectedLandmark}
            setSelectedLandmark={setSelectedLandmark}
         />

         <NextBtn />
      </div>
   );
};

export default Footer;