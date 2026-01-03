import "./checkout.css";
import "./checkout-header.css";
import { Link } from "react-router-dom";

import axios from "axios";
import { useState, useEffect } from "react";
import OrderSummary from "./OrderSummary.jsx";
import PaymentSummary from "./PaymentSummary.jsx";

export default function CheckoutPage({ cart }) {
  const [deliveryOption, setDeliveryOption] = useState([]);
  const [paymentSummary, setPaymentSummmary] = useState(null);

  useEffect(() => {
    axios
      .get(
        "http://localhost:3000/api/delivery-options?expand=estimatedDeliveryTime"
      )
      .then((res) => {
        setDeliveryOption(res.data);
      });

    axios.get("http://localhost:3000/api/payment-summary").then((response) => {
      setPaymentSummmary(response.data);
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
          <OrderSummary
            cart={cart}
            deliveryOption={deliveryOption}
          ></OrderSummary>
          {paymentSummary && (
            <>
              {" "}
              <PaymentSummary paymentSummary={paymentSummary}></PaymentSummary>
            </>
          )}
        </div>
      </div>
    </>
  );
}
