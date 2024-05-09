import { ReactElement, ReactNode } from "react"
import * as Styled from "./styles"

const CenteredContainer = ({
    children,
}: {
    children: ReactNode
}): ReactElement => {
    return <Styled.CenteredContainer>{children}</Styled.CenteredContainer>
}

export { CenteredContainer }
