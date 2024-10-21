import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, ListGroup, Spinner, Alert } from "react-bootstrap";
 
const apiUrl = import.meta.env.VITE_API_URL;

function OrderSummary() {
  const { orderId } = useParams(); 
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const response = await fetch(`${apiUrl}/orders/${orderId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch order");
        }
        const data = await response.json();
        setOrder(data.order); 
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [orderId]);

  if (loading) {
    return (
      <Container className="text-center">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <Alert variant="danger">Error: {error}</Alert>
      </Container>
    );
  }

  return (
    <Container>
      <h2 className="mt-4">Order Summary</h2>
      <h3>Order ID: {order._id}</h3>
      <h4>Customer Details:</h4>
      <Row>
        <Col xs={12} md={6}>
          <p>Name: {order.customer.name}</p>
          <p>Address: {order.customer.address}</p>
          <p>Phone: {order.customer.phone}</p>
        </Col>
        <Col xs={12} md={6}>
          <h4>Items:</h4>
          <ListGroup>
            {order.items.map((item) => (
              <ListGroup.Item key={item._id}>
                <Row>
                  <Col xs={4}>
                    <img src={item.image} alt={item.name} className="img-fluid" />
                  </Col>
                  <Col xs={8}>
                    <p>
                      {item.name} - Quantity: {item.quantity} - Price: ${item.price}
                    </p>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Col>
      </Row>
      <h4>Total Amount: ${order.totalAmount}</h4>
    </Container>
  );
}

export default OrderSummary;

