import { ReactNode } from "react"

type BtnProps = {
   text: string,
   type: "button" | "submit",
   onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
   icon?: ReactNode,
   isDisabled?: boolean,
   className?: string
}

function Btn({ text, type, onClick, icon, isDisabled, className }: BtnProps) {
   return (
      <button
         type={type} 
         onClick={onClick} 
         className={`btn ${className || ''} ${isDisabled ? 'btn-disabled' : ''}`}
      >
         {text}
         {
            icon &&
            <div className="absolute right-0 h-full w-12 lg:w-[52px] flex justify-center items-center bg-secondary text-white rounded-full">
               {icon}
            </div>
         }
      </button>
   )
}

export default Btn