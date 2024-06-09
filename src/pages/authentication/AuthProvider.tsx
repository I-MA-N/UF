import { PropsWithChildren, createContext, useContext } from "react"

type AuthProviderProps = PropsWithChildren & {
    userData: any
}

const AuthContext = createContext<any>(null);

function AuthProvider({ children, userData }: AuthProviderProps) {
    return (
        <AuthContext.Provider value={userData} >
            {children}
        </AuthContext.Provider>
    )
}

export function useAuthContext() {
    const userData = useContext(AuthContext);

    if (userData === undefined) {
        throw new Error('useAuth must be used within AuthProvider!')
    }
    
    return userData
}

export default AuthProvider