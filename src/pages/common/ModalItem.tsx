type ModalItemProps = {
   icon: JSX.Element
   text: string,
   elem: JSX.Element
}

function ModalItem({ icon, text, elem }: ModalItemProps) {
   return (
      <div className="flex gap-3 items-center">
         {icon}
         <div className="text-xs lg:text-sm flex-grow">
            <p className="font-Estedad-ExtraLight">{text}</p>
            {
               elem
            }
         </div>
      </div>
   )
}

export default ModalItem