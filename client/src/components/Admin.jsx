// src/components/Admin.jsx
import { useState, useEffect } from "react";
//import { useNavigate } from "react-router-dom";
import { fetchAdminOrders, deleteOrder } from "../utils/api";
import { Table, Button } from "react-bootstrap";

const Admin = () => {
  const [orders, setOrders] = useState([]);
  //const navigate = useNavigate();

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetchAdminOrders();
        setOrders(response.data.orders);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

  const handleDelete = async (orderId) => {
    // Пример за изтриване на поръчка
    try {
      await deleteOrder(orderId);
      setOrders(orders.filter((order) => order._id !== orderId));
    } catch (error) {
      console.error("Error deleting order:", error);
    }
  };

  const renderOrders = () => (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>User</th>
          <th>Status</th>
          <th>Total</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order, index) => (
          <tr key={order._id}>
            <td>{index + 1}</td>
            <td>{order.user.email}</td>
            <td>{order.status}</td>
            <td>{order.totalAmount} лв</td>
            <td>
              <Button variant="danger" onClick={() => handleDelete(order._id)}>
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );

  return (
    <div className="container">
      <h1>Admin Dashboard</h1>
      <h2>Orders</h2>
      {orders.length ? renderOrders() : <p>No orders found</p>}
    </div>
  );
};

export default Admin;
