import { PropsWithChildren } from "react";

function Modal({ children }: PropsWithChildren) {
   return (
      <div className="fixed top-0 left-0 size-full flex flex-col justify-center items-center bg-transparent backdrop-blur-md z-50">
         <div className="min-w-72 xs:min-w-80">
            {children}
         </div>
      </div>
   );
};

Modal.Header = function Header({ children }: PropsWithChildren) {
   return (
      <div className="w-full min-h-7 lg:min-h-10 flex justify-center items-center relative mb-4 lg:mb-6">
         {children}
      </div>
   )
}

type CloseBtnProps = {
   setShowModal: React.Dispatch<React.SetStateAction<boolean>>
}

Modal.CloseBtn = function CloseBtn({ setShowModal }: CloseBtnProps) {
   return (
      <button
         type="button"
         className="size-11 lg:size-14 flex items-center justify-center bg-primary absolute right-0 top-1/2 -translate-y-1/2 text-yellow border lg:border-2 border-yellow rounded-full"
         onClick={() => setShowModal(false)}
      >
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="none" className="size-4 lg:size-5">
            <path d="M13 3L8 8M8 8L3 13M8 8L13 13M8 8L3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
         </svg>
      </button>
   )
}

type TitleProps = {
   text: string
}

Modal.Title = function ({ text }: TitleProps) {
   return (
      <p className="lg:text-xl">{text}</p>
   )
}

type BodyProps = {
   className?: string
} & PropsWithChildren

Modal.Body = function ({ children, className }: BodyProps) {
   return (
      <div className={`w-full p-8 bg-primary rounded-[32px] border lg:border-2 border-white ${className || ""}`}>
         {children}
      </div>
   )
}

export default Modal;