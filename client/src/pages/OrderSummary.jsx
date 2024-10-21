import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const apiUrl = import.meta.env.VITE_API_URL;

function OrderSummary() {
  const { orderId } = useParams(); 
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log(orderId);
  

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const response = await fetch(`${apiUrl}/orders/${orderId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch order");
        }
        const data = await response.json();
        console.log(data);
        
        setOrder(data.order); 
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [orderId]);


  console.log(loading);
  
  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!order) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h2>Order Summary</h2>
      <h3>Order ID: {order._id}</h3>
      <h4>Customer Details:</h4>
      <p>Name: {order.customer.name}</p>
      <p>Address: {order.customer.address}</p>
      <p>Phone: {order.customer.phone}</p>
      <h4>Items:</h4>
      <ul>
        {order.items.map((item) => (
          <li key={item.name}>
            <img src={item.image} alt={item.name} />
            <p>
              {item.name} - Quantity: {item.quantity} - Price: ${item.price}
            </p>
          </li>
        ))}
      </ul>
      <h4>Total Amount: ${order.totalAmount}</h4>
    </div>
  );

}

export default OrderSummary;
