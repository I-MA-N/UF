import { useState } from "react";
import TabButtons from "./components/TabButtons";
import AITab from "./components/AI/AITab";
import ManualTab from "./components/manual/ManualTab";

function TestTabs() {
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

export default TestTabs;