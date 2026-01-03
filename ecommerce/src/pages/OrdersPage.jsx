import "./orders.css";

import { Link } from "react-router-dom";
import Header from "../components/Header";
import axios from "axios";
import { useEffect, useState, Fragment } from "react";
import dayjs from "dayjs";
import formatMoney from "../utils/money";

export default function OrdersPage({ cart }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/orders?expand=products")
      .then((res) => {
        setOrders(res.data);
      });
  }, []);

  return (
    <>
      <Header cart={cart} />

      <div className="orders-page">
        <div className="page-title">Your Orders</div>

        <div className="orders-grid">
          {orders.map((order) => (
            <div key={order.id} className="order-container">
              <div className="order-header">
                <div className="order-header-left-section">
                  <div className="order-date">
                    <div className="order-header-label">Order Placed:</div>
                    <div>{dayjs(order.orderTimeMs).format("MMMM D")}</div>
                  </div>
                  <div className="order-total">
                    <div className="order-header-label">Total:</div>
                    <div>{formatMoney(order.totalCostCents)}</div>
                  </div>
                </div>

                <div className="order-header-right-section">
                  <div className="order-header-label">Order ID:</div>
                  <div>{order.id}</div>
                </div>
              </div>

              <div className="order-details-grid">
                {order.products?.map((orderProduct) => {
                  const product = orderProduct.product;

                  return (
                    <Fragment key={product.id}>
                      <div className="product-image-container">
                        <img src={`/${product.image}`} />
                      </div>

                      <div className="product-details">
                        <div className="product-name">{product.name}</div>
                        <div className="product-delivery-date">
                          Arriving on:{" "}
                          {dayjs(product.estimatedDeliveryTimeMs).format(
                            "MMMM D"
                          )}
                        </div>
                        <div className="product-quantity">Quantity: 1</div>
                        <button className="buy-again-button button-primary">
                          <img
                            className="buy-again-icon"
                            src="/images/icons/buy-again.png"
                          />
                          <span className="buy-again-message">Add to Cart</span>
                        </button>
                      </div>

                      <div className="product-actions">
                        <Link to="/tracking">
                          <button className="track-package-button button-secondary">
                            Track package
                          </button>
                        </Link>
                      </div>
                    </Fragment>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
