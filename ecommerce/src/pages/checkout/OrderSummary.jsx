import dayjs from "dayjs";
import formatMoney from "../../utils/money";
import DeliveryOptions from "./DeliveryOptions.jsx";
import axios from "axios";

export default function OrderSummary({ cart, deliveryOption, loadCart }) {
  return (
    <>
      {" "}
      <div className="order-summary">
        {deliveryOption.length > 0 &&
          cart.map((cartItem) => {
            const selectedDeliveryOption = deliveryOption.find((option) => {
              return option.id === cartItem.deliveryOptionId;
            });

            async function deleteCartItem() {
              await axios.delete(
                `http://localhost:3000/api/cart-items/${cartItem.productId}`
              );
              await loadCart();
            }
            return (
              <div key={cartItem.productId} className="cart-item-container">
                <div className="delivery-date">
                  Delivery date:{" "}
                  {dayjs(selectedDeliveryOption.estimatedDeliveryTime).format(
                    "dddd, MMMM D"
                  )}
                </div>

                <div className="cart-item-details-grid">
                  <img
                    className="product-image"
                    src={`/${cartItem.product.image}`}
                  />

                  <div className="cart-item-details">
                    <div className="product-name">{cartItem.product.name}</div>
                    <div className="product-price">
                      {formatMoney(cartItem.product.priceCents)}
                    </div>
                    <div className="product-quantity">
                      <span>
                        Quantity:{" "}
                        <span className="quantity-label">
                          {cartItem.quantity}
                        </span>
                      </span>
                      <span className="update-quantity-link link-primary">
                        Update
                      </span>
                      <span
                        className="delete-quantity-link link-primary"
                        onClick={deleteCartItem}
                      >
                        Delete
                      </span>
                    </div>
                  </div>

                  <DeliveryOptions
                    cartItem={cartItem}
                    deliveryOption={deliveryOption}
                    loadCart={loadCart}
                  />
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}
