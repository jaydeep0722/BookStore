
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Orders = () => {
  const { email } = useParams();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const showAllOrders = async () => {
    try {
      console.log(
        import.meta.env.VITE_backEndUrl + `/api/order/AllOrders/${email}`
      );
      const { data } = await axios.get(
        import.meta.env.VITE_backEndUrl + `/api/order/AllOrders/${email}`
      );
      console.log(data.orders);
      setOrders(data.orders || []);
    } catch (error) {
      console.error("Error fetching orders", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (email) {
      showAllOrders();
    }
  }, [email]);

  if (loading) {
    return <div className="container mx-auto p-6">Loading orders...</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">Your Orders</h2>
      {orders.length === 0 ? (
        <div>No orders found!</div>
      ) : (
        <div>
          {orders.map((order, index) => (
            <div key={order._id} className="border-b mb-4 pb-4">
              <p className="p-1 bg-secondary text-white w-10 rounded mb-1">
                # {index + 1}
              </p>
              <h2 className="font-bold">Order ID: {order._id}</h2>
              <p className="text-gray-600">Name: {order.name}</p>
              <p className="text-gray-600">Email: {order.email}</p>
              <p className="text-gray-600">Phone: {order.phone}</p>
              <p className="text-gray-600">Total Price: ${order.totalPrice}</p>

              <h3 className="font-semibold mt-2">Address:</h3>
              <p>
                {order.address
                  ? `${order.address.city}, ${order.address.state}, ${order.address.country}, ${order.address.zipcode}`
                  : "No address provided"}
              </p>

              <h3 className="font-semibold mt-2">Products Id:</h3>
              <ul>
                {order.productIds && order.productIds.length > 0 ? (
                  order.productIds.map((productId) => (
                    <li key={productId}>{productId}</li>
                  ))
                ) : (
                  <li>No products</li>
                )}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
