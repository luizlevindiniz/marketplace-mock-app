import { ReactElement, ReactNode } from "react"
import * as Styled from "./styles"

interface Showcase {
    className?: string
    children: ReactNode
}

const Showcase = ({ children }: Showcase): ReactElement => {
    return <Styled.Showcase>{children}</Styled.Showcase>
}

export { Showcase }
