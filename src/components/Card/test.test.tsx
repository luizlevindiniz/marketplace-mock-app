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
    description:
        "This is an example product description. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
}
const store = createStore(cartReducer)

describe("src/components/Card", () => {
    describe("when card is displayed", () => {
        test("all properties are visible", async () => {
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
            const card = screen.getByTestId("product-card")
            expect(card).toBeDefined()
            const title = screen.getByTestId("product-title")
            const image = screen.getByTestId("card-image")
            const price = screen.getByTestId("product-price")
            const brand = screen.getByTestId("product-brand")
            const rating = screen.getByTestId("product-rating")
            const description = screen.getByTestId("product-description")
            const shipping = screen.getByTestId("product-shipping")

            expect(title.textContent).toBe("Example Product")
            expect(image).toHaveAttribute("src", "example.jpg")
            expect(image).toHaveAttribute("alt", "Example Image")
            expect(price.textContent).toBe("$23.00")
            expect(rating.tagName).toBe("P")
            expect(rating.children).toHaveLength(5)
            expect(brand.textContent).toBe("Example Brand")
            expect(description.textContent).toBe(
                "This is an example product description. Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            )
            expect(shipping.textContent).toBe("$5.99 Shipping")
        })
    })
})
