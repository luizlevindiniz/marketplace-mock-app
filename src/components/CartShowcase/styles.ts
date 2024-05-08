import styled from "styled-components"

export const CartShowcase = styled.div`
    max-width: 1200px;
    margin: 0 auto 3rem;
    border-radius: 4px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.comp};
    padding: 0 2rem;
    grid-column-start: 1;
    grid-column-end: 4;

    .product {
        margin: 0.7rem 0;
        border: 1px solid #ccc;
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 1rem;
    }

    .price {
        font-size: 2rem;
        color: green;
    }

    .empty-cart {
        text-align: center;
    }
`
