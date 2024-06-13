import { PropsWithChildren, createContext, useContext, useState } from "react";
import { emptyTestsObj } from "../forms/tests/testsData";

const INITIAL_USER = {
   username: '',
   orgName: '',
   formName: '',
   data: emptyTestsObj,
}

type MentoringData = typeof INITIAL_USER

type MentoringContextType = {
   mentoringData: MentoringData,
   setMentoringData?: React.Dispatch<React.SetStateAction<MentoringData>>
}


const MentoringContext = createContext<MentoringContextType>({ mentoringData: INITIAL_USER });

function MentoringContextProvider({ children }: PropsWithChildren) {
   const [mentoringData, setMentoringData] = useState<MentoringData>(INITIAL_USER);

   return (
      <MentoringContext.Provider value={{ mentoringData, setMentoringData }}>
         {children}
      </MentoringContext.Provider>
   )
}

export function useMentoringContext() {
   const { mentoringData, setMentoringData } = useContext(MentoringContext);

   if (mentoringData === undefined || setMentoringData === undefined) {
      throw new Error('useMentoringContext must be used within MentoringContextProvider!')
   }

   return { mentoringData, setMentoringData };
}

export default MentoringContextProvider