import { NotFoundPage } from "./NotFoundPage"
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

const store = createStore(cartReducer)

describe("src/pages/NotFoundPage", () => {
    describe("when Not Found Page is displayed", () => {
        test("all elements are visible", async () => {
            await act(async () => {
                render(
                    <ThemeProvider theme={theme}>
                        <ResetStyle />
                        <Router>
                            <Provider store={store}>
                                <AuthProvider>
                                    <NotFoundPage />
                                </AuthProvider>
                            </Provider>
                        </Router>
                    </ThemeProvider>
                )
            })

            expect(
                await screen.findByText("Ops! 404 - Not Found")
            ).toBeVisible()
        })
    })
})
