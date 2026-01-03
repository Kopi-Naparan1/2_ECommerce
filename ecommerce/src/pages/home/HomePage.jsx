import "./HomePage.css";
import ProductsGrid from "./ProductsGrid.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/Header";

export default function HomePage({ cart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/products")
      .then((res) => {
        setProducts(res.data);
        console.log(res.data);
      })
      .catch((err) => console.error(err));
  });

  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <>
      <Header cart={cart} />

      <div className="home-page">
        <ProductsGrid products={products}></ProductsGrid>
      </div>
    </>
  );
}
