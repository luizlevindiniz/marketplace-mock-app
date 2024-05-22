import { ReactElement, ReactNode } from "react"
import * as Styled from "./styles"

interface Headline {
    className?: string
    children: ReactNode
}

const Headline = ({ className, children }: Headline): ReactElement => {
    return (
        <Styled.Headline className={className} data-testid="headline">
            {children}
        </Styled.Headline>
    )
}

export { Headline }
