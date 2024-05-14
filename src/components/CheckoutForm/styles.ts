import styled from "styled-components"

export const CheckoutForm = styled.div`
    width: 80%;
    margin: 0 auto;

    .container {
        background-color: ${({ theme }) => theme.colors.comp};
        padding: 0.35rem 1.25rem 1rem 1.25rem;
        border: 1px solid lightgrey;
        border-radius: 3px;
        margin-bottom: 2rem;
        font-family: inherit;
    }

    .payment-form {
        display: flex;
        flex-direction: column;
    }

    .payment-form-info {
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    .col-45 {
        width: 45%;
        padding-left: 1rem;
    }

    input[type="text"] {
        margin-bottom: 1.25rem;
        padding: 0.8rem;
        border: 1px solid #ccc;
        border-radius: 3px;
        width: 80%;
    }

    label {
        margin-bottom: 0.7rem;
        display: block;
    }

    .icon-container {
        margin-bottom: 1.25rem;
        padding: 0.45rem 0;
        font-size: 1.5rem;
    }

    .icon-container i {
        margin: 0 0.3rem;
    }

    .buy-btn {
        background-color: #108f38;
        color: white;
        padding: 0.75rem;
        margin: 0.7rem 0;
        border: none;
        width: 80%;
        border-radius: 3px;
        cursor: pointer;
        font-size: 1.1rem;
        align-self: center;
        font-family: inherit;
    }

    .buy-btn:hover {
        background: #0aab2a;
    }

    .checkbox-div {
        margin: 0 auto 0 2.5rem;
    }
`
