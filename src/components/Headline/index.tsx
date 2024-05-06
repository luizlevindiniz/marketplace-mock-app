import { ReactElement, ReactNode } from "react"
import * as Styled from "./styles"

interface Headline {
    children: ReactNode
}

const Headline = ({ children }: Headline): ReactElement => {
    return <Styled.Headline>{children}</Styled.Headline>
}

export { Headline }
