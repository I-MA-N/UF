import { useRef, useState } from 'react';
import ToggleDescriptionBtn from './cardBody/ToggleDescriptionBtn';
import DescriptionDrawer from './cardBody/DescriptionDrawer';


const DIV_ANIMATION_DURATION = 1000; // First animation starts
const PARAGRAHP_ANIMATION_DURATION = 800; // Second animation starts
const PARAGRAHP_CLASSNAME = "text-xs/7 lg:text-sm/9 text-justify";

type CardBodyProps = {
   description: string
}

function CardBody({ description }: CardBodyProps) {
   const [isDivVisible, setIsDivVisible] = useState<boolean | undefined>(undefined);
   const pRef = useRef<HTMLParagraphElement>(null);

   return (
      <div className='relative border-y border-primary mt-4'>
         <ToggleDescriptionBtn
            isDivVisible={isDivVisible}
            setIsDivVisible={setIsDivVisible}
            DIV_ANIMATION_DURATION={DIV_ANIMATION_DURATION}
         />

         {/* To get accurate height of text */}
         <p ref={pRef} dangerouslySetInnerHTML={{__html: description}} className={`w-full absolute top-0 left-0 -z-50 opacity-0 ${PARAGRAHP_CLASSNAME}`}>
            {/* {description} */}
         </p>

         <DescriptionDrawer
            description={description}
            isDivVisible={isDivVisible}
            pHeight={pRef.current?.clientHeight! + 16}
            DIV_ANIMATION_DURATION={DIV_ANIMATION_DURATION}
            PARAGRAHP_ANIMATION_DURATION={PARAGRAHP_ANIMATION_DURATION}
            PARAGRAHP_CLASSNAME={PARAGRAHP_CLASSNAME}
         />
      </div>
   );
};

export default CardBody;