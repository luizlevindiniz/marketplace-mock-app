import { ReactElement, useState } from "react"
import * as Styled from "./styles"
import { SuccessIcon, CloseIcon, FailureIcon, WarningIcon } from "./icons/icons"
interface Props {
    message: string
    type: string
}

type IconTable = {
    success: ReactElement
    failure: ReactElement
    warning: ReactElement
    close: ReactElement
}

const iconTable: IconTable = {
    success: <SuccessIcon />,
    failure: <FailureIcon />,
    warning: <WarningIcon />,
    close: <CloseIcon />,
}

const Toast = ({ message, type }: Props): ReactElement => {
    const toastIcon = iconTable[type as keyof IconTable] || null
    const [showToast, setShowToast] = useState(false)

    return (
        <Styled.ToastWrapper>
            <div className={`toast toast--${type}`} role="alert">
                <div className="toast-message">
                    {toastIcon && (
                        <div className="icon icon--lg icon--thumb">
                            {toastIcon}
                        </div>
                    )}
                    <p>{message}</p>
                </div>
                <button
                    className="toast-close-btn"
                    onClick={() => setShowToast(false)}
                >
                    <span className="icon">
                        <CloseIcon />
                    </span>
                </button>
            </div>
        </Styled.ToastWrapper>
    )
}

export { Toast }
