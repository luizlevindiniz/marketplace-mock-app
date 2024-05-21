import { Card } from "./index"
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

const product = {
    id: 1,
    title: "Example Product",
    image: "example.jpg",
    imageAlt: "Example Image",
    price: 23,
    brand: "Example Brand",
    rating: 4.5,
    description: "This is an example product description.",
}
const store = createStore(cartReducer)

let title: HTMLElement
let image: HTMLElement
let price: HTMLElement
let brand: HTMLElement
let rating: HTMLElement
let description: HTMLElement
let shipping: HTMLElement

describe("src/components/Card", () => {
    describe("when card is displayed", () => {
        beforeEach(async () => {
            await act(async () => {
                render(
                    <ThemeProvider theme={theme}>
                        <ResetStyle />
                        <Router>
                            <Provider store={store}>
                                <AuthProvider>
                                    <Card
                                        title={product.title}
                                        image={product.image}
                                        imageAlt={product.imageAlt}
                                        price={product.price}
                                        brand={product.brand}
                                        rating={product.rating}
                                        description={product.description}
                                        id={product.id}
                                    />
                                </AuthProvider>
                            </Provider>
                        </Router>
                    </ThemeProvider>
                )
            })

            title = screen.getByTestId("product-title")
            image = screen.getByTestId("card-image")
            price = screen.getByTestId("product-price")
            brand = screen.getByTestId("product-brand")
            rating = screen.getByTestId("product-rating")
            description = screen.getByTestId("product-description")
            shipping = screen.getByTestId("product-shipping")
        })

        test("card is defined", () => {
            const card = screen.getByTestId("product-card")
            expect(card).toBeDefined()
        })

        test("header properties are visible", async () => {
            expect(title.textContent).toBe("Example Product")
            expect(image).toHaveAttribute("src", "example.jpg")
            expect(image).toHaveAttribute("alt", "Example Image")
        })
        test("body properties are visible", async () => {
            expect(price.textContent).toBe("$23.00")
            expect(rating.tagName).toBe("P")
            expect(rating.children).toHaveLength(5)
            expect(brand.textContent).toBe("Example Brand")
        })
        test("footer properties are visible", () => {
            expect(description.textContent).toBe(
                "This is an example product description."
            )
            expect(shipping.textContent).toBe("$5.99 Shipping")
        })
    })
})
