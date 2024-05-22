import { ReactElement, ReactNode } from "react"
import * as Styled from "./styles"

interface Showcase {
    className?: string
    id: string
    children: ReactNode
}

const Showcase = ({ className, id, children }: Showcase): ReactElement => {
    return (
        <Styled.Showcase className={className} id={id} data-testid="showcase">
            {children}
        </Styled.Showcase>
    )
}

export { Showcase }
