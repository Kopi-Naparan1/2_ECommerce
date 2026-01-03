import "./HomePage.css";
import ProductsGrid from "./ProductsGrid.jsx";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../../components/Header";

export default function HomePage({ cart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Define an async function inside useEffect
    const fetchHomeData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/products");
        setProducts(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Failed to fetch products:", error);
      }
    };

    fetchHomeData(); // Call the async function
  }, []); // Empty dependency array, runs once on mount

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
