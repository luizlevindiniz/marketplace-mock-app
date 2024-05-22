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
import { CenteredContainer } from "./index"
import { ReactNode } from "react"

const store = createStore(cartReducer)

const children = (): ReactNode => {
    return <h1>Container</h1>
}

describe("src/components/CenteredContainer", () => {
    describe("when centered container has children", () => {
        test("display all child nodes", async () => {
            await act(async () => {
                render(
                    <ThemeProvider theme={theme}>
                        <ResetStyle />
                        <Router>
                            <Provider store={store}>
                                <AuthProvider>
                                    <CenteredContainer className="test">
                                        {children()}
                                    </CenteredContainer>
                                </AuthProvider>
                            </Provider>
                        </Router>
                    </ThemeProvider>
                )
            })
            const centCenteredContainer =
                screen.getByTestId("centered-container")
            expect(centCenteredContainer).toBeDefined()
            expect(centCenteredContainer).toHaveClass("test")
            expect(centCenteredContainer.children).toHaveLength(1)
            const child = centCenteredContainer.children
            expect(child.item(0)?.tagName).toBe("H1")
            expect(child.item(0)?.textContent).toBe("Container")
        })
    })
})
