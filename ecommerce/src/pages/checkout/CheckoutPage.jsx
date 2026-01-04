import "./checkout.css";
import "./checkout-header.css";
import { Link } from "react-router-dom";

import axios from "axios";
import { useState, useEffect } from "react";
import OrderSummary from "./OrderSummary.jsx";
import PaymentSummary from "./PaymentSummary.jsx";

export default function CheckoutPage({ cart, loadCart }) {
  const [deliveryOption, setDeliveryOption] = useState([]);
  const [paymentSummary, setPaymentSummmary] = useState(null);

  // Fetch delivery options once
  useEffect(() => {
    const fetchDeliveryOptions = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/delivery-options?expand=estimatedDeliveryTime"
        );
        setDeliveryOption(response.data);
      } catch (error) {
        console.error("Failed to fetch delivery options:", error);
      }
    };
    fetchDeliveryOptions();
  }, []);

  // Update payment summary when cart changes
  useEffect(() => {
    const fetchPaymentSummary = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/payment-summary"
        );
        setPaymentSummmary(response.data);
      } catch (error) {
        console.error("Failed to fetch payment summary:", error);
      }
    };
    if (cart.length > 0) {
      fetchPaymentSummary();
    }
  }, [cart]);

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
            loadCart={loadCart}
          ></OrderSummary>
          {paymentSummary && (
            <>
              {" "}
              <PaymentSummary
                paymentSummary={paymentSummary}
                loadCart={loadCart}
              ></PaymentSummary>
            </>
          )}
        </div>
      </div>
    </>
  );
}
