import formatMoney from "../../utils/money";
import dayjs from "dayjs";
import axios from "axios";

export default function DeliveryOptions({
  cartItem,
  deliveryOption,
  loadCart,
}) {
  if (!deliveryOption?.length) return null;

  const updateDeliveryOption = async (option) => {
    try {
      await axios.put(
        `http://localhost:3000/api/cart-items/${cartItem.productId}`,
        {
          deliveryOptionId: option.id,
        }
      );
      console.log("Delivery option updated successfully", option.id);
      await loadCart();
    } catch (error) {
      console.error("Failed to update delivery option:", error);
    }
  };

  return (
    <div className="delivery-options">
      <div className="delivery-options-title">Choose a delivery option:</div>

      {deliveryOption.map((option) => {
        const priceString =
          option.priceCents > 0
            ? `${formatMoney(option.priceCents)} - Shipping`
            : "FREE Shipping";

        return (
          <div key={option.id} className="delivery-option">
            <input
              type="radio"
              checked={option.id === cartItem.deliveryOptionId}
              className="delivery-option-input"
              onChange={() => updateDeliveryOption(option)}
              name={`delivery-option-${cartItem.productId}`}
            />

            <div>
              <div className="delivery-option-date">
                {dayjs()
                  .add(option.deliveryDays || 7, "days")
                  .format("dddd, MMMM D")}
              </div>
              <div className="delivery-option-price">{priceString}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
