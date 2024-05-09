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

interface UserAuthData {
    username: string
    password: string
}

interface AuthContextType {
    userLocalData: UserAuthData | null | undefined
    login: (data: UserAuthData) => Promise<void>
    logout: () => void
}

const AuthContext = createContext<AuthContextType>({
    userLocalData: null,
    login: async () => {},
    logout: () => {},
})

export const AuthProvider = ({
    children,
}: {
    children: ReactNode
}): ReactElement => {
    const [userLocalData, setUserLocalData] = useLocalStorage("user", null)
    const navigate = useNavigate()

    const login = useCallback(
        async (data: UserAuthData): Promise<void> => {
            setUserLocalData(data)
            navigate("/")
        },
        [navigate, setUserLocalData]
    )

    const logout = useCallback((): void => {
        setUserLocalData(null)
        navigate("/", { replace: true })
    }, [navigate, setUserLocalData])

    const value = useMemo(
        () => ({
            userLocalData,
            login,
            logout,
        }),
        [userLocalData, login, logout]
    )
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = (): AuthContextType => {
    return useContext(AuthContext)
}
