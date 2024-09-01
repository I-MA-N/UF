import { Results } from "@mediapipe/holistic";
import BackBtn from "./footerButtons/BackBtn";
import NextBtn from "./footerButtons/NextBtn";

type FooterProps = {
   setShowCanvas: React.Dispatch<React.SetStateAction<boolean>>,
   photoData: Results | null
}

function Footer({ setShowCanvas, photoData }: FooterProps) {
   return (
      <div className="flex items-center justify-between w-full h-12">
         <BackBtn
            setShowCanvas={setShowCanvas}
         />

         <NextBtn
            setShowCanvas={setShowCanvas}
            photoData={photoData}
         />
      </div>
   );
};

export default Footer;