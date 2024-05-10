import styled from "styled-components"

export const Footer = styled.footer`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.default};
    margin-top: auto;
    .footer-content {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 1.5em;
    }

    .footer-list {
        display: flex;
        width: 70%;
        align-items: center;
        font-weight: 500;
        color: inherit;
    }

    .footer-list li {
        padding: 0 2%;
    }
`
