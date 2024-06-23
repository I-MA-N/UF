import { PropsWithChildren, createContext, useContext, useState } from "react";
import { emptyTestsObj } from "../tests/data/testsData";

const INITIAL_DATA = {
   formName: '',
   data: emptyTestsObj
}

type UserTestsInfoType = typeof INITIAL_DATA;

type UserTestsInfoContextType = {
   userTestsInfo: UserTestsInfoType,
   setUserTestsInfo?: React.Dispatch<React.SetStateAction<UserTestsInfoType>>
}

const UserContext = createContext<UserTestsInfoContextType>({
   userTestsInfo: INITIAL_DATA,
});

function UserTestsInfoProvider({ children }: PropsWithChildren) {
   const [userTestsInfo, setUserTestsInfo] = useState<UserTestsInfoType>(INITIAL_DATA);

   return (
      <UserContext.Provider value={{ userTestsInfo, setUserTestsInfo }}>
         {children}
      </UserContext.Provider>
   )
}

export function useUserTestsInfoContext() {
   const { userTestsInfo, setUserTestsInfo } = useContext(UserContext);

   if (userTestsInfo === undefined || setUserTestsInfo === undefined) {
      throw new Error('useUserTestsInfoContext must be used within UserTestsInfoProvider!')
   }

   return { userTestsInfo, setUserTestsInfo };
}

export default UserTestsInfoProvider