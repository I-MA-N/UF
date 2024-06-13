import { PropsWithChildren, createContext, useContext } from "react"
import UserData from "../../types/UserData";

type UserDataProviderProps = PropsWithChildren & {
    userData: UserData
}

const UserDataContext = createContext<UserData | undefined>(undefined);

function UserDataProvider({ children, userData }: UserDataProviderProps) {
    return (
        <UserDataContext.Provider value={userData} >
            {children}
        </UserDataContext.Provider>
    )
}

export function useUserDataContext() {
    const userData = useContext(UserDataContext);

    if (userData === undefined) {
        throw new Error('useUserData must be used within UserDataProvider!')
    }
    
    return userData
}

export default UserDataProvider