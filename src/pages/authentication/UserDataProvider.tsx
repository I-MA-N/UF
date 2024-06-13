import { PropsWithChildren, createContext, useContext } from "react"

type UserDataProviderProps = PropsWithChildren & {
    userData: any
}

const UserDataContext = createContext<any>(null);

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