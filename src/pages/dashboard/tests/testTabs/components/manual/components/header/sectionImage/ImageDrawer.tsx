import { useState } from "react";
import ImageToggleBtn from "./ImageToggleBtn";

type ImageDrawerProps = {
   image: string,
   width: number,
   height: number
}

function ImageDrawer({ image, width, height }: ImageDrawerProps) {
   const [isVisible, setIsVisible] = useState(false);

   return (
      <>
         <img
            src={image}
            alt="عکس گرفته شده"
            className="relative top-0 left-0 transition-all duration-500 mx-auto"
            style={{
               width: width,
               height: isVisible ? height : 0
            }}
         />
         
         <ImageToggleBtn
            isVisible={isVisible}
            setIsVisible={setIsVisible}
         />
      </>
   );
};

export default ImageDrawer;