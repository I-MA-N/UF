import { useState } from "react";
import SectionNames from "../../../../../../../../../types/SectionNames";
import useAIStore from "../../../../../../store/AIStore";
import CardMenuBtns from "./CardMenuBtns";

type CardMenuProps = {
   sectionName: SectionNames,
   setShowLandmarks: React.Dispatch<React.SetStateAction<boolean>>,
   isImageBtnsDisabled: boolean
}

function CardMenu({ sectionName, setShowLandmarks, isImageBtnsDisabled }: CardMenuProps) {
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
            ${showMenu ? "z-10 opacity-100" : "-z-10 opacity-0"}
            flex justify-center items-center text-primary text-xs rounded-2xl
         `}
         >
            <div className="flex flex-col gap-6 items-center">

               <button
                  type="button"
                  className="flex flex-col gap-1 items-center"
                  onClick={() => {
                     setShowMenu(false);
                     setCurrentSection(sectionName);
                  }}
               >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 18" fill="none" className="size-4.5">
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
                     setShowLandmarks(false);
                  }}
               >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 24" fill="none" className="size-4.5">
                     <path d="M1 19C1 19.9693 1.11783 20.618 1.34327 21.0791C1.5502 21.5023 1.88679 21.8473 2.51687 22.1337C3.17962 22.4349 4.14546 22.6599 5.5602 22.8028C6.96536 22.9448 8.74527 23 11 23C13.2547 23 15.0346 22.9448 16.4398 22.8028C17.8545 22.6599 18.8204 22.4349 19.4831 22.1337C20.1132 21.8473 20.4498 21.5023 20.6567 21.0791C20.8822 20.618 21 19.9693 21 19C21 18.0307 20.8822 17.382 20.6567 16.9209C20.4498 16.4977 20.1132 16.1527 19.4831 15.8663C18.8204 15.5651 17.8545 15.3401 16.4398 15.1972C15.0346 15.0552 13.2547 15 11 15C8.74527 15 6.96536 15.0552 5.5602 15.1972C4.14546 15.3401 3.17962 15.5651 2.51687 15.8663C1.88679 16.1527 1.5502 16.4977 1.34327 16.9209C1.11783 17.382 1 18.0307 1 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                     <circle cx="6" cy="6" r="5" transform="matrix(-1 0 0 1 17 0)" stroke="currentColor" strokeWidth="2" />
                     <path fillRule="evenodd" clipRule="evenodd" d="M19.2932 11.2926C18.9027 11.6831 18.9026 12.3164 19.2929 12.7071C19.6832 13.0978 20.3163 13.0979 20.7068 12.7074L22 11.4142L23.2929 12.7071C23.6834 13.0976 24.3166 13.0976 24.7071 12.7071C25.0976 12.3166 25.0976 11.6834 24.7071 11.2929L23.4142 9.99999L24.7068 8.70741C25.0973 8.31688 25.0975 7.68358 24.7071 7.29288C24.3168 6.90217 23.6837 6.90203 23.2932 7.29256L22 8.58578L20.7071 7.29288C20.3166 6.90236 19.6834 6.90236 19.2929 7.29288C18.9024 7.68341 18.9024 8.31657 19.2929 8.7071L20.5858 9.99999L19.2932 11.2926Z" fill="currentColor" />
                  </svg>
                  عکس بدون مارک
               </button>

               <button
                  type="button"
                  className={`flex flex-col gap-1 items-center ${isImageBtnsDisabled ? "text-gray" : ""}`}
                  disabled={isImageBtnsDisabled}
                  onClick={() => {
                     setShowMenu(false);
                     setShowLandmarks(true);
                  }}
               >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 24" fill="none" className="size-4.5">
                     <path d="M1 19C1 19.9693 1.11783 20.618 1.34327 21.0791C1.5502 21.5023 1.88679 21.8473 2.51687 22.1337C3.17962 22.4349 4.14546 22.6599 5.5602 22.8028C6.96536 22.9448 8.74527 23 11 23C13.2547 23 15.0346 22.9448 16.4398 22.8028C17.8545 22.6599 18.8204 22.4349 19.4831 22.1337C20.1132 21.8473 20.4498 21.5023 20.6567 21.0791C20.8822 20.618 21 19.9693 21 19C21 18.0307 20.8822 17.382 20.6567 16.9209C20.4498 16.4977 20.1132 16.1527 19.4831 15.8663C18.8204 15.5651 17.8545 15.3401 16.4398 15.1972C15.0346 15.0552 13.2547 15 11 15C8.74527 15 6.96536 15.0552 5.5602 15.1972C4.14546 15.3401 3.17962 15.5651 2.51687 15.8663C1.88679 16.1527 1.5502 16.4977 1.34327 16.9209C1.11783 17.382 1 18.0307 1 19Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                     <circle cx="6" cy="6" r="5" transform="matrix(-1 0 0 1 17 0)" stroke="currentColor" strokeWidth="2" />
                     <path d="M19 10.5L20.5 12L24.5 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  عکس با مارک
               </button>

            </div>
         </div>
      </>
   );
};

export default CardMenu;