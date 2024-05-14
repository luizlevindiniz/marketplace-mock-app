import styled from "styled-components"

export const Image = styled.img.attrs((props) => ({
    src: props.src,
    alt: props.alt,
}))`
    cursor: pointer;
    width: 100%;
    max-height: 200px;
    object-fit: fill;
`
