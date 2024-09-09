import BackBtn from "./footerButtons/BackBtn";
import NextBtn from "./footerButtons/NextBtn";

function Footer() {
   return (
      <div className="flex items-center justify-between w-full h-12">
         <BackBtn />

         <NextBtn />
      </div>
   );
};

export default Footer;