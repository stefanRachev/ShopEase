import { useState, useEffect } from "react";
import { fetchAdminOrders, deleteOrder } from "../utils/api";
import { Table, Button } from "react-bootstrap";

const Admin = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetchAdminOrders();
        const data = await response.json();
        console.log(data);
        
        setOrders(data.orders);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchOrders();
  }, []);

  const handleDelete = async (orderId) => {
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
          <th>Customer Name</th>
          <th>Total</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order, index) => (
          <tr key={order._id}>
            <td>{index + 1}</td>
            <td>{order.user.email}</td>
            <td>{order.customer.name}</td> {/* Име на клиента */}
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
