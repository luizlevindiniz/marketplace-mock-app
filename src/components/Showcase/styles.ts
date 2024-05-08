import styled from "styled-components"

export const Showcase = styled.div`
    max-width: 1200px;
    margin: 0 auto 3rem;
    border-radius: 4px;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.comp};
    padding: 0 2rem;

    .call {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        flex-direction: row;
    }

    .slides {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
    }

    .slide-image {
        width: 100%;
        max-width: 800px;
        max-height: 668px;
        border-radius: 4px;
    }

    .swiper-button {
        border: 1px solid ${({ theme }) => theme.colors.primary};
        border-radius: 50%;
        width: 44px;
        height: 44px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.3s ease-out;

        &:hover {
            background-color: ${({ theme }) => theme.colors.secondary};
            svg {
                stroke: #fff;
            }
        }
    }

    .swiper-prev-button {
        svg {
            transform: rotate(-180deg);
        }
    }

    .back-button {
        border: 1px solid ${({ theme }) => theme.colors.primary};
        border-radius: 50%;
        width: 44px;
        height: 44px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: all 0.3s ease-out;
        background-color: ${({ theme }) => theme.colors.comp};

        &:hover {
            background-color: ${({ theme }) => theme.colors.secondary};
            color: ${({ theme }) => theme.colors.default};
            text-decoration: none;
        }
    }

    .main {
        padding: 1rem 0 0 0;

        &-header {
            text-transform: uppercase;
            font-size: 1rem;
            letter-spacing: 0.25rem;
            font-weight: 600;
        }

        &-title {
            font-size: 6rem;
            font-weight: 400;
            margin-top: 7px;
            line-height: 1em;
        }

        &-subtitle {
            font-weight: 400;
            font-size: 2rem;
            margin-top: 1rem;
            margin-bottom: 2rem;
        }

        &-content {
            text-align: right;
            max-width: 400px;
            &__title {
                font-size: 1.5rem;
                font-style: italic;
                margin-bottom: 0.7em;
            }

            &__subtitle {
                font-size: 0.8rem;
                line-height: 1.5;
                margin-bottom: 1em;
                letter-spacing: -0.01em;
            }

            .more-menu {
                font-size: 0.8rem;
                font-weight: 500;
                display: flex;
                align-items: center;
                justify-content: end;

                svg {
                    width: 28px;
                    height: 18px;
                    margin-left: 10px;
                }
            }
        }
    }

    .add-to-cart-button {
        border: 1px solid ${({ theme }) => theme.colors.primary};
        border-radius: 28px;
        background-color: ${({ theme }) => theme.colors.comp};
        color: ${({ theme }) => theme.colors.primary};
        font-size: 1rem;
        padding: 0.8rem 1.3rem 0.8rem 1.3rem;
        text-decoration: none;

        cursor: pointer;
        transition: all 0.3s ease-out;
    }

    .add-to-cart-button:hover {
        background: #890620;
        color: ${({ theme }) => theme.colors.default};
        text-decoration: none;
    }

    .discount {
        font-size: 1rem;
        color: green;
    }

    .comments {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        margin: 2rem 0 2rem;
        padding-bottom: 2rem;
    }

    .comments textarea {
        width: 71%;
        height: 200px;
        border-radius: 4px;
    }

    .submit-wrapper {
        display: flex;
        width: 71%;
        align-items: center;
        justify-content: end;
        margin-top: 10px;
    }

    .submit-wrapper button {
        border: 1px solid ${({ theme }) => theme.colors.primary};
        border-radius: 28px;
        background-color: ${({ theme }) => theme.colors.comp};
        color: ${({ theme }) => theme.colors.primary};
        font-size: 1rem;
        padding: 0.8rem 1.3rem 0.8rem 1.3rem;
        text-decoration: none;

        cursor: pointer;
        transition: all 0.3s ease-out;
    }

    .submit-wrapper button:hover {
        background: #890620;
        color: ${({ theme }) => theme.colors.default};
        text-decoration: none;
    }
`
