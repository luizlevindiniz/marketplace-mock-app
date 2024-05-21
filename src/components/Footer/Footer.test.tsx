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
import { Footer } from "./index"

const store = createStore(cartReducer)
describe("src/components/Footer", () => {
    describe("when footer is displayed", () => {
        test("check all its menu options", async () => {
            await act(async () => {
                render(
                    <ThemeProvider theme={theme}>
                        <ResetStyle />
                        <Router>
                            <Provider store={store}>
                                <AuthProvider>
                                    <Footer />
                                </AuthProvider>
                            </Provider>
                        </Router>
                    </ThemeProvider>
                )
            })
            const footer = screen.getByTestId("footer")
            expect(footer).toBeDefined()
            expect(footer.children.item(0)).toHaveClass("footer-content")
            expect(screen.getByText("About")).toBeInTheDocument()
            expect(screen.getByText("My network")).toBeInTheDocument()
            expect(screen.getByText("Privacy")).toBeInTheDocument()
            expect(screen.getByText("Sales")).toBeInTheDocument()
            expect(screen.getByText("Security")).toBeInTheDocument()
            expect(
                screen.getByText("Marketplace Inc © 2024")
            ).toBeInTheDocument()
        })
    })
})
