import axios from "axios";
import { useEffect, useState } from "react";
import HomePage from "./pages/home/HomePage.jsx";
import CheckoutPage from "./pages/checkout/CheckoutPage.jsx";
import { Route, Routes } from "react-router-dom";
import OrdersPage from "./pages/OrdersPage.jsx";
import TrackingPage from "./pages/TrackingPage.jsx";

function App() {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/cart-items?expand=product")
      .then((res) => setCart(res.data))
      .catch((err) => console.error(err));
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
