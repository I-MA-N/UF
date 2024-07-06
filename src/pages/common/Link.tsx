import { ReactNode } from "react"
import { Link as RouterLink } from "react-router-dom"

type LinkProps = {
   text: string,
   url: string
   icon?: ReactNode,
   isDisabled?: boolean,
   className?: string 
}

function Link({ text, url, icon, isDisabled, className }: LinkProps) {
   return (
      <RouterLink to={url!} className={`btn ${className || ''} ${isDisabled ? 'btn-disabled' : ''}`}>
         {text}
         {
            icon &&
            <div className="absolute right-0 h-full w-12 lg:w-14 flex justify-center items-center bg-secondary text-white rounded-full">
               {icon}
            </div>
         }
      </RouterLink>
   )
}

export default Link