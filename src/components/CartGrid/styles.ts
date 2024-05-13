import styled from "styled-components"

export const CartGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: max-content;
    grid-column-gap: 1em;
    width: 80%;
    margin: 0 auto;

    .cart-header {
        grid-column-start: 1;
        grid-column-end: 4;
        margin-bottom: 1.25rem;
    }

    .cart-checkout {
        grid-column-start: 1;
        grid-column-end: 4;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 1.25rem;
    }

    .cart-checkout-btn {
        -webkit-border-radius: 28;
        -moz-border-radius: 28;
        border-radius: 28px;
        color: #ffffff;
        font-size: 1.25rem;
        background: #108f38;
        padding: 0.7rem 1.25rem 0.7rem 1.25rem;
        font-family: inherit;
        text-decoration: none;
        border: none;
        cursor: pointer;
    }

    .cart-checkout-btn:hover {
        background: #0aab2a;
        text-decoration: none;
    }

    .more-menu {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }

    .remove-from-cart-button {
        font-size: 2.3rem;
        color: red;
        border: none;
        outline: none;
        background-color: transparent;
        cursor: pointer;
    }

    .total-price {
        font-size: 2rem;
    }
    .total-price span {
        font-size: 2.4rem;
        color: green;
    }
`
