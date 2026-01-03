import dayjs from "dayjs";
import formatMoney from "../../utils/money";
import DeliveryOptions from "./DeliveryOptions.jsx";

export default function OrderSummary({ cart, deliveryOption, loadCart }) {
  if (deliveryOption.length === 0) {
    return <p>Loading delivery options...</p>;
  }

  return (
    <div className="order-summary">
      {cart.map((cartItem) => {
        if (!cartItem.product) return null;

        const selectedDeliveryOption = deliveryOption.find(
          (option) => option.id === cartItem.deliveryOptionId
        );

        if (!selectedDeliveryOption) return null;

        return (
          <div key={cartItem.id} className="cart-item-container">
            <div className="delivery-date">
              Delivery date:{" "}
              {dayjs()
                .add(selectedDeliveryOption.deliveryDays || 7, "days")
                .format("dddd, MMMM D")}
            </div>

            <div className="cart-item-details-grid">
              <img
                className="product-image"
                src={`/${cartItem.product.image}`}
                alt={cartItem.product.name}
              />

              <div className="cart-item-details">
                <div className="product-name">{cartItem.product.name}</div>
                <div className="product-price">
                  {formatMoney(cartItem.product.priceCents)}
                </div>
                <div className="product-quantity">
                  Quantity: <span>{cartItem.quantity}</span>
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
  );
}
