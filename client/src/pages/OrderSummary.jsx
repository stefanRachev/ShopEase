import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Spinner, Alert } from "react-bootstrap";
import { useLanguage } from "../context/useLanguage";

const apiUrl = import.meta.env.VITE_API_URL;

function OrderSummary() {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { language, translations } = useLanguage();

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
      <Container className="text-center mt-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        <p>Loading order details...</p>
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
    <Container className="mt-4">
      <h2 className="text-center mb-4">{translations[language].yourOrder}</h2>
      <h3 className="text-primary">
        {translations[language].orderId}
        {order._id}
      </h3>

      <Row className="mb-4">
        <Col xs={12} md={6}>
          <h4 className="text-success">
            {translations[language].customerDetails}
          </h4>
          <div className="border p-3 rounded">
            <p>
              <strong>{translations[language].name}:</strong>{" "}
              <span className="ms-2">{order.customer.name}</span>
            </p>
            <p>
              <strong>{translations[language].address}:</strong>{" "}
              <span className="ms-2">{order.customer.address}</span>
            </p>
            <p>
              <strong>{translations[language].phone}:</strong>{" "}
              <span className="ms-2">{order.customer.phone}</span>
            </p>
          </div>
        </Col>

        <Col xs={12} md={6}>
          <h4 className="text-success">{translations[language].items}</h4>
          <Row>
            {order.items.map((item) => (
              <Col xs={12} sm={6} md={4} key={item._id} className="mb-4">
                <div className="card h-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="card-img-top img-fluid rounded"
                    style={{ maxHeight: "150px", objectFit: "contain" }}
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text">
                      <strong>{translations[language].quantity} </strong>
                      {item.quantity}
                    </p>
                    <p className="card-text">
                      <strong>{translations[language].price} </strong>
                      {item.price.toFixed(2)} {translations[language].lv}
                    </p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>

      <h4 className="text-danger">
        {translations[language].total}
        {order.totalAmount.toFixed(2)}{" "}
        {translations[language].lv}
      </h4>
    </Container>
  );
}

export default OrderSummary;
