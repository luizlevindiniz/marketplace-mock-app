import styled from "styled-components"

export const Image = styled.img.attrs((props) => ({
    src: props.src,
    alt: props.alt,
    width: props.width,
    height: props.height,
}))`
    max-height: height px;
    min-height: height px;
    width: 100%;
    cursor: pointer;
`
