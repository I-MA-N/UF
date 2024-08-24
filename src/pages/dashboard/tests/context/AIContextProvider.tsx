import { createContext, PropsWithChildren, useContext, useEffect, useRef, useState } from "react";
import AIContextType from "../../../../types/AIContextType";
import { initHolistic } from "../../../../utils/AIFuncs";
import SampleImages from "../components/SampleImages";

const AIContext = createContext<
   [AIContextType | null, React.Dispatch<React.SetStateAction<AIContextType | null>>] | null
>(null);

function AIContextProvider({ children }: PropsWithChildren) {
   const [AIData, setAIData] = useState<AIContextType | null>(null);
   const onceRef = useRef(true);

   useEffect(() => {
      if (onceRef.current) {
         initHolistic(setAIData);
      }
      onceRef.current = false;
   }, [])

   return (
      <AIContext.Provider value={[AIData, setAIData]}>
         <SampleImages />
         {children}
      </AIContext.Provider>
   );
};

export function useAIContext() {
   const context = useContext(AIContext);

   if (!context) {
      throw new Error('Nothing available for AIContext!')
   }

   return context;
}

export default AIContextProvider;