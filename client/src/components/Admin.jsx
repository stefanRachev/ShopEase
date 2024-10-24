import { useState, useEffect } from "react";
import { fetchAdminOrders, deleteOrder } from "../utils/api";
import { Card, Button, Row, Col, Spinner, Alert } from "react-bootstrap";
import AdminUsers from "./AdminUsers";

const Admin = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetchAdminOrders();
        const data = await response.json();
        setOrders(data.orders);
      } catch (error) {
        setError("Failed to fetch orders");
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  const handleDelete = async (orderId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this order?"
    );
    if (!confirmDelete) return;

    try {
      await deleteOrder(orderId);
      setOrders(orders.filter((order) => order._id !== orderId));
    } catch (error) {
      console.error("Error deleting order:", error);
    }
  };

  const renderOrders = () => (
    <Row xs={1} sm={2} md={3} lg={4} className="g-4">
      {" "}
      {orders.map((order, index) => (
        <Col key={order._id}>
          <Card className="h-100">
            <Card.Body>
              <Card.Title>Order #{index + 1}</Card.Title>
              <Card.Text>
                <strong>User:</strong> {order.user.email} <br />
                <strong>Customer Name:</strong> {order.customer.name} <br />
                <strong>Total:</strong> {order.totalAmount} лв
              </Card.Text>
              <Button
                variant="danger"
                size="sm"
                onClick={() => handleDelete(order._id)}
              >
                Delete
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );

  return (
    <div className="container mt-4">
      <h1 className="text-center">Admin Dashboard</h1>
      <h2 className="text-center mb-4">Orders</h2>

      {loading && (
        <div className="d-flex justify-content-center">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}
      {error && <Alert variant="danger">{error}</Alert>}
      {orders.length ? renderOrders() : !loading && <p>No orders found</p>}
      <AdminUsers /> 
    </div>
  );
};

export default Admin;
