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

type MentorData = typeof INITIAL_MENTOR

type NewMentorContextType = {
   mentorData: MentorData,
   setMentorData?: React.Dispatch<React.SetStateAction<MentorData>>
}


const NewMentorContext = createContext<NewMentorContextType>({ mentorData: INITIAL_MENTOR });

function NewMentorContextProvider({ children }: PropsWithChildren) {
   const [mentorData, setMentorData] = useState<MentorData>(INITIAL_MENTOR);

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