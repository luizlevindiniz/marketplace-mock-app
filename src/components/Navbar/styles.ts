import styled from "styled-components"

export const FlexDiv = styled.div`
    flex-direction: row;
    display: flex;
    align-items: center;
    padding: 0;
`

export const PageHeader = styled.header`
    display: block;
    position: sticky;
    top: 0;
    left: 0;
    width: 100%;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
    background-color: ${({ theme }) => theme.colors.secondary};
    z-index: 2;
`

export const NavbarContent = styled(FlexDiv)`
    justify-content: space-between;
    width: 100%;
    max-height: 5rem;
    color: ${({ theme }) => theme.colors.default};
`

export const NavbarHeader = styled(FlexDiv)`
    padding: 0 1%;

    .logo {
        font-size: 3rem;
        cursor: pointer;
        padding: 5px 0;
    }

    .logo-title {
        padding-left: 5px;
        cursor: pointer;
    }
`

export const NavbarItems = styled.nav`
    padding: 0 2%;

    li {
        padding: 0 10px;
    }

    li:hover {
        color: white;
    }

    #logged-in-btn {
        border: none;
        background-color: transparent;
        color: ${({ theme }) => theme.colors.default};
    }

    #logged-in-btn i {
        width: 18px;
        height: 20px;
    }
`

export const SearchBarWrapper = styled(FlexDiv)`
    width: 40%;
    padding: 0 1.5rem;

    .search-bar-input {
        width: 100%;
        border: none;
        background: ${({ theme }) => theme.colors.default};
        height: 25px;
        border-top-left-radius: 3px;
        border-bottom-left-radius: 3px;
    }

    .search-button-sprite {
        margin: 0;
    }

    .search-button-sprite button {
        background-color: ${({ theme }) => theme.colors.tertiary};
        color: ${({ theme }) => theme.colors.default};
        border: none;
        height: 25px;
        border-top-right-radius: 3px;
        border-bottom-right-radius: 3px;
    }

    .search-button-sprite i {
        font-size: 1rem;
    }
`
