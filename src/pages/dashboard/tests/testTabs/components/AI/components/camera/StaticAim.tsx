type StaticAimProps = {
   gammaColor: "bg-white" | "bg-secondary" | "bg-red"
}

function StaticAim({ gammaColor }: StaticAimProps) {
   return (
      <>
         <div
            className={`w-full h-1 absolute rounded-full ${gammaColor}`}
         />
         <div
            className={`w-1 h-full absolute rounded-full ${gammaColor}`}
         />
      </>
   );
};

export default StaticAim;