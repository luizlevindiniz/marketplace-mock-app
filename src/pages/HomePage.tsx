import { ChangeEvent, ReactElement, useEffect, useState } from "react"
import { getAllProducts } from "../services/products"
import { Navbar } from "components/Navbar"
import { Grid } from "components/Grid"
import { Card } from "components/Card"
import { Footer } from "components/Footer"
import { Headline } from "components/Headline"
import { ProductObject, ProductsResponse } from "models/Product"

const HomePage = (): ReactElement => {
    const [productsResponse, setProductsResponse] =
        useState<ProductsResponse | null>(null)

    const [search, setSearch] = useState("")

    const [filteredProducts, setFilteredProducts] = useState<
        ProductObject[] | null
    >(null)

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const toSearch = e.target.value
        setSearch(toSearch)

        if (productsResponse?.products) {
            const filtered = productsResponse.products.filter((p) =>
                p.title.toLowerCase().includes(toSearch.toLowerCase())
            )
            setFilteredProducts(filtered)
        }
    }

    const handleProducts = async (): Promise<void> => {
        const res = await getAllProducts()

        if (res.products) {
            setProductsResponse(res)
            setFilteredProducts(res.products)
        }
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

    return (
        <>
            <Navbar
                search={search}
                handleSearchChange={handleSearchChange}
                displayNavbar={true}
            />
            <main className="products-wrapper">
                <Headline>
                    <h1>Products</h1>
                </Headline>
                <Grid className="products-content">
                    {filteredProducts?.map((prod) => (
                        <Card
                            id={prod.id}
                            title={prod.title}
                            price={prod.price}
                            image={prod.thumbnail}
                            imageAlt="product-showcase"
                            rating={prod.rating}
                            brand={prod.brand}
                            key={prod.id}
                            description={prod.description}
                        ></Card>
                    ))}
                </Grid>
            </main>
            <Footer />
        </>
    )
}

export { HomePage }
