import styled from "styled-components"

export const Wrapper = styled.div`
    display: block;
    width: 100%;
    margin: 0 auto;
    height: 100%;

    .product-image-wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        background: #ececec;
        min-height: 200px;
    }

    .product-image {
        max-height: 200px;
    }
`

export const WrapperBody = styled.div`
    padding: 2px 1rem 0 1rem;
    min-height: 300px;

    .product-title {
        font-size: 1.25em;
        font-weight: 700;
        cursor: pointer;
        border: none;
        outline: none;
        background-color: transparent;
        padding: 0;
        margin: 0;
        font-family: inherit;
    }

    .product-brand {
        font-size: 1.1em;
        padding-bottom: 0.4em;
    }

    .product-price {
        font-size: 1.5rem;
    }

    .product-price span {
        font-size: 2rem;
        font-weight: 800;
    }

    .product-summary {
        font-size: 1.2em;
    }

    .product-shipping {
        font-size: 1.1em;
        font-weight: 700;
    }
    .product-shipping span {
        background-color: green;
        color: ${({ theme }) => theme.colors.default};
        padding: 0.2rem;
    }
`
