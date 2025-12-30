import axios from "axios";
import { useEffect, useState } from "react";
import HomePage from "./pages/HomePage";
import CheckoutPage from "./pages/CheckoutPage";
import { Route, Routes } from "react-router-dom";
import OrdersPage from "./pages/OrdersPage";
import TrackingPage from "./pages/TrackingPage.jsx";

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/cart-items")
      .then((res) => setCart(res.data))
      .catch((err) => console.error(err));
    console.log(cart);
  });

  return (
    <>
      <Routes>
        <Route index element={<HomePage cart={cart} />} />
        <Route path="checkout" element={<CheckoutPage cart={cart} />} />
        <Route path="orders" element={<OrdersPage />} />
        <Route path="tracking" element={<TrackingPage />} />
      </Routes>
    </>
  );
}

export default App;
