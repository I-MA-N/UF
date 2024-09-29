import { useState } from "react";
import SectionNames from "../../../../../../../../../types/SectionNames";
import useAIStore from "../../../../../../store/AIStore";
import CardMenuBtns from "./CardMenuBtns";

type CardMenuProps = {
   sectionName: SectionNames,
   setShowImageBigger: React.Dispatch<React.SetStateAction<boolean>>,
   isImageBtnsDisabled: boolean
}

function CardMenu({ sectionName, setShowImageBigger, isImageBtnsDisabled }: CardMenuProps) {
   const setCurrentSection = useAIStore(state => state.setCurrentSection);
   const [showMenu, setShowMenu] = useState(false);

   return (
      <>
         <CardMenuBtns
            showMenu={showMenu}
            setShowMenu={setShowMenu}
         />

         <div
            className={`
               size-full bg-white absolute top-0 right-0 transition-all duration-200
               ${showMenu ? "z-10 opacity-100" : "-z-10 opacity-0"} rounded-2xl lg:rounded-[38px]
               flex justify-center items-center text-primary text-xs md:text-sm lg:text-base
            `}
         >
            <div className="h-full flex flex-col gap-4 justify-center items-center">

               <button
                  type="button"
                  className="flex flex-col gap-1 items-center"
                  onClick={() => {
                     setShowMenu(false);
                     setCurrentSection(sectionName);
                  }}
               >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 18" fill="none" className="size-4.5 md:size-5 lg:size-6">
                     <path d="M11.75 0.600045L11.75 0.600045L7.25 0.60002C6.68639 0.600013 6.58911 0.735171 6.57521 0.754478L6.57461 0.755319C6.5542 0.783304 6.52839 0.835276 6.50393 0.944594C6.4846 1.03103 6.47313 1.11476 6.45809 1.22466C6.45202 1.269 6.44536 1.31759 6.43737 1.37235C6.38904 1.70363 6.29895 2.2215 5.85686 2.61688C5.42328 3.00466 4.77251 3.17145 3.87482 3.17145C3.13356 3.17144 2.64322 3.35318 2.29881 3.62899C1.94832 3.90967 1.68419 4.33961 1.49519 4.95218C1.10622 6.21281 1.10001 8.00347 1.10001 10.1626L1.10001 10.1633C1.1 13.443 1.51705 15.1303 2.61282 16.0765C3.16548 16.5537 3.94534 16.8908 5.07815 17.1043C6.21342 17.3182 7.65767 17.4 9.5 17.4C11.3411 17.4 12.7846 17.3135 13.919 17.094C15.0507 16.875 15.8314 16.5315 16.3853 16.0492C17.4839 15.0926 17.9 13.4018 17.9 10.1633C17.9 8.04693 17.8939 6.25463 17.5044 4.98252C17.3148 4.36318 17.0494 3.92458 16.6972 3.63766C16.3522 3.35661 15.8629 3.17145 15.125 3.17145C14.2273 3.17145 13.5765 3.00467 13.143 2.61688C12.7009 2.22148 12.6108 1.7036 12.5625 1.37232C12.5545 1.31757 12.5479 1.26897 12.5418 1.22464C12.5268 1.11474 12.5153 1.03101 12.496 0.944576C12.4716 0.835261 12.4458 0.783298 12.4254 0.755323C12.4252 0.755073 12.425 0.754792 12.4247 0.75448C12.4109 0.735189 12.3136 0.60004 11.75 0.600045Z" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                     <ellipse cx="0.75" cy="0.75" rx="0.75" ry="0.75" transform="matrix(-1 0 0 1 14.75 5.25)" fill="currentColor" />
                     <circle cx="3.75" cy="3.75" r="3.15" transform="matrix(-4.37114e-08 -1 -1 4.37114e-08 13.25 13.5)" stroke="currentColor" strokeWidth="1.2" />
                  </svg>
                  عکس گرفتن مجدد
               </button>

               <button
                  type="button"
                  className={`flex flex-col gap-1 items-center ${isImageBtnsDisabled ? "text-gray" : ""}`}
                  disabled={isImageBtnsDisabled}
                  onClick={() => {
                     setShowMenu(false);
                     setShowImageBigger(true);
                  }}
               >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="size-4.5 md:size-5 lg:size-6">
                     <path d="M1 11.4783C1 15.8486 1.78302 18.3581 3.30283 19.8237C4.83125 21.2975 7.35021 21.9565 11.4783 21.9565C15.6063 21.9565 18.1253 21.2975 19.6537 19.8237C21.1735 18.3581 21.9565 15.8486 21.9565 11.4783C21.9565 7.10793 21.1735 4.59845 19.6537 3.13291C18.1253 1.65907 15.6063 1.00002 11.4783 1.00002C7.35021 1.00002 4.83125 1.65907 3.30283 3.13291C1.78302 4.59845 1 7.10793 1 11.4783Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                     <path d="M22.9565 22.9565L20.3478 20.3478" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                     <path d="M8.34784 11.4783H11.4783M14.6087 11.4783H11.4783M11.4783 11.4783V8.34784V14.6087" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  مشاهده عکس در ابعاد بزرگتر
               </button>

            </div>
         </div>
      </>
   );
};

export default CardMenu;