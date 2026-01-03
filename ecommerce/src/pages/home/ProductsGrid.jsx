import Product from "./Product.jsx";

export default function ProductsGrid({ products, loadCart }) {
  return (
    <>
      {" "}
      <div className="products-grid">
        {products.map((product) => {
          return (
            <Product
              key={product.id}
              product={product}
              loadCart={loadCart}
            ></Product>
          );
        })}
      </div>
    </>
  );
}
