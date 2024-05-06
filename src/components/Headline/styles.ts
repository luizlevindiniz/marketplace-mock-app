import styled from "styled-components"

export const Headline = styled.div`
    width: 100%;
    padding-top: 0.8rem;
    padding-bottom: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;

    h1 {
        color: ${({ theme }) => theme.colors.secondary};
        text-align: center;
    }
`
