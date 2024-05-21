import "@testing-library/jest-dom"
import { act, fireEvent, render, screen } from "@testing-library/react"
import { ResetStyle } from "@/styles/global"
import { ThemeProvider } from "styled-components"
import theme from "@/styles/theme"
import { cartReducer } from "@/reducers/cartReducer"
import { createStore } from "redux"
import { Provider } from "react-redux"
import { AuthProvider } from "@/auth/useAuth"
import { BrowserRouter as Router } from "react-router-dom"
import { Navbar } from "./index"

const store = createStore(cartReducer)
let search = ""
const handleSearchChange = jest.fn((event) => (search = event.target.value))
const displayNavbar = true

describe("src/components/Navbar", () => {
    describe("when navbar is displayed", () => {
        beforeEach(async () => {
            await act(async () => {
                render(
                    <ThemeProvider theme={theme}>
                        <ResetStyle />
                        <Router>
                            <Provider store={store}>
                                <AuthProvider>
                                    <Navbar
                                        search={search}
                                        displayNavbar={displayNavbar}
                                        handleSearchChange={handleSearchChange}
                                    />
                                </AuthProvider>
                            </Provider>
                        </Router>
                    </ThemeProvider>
                )
            })
        })

        test("check all its menu options", async () => {
            const navbar = screen.getByTestId("navbar")
            expect(navbar).toBeDefined()
            expect(navbar.children.item(0)).toHaveClass("navbar-content")
            expect(screen.getByText("Marketplace")).toBeInTheDocument()
            expect(screen.getByText("Home")).toBeInTheDocument()
            expect(screen.getByText("Categories")).toBeInTheDocument()
            expect(screen.getByText("Wishlist")).toBeInTheDocument()
            expect(screen.getByTestId("fa-cart-shopping")).toBeInTheDocument()
            expect(screen.getByTestId("logged-in-btn")).toBeInTheDocument()
        })

        test("search bar is editable", async () => {
            const searchBar = (await screen.findByTestId(
                "search-bar-input"
            )) as HTMLInputElement
            expect(searchBar.value).toBe("")
            expect(searchBar.tagName).toBe("INPUT")
            await act(async () => {
                fireEvent.change(searchBar, { target: { value: "ABC" } })
            })
            expect(search).toBe("ABC")
        })
    })
})
