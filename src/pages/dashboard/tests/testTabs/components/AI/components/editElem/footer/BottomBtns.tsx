import BackBtn from "./bottomBtns/BackBtn";
import NextBtn from "./bottomBtns/NextBtn";

function BottomBtns() {
   return (
      <div className="flex items-center justify-between w-full h-12 lg:h-14">
         <BackBtn />
         <NextBtn />
      </div>
   );
};

export default BottomBtns;