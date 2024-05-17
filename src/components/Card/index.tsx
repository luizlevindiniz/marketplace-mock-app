import { ReactElement } from "react"
import * as Styled from "./styles"
import { Image } from "@/components/Image"
import { Link } from "react-router-dom"
import { FaStar } from "react-icons/fa"

interface Card {
    id: number
    title: string
    image: string
    imageAlt: string
    price: number
    brand: string
    rating: number
    description: string
}

const Card = ({
    title,
    image,
    imageAlt,
    id,
    price,
    brand,
    rating,
    description,
}: Card): ReactElement => {
    const starArray = Array(5).fill(0)

    return (
        <Styled.Wrapper className="product-card">
            <div className="product-image-wrapper">
                <Link className="product-image" to={`/product/${id}`}>
                    <Image src={image} alt={imageAlt}></Image>
                </Link>
            </div>
            <Styled.WrapperBody className="product-body-wrapper">
                <Link
                    className="product-title"
                    to={`/product/${id}`}
                    data-testid={"product-title"}
                >
                    {title}
                </Link>
                <h5 className="product-brand">{brand}</h5>
                <p className="product-star-rating">
                    {starArray.map((_, index) => (
                        <FaStar
                            size={20}
                            key={index + 1}
                            color={rating >= index + 1 ? "orange" : "grey"}
                        ></FaStar>
                    ))}
                </p>
                <p className="product-price">
                    $<span>{price}.00</span>
                </p>
                <p className="product-summary">{description}</p>
                <p className="product-shipping">
                    {price % 3 === 0 ? (
                        <span> Free Shipping </span>
                    ) : (
                        "$5.99 Shipping"
                    )}
                </p>
            </Styled.WrapperBody>
        </Styled.Wrapper>
    )
}

export { Card }
