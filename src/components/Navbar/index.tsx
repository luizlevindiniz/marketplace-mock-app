import { ChangeEvent, ReactElement } from "react"
import * as Styled from "./styles"
import { Link } from "react-router-dom"
interface Props {
    search?: string
    handleSearchChange?: (e: ChangeEvent<HTMLInputElement>) => void
    displayNavbar: boolean
}

const Navbar = ({
    search,
    handleSearchChange,
    displayNavbar,
}: Props): ReactElement => {
    return (
        <Styled.PageHeader>
            <Styled.NavbarContent className="navbar-content">
                <Styled.NavbarHeader className="navbar-head">
                    <Link to="/">
                        <i className="fa-brands fa-shopware logo"></i>
                    </Link>
                    <h2 className="logo-title">
                        <Link to="/">Marketplace</Link>
                    </h2>
                </Styled.NavbarHeader>
                {displayNavbar && (
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
                )}
                <Styled.NavbarItems className="navbar-items">
                    <Styled.FlexDiv as="ul">
                        <li>
                            <Link to="/" className="nav-link">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="nav-link">
                                Categories
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="nav-link">
                                Wishlist
                            </Link>
                        </li>
                        <li>
                            <Link to="/cart" className="nav-link">
                                <i className="fa-solid fa-cart-shopping"></i>
                            </Link>
                        </li>
                        <li>
                            <Link to="/" className="nav-link">
                                <i className="fa-solid fa-user"></i>
                            </Link>
                        </li>
                    </Styled.FlexDiv>
                </Styled.NavbarItems>
            </Styled.NavbarContent>
        </Styled.PageHeader>
    )
}

export { Navbar }
