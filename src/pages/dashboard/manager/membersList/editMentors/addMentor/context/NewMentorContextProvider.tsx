import { PropsWithChildren, createContext, useContext, useState } from "react";

const INITIAL_MENTOR = {
   username: '',
   email: '',
   password: '',
   data: {
      phone: '',
      firstName: '',
      lastName: '',
      city: '',
      job: '',
      age: "0",
      gender: 'male' as 'male' | 'female'
   }
}

export type NewMentorData = typeof INITIAL_MENTOR

type NewMentorContextType = {
   mentorData: NewMentorData,
   setMentorData?: React.Dispatch<React.SetStateAction<NewMentorData>>
}


const NewMentorContext = createContext<NewMentorContextType>({ mentorData: INITIAL_MENTOR });

function NewMentorContextProvider({ children }: PropsWithChildren) {
   const [mentorData, setMentorData] = useState<NewMentorData>(INITIAL_MENTOR);

   return (
      <NewMentorContext.Provider value={{ mentorData, setMentorData }}>
         {children}
      </NewMentorContext.Provider>
   )
}

export function useNewMentorContext() {
   const { mentorData, setMentorData } = useContext(NewMentorContext);

   if (mentorData === undefined || setMentorData === undefined) {
      throw new Error('useNewMentorContext must be used within NewMentorContextProvider!')
   }

   return { mentorData, setMentorData };
}

export default NewMentorContextProvider