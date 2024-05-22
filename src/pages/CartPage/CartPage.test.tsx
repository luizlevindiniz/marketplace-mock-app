import { CartPage } from "./CartPage"
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
import { CartProductObject } from "@/models/CartProduct"

interface Action {
    type: string
    payload: CartProductObject
}

let store = createStore(cartReducer)

const product: CartProductObject = {
    id: 1,
    title: "iPhone 9",
    description: "An apple mobile which is nothing like apple",
    price: 549,
    discountPercentage: 12.96,
    rating: 4.69,
    stock: 94,
    brand: "Apple",
    category: "smartphones",
    thumbnail: "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
    images: [
        "https://cdn.dummyjson.com/product-images/1/1.jpg",
        "https://cdn.dummyjson.com/product-images/1/2.jpg",
        "https://cdn.dummyjson.com/product-images/1/3.jpg",
        "https://cdn.dummyjson.com/product-images/1/4.jpg",
        "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
    ],
    quantity: 1,
}

const addAction: Action = {
    type: "ADD",
    payload: product,
}

describe("src/pages/CartPage", () => {
    describe("when cart is empty", () => {
        beforeEach(async () => {
            await act(async () => {
                render(
                    <ThemeProvider theme={theme}>
                        <ResetStyle />
                        <Router>
                            <Provider store={store}>
                                <AuthProvider>
                                    <CartPage />
                                </AuthProvider>
                            </Provider>
                        </Router>
                    </ThemeProvider>
                )
            })
        })

        test("render cart page header", async () => {
            expect(await screen.findByText("Cart")).toBeVisible()
            expect(
                await screen.findByText(
                    "You're purchasing the following items:"
                )
            ).toBeVisible()
        })
        test("render empty cart message", async () => {
            expect(
                await screen.findByText("Ops! Your cart is Empty!")
            ).toBeVisible()

            expect(
                await screen.findByText("Try adding products first.")
            ).toBeVisible()
        })

        test("render total price as zero", async () => {
            const totalPrice = await screen.findByTestId("price-span")
            expect(totalPrice).toBeVisible()
            expect(totalPrice.textContent).toBe("$0.00")
        })
    })

    describe("when cart is not empty", () => {
        beforeEach(() => {
            store = createStore(cartReducer)
        })
        test("product name is visible", async () => {
            store.dispatch(addAction)
            await act(async () => {
                render(
                    <ThemeProvider theme={theme}>
                        <ResetStyle />
                        <Router>
                            <Provider store={store}>
                                <AuthProvider>
                                    <CartPage />
                                </AuthProvider>
                            </Provider>
                        </Router>
                    </ThemeProvider>
                )
            })
            expect(screen.queryByText("Ops! Your cart is Empty!")).toBeNull()

            expect(
                await screen.findByTestId("product-brand")
            ).toHaveTextContent("Apple")
            expect(
                await screen.findByTestId("product-title")
            ).toHaveTextContent("iPhone 9")
            expect(
                await screen.findByTestId("product-price")
            ).toHaveTextContent("$549.00")
            expect(await screen.findByTestId("product-qnt")).toHaveTextContent(
                "Qnt: 1 unit(s)"
            )
        })

        test("can add and remove products from the cart", async () => {
            store.dispatch(addAction)
            await act(async () => {
                render(
                    <ThemeProvider theme={theme}>
                        <ResetStyle />
                        <Router>
                            <Provider store={store}>
                                <AuthProvider>
                                    <CartPage />
                                </AuthProvider>
                            </Provider>
                        </Router>
                    </ThemeProvider>
                )
            })

            const addBtn = await screen.findByTestId("add-more-product-btn")
            const removeBtn = await screen.findByTestId("remove-product-btn")
            const totalPrice = await screen.findByTestId("price-span")
            const productQnt = await screen.findByTestId("product-qnt")

            act(() => {
                addBtn.click()
            })

            expect(productQnt.textContent).toBe("Qnt: 2 unit(s)")
            expect(totalPrice.textContent).toBe("$1098.00")

            act(() => {
                removeBtn.click()
            })

            expect(productQnt.textContent).toBe("Qnt: 1 unit(s)")
            expect(totalPrice.textContent).toBe("$549.00")
        })

        test("can remove all card itens", async () => {
            store.dispatch(addAction)
            await act(async () => {
                render(
                    <ThemeProvider theme={theme}>
                        <ResetStyle />
                        <Router>
                            <Provider store={store}>
                                <AuthProvider>
                                    <CartPage />
                                </AuthProvider>
                            </Provider>
                        </Router>
                    </ThemeProvider>
                )
            })

            const removeBtn = await screen.findByTestId("remove-product-btn")
            const openCheckoutBtn = await screen.findByTestId(
                "open-checkout-form-btn"
            )

            expect(openCheckoutBtn).toBeVisible()

            act(() => {
                removeBtn.click()
            })

            expect(openCheckoutBtn).not.toBeVisible()
        })

        test("can open and close checkout form", async () => {
            store.dispatch(addAction)
            await act(async () => {
                render(
                    <ThemeProvider theme={theme}>
                        <ResetStyle />
                        <Router>
                            <Provider store={store}>
                                <AuthProvider>
                                    <CartPage />
                                </AuthProvider>
                            </Provider>
                        </Router>
                    </ThemeProvider>
                )
            })

            const openCheckoutBtn = await screen.findByTestId(
                "open-checkout-form-btn"
            )

            act(() => {
                openCheckoutBtn.click()
            })

            expect(
                await screen.findByText("Continue to checkout")
            ).toBeVisible()

            act(() => {
                openCheckoutBtn.click()
            })

            expect(screen.queryByText("Continue to checkout")).toBeNull()
        })
    })
})
