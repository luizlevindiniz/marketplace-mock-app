import Counter from "components/Counter"
import { ReactElement, useEffect, useState } from "react"
import { getAllProducts } from "./services/products"

interface ProductsResponse {
    limit: number
    total: number
    skip: number
    products: [ProductObject]
}

interface ProductObject {
    id: number
    title: string
    description: string
    price: number
    discountPercentage: number
    rating: number
    stock: number
    brand: string
    category: string
    thumbnail: string
    images: [string]
}

function App(): ReactElement {
    const [productsResponse, setProductsResponse] =
        useState<ProductsResponse | null>(null)

    const handleProducts = async () => {
        const res = await getAllProducts()

        setProductsResponse(res)
    }

    useEffect(() => {
        handleProducts()
    }, [])

    if (!productsResponse) {
        return (
            <>
                <h1>Products</h1>
                <p> No products found =/ </p>
            </>
        )
    }

    const { products } = productsResponse

    return (
        <>
            <h1>Products</h1>
            <p>Test</p>
            <div className="products-wrapper">
                <div className="products-content">
                    {products.map((prod) => (
                        <div className="product-card" key={prod.id}>
                            <h4>{prod.title}</h4>
                            <img src={prod.images[0]} alt="product" />
                            <p>${prod.price}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default App
