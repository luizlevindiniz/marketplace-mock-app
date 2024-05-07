import { ReactElement, useEffect, useState } from "react"
import { Navbar } from "components/Navbar"
import { Footer } from "components/Footer"
import { Headline } from "components/Headline"
import { useParams } from "react-router"
import { ProductObject } from "models/Product"
import { getSingleProduct } from "services/products"
import { Showcase } from "components/Showcase"
import { FaStar } from "react-icons/fa"

const DetailsPage = (): ReactElement => {
    const { id } = useParams()

    const [product, setProduct] = useState<ProductObject | null>(null)
    const [slide, setSlide] = useState(0)

    const handleProduct = async (productId: string): Promise<void> => {
        const res = await getSingleProduct(productId)

        if (res) {
            setProduct(res)
        }
    }

    const handleSlideChange = (command: string): void => {
        if (command === "next") {
            slide >= 3 ? setSlide(0) : setSlide((s) => s + 1)
        } else {
            slide <= 0 ? setSlide(3) : setSlide((s) => s - 1)
        }
    }

    useEffect(() => {
        if (id) {
            handleProduct(id)
        }
    }, [id])

    return (
        <>
            <Navbar displayNavbar={false} />
            <main className="products-wrapper">
                <Headline>
                    <h1>
                        Details:{" "}
                        <span className="product-name">
                            {product?.title ?? ""}
                        </span>
                    </h1>
                </Headline>
                {product ? (
                    <Showcase className="product-detail">
                        <div className="main">
                            <div className="call">
                                <div className="main-wrapper">
                                    <h3 className="main-header">
                                        {product.brand}
                                    </h3>
                                    <h1 className="main-title">
                                        {product.title}
                                    </h1>
                                    <h2 className="main-subtitle">
                                        ${product.price}{" "}
                                        <span className="discount">
                                            {product.discountPercentage}% off
                                        </span>
                                    </h2>
                                </div>
                                <div className="main-content">
                                    <div className="main-content__title">
                                        {product.rating}
                                        <FaStar></FaStar> - {product.stock}{" "}
                                        units
                                    </div>
                                    <div className="main-content__subtitle">
                                        {product.description}
                                    </div>
                                    <div className="more-menu">
                                        <button
                                            type="button"
                                            className="add-to-cart-button"
                                        >
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="slides">
                                <div className="swiper-button swiper-prev-button">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        onClick={() =>
                                            handleSlideChange("prev")
                                        }
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.2"
                                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                                        ></path>
                                    </svg>
                                </div>
                                <img
                                    className="slide-image"
                                    src={product.images[slide]}
                                    alt="product-slide"
                                />
                                <div className="swiper-button swiper-next-button">
                                    <svg
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        onClick={() =>
                                            handleSlideChange("next")
                                        }
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="1.2"
                                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                                        ></path>
                                    </svg>
                                </div>
                            </div>
                            <div className="comments">
                                <h2>Leave a comment</h2>
                                <textarea
                                    name="comment"
                                    id="comment"
                                ></textarea>
                                <div className="submit-wrapper">
                                    <button type="button">Submit</button>
                                </div>
                            </div>
                        </div>
                    </Showcase>
                ) : (
                    <div>Loading</div>
                )}
            </main>
            <Footer />
        </>
    )
}

export { DetailsPage }
