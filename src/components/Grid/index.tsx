import { ReactElement, ReactNode } from "react"
import * as Styled from "./styles"

interface Grid {
    className: string
    children: ReactNode
}

const Grid = ({ className, children }: Grid): ReactElement => {
    return (
        <Styled.Grid className={className} data-testid="grid">
            {children}
        </Styled.Grid>
    )
}

export { Grid }
