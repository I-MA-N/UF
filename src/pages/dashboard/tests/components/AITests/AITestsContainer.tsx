import { useState } from "react";
import TabButtons from "./tabButtons/TabButtons";
import AITab from "./AI/AITab";
import ManualTab from "./manual/ManualTab";

function AITestsContainer() {
   const [isAIMethod, setIsAIMethod] = useState(localStorage.getItem("AIMethod") ? true : false);

   return (
      <>
         <TabButtons
            isAIMethod={isAIMethod}
            setIsAIMethod={setIsAIMethod}
         />

         {
            isAIMethod &&
            <AITab />
         }

         {
            !isAIMethod &&
            <ManualTab
               setIsAIMethod={setIsAIMethod}
            />
         }
      </>
   )
}

export default AITestsContainer;