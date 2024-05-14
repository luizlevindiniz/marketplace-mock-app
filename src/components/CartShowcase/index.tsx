import { ReactElement, ReactNode } from "react"
import * as Styled from "./styles"

interface CartShowcase {
    className?: string
    children: ReactNode
}

const CartShowcase = ({ children }: CartShowcase): ReactElement => {
    return <Styled.CartShowcase>{children}</Styled.CartShowcase>
}

export { CartShowcase }
