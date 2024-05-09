import styled from "styled-components"

export const CenteredContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    max-width: 400px;
    flex-direction: column;
    margin: auto;

    .auth-form {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        font-family: inherit;
    }

    .auth-form input {
        font-family: inherit;
        margin-bottom: 3px;
    }

    .auth-page-header {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 1rem;
    }

    .auth-page-header h1 {
        font-size: 3rem;
        color: inherit;
        display: inline-block;
    }

    .auth-page-header img {
        width: 50px;
        margin-left: 10px;
    }

    .auth-btn {
        border: 0.0125rem solid ${({ theme }) => theme.colors.primary};
        border-radius: 4px;
        width: 100%;
        height: 35px;
        display: flex;
        font-size: 1rem;
        font-family: inherit;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        color: ${({ theme }) => theme.colors.default};
        transition: all 0.3s ease-out;
        background-color: ${({ theme }) => theme.colors.secondary};
        margin: 10px 0 10px;

        &:hover {
            background-color: ${({ theme }) => theme.colors.comp};
            color: ${({ theme }) => theme.colors.primary};
            text-decoration: none;
        }
    }

    .auth-link {
        text-decoration: underline;
        cursor: pointer;
    }
`
