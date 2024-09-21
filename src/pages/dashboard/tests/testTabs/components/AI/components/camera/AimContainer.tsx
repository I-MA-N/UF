import { useMemo } from "react";
import DynamicAim from "./DynamicAim";
import StaticAim from "./StaticAim";

type AimCotainerProps = {
   isSupported: boolean,
   gamma: number | undefined
}

function AimContainer({ isSupported, gamma }: AimCotainerProps) {
   const gammaColor = useMemo(() => {
      if (typeof gamma === "number" && isSupported) {
         const gammaBool = gamma >= -3 && gamma <= 3;

         return gammaBool ? "bg-secondary" : "bg-red";
      }
      return "bg-white";
   }, [gamma, isSupported])

   return (
      <div className="flex items-center justify-center absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 size-[6.25rem] lg:size-[6.75rem]">
         <StaticAim gammaColor={gammaColor} />
         <DynamicAim gamma={gamma} gammaColor={gammaColor} />
      </div>
   );
};

export default AimContainer;
