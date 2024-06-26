import { HomePage } from "./HomePage"
import "@testing-library/jest-dom"
import { act, render, screen, fireEvent } from "@testing-library/react"
import * as services from "../../services/products"
import { ResetStyle } from "@/styles/global"
import { ThemeProvider } from "styled-components"
import theme from "@/styles/theme"
import { cartReducer } from "@/reducers/cartReducer"
import { createStore } from "redux"
import { Provider } from "react-redux"
import { AuthProvider } from "@/auth/useAuth"
import { BrowserRouter as Router } from "react-router-dom"

const store = createStore(cartReducer)

const resolved = {
    products: [
        {
            id: 1,
            title: "iPhone 9",
            description: "An apple mobile which is nothing like apple",
            price: 549,
            discountPercentage: 12.96,
            rating: 4.69,
            stock: 94,
            brand: "Apple",
            category: "smartphones",
            thumbnail:
                "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
            images: [
                "https://cdn.dummyjson.com/product-images/1/1.jpg",
                "https://cdn.dummyjson.com/product-images/1/2.jpg",
                "https://cdn.dummyjson.com/product-images/1/3.jpg",
                "https://cdn.dummyjson.com/product-images/1/4.jpg",
                "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
            ],
        },
    ],
    total: 100,
    skip: 0,
    limit: 30,
}

const rejected = {
    products: [],
    total: 100,
    skip: 0,
    limit: 30,
}

const mockGetAllProducts = jest.spyOn(services, "getAllProducts")

describe("src/pages/HomePage", () => {
    describe("when products API is offline, does the homepage ", () => {
        beforeEach(async () => {
            await act(async () => {
                mockGetAllProducts.mockResolvedValue(rejected)
                render(
                    <ThemeProvider theme={theme}>
                        <ResetStyle />
                        <Router>
                            <Provider store={store}>
                                <AuthProvider>
                                    <HomePage />
                                </AuthProvider>
                            </Provider>
                        </Router>
                    </ThemeProvider>
                )
            })
        })

        afterEach(() => {
            jest.clearAllMocks()
        })
        test("render the header", async () => {
            const header = screen.getByTestId("products-headline")
            expect(header.tagName).toBe("H1")
            expect(header).toBeDefined()
            expect(header.textContent).toBe("Products")
        })

        test("render the error paragraph", async () => {
            const paragraph = screen.getByTestId("not-found-paragraph")
            expect(paragraph.tagName).toBe("P")
            expect(paragraph).toBeDefined()
            expect(paragraph.textContent).toBe(" No products found =/ ")
        })
    })

    describe("when products API is online, does the homepage", () => {
        beforeEach(() => {
            mockGetAllProducts.mockResolvedValue(resolved)
        })

        afterEach(() => {
            jest.clearAllMocks()
        })
        test("render all products", async () => {
            expect(mockGetAllProducts).toHaveBeenCalledTimes(0)
            await act(async () =>
                render(
                    <ThemeProvider theme={theme}>
                        <ResetStyle />
                        <Router>
                            <Provider store={store}>
                                <AuthProvider>
                                    <HomePage />
                                </AuthProvider>
                            </Provider>
                        </Router>
                    </ThemeProvider>
                )
            )
            expect(mockGetAllProducts).toHaveBeenCalledTimes(1)
            await screen.findByText("Products")
            await screen.findByText("iPhone 9")
        })

        test("access details page", async () => {
            await act(async () =>
                render(
                    <ThemeProvider theme={theme}>
                        <ResetStyle />
                        <Router>
                            <Provider store={store}>
                                <AuthProvider>
                                    <HomePage />
                                </AuthProvider>
                            </Provider>
                        </Router>
                    </ThemeProvider>
                )
            )
            await screen.findByText("iPhone 9")
            const button = await screen.findByTestId("product-title")
            expect(button.tagName).toBe("A")

            act(() => {
                button.click()
            })
            expect(window.location.pathname).toBe("/product/1")
            await screen.findByText(
                "An apple mobile which is nothing like apple"
            )
        })

        test("check search bar functionality", async () => {
            await act(async () =>
                render(
                    <ThemeProvider theme={theme}>
                        <ResetStyle />
                        <Router>
                            <Provider store={store}>
                                <AuthProvider>
                                    <HomePage />
                                </AuthProvider>
                            </Provider>
                        </Router>
                    </ThemeProvider>
                )
            )

            const searchBar = await screen.findByTestId("search-bar-input")
            expect(searchBar.tagName).toBe("INPUT")
            const iphoneText = screen.queryByText("iPhone 9")
            expect(iphoneText).toBeInTheDocument()
            fireEvent.change(searchBar, { target: { value: "ABCD" } })
            expect(iphoneText).not.toBeInTheDocument()
        })
    })
})
