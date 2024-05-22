import { ReactElement, ReactNode } from "react"
import * as Styled from "./styles"

interface Grid {
    className: string
    children: ReactNode
}

const CartGrid = ({ className, children }: Grid): ReactElement => {
    return (
        <Styled.CartGrid className={className} data-testid="cart-grid">
            {children}
        </Styled.CartGrid>
    )
}

export { CartGrid }
