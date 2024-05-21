import { ReactElement, useEffect, useState } from "react"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Headline } from "@/components/Headline"
import { useParams } from "react-router"
import { ProductObject } from "@/models/Product"
import { getSingleProduct } from "@/services/products"
import { Showcase } from "@/components/Showcase"
import { FaStar } from "react-icons/fa"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { addToCart } from "@/reducers/cartReducer"
import { CartProductObject } from "@/models/CartProduct"
import Toast from "@/components/Toast"
import { v4 } from "uuid"
import { AxiosError } from "axios"

type ToastType = "success" | "failure" | "warning"

interface ToastComponent {
    toastMessage: string
    toastType: ToastType
    id: string
}

const DetailsPage = (): ReactElement => {
    const { id } = useParams()
    const dispatch = useDispatch()

    const [product, setProduct] = useState<ProductObject | null>(null)
    const [skeletonMessage, setSkeletonMessage] = useState("Loading")
    const [slide, setSlide] = useState(0)
    const [toastList, setToastList] = useState<ToastComponent[]>([])

    const handleProduct = async (productId: string): Promise<void> => {
        const res = await getSingleProduct(productId)

        if (res instanceof AxiosError) {
            setSkeletonMessage(`Error ${res.response?.data.message}`)
        } else {
            setProduct(res)
        }
    }

    const handleAddToCartClick = (productToAdd: ProductObject): void => {
        const productWithQuantity: CartProductObject = {
            ...productToAdd,
            quantity: 1,
        }

        dispatch(addToCart(productWithQuantity))
        const addToCartToast: ToastComponent = {
            toastMessage: `${productToAdd.title} added to cart!`,
            toastType: "success",
            id: v4(),
        }
        setToastList(toastList.concat(addToCartToast))
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
            <main
                className="products-wrapper"
                id="products-wrapper-detail-page"
            >
                <Toast toastList={toastList} setToastList={setToastList} />
                <Headline>
                    <h1 className="headline-details-page-h1">
                        Details:{" "}
                        <span className="product-name">
                            {product?.title ?? ""}
                        </span>
                    </h1>
                </Headline>
                {product ? (
                    <Showcase className="product-detail" id="product-detail">
                        <div className="main">
                            <Link to={"/"} className="back-link">
                                <button
                                    type="button"
                                    className="back-button"
                                    data-testid="back-btn"
                                >
                                    Back
                                </button>
                            </Link>
                            <div className="call" id="details-page-call">
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
                                        {product.rating} <FaStar />-{" "}
                                        {product.stock} units
                                    </div>
                                    <div className="main-content__subtitle">
                                        {product.description}
                                    </div>
                                    <div className="more-menu">
                                        <button
                                            type="button"
                                            className="add-to-cart-button"
                                            onClick={() =>
                                                handleAddToCartClick(product)
                                            }
                                            data-testid="add-to-cart-btn"
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
                                        data-testid="prev-btn"
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
                                    data-testid="img-carrousel"
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
                                        data-testid="next-btn"
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
                                    data-testid="comment-input"
                                ></textarea>
                                <div className="submit-wrapper">
                                    <button
                                        type="button"
                                        data-testid="comment-submit"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Showcase>
                ) : (
                    <div>{skeletonMessage}</div>
                )}
            </main>
            <Footer />
        </>
    )
}

export { DetailsPage }
