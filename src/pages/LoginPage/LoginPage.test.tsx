import { LoginPage } from "./LoginPage"
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

const errorData = {
    error: "User does not exist.",
}

const successData = {
    token: "ABC",
}

const mockErrorFetch = (): jest.Mock =>
    jest.fn().mockImplementation(() =>
        Promise.resolve({
            ok: false,
            json: () => errorData,
        })
    )

const mockSuccessFetch = (): jest.Mock =>
    jest.fn().mockImplementation(() =>
        Promise.resolve({
            ok: true,
            json: () => successData,
        })
    )

describe("src/pages/LoginPage", () => {
    describe("when Login page is displayed", () => {
        beforeEach(async () => {
            await act(async () => {
                render(
                    <ThemeProvider theme={theme}>
                        <ResetStyle />
                        <Router>
                            <Provider store={store}>
                                <AuthProvider>
                                    <LoginPage />
                                </AuthProvider>
                            </Provider>
                        </Router>
                    </ThemeProvider>
                )
            })
        })
        test("all elements are visible", async () => {
            expect(await screen.findByText("Login into")).toBeVisible()
            expect(await screen.findByTestId("logo")).toBeVisible()
            expect(await screen.findByTestId("username")).toBeVisible()
            expect(await screen.findByTestId("password")).toBeVisible()
            expect(await screen.findByTestId("login-btn")).toBeVisible()
            expect(await screen.findByTestId("sign-up-btn")).toBeVisible()
            expect(await screen.findByTestId("homepage-btn")).toBeVisible()
        })

        test("a user can go to sign up page", async () => {
            const loginBtn = await screen.findByTestId("sign-up-btn")
            fireEvent.click(loginBtn)
            expect(window.location.pathname).toBe("/signup")
        })

        test("a user can go to home page", async () => {
            const homePageBtn = await screen.findByTestId("homepage-btn")
            act(() => {
                homePageBtn.click()
            })
            expect(window.location.pathname).toBe("/")
        })

        test("a user login can fail", async () => {
            act(() => {
                window.fetch = mockErrorFetch()
            })
            const username = await screen.findByTestId("username")
            const password = await screen.findByTestId("password")

            act(() => {
                fireEvent.change(username, { target: { value: "user" } })
                fireEvent.change(password, { target: { value: "123" } })
            })

            const loginBtn = await screen.findByTestId("login-btn")
            act(() => {
                loginBtn.click()
            })
            expect(
                await screen.findByText("User does not exist.")
            ).toBeVisible()
        })

        test("a user login can succeed", async () => {
            act(() => {
                window.fetch = mockSuccessFetch()
            })
            const username = await screen.findByTestId("username")
            const password = await screen.findByTestId("password")

            act(() => {
                fireEvent.change(username, { target: { value: "user" } })
                fireEvent.change(password, { target: { value: "123" } })
            })

            const loginBtn = await screen.findByTestId("login-btn")
            act(() => {
                loginBtn.click()
            })
            expect(
                await screen.findByText("Signed In! Redirecting to home.")
            ).toBeVisible()
        })
    })
})
