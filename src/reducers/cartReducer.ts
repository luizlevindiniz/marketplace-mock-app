import { CartProductObject } from "@/models/CartProduct"
import { UnknownAction } from "redux"
interface Action {
    type: string
    payload: CartProductObject
}
interface CartState {
    cart: CartProductObject[]
}

const initialState: CartState = {
    cart: [],
}

export const addToCart = (product: CartProductObject): UnknownAction => {
    return {
        type: "ADD",
        payload: product,
    }
}

export const removeFromCart = (product: CartProductObject): UnknownAction => {
    return {
        type: "REMOVE",
        payload: product,
    }
}

const findProductInCart = (
    cart: CartProductObject[],
    idToSearchFor: number
): CartProductObject | undefined => {
    return cart.find((p: CartProductObject) => p.id === idToSearchFor)
}

export const cartReducer = (
    state: CartState = initialState,
    action: Action
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
): any => {
    switch (action.type) {
        case "ADD": {
            const productInCart = findProductInCart(
                state.cart,
                action.payload.id
            )

            if (productInCart) {
                const incrementCartProduct = {
                    ...productInCart,
                    quantity: productInCart.quantity + 1,
                }

                const mapped = state.cart.map((p) =>
                    p.id !== productInCart.id ? p : incrementCartProduct
                )
                return { cart: mapped }
            } else {
                return { cart: [...state.cart, action.payload] }
            }
        }
        case "REMOVE": {
            const productInCart = findProductInCart(
                state.cart,
                action.payload.id
            )
            if (
                !productInCart ||
                (productInCart && productInCart.quantity === 1)
            ) {
                const filtered = state.cart.filter(
                    (p) => p.id !== action.payload.id
                )
                return { cart: filtered }
            } else {
                const decrementCartProduct = {
                    ...productInCart,
                    quantity: productInCart.quantity - 1,
                }

                const mapped = state.cart.map((p) =>
                    p.id !== productInCart.id ? p : decrementCartProduct
                )
                return { cart: mapped }
            }
        }
        default:
            return state
    }
}
