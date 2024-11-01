import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";

type HeaderSectionContextType = {
   isCircle: boolean
} | null

const HeaderSectionContext = createContext<HeaderSectionContextType>(null)

function HeaderSectionContextProvider({ children }: PropsWithChildren) {
   const [isCircle, setIsCircle] = useState(false);

   useEffect(() => {
      const handleScroll = () => {
         if (window.scrollY >= 150) setIsCircle(true);
         else setIsCircle(false);
      }
      window.addEventListener("scroll", handleScroll);

      return () => {
         window.removeEventListener("scroll", handleScroll);
      }
   }, [])

   return (
      <HeaderSectionContext.Provider value={{ isCircle }}>
         {children}
      </HeaderSectionContext.Provider>
   );
};

export function useHeaderSectionContext() {
   const context = useContext(HeaderSectionContext);

   if (context === null) {
      throw new Error("'HeaderSectionContext' is not used in 'Provider'!")
   }

   return context;
} 

export default HeaderSectionContextProvider;