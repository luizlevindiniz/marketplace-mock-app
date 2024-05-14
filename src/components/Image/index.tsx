import { ReactElement } from "react"
import * as Styled from "./styles"

interface Image {
    src: string
    alt: string
}

const Image = ({ src, alt }: Image): ReactElement => {
    return <Styled.Image src={src} alt={alt}></Styled.Image>
}

export { Image }
