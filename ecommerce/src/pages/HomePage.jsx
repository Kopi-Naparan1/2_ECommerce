import "./HomePage.css";
import Header from "../components/Header";

export default function HomePage() {
  return (
    <>
      <title>Home</title>
      <Header />

      <div class="home-page">
        <div class="products-grid">
          <div class="product-container">
            <div class="product-image-container">
              <img
                class="product-image"
                src="images/products/athletic-cotton-socks-6-pairs.jpg"
              />
            </div>

            <div class="product-name limit-text-to-2-lines">
              Black and Gray Athletic Cotton Socks - 6 Pairs
            </div>

            <div class="product-rating-container">
              <img
                class="product-rating-stars"
                src="images/ratings/rating-45.png"
              />
              <div class="product-rating-count link-primary">87</div>
            </div>

            <div class="product-price">$10.90</div>

            <div class="product-quantity-container">
              <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>

            <div class="product-spacer"></div>

            <div class="added-to-cart">
              <img src="images/icons/checkmark.png" />
              Added
            </div>

            <button class="add-to-cart-button button-primary">
              Add to Cart
            </button>
          </div>

          <div class="product-container">
            <div class="product-image-container">
              <img
                class="product-image"
                src="images/products/intermediate-composite-basketball.jpg"
              />
            </div>

            <div class="product-name limit-text-to-2-lines">
              Intermediate Size Basketball
            </div>

            <div class="product-rating-container">
              <img
                class="product-rating-stars"
                src="images/ratings/rating-40.png"
              />
              <div class="product-rating-count link-primary">127</div>
            </div>

            <div class="product-price">$20.95</div>

            <div class="product-quantity-container">
              <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>

            <div class="product-spacer"></div>

            <div class="added-to-cart">
              <img src="images/icons/checkmark.png" />
              Added
            </div>

            <button class="add-to-cart-button button-primary">
              Add to Cart
            </button>
          </div>

          <div class="product-container">
            <div class="product-image-container">
              <img
                class="product-image"
                src="images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg"
              />
            </div>

            <div class="product-name limit-text-to-2-lines">
              Adults Plain Cotton T-Shirt - 2 Pack
            </div>

            <div class="product-rating-container">
              <img
                class="product-rating-stars"
                src="images/ratings/rating-45.png"
              />
              <div class="product-rating-count link-primary">56</div>
            </div>

            <div class="product-price">$7.99</div>

            <div class="product-quantity-container">
              <select>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>

            <div class="product-spacer"></div>

            <div class="added-to-cart">
              <img src="images/icons/checkmark.png" />
              Added
            </div>

            <button class="add-to-cart-button button-primary">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
