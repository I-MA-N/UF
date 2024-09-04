import { useEffect } from "react";
import { useAIContext } from "../../../../../context/AIContextProvider";

function ClickedStyle() {
   const [_AIData, setAIData] = useAIContext();

   useEffect(() => {
      setTimeout(() => {
         setAIData(prevValue => ({
            ...prevValue,
            nameFromManualTab: undefined
         }))
      }, 2000);
   }, [])

   return (
      <p>you clicked on this in manual tab!</p>
   );
};

export default ClickedStyle;