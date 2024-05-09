import styled from "styled-components"

export const CheckoutForm = styled.div`
    width: 80%;
    margin: 0 auto;

    .container {
        background-color: ${({ theme }) => theme.colors.comp};
        padding: 5px 20px 15px 20px;
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
        margin-bottom: 20px;
        padding: 12px;
        border: 1px solid #ccc;
        border-radius: 3px;
        width: 80%;
    }

    label {
        margin-bottom: 10px;
        display: block;
    }

    .icon-container {
        margin-bottom: 20px;
        padding: 7px 0;
        font-size: 24px;
    }

    .buy-btn {
        background-color: #108f38;
        color: white;
        padding: 12px;
        margin: 10px 0;
        border: none;
        width: 80%;
        border-radius: 3px;
        cursor: pointer;
        font-size: 17px;
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
