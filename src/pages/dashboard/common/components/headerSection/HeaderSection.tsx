import { PropsWithChildren, ReactNode, useState } from "react";
import HeaderSectionContextProvider, { useHeaderSectionContext } from "./HeaderSectionContext";
import ExitModal from "./ExitModal";

function HeaderSection({ children }: PropsWithChildren) {
   return (
      <section className="w-full flex items-center justify-between gap-1 relative">
         <HeaderSectionContextProvider>
            {children}
         </HeaderSectionContextProvider>
      </section>
   )
}

type ExitBtnProps = {
   exitModalText: string
}

HeaderSection.ExitBtn = function ExitBtn({ exitModalText }: ExitBtnProps) {
   const [showExitModal, setShowExitModal] = useState(false);
   const { isCircle } = useHeaderSectionContext();

   return (
      <>
         <button
            type="button"
            className={`
               header-section-btn bg-primary text-yellow border-yellow
               ${isCircle ? "header-section-btn-circle" : "header-section-btn-ellipse"}
            `}
            onClick={() => setShowExitModal(true)}
         >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" className={`transition-all ${isCircle ? "w-4.5 lg:w-5" : "w-4 lg:w-5"}`}>
               <path d="M13 3L8 8M8 8L3 13M8 8L13 13M8 8L3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {
               !isCircle && "خروج"
            }
         </button>

         {
            showExitModal &&
            <ExitModal
               setShowExitModal={setShowExitModal}
               exitModalText={exitModalText}
            />
         }
      </>
   );
};

type TitleProps = {
   text: string
}

HeaderSection.Title = function Title({ text }: TitleProps) {
   return (
      <h2 className="font-Estedad-Black text-center lg:text-2xl">
         {text}
      </h2>
   )
}

type ActionBtnProps = {
   hidden: boolean,
   text: string,
   icon: ReactNode,
   clickHandler: () => void
} | {
   hidden: boolean,
   text?: string,
   icon?: ReactNode,
   clickHandler?: () => void
}

HeaderSection.ActionBtn = function ActionBtn({ hidden, text, icon, clickHandler }: ActionBtnProps) {
   const { isCircle } = useHeaderSectionContext();

   return (
      <button
         type="submit"
         className={`
            header-section-btn bg-secondary text-white border-secondary
            ${isCircle ? "header-section-btn-circle top-20 lg:top-[5.5rem]" : "header-section-btn-ellipse"}
            ${hidden ? "opacity-0" : "opacity-100"}
         `}
         onClick={clickHandler}
         disabled={hidden}
      >
         {
            !isCircle && text
         }
         <div className={`transition-all ${isCircle ? "w-4.5 lg:w-5" : "w-4 lg:w-5"}`}>
            {icon}
         </div>
      </button>
   );
}

export default HeaderSection