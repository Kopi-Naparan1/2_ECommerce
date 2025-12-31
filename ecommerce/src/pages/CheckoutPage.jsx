import "./checkout.css";
import "./checkout-header.css";
import { Link } from "react-router-dom";
import formatMoney from "../utils/money";
import axios from "axios";
import { useState, useEffect } from "react";
import dayjs from "dayjs";

export default function CheckoutPage({ cart }) {
  const [deliveryOption, setDeliveryOption] = useState([]);

  useEffect(() => {
    axios
      .get(
        "http://localhost:3000/api/delivery-options?expand=estimatedDeliveryTime"
      )
      .then((res) => {
        setDeliveryOption(res.data);
      });
  }, []);

  return (
    <>
      <title>Check out</title>
      <div className="checkout-header">
        <div className="header-content">
          <div className="checkout-header-left-section">
            <Link to="/">
              <img className="logo" src="/images/logo.png" />
              <img className="mobile-logo" src="/images/mobile-logo.png" />
            </Link>
          </div>

          <div className="checkout-header-middle-section">
            Checkout (
            <Link className="return-to-home-link" to="/">
              3 items
            </Link>
            )
          </div>

          <div className="checkout-header-right-section">
            <img src="/images/icons/checkout-lock-icon.png" />
          </div>
        </div>
      </div>
      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <div className="order-summary">
            {deliveryOption.length > 0 &&
              cart.map((cartItem) => {
                const selectedDeliveryOption = deliveryOption.find((option) => {
                  return option.id === cartItem.deliveryOptionId;
                });
                return (
                  <div key={cartItem.productId} className="cart-item-container">
                    <div className="delivery-date">
                      Delivery date:{" "}
                      {dayjs(
                        selectedDeliveryOption.estimatedDeliveryTime
                      ).format("dddd, MMMM D")}
                    </div>

                    <div className="cart-item-details-grid">
                      <img
                        className="product-image"
                        src={`/${cartItem.product.image}`}
                      />

                      <div className="cart-item-details">
                        <div className="product-name">
                          {cartItem.product.name}
                        </div>
                        <div className="product-price">
                          {formatMoney(cartItem.product.priceCents)}
                        </div>
                        <div className="product-quantity">
                          <span>
                            Quantity: <span className="quantity-label">2</span>
                          </span>
                          <span className="update-quantity-link link-primary">
                            Update
                          </span>
                          <span className="delete-quantity-link link-primary">
                            Delete
                          </span>
                        </div>
                      </div>

                      <div className="delivery-options">
                        <div className="delivery-options-title">
                          Choose a delivery option:
                        </div>
                        {deliveryOption.map((option) => {
                          let priceString = "FREE Shipping";

                          if (option.priceCents > 0) {
                            priceString = `${formatMoney(
                              option.priceCents
                            )}- Shipping`;
                          }
                          return (
                            <div key={option.id} className="delivery-option">
                              <input
                                type="radio"
                                checked={
                                  option.id === cartItem.deliveryOptionId
                                }
                                className="delivery-option-input"
                                name={`delivery-option-${cartItem.productId}`}
                              />
                              <div>
                                <div className="delivery-option-date">
                                  {dayjs(option.estimatedDeliveryTime).format(
                                    "dddd, MMMM D"
                                  )}
                                </div>
                                <div className="delivery-option-price">
                                  {priceString}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>

          <div className="payment-summary">
            <div className="payment-summary-title">Payment Summary</div>

            <div className="payment-summary-row">
              <div>Items (3):</div>
              <div className="payment-summary-money">$42.75</div>
            </div>

            <div className="payment-summary-row">
              <div>Shipping &amp; handling:</div>
              <div className="payment-summary-money">$4.99</div>
            </div>

            <div className="payment-summary-row subtotal-row">
              <div>Total before tax:</div>
              <div className="payment-summary-money">$47.74</div>
            </div>

            <div className="payment-summary-row">
              <div>Estimated tax (10%):</div>
              <div className="payment-summary-money">$4.77</div>
            </div>

            <div className="payment-summary-row total-row">
              <div>Order total:</div>
              <div className="payment-summary-money">$52.51</div>
            </div>

            <button className="place-order-button button-primary">
              Place your order
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
