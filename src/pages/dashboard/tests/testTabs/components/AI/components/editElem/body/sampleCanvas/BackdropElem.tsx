type BackdropElemProps = {
   isShown: boolean
}

function BackdropElem({ isShown }: BackdropElemProps) {
   return (
      <div
         className={
            `
               absolute top-0 left-0 bg-white/50 size-full transition-all duration-200
               ${isShown ? "opacity-100 z-0" : "opacity-0 -z-10"}
            `
         }
      />
   );
};

export default BackdropElem;