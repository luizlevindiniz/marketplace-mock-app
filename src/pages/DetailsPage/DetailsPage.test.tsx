import { DetailsPage } from "./DetailsPage"
import "@testing-library/jest-dom"
import { act, fireEvent, render, screen } from "@testing-library/react"
import { ResetStyle } from "@/styles/global"
import { ThemeProvider } from "styled-components"
import { AxiosError, AxiosHeaders } from "axios"
import theme from "@/styles/theme"
import { cartReducer } from "@/reducers/cartReducer"
import { createStore } from "redux"
import { Provider } from "react-redux"
import { AuthProvider } from "@/auth/useAuth"
import { BrowserRouter as Router } from "react-router-dom"
import * as router from "react-router"
import * as services from "../../services/products"
const store = createStore(cartReducer)

const mockSingleProduct = jest.spyOn(services, "getSingleProduct")

const resolved = {
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
}

const request = new XMLHttpRequest()
const headers = new AxiosHeaders()
const config = {
    url: "https://dummyjson.com/products/asdasdasd",
    headers,
}

const error = new AxiosError("Boom!", "something", config, request, {
    status: 404,
    data: { message: "Product with id '1' not found" },
    statusText: "",
    config,
    headers,
})

const useMockedParams = jest.fn().mockReturnValue({ id: 1 })
describe("src/pages/DetailsPage", () => {
    describe("when get single product API fails, does the page", () => {
        beforeEach(() => {
            jest.spyOn(router, "useParams").mockImplementation(() =>
                useMockedParams()
            )

            mockSingleProduct.mockResolvedValue(error)
        })

        afterEach(() => {
            jest.clearAllMocks()
        })
        test("render fail message", async () => {
            expect(useMockedParams).toHaveBeenCalledTimes(0)
            await act(async () => {
                render(
                    <ThemeProvider theme={theme}>
                        <ResetStyle />
                        <Router>
                            <Provider store={store}>
                                <AuthProvider>
                                    <DetailsPage />
                                </AuthProvider>
                            </Provider>
                        </Router>
                    </ThemeProvider>
                )
            })
            expect(useMockedParams).toHaveBeenCalledTimes(2)
            expect(
                await screen.findByText("Error Product with id '1' not found")
            ).toBeVisible()
        })
    })

    describe("when get single product API succeeds, does the page", () => {
        beforeEach(() => {
            jest.spyOn(router, "useParams").mockImplementation(() =>
                useMockedParams()
            )
            mockSingleProduct.mockResolvedValue(resolved)
        })

        afterEach(() => {
            jest.clearAllMocks()
        })

        test("render all fields", async () => {
            expect(useMockedParams).toHaveBeenCalledTimes(0)
            await act(async () =>
                render(
                    <ThemeProvider theme={theme}>
                        <ResetStyle />
                        <Router>
                            <Provider store={store}>
                                <AuthProvider>
                                    <DetailsPage />
                                </AuthProvider>
                            </Provider>
                        </Router>
                    </ThemeProvider>
                )
            )
            expect(useMockedParams).toHaveBeenCalledTimes(2)

            expect(await screen.findByText("Details:")).toBeVisible()
            expect(screen.getAllByText("iPhone 9")[0]).toBeVisible()
            expect(screen.getAllByText("Apple")[0]).toBeVisible()
            expect(screen.getAllByText("Add to Cart")[0]).toBeVisible()
            expect(screen.getAllByText("Leave a comment")[0]).toBeVisible()
        })

        test("back button is working", async () => {
            await act(async () =>
                render(
                    <ThemeProvider theme={theme}>
                        <ResetStyle />
                        <Router>
                            <Provider store={store}>
                                <AuthProvider>
                                    <DetailsPage />
                                </AuthProvider>
                            </Provider>
                        </Router>
                    </ThemeProvider>
                )
            )
            const backBtn = await screen.findByTestId("back-btn")
            fireEvent.click(backBtn)
            expect(window.location.pathname).toBe("/")
        })

        test("carrousel can change image on click", async () => {
            await act(async () =>
                render(
                    <ThemeProvider theme={theme}>
                        <ResetStyle />
                        <Router>
                            <Provider store={store}>
                                <AuthProvider>
                                    <DetailsPage />
                                </AuthProvider>
                            </Provider>
                        </Router>
                    </ThemeProvider>
                )
            )
            const nextBtn = await screen.findByTestId("next-btn")
            const prevBtn = await screen.findByTestId("prev-btn")
            const imageDisplay = await screen.findByTestId("img-carrousel")

            expect(imageDisplay).toHaveAttribute(
                "src",
                "https://cdn.dummyjson.com/product-images/1/1.jpg"
            )
            act(() => {
                fireEvent.click(nextBtn)
            })
            expect(imageDisplay).toHaveAttribute(
                "src",
                "https://cdn.dummyjson.com/product-images/1/2.jpg"
            )
            act(() => {
                fireEvent.click(prevBtn)
            })
            expect(imageDisplay).toHaveAttribute(
                "src",
                "https://cdn.dummyjson.com/product-images/1/1.jpg"
            )
        })

        test("function add to cart works properly", async () => {
            await act(async () =>
                render(
                    <ThemeProvider theme={theme}>
                        <ResetStyle />
                        <Router>
                            <Provider store={store}>
                                <AuthProvider>
                                    <DetailsPage />
                                </AuthProvider>
                            </Provider>
                        </Router>
                    </ThemeProvider>
                )
            )
            const addToCartBtn = await screen.findByTestId("add-to-cart-btn")
            act(() => {
                fireEvent.click(addToCartBtn)
            })
            expect(
                await screen.findByText("iPhone 9 added to cart!")
            ).toBeVisible()
        })

        test("comment section is working accordingly", async () => {
            await act(async () =>
                render(
                    <ThemeProvider theme={theme}>
                        <ResetStyle />
                        <Router>
                            <Provider store={store}>
                                <AuthProvider>
                                    <DetailsPage />
                                </AuthProvider>
                            </Provider>
                        </Router>
                    </ThemeProvider>
                )
            )
            const commentInput = (await screen.findByTestId(
                "comment-input"
            )) as HTMLInputElement
            const commentSubmit = await screen.findByTestId("comment-submit")

            fireEvent.change(commentInput, { target: { value: "test" } })
            expect(commentInput.value).toBe("test")
            fireEvent.click(commentSubmit)
        })
    })
})
