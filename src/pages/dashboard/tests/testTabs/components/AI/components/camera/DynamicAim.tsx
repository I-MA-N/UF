type DynamicAimProps = {
   gamma: number | undefined,
   gammaColor: "bg-white" | "bg-secondary" | "bg-red"
}

function DynamicAim({ gamma, gammaColor }: DynamicAimProps) {
   return (
      <div
         className="absolute size-full flex items-center justify-center"
         style={{
            rotate: gamma ? `${gamma}deg` : '0deg'
         }}
      >
         <div
            className={`w-1 h-full absolute rounded-full transition-all duration-500 ${gammaColor === "bg-secondary" ? "bg-secondary" : "bg-yellow"}`}
         />
         <div
            className={`h-1 w-full absolute rounded-full transition-all duration-500 ${gammaColor === "bg-secondary" ? "bg-secondary" : "bg-yellow"}`}
         />
         <div
            className={`size-[4.5rem] lg:size-[5rem] rounded-full transition-all duration-500 border-4 ${gammaColor === "bg-secondary" ? "border-secondary" : "border-yellow"}`}
         />
      </div>
   );
};

export default DynamicAim;