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
import { Headline } from "./index"
import { ReactNode } from "react"

const store = createStore(cartReducer)

const children = (): ReactNode => {
    return <h1>element</h1>
}

describe("src/components/Headline", () => {
    describe("when headline has children", () => {
        test("display all child nodes", async () => {
            await act(async () => {
                render(
                    <ThemeProvider theme={theme}>
                        <ResetStyle />
                        <Router>
                            <Provider store={store}>
                                <AuthProvider>
                                    <Headline className="test">
                                        {children()}
                                    </Headline>
                                </AuthProvider>
                            </Provider>
                        </Router>
                    </ThemeProvider>
                )
            })
            const headline = screen.getByTestId("headline")
            expect(headline).toBeDefined()
            expect(headline).toHaveClass("test")
            expect(headline.children).toHaveLength(1)
            const child = headline.children
            expect(child.item(0)?.tagName).toBe("H1")
            expect(child.item(0)?.textContent).toBe("element")
        })
    })
})
