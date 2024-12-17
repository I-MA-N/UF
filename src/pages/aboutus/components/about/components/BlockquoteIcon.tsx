type BlockquoteIconProps = {
   reverse?: boolean
}

function BlockquoteIcon({ reverse }: BlockquoteIconProps) {
   return (
      <svg
         className={`
            size-5 lg:size-6 text-gray-400 dark:text-gray-600 animate-pulse
            ${reverse ? "mr-auto rotate-180" : ""}
         `}
         style={{
            animationDuration: "3000ms"
         }}
         aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14"
      >
         <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
      </svg>
   );
};

export default BlockquoteIcon;