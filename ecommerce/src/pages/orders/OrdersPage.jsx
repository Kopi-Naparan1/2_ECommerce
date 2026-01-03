import "./orders.css";

import Header from "../../components/Header";
import axios from "axios";
import { useEffect, useState } from "react";

import OrderHeader from "./OrderHeader";
import OrderDetailsGrid from "./OrderDetailsGrid";

export default function OrdersPage({ cart }) {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/orders?expand=products")
      .then((res) => {
        setOrders(res.data);
      });
  }, []);

  return (
    <>
      <Header cart={cart} />

      <div className="orders-page">
        <div className="page-title">Your Orders</div>

        <div className="orders-grid">
          {orders.map((order) => (
            <div key={order.id} className="order-container">
              <OrderHeader order={order}></OrderHeader>

              <OrderDetailsGrid order={order}></OrderDetailsGrid>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
