import { useState } from "react"

interface UserAuthData {
    username: string
    password: string
}

function getLocalStorageItem(
    keyName: string,
    defaultValue?: UserAuthData | null
): UserAuthData | null | undefined {
    try {
        const value = window.localStorage.getItem(keyName)
        if (value) {
            return JSON.parse(value)
        } else {
            window.localStorage.setItem(keyName, JSON.stringify(defaultValue))
            return defaultValue
        }
    } catch (err) {
        console.log(err)
        throw new Error("Unable to login")
    }
}

export const useLocalStorage = (
    keyName: string,
    defaultValue?: UserAuthData | null
): [UserAuthData | null | undefined, (value: UserAuthData | null) => void] => {
    const [storedValue, setStoredValue] = useState(() =>
        getLocalStorageItem(keyName, defaultValue)
    )

    const setValue = (newValue: UserAuthData | null): void => {
        try {
            window.localStorage.setItem(keyName, JSON.stringify(newValue))
        } catch (err) {
            console.log(err)
        }
        setStoredValue(newValue)
    }

    return [storedValue, setValue]
}
