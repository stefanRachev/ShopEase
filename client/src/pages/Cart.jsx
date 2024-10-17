// Cart.jsx;

import { useCart } from "../context/useCart";
import { Button, Card, Row, Col, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useLanguage } from "../context/useLanguage";

function Cart() {
  const { cartItems, removeFromCart, totalAmount } = useCart();
  const [expandedItem, setExpandedItem] = useState(null);
  const { language, translations } = useLanguage();

  const toggleDetails = (id) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

  return (
    <Container className="cart-container mt-5">
      <h2 className="text-center mb-4">{translations[language].cartTitle}</h2>
      {cartItems.length === 0 ? (
        <div className="text-center">
          <p>{translations[language].cartStatus}</p>
          <Link to="/" className="btn btn-primary">
            {translations[language].browseProducts}
          </Link>
        </div>
      ) : (
        <Row>
          {cartItems.map((item, index) => (
            <Col xs={12} key={`${item.id}-${index}`} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>
                    <strong>{translations[language].price}</strong> {item.price}{" "}
                    {translations[language].lv}
                  </Card.Text>
                  <Card.Text>
                    <strong>{translations[language].quantity}</strong>{" "}
                    {item.quantity}
                  </Card.Text>

                  <Button variant="link" onClick={() => toggleDetails(item.id)}>
                    {expandedItem === item.id
                      ? translations[language].hideDetails
                      : translations[language].showDetails}
                  </Button>
                  {expandedItem === item.id && (
                    <Card.Text>
                      <strong>{translations[language].description}</strong>{" "}
                      {item.description}
                    </Card.Text>
                  )}
                  <Button
                    variant="danger"
                    onClick={() => removeFromCart(item.id)}
                  >
                    {translations[language].remove}
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
          <Col xs={12} className="mt-3">
            <h3>
              {translations[language].total} {totalAmount}{" "}
              {translations[language].lv}
            </h3>
            <Button variant="success">{translations[language].checkout}</Button>
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default Cart;
