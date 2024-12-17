import { useEffect, useState } from "react";
import { TypeAnimation } from "react-type-animation";

type DescriptionDrawerProps = {
   description: string,
   isDivVisible: boolean | undefined,
   pHeight: number,
   DIV_ANIMATION_DURATION: number,
   PARAGRAHP_ANIMATION_DURATION: number,
   PARAGRAHP_CLASSNAME: string
}

function DescriptionDrawer({ description, isDivVisible, pHeight, DIV_ANIMATION_DURATION, PARAGRAHP_ANIMATION_DURATION, PARAGRAHP_CLASSNAME }: DescriptionDrawerProps) {
   const [isPVisivle, setIsPVisible] = useState<boolean | undefined>(undefined);
   
   useEffect(() => {
      if (isDivVisible) {
         setTimeout(() => {
            setIsPVisible(true);
         }, DIV_ANIMATION_DURATION);
      }

      if (isDivVisible === false) {
         setTimeout(() => {
            setIsPVisible(false);
         }, PARAGRAHP_ANIMATION_DURATION);
      }
   }, [isDivVisible])

   return (
      <div
         className={`w-full ${isDivVisible === true ? "div-shown" : isDivVisible === false ? "div-hidden" : ""}`}
         style={{
            animationDuration: `${DIV_ANIMATION_DURATION}ms`,
            animationDelay: isDivVisible === false ? `${PARAGRAHP_ANIMATION_DURATION}ms` : "",

            "--height": `${pHeight}px`,
         } as React.CSSProperties}
      >
         <div
            className={`transition-opacity ${isDivVisible === false ? "opacity-0" : ""}`}
            style={{
               transitionDuration: `${PARAGRAHP_ANIMATION_DURATION}ms`
            }}
         >
            {
               isPVisivle &&
               <TypeAnimation
                  sequence={[
                     description,
                     2000,
                  ]}
                  wrapper="p"
                  cursor={false}
                  repeat={Infinity}
                  speed={70}
                  className={PARAGRAHP_CLASSNAME}
               />
            }
         </div>
      </div>
   );
};

export default DescriptionDrawer;