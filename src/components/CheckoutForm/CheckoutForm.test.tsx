import "@testing-library/jest-dom"
import { act, screen, render, fireEvent } from "@testing-library/react"
import { ResetStyle } from "@/styles/global"
import { ThemeProvider } from "styled-components"
import theme from "@/styles/theme"
import { cartReducer } from "@/reducers/cartReducer"
import { createStore } from "redux"
import { Provider } from "react-redux"
import { AuthProvider } from "@/auth/useAuth"
import { BrowserRouter as Router } from "react-router-dom"
import { CheckoutForm } from "./index"

const store = createStore(cartReducer)

describe("src/components/CheckoutForm", () => {
    describe("when checkout form is rendered", () => {
        test("display all headers", async () => {
            await act(async () => {
                render(
                    <ThemeProvider theme={theme}>
                        <ResetStyle />
                        <Router>
                            <Provider store={store}>
                                <AuthProvider>
                                    <CheckoutForm />
                                </AuthProvider>
                            </Provider>
                        </Router>
                    </ThemeProvider>
                )
            })
            expect(screen.getByText("Full Name")).toBeInTheDocument()
            expect(screen.getByText("Email")).toBeInTheDocument()
            expect(screen.getByText("Address")).toBeInTheDocument()
            expect(screen.getByText("City")).toBeInTheDocument()
            expect(screen.getByText("State")).toBeInTheDocument()
            expect(screen.getByText("Zip")).toBeInTheDocument()
            expect(screen.getByText("Payment")).toBeInTheDocument()
            expect(screen.getByText("Accepted Cards")).toBeInTheDocument()
            expect(screen.getByText("Name on Card")).toBeInTheDocument()
            expect(screen.getByText("Credit card number")).toBeInTheDocument()
            expect(screen.getByText("Exp Month")).toBeInTheDocument()
            expect(screen.getByText("Exp Year")).toBeInTheDocument()
            expect(screen.getByText("CVV")).toBeInTheDocument()
            expect(
                screen.getByText("Shipping address same as billing")
            ).toBeInTheDocument()
            expect(screen.getByText("Continue to checkout")).toBeInTheDocument()
        })
        test("all form fields are editable", async () => {
            await act(async () => {
                render(
                    <ThemeProvider theme={theme}>
                        <ResetStyle />
                        <Router>
                            <Provider store={store}>
                                <AuthProvider>
                                    <CheckoutForm />
                                </AuthProvider>
                            </Provider>
                        </Router>
                    </ThemeProvider>
                )
            })

            const fullName = screen.getByTestId("fullname") as HTMLInputElement
            fireEvent.change(fullName, {
                target: { value: "FullName" },
            })
            expect(fullName.value).toBe("FullName")
            expect(fullName).toBeVisible()

            const emailInput = screen.getByTestId("email") as HTMLInputElement
            fireEvent.change(emailInput, {
                target: { value: "f@gmail.com" },
            })
            expect(emailInput.value).toBe("f@gmail.com")
            expect(emailInput).toBeVisible()

            const addressInput = screen.getByTestId(
                "address"
            ) as HTMLInputElement
            fireEvent.change(addressInput, {
                target: { value: "RJ Street" },
            })
            expect(addressInput.value).toBe("RJ Street")
            expect(addressInput).toBeVisible()

            const cityInput = screen.getByTestId("city") as HTMLInputElement
            fireEvent.change(cityInput, {
                target: { value: "Rio de Janeiro" },
            })
            expect(cityInput.value).toBe("Rio de Janeiro")
            expect(cityInput).toBeVisible()

            const stateInput = screen.getByTestId("state") as HTMLInputElement
            fireEvent.change(stateInput, {
                target: { value: "RJ" },
            })
            expect(stateInput.value).toBe("RJ")
            expect(stateInput).toBeVisible()

            const zipInput = screen.getByTestId("zip") as HTMLInputElement
            fireEvent.change(zipInput, {
                target: { value: "123432" },
            })
            expect(zipInput.value).toBe("123432")
            expect(zipInput).toBeVisible()

            const cardnameInput = screen.getByTestId(
                "cardname"
            ) as HTMLInputElement
            fireEvent.change(cardnameInput, {
                target: { value: "FullCardName" },
            })
            expect(cardnameInput.value).toBe("FullCardName")
            expect(cardnameInput).toBeVisible()

            const cardnumberInput = screen.getByTestId(
                "cardnumber"
            ) as HTMLInputElement
            fireEvent.change(cardnumberInput, {
                target: { value: "1234567890" },
            })
            expect(cardnumberInput.value).toBe("1234567890")
            expect(cardnumberInput).toBeVisible()

            const expmonthInput = screen.getByTestId(
                "expmonth"
            ) as HTMLInputElement
            fireEvent.change(expmonthInput, {
                target: { value: "February" },
            })
            expect(expmonthInput.value).toBe("February")
            expect(expmonthInput).toBeVisible()

            const expyearInput = screen.getByTestId(
                "expyear"
            ) as HTMLInputElement
            fireEvent.change(expyearInput, {
                target: { value: "2030" },
            })
            expect(expyearInput.value).toBe("2030")
            expect(expyearInput).toBeVisible()

            const cvvInput = screen.getByTestId("cvv") as HTMLInputElement
            fireEvent.change(cvvInput, {
                target: { value: "453" },
            })
            expect(cvvInput.value).toBe("453")
            expect(cvvInput).toBeVisible()

            const shippingCheckbox = screen.getByTestId("shipping")
            expect(shippingCheckbox).toBeChecked()
            fireEvent.click(shippingCheckbox)
            expect(shippingCheckbox).not.toBeChecked()

            const checkoutBtn = screen.getByTestId("buy-btn")
            fireEvent.click(checkoutBtn)
        })
    })
})
