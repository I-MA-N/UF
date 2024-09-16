import BackBtn from "./footerButtons/BackBtn";
import NextBtn from "./footerButtons/NextBtn";

function Footer() {
   return (
      <div className="flex items-center justify-between w-full h-12 lg:h-14 text-sm lg:text-base">
         <BackBtn />

         <NextBtn />
      </div>
   );
};

export default Footer;