import { ReactElement, useState } from "react"
import * as Styled from "./styles"

const CheckoutForm = (): ReactElement => {
    const [checked, setChecked] = useState(true)
    return (
        <Styled.CheckoutForm>
            <div className="container">
                <form
                    className="payment-form"
                    onSubmit={(e) => e.preventDefault()}
                >
                    <div className="payment-form-info">
                        <div className="col-45">
                            <h3>Billing Address</h3>
                            <label htmlFor="fname">
                                <i className="fa fa-user"></i> Full Name
                            </label>
                            <input
                                type="text"
                                id="fname"
                                name="fullname"
                                data-testid="fullname"
                                placeholder="John M. Doe"
                            />
                            <label htmlFor="email">
                                <i className="fa fa-envelope"></i> Email
                            </label>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                data-testid="email"
                                placeholder="john@example.com"
                            />
                            <label htmlFor="adr">
                                <i className="fa fa-address-card-o"></i> Address
                            </label>
                            <input
                                type="text"
                                id="adr"
                                name="address"
                                data-testid="address"
                                placeholder="542 W. 15th Street"
                            />
                            <label htmlFor="city">
                                <i className="fa fa-institution"></i> City
                            </label>
                            <input
                                type="text"
                                id="city"
                                name="city"
                                data-testid="city"
                                placeholder="New York"
                            />
                            <div className="row">
                                <div className="col-50">
                                    <label htmlFor="state">State</label>
                                    <input
                                        type="text"
                                        id="state"
                                        name="state"
                                        data-testid="state"
                                        placeholder="NY"
                                    />
                                </div>
                                <div className="col-50">
                                    <label htmlFor="zip">Zip</label>
                                    <input
                                        type="text"
                                        id="zip"
                                        name="zip"
                                        data-testid="zip"
                                        placeholder="10001"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-45">
                            <h3>Payment</h3>
                            <label htmlFor="fname">Accepted Cards</label>
                            <div className="icon-container">
                                <i
                                    className="fa fa-cc-visa"
                                    color="color:navy;"
                                ></i>
                                <i
                                    className="fa fa-cc-amex"
                                    color="color:blue;"
                                ></i>
                                <i
                                    className="fa fa-cc-mastercard"
                                    color="color:red;"
                                ></i>
                                <i
                                    className="fa fa-cc-discover"
                                    color="color:orange;"
                                ></i>
                            </div>
                            <label htmlFor="cname">Name on Card</label>
                            <input
                                type="text"
                                id="cname"
                                data-testid="cardname"
                                name="cardname"
                                placeholder="John More Doe"
                            />
                            <label htmlFor="ccnum">Credit card number</label>
                            <input
                                type="text"
                                id="ccnum"
                                name="cardnumber"
                                data-testid="cardnumber"
                                placeholder="1111-2222-3333-4444"
                            />
                            <label htmlFor="expmonth">Exp Month</label>
                            <input
                                type="text"
                                id="expmonth"
                                name="expmonth"
                                data-testid="expmonth"
                                placeholder="September"
                            />
                            <div className="row">
                                <div className="col-50">
                                    <label htmlFor="expyear">Exp Year</label>
                                    <input
                                        type="text"
                                        id="expyear"
                                        name="expyear"
                                        data-testid="expyear"
                                        placeholder="2018"
                                    />
                                </div>
                                <div className="col-50">
                                    <label htmlFor="cvv">CVV</label>
                                    <input
                                        type="text"
                                        id="cvv"
                                        name="cvv"
                                        data-testid="cvv"
                                        placeholder="352"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="checkbox-div">
                        <input
                            type="checkbox"
                            checked={checked}
                            onChange={() => setChecked(!checked)}
                            name="shipping"
                            data-testid="shipping"
                        />
                        Shipping address same as billing
                    </div>
                    <input
                        type="submit"
                        value="Continue to checkout"
                        className="buy-btn"
                        data-testid="buy-btn"
                    />
                </form>
            </div>
        </Styled.CheckoutForm>
    )
}

export { CheckoutForm }
