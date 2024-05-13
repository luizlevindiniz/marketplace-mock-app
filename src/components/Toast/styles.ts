import styled from "styled-components"

export const ToastWrapper = styled.div`
    z-index: 1;
    display: flex;
    align-items: center;
    justify-content: end;
    flex-direction: column-reverse;
    top: 4rem;
    right: 1.5rem;
    position: fixed;

    .icon {
        width: 1em;
        height: 1em;
        fill: currentColor;
    }

    .icon-lg {
        width: 1.5em;
        height: 1.5em;
    }

    .toast {
        background-color: hsl(25 15% 25%);
        padding: 1.5rem;
        box-shadow:
            hsl(25 10% 10% / 10%) 0px 1px 3px 0px,
            hsl(25 10% 10% / 5%) 0px 1px 2px 0px;
        border-radius: 0.5em;
        position: relative;
        color: hsl(25 10% 25%);
        opacity: 0.99;
        animation: toastIt 3000ms cubic-bezier(0.785, 0.135, 0.15, 0.86)
            forwards;

        margin: 0.2rem 0;
    }

    @keyframes toastIt {
        0%,
        100% {
            transform: translateY(-150%);
            opacity: 0;
        }
        10%,
        90% {
            transform: translateY(0);
            opacity: 1;
        }
    }

    .toast:hover {
        opacity: 1;
        box-shadow:
            hsl(25 10% 10% / 30%) 0px 1px 3px 0px,
            hsl(25 10% 10% / 15%) 0px 1px 2px 0px;
    }

    .toast-message {
        display: flex;
        gap: 1em;
        align-items: top;
    }

    .toast-close-btn {
        position: absolute;
        top: 0.5em;
        right: 0.5em;
        padding: 0;
        line-height: 1;
        height: 1em;
        width: 1em;
        background: none;
        border: none;
        cursor: pointer;
        color: inherit;
    }

    .toast--success {
        color: hsl(150 97% 3%);
        background-color: hsl(150 98% 99%);
    }

    .toast--success .icon--thumb {
        color: hsl(150 90% 40%);
    }

    .toast--failure {
        color: hsl(20 97% 3%);
        background-color: hsl(20 98% 99%);
    }

    .toast--failure .icon--thumb {
        color: hsl(20 90% 40%);
    }

    .toast--warning {
        color: hsl(205 97% 3%);
        background-color: hsl(205 98% 99%);
    }

    .toast--warning .icon--thumb {
        color: hsl(205 90% 40%);
    }
`
