import dayjs from "dayjs";
import { Fragment } from "react";
import { Link } from "react-router-dom";

export default function OrderDetailsGrid({ order }) {
  return (
    <>
      {" "}
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
                  {dayjs(product.estimatedDeliveryTimeMs).format("MMMM D")}
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
    </>
  );
}
