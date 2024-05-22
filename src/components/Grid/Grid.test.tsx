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
import { Grid } from "./index"
import { ReactNode } from "react"

const store = createStore(cartReducer)

const children = (): ReactNode => {
    return <h1>element</h1>
}

describe("src/components/Grid", () => {
    describe("when grid has children", () => {
        test("display all child nodes", async () => {
            await act(async () => {
                render(
                    <ThemeProvider theme={theme}>
                        <ResetStyle />
                        <Router>
                            <Provider store={store}>
                                <AuthProvider>
                                    <Grid className="test">{children()}</Grid>
                                </AuthProvider>
                            </Provider>
                        </Router>
                    </ThemeProvider>
                )
            })
            const grid = screen.getByTestId("grid")
            expect(grid).toBeDefined()
            expect(grid).toHaveClass("test")
            expect(grid.children).toHaveLength(1)
            const child = grid.children
            expect(child.item(0)?.tagName).toBe("H1")
            expect(child.item(0)?.textContent).toBe("element")
        })
    })
})
