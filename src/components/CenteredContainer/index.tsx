import { ReactElement, ReactNode } from "react"
import * as Styled from "./styles"

const CenteredContainer = ({
    className,
    children,
}: {
    className?: string
    children: ReactNode
}): ReactElement => {
    return (
        <Styled.CenteredContainer
            className={className}
            data-testid="centered-container"
        >
            {children}
        </Styled.CenteredContainer>
    )
}

export { CenteredContainer }
