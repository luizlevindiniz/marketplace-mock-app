import { SignUpPage } from "./SignUpPage"
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

const store = createStore(cartReducer)

const mockFetch = (): jest.Mock =>
    jest.fn().mockImplementation(() =>
        Promise.resolve({
            ok: true,
            json: () => {
                "none"
            },
        })
    )

const errorData = {
    error: "User already exist.",
}
const mockErrorFetch = (): jest.Mock =>
    jest.fn().mockImplementation(() =>
        Promise.resolve({
            ok: false,
            json: () => errorData,
        })
    )

describe("src/pages/SignUpPage", () => {
    describe("when Sign Up page is displayed", () => {
        beforeEach(async () => {
            await act(async () => {
                render(
                    <ThemeProvider theme={theme}>
                        <ResetStyle />
                        <Router>
                            <Provider store={store}>
                                <AuthProvider>
                                    <SignUpPage />
                                </AuthProvider>
                            </Provider>
                        </Router>
                    </ThemeProvider>
                )
            })
        })
        test("all elements are visible", async () => {
            expect(await screen.findByText("Welcome to")).toBeVisible()
            expect(await screen.findByTestId("logo")).toBeVisible()
            expect(await screen.findByTestId("name")).toBeVisible()
            expect(await screen.findByTestId("username")).toBeVisible()
            expect(await screen.findByTestId("password")).toBeVisible()
            expect(await screen.findByTestId("sign-up-btn")).toBeVisible()
            expect(await screen.findByTestId("login-btn")).toBeVisible()
            expect(await screen.findByTestId("homepage-btn")).toBeVisible()
        })

        test("a user can go to login page", async () => {
            const loginBtn = await screen.findByTestId("login-btn")
            fireEvent.click(loginBtn)
            expect(window.location.pathname).toBe("/login")
        })

        test("a user can go to home page", async () => {
            const homePageBtn = await screen.findByTestId("homepage-btn")
            act(() => {
                homePageBtn.click()
            })
            expect(window.location.pathname).toBe("/")
        })

        test("a user can sign up", async () => {
            act(() => {
                window.fetch = mockFetch()
            })
            const fullNameInput = await screen.findByTestId("name")
            const username = await screen.findByTestId("username")
            const password = await screen.findByTestId("password")

            act(() => {
                fireEvent.change(fullNameInput, { target: { value: "ABC" } })
                fireEvent.change(username, { target: { value: "user" } })
                fireEvent.change(password, { target: { value: "123" } })
            })

            const signUpBtn = await screen.findByTestId("sign-up-btn")
            act(() => {
                signUpBtn.click()
            })
            expect(
                await screen.findByText(
                    "User registered! Redirecting to login."
                )
            ).toBeVisible()
        })

        test("a user sign up can fail", async () => {
            act(() => {
                window.fetch = mockErrorFetch()
            })
            const fullNameInput = await screen.findByTestId("name")
            const username = await screen.findByTestId("username")
            const password = await screen.findByTestId("password")

            act(() => {
                fireEvent.change(fullNameInput, { target: { value: "ABC" } })
                fireEvent.change(username, { target: { value: "user" } })
                fireEvent.change(password, { target: { value: "123" } })
            })

            const signUpBtn = await screen.findByTestId("sign-up-btn")
            act(() => {
                signUpBtn.click()
            })
            expect(await screen.findByText("User already exist.")).toBeVisible()
        })
    })
})
