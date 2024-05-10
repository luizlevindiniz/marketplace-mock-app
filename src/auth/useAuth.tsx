import {
    ReactElement,
    ReactNode,
    createContext,
    useContext,
    useMemo,
    useCallback,
} from "react"
import { useNavigate } from "react-router-dom"
import { useLocalStorage } from "./useLocalStorage"

interface UserAuthToken {
    token: string
}

interface AuthContextType {
    userToken: UserAuthToken | null | undefined
    login: (token: UserAuthToken) => Promise<void>
    logout: () => void
}

const AuthContext = createContext<AuthContextType>({
    userToken: null,
    login: async () => {},
    logout: () => {},
})

export const AuthProvider = ({
    children,
}: {
    children: ReactNode
}): ReactElement => {
    const [userToken, setUserToken] = useLocalStorage("token", null)
    const navigate = useNavigate()

    const login = useCallback(
        async (token: UserAuthToken): Promise<void> => {
            setUserToken(token)
        },
        [setUserToken]
    )

    const logout = useCallback((): void => {
        setUserToken(null)
        navigate("/", { replace: true })
    }, [navigate, setUserToken])

    const value = useMemo(
        () => ({
            userToken,
            login,
            logout,
        }),
        [userToken, login, logout]
    )
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = (): AuthContextType => {
    return useContext(AuthContext)
}
