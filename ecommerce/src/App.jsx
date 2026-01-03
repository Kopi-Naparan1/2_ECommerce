import axios from "axios";
import { useEffect, useState } from "react";
import HomePage from "./pages/home/HomePage.jsx";
import CheckoutPage from "./pages/checkout/CheckoutPage.jsx";
import { Route, Routes } from "react-router-dom";
import OrdersPage from "./pages/orders/OrdersPage.jsx";
import TrackingPage from "./pages/tracking/TrackingPage.jsx";

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchAppData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:3000/api/cart-items?expand=product"
        );
        setCart(response.data);
      } catch (error) {
        console.error("Failed to fetch cart items:", error);
      }
    };
    fetchAppData();
  }, []);

  return (
    <>
      <Routes>
        <Route index element={<HomePage cart={cart} />} />
        <Route path="checkout" element={<CheckoutPage cart={cart} />} />
        <Route path="orders" element={<OrdersPage cart={cart} />} />
        <Route path="tracking" element={<TrackingPage cart={cart} />} />
      </Routes>
    </>
  );
}

export default App;
