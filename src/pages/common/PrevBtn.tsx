type PrevBtnProps = {
   onClick: () => void,
   type: "button" | "submit",
   className?: string
}

function PrevBtn({ onClick, type, className }: PrevBtnProps) {
   return (
      <button type={type} className={`btn w-12 h-12 flex-shrink-0 ${className || ''}`} onClick={onClick}>
         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="11" viewBox="0 0 16 11" fill="none">
            <path d="M5.375 9.75L1 5.375M1 5.375L15 5.375M1 5.375L5.375 1" stroke="#083C5A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
         </svg>
      </button>
   )
}

export default PrevBtn