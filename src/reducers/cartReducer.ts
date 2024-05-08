import { ProductObject } from "models/Product"
import { UnknownAction } from "redux"
interface Action {
    type: string
    payload: ProductObject
}
interface CartState {
    cart: ProductObject[]
}

const initialState: CartState = {
    cart: [],
}

export const addToCart = (product: ProductObject): UnknownAction => {
    return {
        type: "ADD",
        payload: product,
    }
}

export const removeFromCart = (product: ProductObject): UnknownAction => {
    return {
        type: "REMOVE",
        payload: product,
    }
}

export const cartReducer = (
    state: CartState = initialState,
    action: Action
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
): any => {
    switch (action.type) {
        case "ADD": {
            const alreadyExists = state.cart.find(
                (p: ProductObject) => p.id === action.payload.id
            )
            console.log(alreadyExists)

            return { cart: [...state.cart, action.payload] }
        }
        case "REMOVE": {
            const filtered = state.cart.filter(
                (p) => p.id !== action.payload.id
            )
            return { cart: filtered }
        }
        default:
            return state
    }
}
