import { ChangeEvent, ReactElement } from "react"
import * as Styled from "./styles"

interface Props {
    search: string
    handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void
}

const Navbar = ({ search, handleSearchChange }: Props): ReactElement => {
    return (
        <Styled.PageHeader>
            <Styled.NavbarContent className="navbar-content">
                <Styled.NavbarHeader className="navbar-head">
                    <a href="/">
                        <i className="fa-brands fa-shopware logo"></i>
                    </a>
                    <h2 className="logo-title">
                        <a href="/">Marketplace</a>
                    </h2>
                </Styled.NavbarHeader>
                <Styled.SearchBarWrapper className="search-bar-wrapper">
                    <input
                        type="text"
                        className="search-bar-input"
                        placeholder="Search"
                        value={search}
                        onChange={handleSearchChange}
                    />
                    <div className="search-button-sprite">
                        <button type="button">
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </div>
                </Styled.SearchBarWrapper>
                <Styled.NavbarItems className="navbar-items">
                    <Styled.FlexDiv as="ul">
                        <li>
                            <a href="/" className="nav-link">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="/" className="nav-link">
                                Categories
                            </a>
                        </li>
                        <li>
                            <a href="/" className="nav-link">
                                Wishlist
                            </a>
                        </li>
                        <li>
                            <a href="/" className="nav-link">
                                <i className="fa-solid fa-cart-shopping"></i>
                            </a>
                        </li>
                        <li>
                            <a href="/" className="nav-link">
                                <i className="fa-solid fa-user"></i>
                            </a>
                        </li>
                    </Styled.FlexDiv>
                </Styled.NavbarItems>
            </Styled.NavbarContent>
        </Styled.PageHeader>
    )
}

export { Navbar }
