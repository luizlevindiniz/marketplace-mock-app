import { ReactElement, ReactNode } from "react"
import * as Styled from "./styles"

interface Showcase {
    id: string
    className?: string
    children: ReactNode
}

const Showcase = ({ children, className, id }: Showcase): ReactElement => {
    return (
        <Styled.Showcase className={className} id={id}>
            {children}
        </Styled.Showcase>
    )
}

export { Showcase }
