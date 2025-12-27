import HomePage from "./pages/HomePage";
import CheckoutPage from "./pages/CheckoutPage";
import { Route, Routes } from "react-router-dom";
import OrdersPage from "./pages/OrdersPage";
import TrackingPage from "./pages/TrackingPage.jsx";
function App() {
  return (
    <>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="checkout" element={<CheckoutPage />} />
        <Route path="orders" element={<OrdersPage />} />
        <Route path="tracking" element={<TrackingPage />} />
      </Routes>
    </>
  );
}

export default App;
