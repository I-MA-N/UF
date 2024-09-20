import { useMemo } from "react";

type BetaLineProps = {
   isSupported: boolean,
   beta: number | undefined
}

function BetaLine({ isSupported, beta }: BetaLineProps) {
   const betaColor = useMemo(() => {
      if (typeof beta === "number" && isSupported) {
         const betaBool = beta >= 82 && beta <= 90;
         return betaBool ? "bg-secondary" : "bg-red";
      }
      return "bg-white";
   }, [beta, isSupported])

   return (
      <div
         className={`absolute bottom-2 left-2 w-12 lg:w-14 h-1 rounded-full transition-all duration-100 origin-left ${betaColor}`}
         style={{ transform: beta ? `rotate(-${beta}deg)` : "" }}
      />
   );
};

export default BetaLine;