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
import Toast from "./index"
import { Dispatch, SetStateAction } from "react"

const store = createStore(cartReducer)

type ToastType = "success" | "failure" | "warning"

interface ToastComponent {
    toastMessage: string
    toastType: ToastType
    id: string
}

const toastComponent: ToastComponent = {
    toastMessage: "test",
    toastType: "success" as ToastType,
    id: "abc",
}

let toastList: ToastComponent[] = []
const setToastList: Dispatch<SetStateAction<ToastComponent[]>> = (
    value: SetStateAction<ToastComponent[]>
) => {
    if (typeof value === "function") {
        const prevState = toastList
        const newState = (
            value as (prevState: ToastComponent[]) => ToastComponent[]
        )(prevState)
        toastList = newState
    } else {
        toastList = value
    }
}

describe("src/components/Toast", () => {
    describe("when toast is called", () => {
        beforeEach(async () => {
            toastList = []
            toastList.push(toastComponent)
            await act(async () => {
                render(
                    <ThemeProvider theme={theme}>
                        <ResetStyle />
                        <Router>
                            <Provider store={store}>
                                <AuthProvider>
                                    <Toast
                                        toastList={toastList}
                                        setToastList={setToastList}
                                    />
                                </AuthProvider>
                            </Provider>
                        </Router>
                    </ThemeProvider>
                )
            })
        })

        test("display success message", async () => {
            const toastWrapper = screen.getByTestId("toast-wrapper")
            expect(toastWrapper).toBeDefined()
            expect(toastWrapper.children).toHaveLength(1)
            const toast = toastWrapper.children.item(0)
            expect(toast).toBeVisible()
            expect(toast).toBeDefined()
            expect(toast).toHaveClass("toast")
            expect(toast).toHaveClass("toast--success")
            expect(toast).toHaveRole("alert")
            expect(screen.getByText("test")).toBeInTheDocument()
        })

        test("toast can be closed", async () => {
            const toast = screen.getByTestId("toast")
            expect(toast).toBeDefined()
            expect(toast).toBeVisible()
            const closeBtn = screen.getByTestId("toast-close-btn")
            expect(closeBtn).toBeDefined()
            expect(closeBtn).toBeVisible()
            fireEvent.click(closeBtn)
            // waiting fading animation end
            setTimeout(() => {
                expect(toast).not.toBeVisible()
            }, 1000)
        })

        test("toast is removed automatically after 3 seconds", async () => {
            const toast = screen.getByTestId("toast")
            expect(toast).toBeDefined()
            expect(toast).toBeVisible()
            // waiting auto delete
            setTimeout(() => {
                expect(toast).not.toBeVisible()
            }, 4000)
        })
    })
})
