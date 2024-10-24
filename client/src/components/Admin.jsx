import { useState, useEffect } from "react";
import {
  fetchAdminOrders,
  deleteOrder,
  fetchAdminUsers,
  deleteUser,
} from "../utils/api";
import {
  Card,
  Button,
  Row,
  Col,
  Spinner,
  Alert,
  Container,
} from "react-bootstrap";

const Admin = () => {
  // State за поръчките
  const [orders, setOrders] = useState([]);
  const [loadingOrders, setLoadingOrders] = useState(true);
  const [errorOrders, setErrorOrders] = useState(null);

  // State за потребителите
  const [users, setUsers] = useState([]);
  const [loadingUsers, setLoadingUsers] = useState(true);
  const [errorUsers, setErrorUsers] = useState(null);

  // Fetch поръчки
  const fetchOrders = async () => {
    setLoadingOrders(true);
    setErrorOrders(null);
    try {
      const response = await fetchAdminOrders();
      const data = await response.json();
      setOrders(data.orders);
    } catch (error) {
      setErrorOrders("Failed to fetch orders");
    } finally {
      setLoadingOrders(false);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchUsers = async () => {
    setLoadingUsers(true);
    setErrorUsers(null);
    try {
      const response = await fetchAdminUsers();
      const data = await response.json();
      setUsers(data.users);
    } catch (error) {
      setErrorUsers("Failed to fetch users");
    } finally {
      setLoadingUsers(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDeleteOrder = async (orderId) => {
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

  const handleDeleteUser = async (userId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );
    if (!confirmDelete) return;

    try {
      await deleteUser(userId);
      await fetchOrders();
      setUsers(users.filter((user) => user._id !== userId));
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const renderOrders = () => (
    <Row xs={1} sm={2} md={3} lg={4} className="g-4">
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
                onClick={() => handleDeleteOrder(order._id)}
              >
                Delete
              </Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );

  const renderUsers = () => (
    <Container>
      <h2>Manage Users</h2>
      {users.map((user) => (
        <Card key={user._id} className="mb-3">
          <Card.Body>
            <Card.Title>{user.email}</Card.Title>
            <Card.Text>User ID: {user._id}</Card.Text>
            <Button variant="danger" onClick={() => handleDeleteUser(user._id)}>
              Delete User
            </Button>
          </Card.Body>
        </Card>
      ))}
      {users.length === 0 && <p>No users found</p>}
    </Container>
  );

  return (
    <div className="container mt-4">
      <h1 className="text-center text-primary">Admin Dashboard</h1>
      <h2 className="text-center mb-4 text-secondary">Orders</h2>

      {loadingOrders && (
        <div className="d-flex justify-content-center">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}
      {errorOrders && <Alert variant="danger">{errorOrders}</Alert>}
      {orders.length
        ? renderOrders()
        : !loadingOrders && <p>No orders found</p>}

      <h2 className="text-center mb-4 mt-4 text-secondary">Users</h2>
      {loadingUsers && (
        <div className="d-flex justify-content-center">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}
      {errorUsers && <Alert variant="danger">{errorUsers}</Alert>}
      {renderUsers()}
    </div>
  );
};

export default Admin;
