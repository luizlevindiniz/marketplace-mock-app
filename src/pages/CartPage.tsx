import { ReactElement } from "react"
import { Navbar } from "components/Navbar"
import { CartGrid } from "components/CartGrid"
import { Footer } from "components/Footer"
import { Headline } from "components/Headline"
import { CartShowcase } from "components/CartShowcase"
import { ProductObject } from "models/Product"
import { useSelector, useDispatch } from "react-redux"
import { removeFromCart } from "reducers/cartReducer"

const CartPage = (): ReactElement => {
    const dispatch = useDispatch()
    const cart: ProductObject[] = useSelector((state: unknown) => state.cart)

    const handleRemoveFromCartClick = (
        productToRemove: ProductObject
    ): void => {
        dispatch(removeFromCart(productToRemove))
    }

    return (
        <>
            <Navbar displayNavbar={true} />
            <main className="cart-wrapper">
                <Headline>
                    <h1>Cart</h1>
                </Headline>
                <CartGrid className="cart-content">
                    <h2 className="cart-header">
                        You&apos;re purchasing the following items:{" "}
                    </h2>
                    <CartShowcase className="cart-showcase">
                        {cart.length !== 0 ? (
                            <div className="cart-products">
                                {cart.map((product: ProductObject) => (
                                    <div key={product.id} className="product">
                                        <div className="product-head">
                                            <div>
                                                <h3 className="header">
                                                    {product.brand}
                                                </h3>
                                                <h1 className="title">
                                                    {product.title}
                                                </h1>
                                            </div>
                                            <h2 className="price">
                                                ${product.price}.00
                                            </h2>
                                        </div>

                                        <div className="product-tail">
                                            <div className="more-menu">
                                                <h2>Qnt: 1 unit(s)</h2>
                                                <button
                                                    type="button"
                                                    className="remove-from-cart-button"
                                                    onClick={() =>
                                                        handleRemoveFromCartClick(
                                                            product
                                                        )
                                                    }
                                                >
                                                    <i className="fa-solid fa-xmark"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="empty-cart">
                                <h1>Ops! Your cart is Empty!</h1>
                                <h2>Try adding products first.</h2>
                            </div>
                        )}
                    </CartShowcase>
                    <div className="cart-checkout">
                        <h2 className="total-price">
                            Total price:{" "}
                            <span>
                                $
                                {cart.reduce(function (acc, prod) {
                                    return acc + prod.price
                                }, 0)}
                                .00
                            </span>
                        </h2>
                        <button type="button" className="cart-checkout-btn">
                            Checkout
                        </button>
                    </div>
                </CartGrid>
            </main>
            <Footer />
        </>
    )
}

export { CartPage }