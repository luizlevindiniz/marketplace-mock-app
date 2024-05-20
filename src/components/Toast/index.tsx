import {
    Dispatch,
    ReactElement,
    SetStateAction,
    useEffect,
    useCallback,
    useMemo,
} from "react"
import * as Styled from "./styles"
import { SuccessIcon, CloseIcon, FailureIcon, WarningIcon } from "./icons/icons"

interface ToastComponent {
    toastMessage: string
    toastType: ToastType
    id: string
}

type ToastType = "success" | "failure" | "warning"

type ToastItemProps = {
    toastIcon: ReactElement
    toastMessage: string
    toastType: ToastType
    id: string
    onClose: (id: string) => void
}

type IconTable = {
    success: ReactElement
    failure: ReactElement
    warning: ReactElement
    close: ReactElement
}

const generateIconTable = (): IconTable => ({
    success: <SuccessIcon />,
    failure: <FailureIcon />,
    warning: <WarningIcon />,
    close: <CloseIcon />,
})

const ToastItem = ({
    toastIcon,
    toastMessage,
    toastType,
    id,
    onClose,
}: ToastItemProps): ReactElement => {
    return (
        <div
            className={`toast toast--${toastType}`}
            role="alert"
            data-testid="toast"
        >
            <div className="toast-message">
                {toastIcon && (
                    <div className="icon icon--lg icon--thumb">{toastIcon}</div>
                )}
                <p>{toastMessage}</p>
            </div>
            <button
                className="toast-close-btn"
                data-testid="toast-close-btn"
                onClick={() => onClose(id)}
            >
                <span className="icon">
                    <CloseIcon />
                </span>
            </button>
        </div>
    )
}

const Toast = ({
    toastList,
    setToastList,
}: {
    toastList: ToastComponent[]
    setToastList: Dispatch<SetStateAction<ToastComponent[]>>
}): false | ReactElement => {
    const iconTable: IconTable = useMemo(generateIconTable, [])

    const getToastIcon = (toastType: string): ReactElement =>
        iconTable[toastType as keyof IconTable] || null

    const deleteToast = useCallback(
        (id: string): void => {
            const filtered = toastList.filter((toast) => toast.id !== id)
            setToastList(filtered)
        },
        [setToastList, toastList]
    )

    useEffect(() => {
        const interval = setTimeout(() => {
            if (toastList.length > 0) {
                deleteToast(toastList[0].id)
            }
        }, 3000)
        return () => {
            clearTimeout(interval)
        }
    }, [deleteToast, toastList])

    return (
        <Styled.ToastWrapper data-testid="toast-wrapper">
            {toastList.map((toast) => (
                <ToastItem
                    toastIcon={getToastIcon(toast.toastType)}
                    toastMessage={toast.toastMessage}
                    toastType={toast.toastType}
                    id={toast.id}
                    key={toast.id}
                    onClose={deleteToast}
                />
            ))}
        </Styled.ToastWrapper>
    )
}

export default Toast
