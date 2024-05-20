import { ReactElement, ReactNode } from "react"
import * as Styled from "./styles"

interface CartShowcase {
    className: string
    children: ReactNode
}

const CartShowcase = ({ className, children }: CartShowcase): ReactElement => {
    return (
        <Styled.CartShowcase className={className} data-testid="cart-showcase">
            {children}
        </Styled.CartShowcase>
    )
}

export { CartShowcase }
