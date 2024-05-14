import styled from "styled-components"

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: minmax(0, 1fr);
    grid-column-gap: 1em;
    grid-row-gap: 1em;
    width: 80%;
    margin: 0 auto;
`
