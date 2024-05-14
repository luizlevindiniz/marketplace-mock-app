import { useState } from "react"

interface UserAuthToken {
    token: string
}

function getTokenFromLocalStorage(
    token: string,
    defaultValue?: UserAuthToken | null
): UserAuthToken | null | undefined {
    try {
        const value = window.localStorage.getItem(token)
        if (value) {
            return JSON.parse(value)
        } else {
            window.localStorage.setItem(token, JSON.stringify(defaultValue))
            return defaultValue
        }
    } catch (err) {
        console.log(err)
        throw new Error("Unable to login")
    }
}

export const useLocalStorage = (
    token: string,
    defaultValue?: UserAuthToken | null
): [
    UserAuthToken | null | undefined,
    (value: UserAuthToken | null) => void,
] => {
    const [storedValue, setStoredValue] = useState(() =>
        getTokenFromLocalStorage(token, defaultValue)
    )

    const setValue = (newValue: UserAuthToken | null): void => {
        try {
            window.localStorage.setItem(token, JSON.stringify(newValue))
        } catch (err) {
            console.log(err)
        }
        setStoredValue(newValue)
    }

    return [storedValue, setValue]
}
