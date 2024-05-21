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
import { Image } from "./index"

const store = createStore(cartReducer)

const src = "mock.png"
const alt = "mocked img"

describe("src/components/Image", () => {
    describe("when image is rendered", () => {
        test("check all attributes", async () => {
            await act(async () => {
                render(
                    <ThemeProvider theme={theme}>
                        <ResetStyle />
                        <Router>
                            <Provider store={store}>
                                <AuthProvider>
                                    <Image src={src} alt={alt} />
                                </AuthProvider>
                            </Provider>
                        </Router>
                    </ThemeProvider>
                )
            })
            const image = screen.getByTestId("card-image")
            expect(image).toBeDefined()
            expect(image).toHaveAttribute("src", "mock.png")
            expect(image).toHaveAttribute("alt", "mocked img")
            expect(image.tagName).toBe("IMG")
        })
    })
})
