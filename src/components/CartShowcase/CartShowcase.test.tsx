import "@testing-library/jest-dom"
import { act, render, screen } from "@testing-library/react"
import { ResetStyle } from "@/styles/global"
import { ThemeProvider } from "styled-components"
import theme from "@/styles/theme"
import { cartReducer } from "@/reducers/cartReducer"
import { createStore } from "redux"
import { Provider } from "react-redux"
import { AuthProvider } from "@/auth/useAuth"
import { BrowserRouter as Router } from "react-router-dom"
import { CartShowcase } from "./index"
import { ReactNode } from "react"

const store = createStore(cartReducer)

const children = (): ReactNode => {
    return <h1>Showcase</h1>
}

describe("src/components/CartShowcase", () => {
    describe("when cart showcase has children", () => {
        test("display all child nodes", async () => {
            await act(async () => {
                render(
                    <ThemeProvider theme={theme}>
                        <ResetStyle />
                        <Router>
                            <Provider store={store}>
                                <AuthProvider>
                                    <CartShowcase className="test">
                                        {children()}
                                    </CartShowcase>
                                </AuthProvider>
                            </Provider>
                        </Router>
                    </ThemeProvider>
                )
            })
            const cartShowcase = screen.getByTestId("cart-showcase")
            expect(cartShowcase).toBeDefined()
            expect(cartShowcase).toHaveClass("test")
            expect(cartShowcase.children).toHaveLength(1)
            const child = cartShowcase.children
            expect(child.item(0)?.tagName).toBe("H1")
            expect(child.item(0)?.textContent).toBe("Showcase")
        })
    })
})
