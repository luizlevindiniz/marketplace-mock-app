import { ReactElement } from "react"
import * as Styled from "./styles"

interface Image {
    src: string
    alt: string
    width: number
    height: number
}

const Image = ({ src, alt, width, height }: Image): ReactElement => {
    return (
        <Styled.Image
            src={src}
            alt={alt}
            width={width}
            height={height}
        ></Styled.Image>
    )
}

export { Image }
